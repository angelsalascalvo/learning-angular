import { Component } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'miscelaneos';

  
  ngOnInit(): void {
    console.log("onInit")
  }

  ngOnChanges(): void {
    console.log("onChanges")
  }

  ngDoCheck():void{
    console.log("doCheck")
  }

  ngAfterContentInit():void{
    console.log("afterContentInit")
  }

  ngAfterContentChecked():void{
    console.log("afterContentChecked")
  }

  ngAfterViewInit():void {
    console.log("afterViewInit")
  }

  ngAfterViewChecked():void{
    console.log("afterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("onDestroy")
  }

}
