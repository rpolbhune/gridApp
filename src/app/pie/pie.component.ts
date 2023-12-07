import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import { DemoService } from '../demo-service.service';
import {groupBy,mergeMap,toArray,concatMap,from,of} from 'rxjs'

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  constructor(private demoService:DemoService){
  }
  ngOnInit(): void {
    this.demoService.getData().subscribe((res:any)=>{
     let finalObj:any = {
     };

     var finalArray:any = [];
     res.forEach((games:any) => {
       const date = new Date(games.created).getFullYear();
       if (finalObj[date]) {
         finalObj[date].push(games);
       } else { 
         finalObj[date] = [games];
       }
     });

     Object.keys(finalObj).forEach((element:any) => {
      let v = finalObj[element].length;
      let Obj = {
     name:element,
     y:v
      };
      finalArray.push(Obj);
     });
     this.chartOptions = {
      chart: {
        type: 'pie',
        backgroundColor: '#FFF',
        width: 1000,
        height: 300
      },
      title: {
          text: 'Yearly Count'
      },
      legend: {
          floating: true,
          align: 'left',
          layout: 'vertical',
          verticalAlign: 'top',
          width: 300,
          x: 200,
          y: 0
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true
              },
              showInLegend: true
          }
      },
      series: [
        {
          type: "pie",
          data: finalArray
        }
      ]
    };
     });

   
  }

}
