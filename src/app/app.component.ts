import {Component, Inject} from '@angular/core';
import {LoggerService} from "./services/logger.service";
import {BetterLoggerService} from "./services/better-logger.service";
import {ADMIN_EMAILS, PAGE_CONFIG, PageConfig} from "./config/page-config";
import {GreetingsService} from "./services/greetings.service";
import {AnotherGreetingsService} from "./services/another-greetings.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DIProvers';

  constructor(private logger: LoggerService,
              @Inject(PAGE_CONFIG) pageConfig: PageConfig,
              private greetingsService: GreetingsService,
              private anotherGreetingsService: AnotherGreetingsService,
              @Inject(ADMIN_EMAILS) adminEmails: string[],
              private betterLogger: BetterLoggerService) {
    console.log(adminEmails);
    logger.info('Logger service called in constructor');
    betterLogger.info('Logger 2 service called in constructor');
    this.title = pageConfig.title;
    console.log(this.greetingsService.getMessage());
    console.log(this.anotherGreetingsService.getMessage());
  }
}
