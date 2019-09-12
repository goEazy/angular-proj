import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-reference-data',
  templateUrl: './reference-data.component.html',
  styleUrls: ['./reference-data.component.css']
})
export class ReferenceDataComponent implements OnInit {

  constructor() { }

  imgSrc = "http://lorempixel.com/400/200";
  email1 = "pawank@nrifintech.com"
  email2 = "rahula@nrifintech.com"
  accountPk = 122;

  ngOnInit() {
  }

  //Object for pipes
  referenceDataObj = {
    title: "Reference Data",
    screenList: ["Obligor","Account","Instrument","Price"]
  }
  
  getButtonList(){
    return ['active','btn-primary','btn-danger'];
  }

  onDivClicked(event){
    console.log("Div was clicked");
  }

  onButton1Click(event){
    console.log("Button1 was clicked");
  }

  onButton2Click(event){
    console.log("Button2 was clicked");
  }

  onInput1Click(event){
    console.log(this.email1);
  }

  onInput2Click(event){
    console.log(this.email2);
  }

  passValueFromChildToParent(event){
    console.log("Child Event Emitted successfully to Parent");
    console.log(event);
  }
  
}