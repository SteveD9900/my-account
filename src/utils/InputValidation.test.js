import InputValidation from "./InputValidation.js";

describe("InputValidation functions", () => {

  it("test email format validation function", () => {
    const incorrectEmail = "bruce.com";
    expect(InputValidation.validateEmail(incorrectEmail)).toBe(false);
    const correctEmail = "bruce.banner@hotmail.com";
    expect(InputValidation.validateEmail(correctEmail)).toBe(true);
  });

  it("test phone format validation function", () => {
    const incorrectPhone = "046632100";
    expect(InputValidation.validatePhone(incorrectPhone)).toBe(false);
    const correctPhone = "0466321002";
    expect(InputValidation.validatePhone(correctPhone)).toBe(true);
  });

  it("test ABN format validation function", () => {
    const incorrectABN = "12 123 123";
    expect(InputValidation.validateAbn(incorrectABN)).toBe(false);
    const correctABN = "12 123 123 123";
    expect(InputValidation.validateAbn(correctABN)).toBe(true);
  });

  it("test Postcode format validation function", () => {
    const incorrectPostcode = "22009";
    expect(InputValidation.validatePostcode(incorrectPostcode)).toBe(false);
    const correctPostcode = "2000";
    expect(InputValidation.validatePostcode(correctPostcode)).toBe(true);
  });

  it("test Show Two Digits function", () => {
    const hourlyrate = "239.2364";
    expect(InputValidation.showTwoDigits(hourlyrate)).toBe("239.24")
  });
});
