import { Component } from '@angular/core';
import { DemoService } from '../demo-service.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  dataArray:any= [];
  p:any=0;
  constructor(private demoService:DemoService){
  }
  ngOnInit(): void {
   
    this.getData();
  }
  getData(){
    this.demoService.getData().subscribe(res=>{
      this.dataArray = res;
     })

  }
}
