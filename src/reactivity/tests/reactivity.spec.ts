import { reactive, readonly } from "../restive";
describe("reactive", () => {
  it("happy path", () => {
    const testObj = { vmName: "vmware", detailsList: [1, 2, 3] };
    const reactiveTestObj = reactive(testObj);
    expect(reactiveTestObj).not.toBe(testObj);
    expect(reactiveTestObj.vmName).toBe("vmware");
  });

  it("readonly warn then call set", () => {
    console.warn = jest.fn();
    const user = readonly({
      age: 10
    });
    user.age = 11;
    expect(user.age).toBe(10);
    expect(console.warn).toBeCalled();
  });
});
