import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  paramsId: number;
  
  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      console.log("params : ",params);
      this.paramsId = +params.get("id");
      console.log("paramsId : ",this.paramsId);
      

    })
  }



}
