
import { Component, Input, OnInit } from '@angular/core';
import { Graph } from '@antv/x6';
import { AngularShape } from 'src/app/x6-angular-shape';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() node?: AngularShape<AngularShape.Properties>;
  @Input() data: any;
  @Input() graph?: Graph;

  constructor() {
  }


  ngOnInit(): void {
  };

  addCount(): void {
    this.data.count++;
  };

  minCount(): void {
    this.data.count--;
    if (this.data.count < 0) {
      this.data.count = 0;
    }
  }

}
