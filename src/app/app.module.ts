import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import '@antv/x6-angular-shape'
import './x6-angular-shape/index';

import { Node1Component } from './node-component/node1/node1.component';
import { NodeComponent } from './node-component/node/node.component';
import { NgZorroShareModule } from './ng-zorro-share/ng-zorro-share.module';
import { HttpClientModule } from '@angular/common/http';
import { Node2Component } from './node-component/node2/node2.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [AppComponent, NodeComponent, Node1Component, Node2Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    NgZorroShareModule,
    NgxJsonViewerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
