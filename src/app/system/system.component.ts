import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor() { }

  p: any;
  ngOnInit(): void {
    this.p = {
      firstname: 'Brad',
      lastname: 'Cooper'
    };
  }

  changeName() {
    this.p.firstname = 'Foo';
    this.p = {
      firstname: 'Gabbar',
      lastname: 'Singh'
    }
  }
}
