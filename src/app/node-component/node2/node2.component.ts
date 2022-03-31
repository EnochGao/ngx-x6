import { Component, Input, OnInit } from '@angular/core';
import { Graph, Node } from '@antv/x6';

@Component({
  selector: 'app-node2',
  templateUrl: './node2.component.html',
  styleUrls: ['./node2.component.scss']
})
export class Node2Component implements OnInit {
  @Input() node: Node;
  @Input() graph: Graph;

  constructor() { }

  ngOnInit(): void {
    this.graph.on('node:mouseenter', () => {
      this.node.removeTool('button-remove');
    });
  }

  deleteNode() {
    this.node.remove();
  }

}
