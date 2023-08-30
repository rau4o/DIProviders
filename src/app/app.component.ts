import { Component } from '@angular/core';
import {LoggerService} from "./services/logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIProvers';

  constructor(private logger: LoggerService) {
    logger.info('Logger service called in constructor')
  }
}
