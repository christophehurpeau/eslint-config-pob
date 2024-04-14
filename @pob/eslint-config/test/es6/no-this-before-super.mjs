/* eslint-disable no-undef */
export class A1 extends B {
  constructor() {
    // eslint-disable-next-line no-this-before-super
    this.a = 0;
    super();
  }
}
