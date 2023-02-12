const Intern = require("../lib/Intern");

test("Tests creating a school.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("johnDoe", 2, "JohnDoe@test.com", testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing that the officeNumber function will return the office number.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("JohnDoe", 2, "JohnDoe", testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern("JohnDoe", 2, "JohnDoe@test.com", "testName");
  expect(employeeInstance.getRole()).toBe(returnValue);
});