import { Component } from '@angular/core';
import { HeaderService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consumer-lib';

  constructor(private headerService: HeaderService) {
    this.headerService.logHeaderText();
  }
}
