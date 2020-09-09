const countries = require("./countries");

test("Find is passed empty string and returns an empty array", () => {
    const str = countries.find("");
    expect(str).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    const arr = countries.find("A");
    expect(arr.length).toBeLessThanOrEqual(4);
});

test("The search is case insensitive", () => {
    const arrCapital = countries.find("A");
    const arrLower = countries.find("a");
    expect(arrCapital).toEqual(arrLower);
});

test("If there are no matching countries, an empty array is returned", () => {
    const arrNoMatch = countries.find("abcde");
    expect(arrNoMatch).toEqual([]);
});
