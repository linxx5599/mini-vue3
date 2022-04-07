import { str } from "../index";
describe("test", () => {
  it("num++", () => {
    let a = 0;
    a++;
    expect(a).toBe(1);
  });

  it("test index", () => {
    expect(str()).toBe("test index");
  });
});
