import {LoggerService} from "./logger.service";

export class GreetingsService {
  constructor(private loggerService: LoggerService, private name: string) {
    this.loggerService.info(name+ 'use grettingService');
  }

  public getMessage(): string {
    return this.name + 'thanks for watching this video';
  }
}
