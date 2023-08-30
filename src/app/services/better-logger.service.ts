import {Injectable} from "@angular/core";
import {LoggerService} from "./logger.service";

@Injectable()
export class BetterLoggerService extends LoggerService {

  constructor() {
    super();
    this.info('BetterLoggerService was created');
  }

  public override info(msg: string) {
    super.info('----' + msg + '----');
  }
}
