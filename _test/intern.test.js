const Intern = require("../lib/Intern");

test("Tests creating a school.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern( "JohnDoe@test.com", "johnDoe", 2, testSchool);
  expect(employeeInstance.school).toBe(testSchool);
});

test("Testing that the officeNumber function will return the office number.", () => {
  const testSchool = "testName";
  const employeeInstance = new Intern("JohnDoe@test.com", "JohnDoe", 2, testSchool);
  expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employeeInstance = new Intern("JohnDoe@test.com", "JohnDoe", 2, "testName");
  expect(employeeInstance.getRole()).toBe(returnValue);
});