import { utilB } from "./shared/utilB";
import { UserB } from "./features/UserB";

export class ComponentB {
  constructor() {
    new UserB();
  }

  sayHelloB() {
    console.log("ComponentB");
  }
}

utilB();
