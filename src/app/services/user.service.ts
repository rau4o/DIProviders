import {Injectable} from "@angular/core";

@Injectable()

export class UserService {
  info(): {name: string, age: number} {
    return {
      name: 'Max',
      age: 30
    }
  }
}
