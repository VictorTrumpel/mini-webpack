export function utilA() {
  console.log("utilA");
}
export function utilB() {
  console.log("utilB");
}
export function testUserA() {
  console.log("testUserA");
}
class Usles {}
export class UserA {
  constructor() {
    console.log("UserA");
  }
}
testUserA();
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

export class UserB {
  constructor() {
    console.log("UserB");
  }
}
export class ComponentB {
  constructor() {
    new UserB();
  }
  sayHelloB() {
    console.log("ComponentB");
  }
}
utilB();
const componentA = new ComponentA();
componentA.sayHelloA();
const componentB = new ComponentB();
componentB.sayHelloB();