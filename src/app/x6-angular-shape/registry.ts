import { ComponentType } from '@angular/cdk/portal';
import { Injector, TemplateRef } from '@angular/core';
import { Graph, Registry } from '@antv/x6';

export type Content = {
  injector: Injector;
  content: TemplateRef<any> | ComponentType<any>;
};

export type Definition = ((this: Graph, node: Node) => Content | null | undefined) | Content;

export const registry = Registry.create<Definition>({
  type: 'angular component'
});


declare module '@antv/x6/lib/graph/graph' {
  namespace Graph {
    let registerAngularComponent: typeof registry.register;
    let unregisterAngularComponent: typeof registry.unregister;
  }
}

Graph.registerAngularComponent = registry.register;
Graph.unregisterAngularComponent = registry.unregister;
