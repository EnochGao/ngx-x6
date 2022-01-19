import { FunctionExt, Graph } from '@antv/x6';
import { Definition, registry } from './registry';
import { AngularShape } from './node';

declare module '@antv/x6/lib/graph/hook' {
  namespace Hook {
    interface IHook {
      getAngularComponent(this: Graph, node: AngularShape): Definition;
    }
  }

  interface Hook {
    getAngularComponent(node: AngularShape): Definition;
  }
}

Graph.Hook.prototype.getAngularComponent = function (node: AngularShape) {

  let ret = node.getComponent();

  if (typeof ret === 'string') {
    const component = registry.get(ret);

    if (component == null) {
      return registry.onNotFound(ret);
    }

    if (typeof component === 'function') {
      const ret = FunctionExt.call(component, this.graph, node as any);
      if (ret != null) {
        return ret;
      }
    }

    ret = component;
  }

  return ret as Definition;
};
