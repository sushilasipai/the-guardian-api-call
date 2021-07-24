const { it } = require("@jest/globals");
const { validSectionName } = require("../validation");

describe("validation module", () => {
  describe("section name validation", () => {
    it("should not be empty", (done) => {
      const received = validSectionName("");
      expect(received).toBeFalsy();
      done();
    });

    it("should not be hyphen only", (done) => {
      const received = validSectionName("-");
      expect(received).toBeFalsy();
      done();
    });

    it("should not start with hyphen", (done) => {
      const received = validSectionName("-abcd");
      expect(received).toBeFalsy();
      done();
    });

    it("should not contain uppercase letters", (done) => {
      const received = validSectionName("abcD-jkll");
      expect(received).toBeFalsy();
      done();
    });

    it("should not contain number", (done) => {
      const received = validSectionName("abc33-jkll");
      expect(received).toBeFalsy();
      done();
    });

    it("should not contain special characters except hyphen", (done) => {
      const received = validSectionName("abc&**-jkll");
      expect(received).toBeFalsy();
      done();
    });

    it("should contain only small letters separted by hyphens", (done) => {
      const received = validSectionName("abcd-jkl");
      expect(received).toBeTruthy();
      done();
    });

    it("should contain only small letters", (done) => {
      const received = validSectionName("abcd");
      expect(received).toBeTruthy();
      done();
    });
  });
});
