import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root',
  useFactory: (
    loggerService: LoggerService,
    userService: UserService
  ) => {
    return new AnotherGreetingsService(loggerService, 'Mr.' + userService.info().name)
  },
  deps: [LoggerService, UserService]
})

export class AnotherGreetingsService {
  constructor(private loggerService: LoggerService, private name: string) {
    this.loggerService.info(name + 'user another greeting service')
  }

  public getMessage(): string {
    return this.name + 'thanks'
  }
}
