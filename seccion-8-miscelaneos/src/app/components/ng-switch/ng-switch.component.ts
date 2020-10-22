import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
})
export class NgSwitchComponent implements OnInit {
  selectOption:string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
