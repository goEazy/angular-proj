import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-system-change',
  templateUrl: './system-change.component.html',
  styleUrls: ['./system-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SystemChangeComponent implements OnInit {

  @Input() person;

  constructor() { }

  ngOnInit() {
  }



}