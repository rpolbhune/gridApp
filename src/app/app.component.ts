import { Component, ViewChild } from '@angular/core';
import {   GridsterPush,
  GridsterItemComponent,
  GridsterConfig,
  GridsterItem,
  GridType,
  CompactType,
  DisplayGrid
} from 'angular-gridster2';
import { DemoService } from './demo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'gridApp';
  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;
  item1!: GridsterItem;
  item2!: GridsterItem;
  itemToPush!: GridsterItemComponent;

  ngOnInit() {
    this.options = {
      pushItems: true,
      maxCols: 1,
      margin: 10,
      maxRows: 2,
      displayGrid: 'none',
      scrollVertical: true,
      disableScrollHorizontal: true,
      compactType: 'compactUp&Left',
      mobileBreakpoint: 0,
      resizable: {
        enabled: false
      },
      draggable: {
        enabled: true
      }
    };
   


  }


  
}


 

