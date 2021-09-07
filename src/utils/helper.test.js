import accountHelper from "./helper.js";

describe("helper functions", () => {

  it("test get return full name function", () => {
    const accountData = [
        {
            key: "firstname",
            title: "First Name",
            value: "Bruce",
            required: true
        },
        {
            key: "lastname",
            title: "Last Name",
            value: "Banner",
            required: true
        },
        {
            key: "email",
            title: "Email",
            value: "bruce.banner@marvel.com",
            required: true
        },
        {
            key: "phone",
            title: "Phone",
            value: "0200000000",
            required: true
        }
    ];
    expect(accountHelper.getFullName(accountData)).toBe("Bruce Banner");
  });
});
