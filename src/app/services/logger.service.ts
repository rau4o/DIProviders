import {Injectable} from "@angular/core";

@Injectable()

export class LoggerService {

  public info(msg: string): void {
    console.log(msg);
  }
}
