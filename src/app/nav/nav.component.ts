import { Component, OnInit } from '@angular/core';
import { Menu } from '../reference-data/Menu';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  sign: string;
  ngOnInit() {
    this.sign=environment.animal;
  }

  menuItems: Menu[] = [
    { name: "Home", url: "" },
    { name: "Reference", url: "/reference-data" },
    { name: "Position", url: "/position" },
    // {name:"Modules", url:"/modules"},
    //{name:"Reports", url:"/reports"},
    { name: "System", url: "/system" },
    { name: "Orders", url: "/orders" },
    { name: "Customers", url: "/customers" },

  ];

  getPixel() {
    return "10px"
  }
}


