import { reactive } from "../restive";
describe("reactive", () => {
  it("happy path", () => {
    const testObj = { vmName: "vmware", detailsList: [1, 2, 3] };
    const reactiveTestObj = reactive(testObj);
    expect(reactiveTestObj).not.toBe(testObj);
    expect(reactiveTestObj.vmName).toBe("vmware");
  });
});
