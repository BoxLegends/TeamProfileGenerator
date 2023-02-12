const Engineer = require("../lib/Engineer");

test("Tests creating a github.", () => {
  const testGithub = "testGitUser";
  const employeeInstance = new Engineer("johnDoe@test.com", "JohnDoe", 2, testGithub);
  expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "testGitUser";
  const employeeInstance = new Engineer("johnDoe@test.com", "JohnDoe", 2, testGithub);
  expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Tests out the engineer role.", () => {
  const returnValue = "Engineer";
  const employeeInstance = new Engineer("johnDoe@test.com", "johnDoe", 2, "testGitUser");
  expect(employeeInstance.getRole()).toBe(returnValue);
});