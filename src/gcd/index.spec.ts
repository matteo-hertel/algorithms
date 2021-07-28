import { gcd } from "./index";

describe("GCD", function () {
  test("to work with 2 small numbes", () => {
    expect(gcd(10, 6)).toEqual(2);
  });
  test("to work with 2 medium numbes", () => {
    expect(gcd(357, 234)).toEqual(3);
  });
  test("to work with 2 large numbes", () => {
    expect(gcd(3918848, 1653264)).toEqual(61232);
  });
});
