import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoggerService} from "./services/logger.service";
import {BetterLoggerService} from "./services/better-logger.service";
import {ADMIN_EMAILS, PAGE_CONFIG} from "./config/page-config";
import {UserService} from "./services/user.service";
import {GreetingsService} from "./services/greetings.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: BetterLoggerService,
      useValue: {
        info: (msg: string) => {}
      }
    },
    {
      provide: LoggerService,
      useExisting: BetterLoggerService
    },
    {
      provide: PAGE_CONFIG,
      useValue: {title: 'Page config title'}
    },
    UserService,
    {
      provide: GreetingsService,
      useFactory: (
        loggerService: LoggerService,
        userService: UserService
      ) => {
        return new GreetingsService(loggerService, userService.info().name);
      },
      deps: [LoggerService, UserService]
    },
    {
      provide: ADMIN_EMAILS,
      useValue: 'foo@gmail.com',
      multi: true
    },
    {
      provide: ADMIN_EMAILS,
      useValue: 'bar@gmail.com',
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
