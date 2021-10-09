import { handleSubmit } from "./formHandler";

describe("Expect handleSubmit to be defined", () => {
  test("It should return true", async () => {
    expect(handleSubmit).toBeDefined();
  });
});
describe("Expect the type of handleSubmit to be a function", () => {
  test("It should return true", async () => {
    expect(typeof handleSubmit).toBe("function");
  });
});
