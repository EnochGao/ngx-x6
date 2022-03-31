import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node1',
  templateUrl: './node1.component.html',
  styleUrls: ['./node1.component.scss']
})
export class Node1Component implements OnInit {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  constructor() { }
  ngOnInit(): void {
  }

}
