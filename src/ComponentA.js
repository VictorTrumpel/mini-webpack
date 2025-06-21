import { utilA } from "./shared/utilA";
import { utilB } from "./shared/utilB";
import { UserA } from "./features/UserA";

export class ComponentA {
  constructor() {
    new UserA();
  }

  sayHelloA() {
    console.log("ComponentA");
  }
}

utilA();
utilB();
