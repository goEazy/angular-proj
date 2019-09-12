import { Component, OnInit, Input, Output, EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy } from '@angular/core';
import { Trade } from '../../models/trades.model';
import { FakeHttpService } from '../../services/fake-http.service';
import { Observable } from 'rxjs';
import { PostsI } from '../../models/fake.model';

@Component({
  selector: 'app-position-data',
  templateUrl: './position-data.component.html',
  styleUrls: ['./position-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionDataComponent implements OnInit {

  dataFromServer: Observable<PostsI>;
  dataPosts: PostsI[];

  constructor(private fakeHttpService: FakeHttpService,
    private cd: ChangeDetectorRef) { }


  @Input("tradeFromParent1") tradeFromParent: Trade[];
  
  @Output()
  addPostsData = new EventEmitter();
  
  eventEmit(){
    
  }

  
  ngOnInit() {
    this.dataFromServer = this.fakeHttpService.fetchJsonData()
    this.fakeHttpService.fetchJsonData().subscribe((data) =>{
      this.dataPosts = data;
      this.cd.markForCheck();
    });
  }

  onDeleteClick($event:any){
    console.log("onDeleteClick $event",$event);
    this.fakeHttpService.fetchJsonDataDelete($event).subscribe(data => {
      console.log("onDeleteClick",data);
      let index = this.dataPosts.indexOf($event);
      this.dataPosts.splice(index,1);
    })

  }
  
  onAddClick($event:any){
    console.log("onAddClick $event",$event);
    this.addPostsData.emit($event);
   
  }
}
