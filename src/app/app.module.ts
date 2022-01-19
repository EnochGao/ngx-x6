import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppService } from './app.service';


import './x6-angular-shape/index';
import { Node1Component } from './node-component/node1/node1.component';
import { NodeComponent } from './node-component/node/node.component';
// import '@antv/x6-angular-shape'

@NgModule({
  declarations: [AppComponent, NodeComponent, Node1Component],
  imports: [BrowserModule, CommonModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
