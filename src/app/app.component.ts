import { Component } from '@angular/core';
import { MyMonitoringService } from './logging.service';
@Component({
  selector: 'mda-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo-app';
  constructor(private myMonitoringService: MyMonitoringService) {
  
  }
}
