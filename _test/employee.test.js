const Employee = require("../lib/Employee");

test("Creates a new employee.", () => {
  const employeeInstance = new Employee();
  expect(typeof employeeInstance).toBe("object");
});

test("Test for the email.", () => {
    const email = "johnDoe@gmail.com";
    const employeeInstance = new Employee("johnDoe", 2, email);
    expect(employeeInstance.email).toBe(email);
  });

test("Tests the name.", () => {
  const name = "johnDoe";
  const employeeInstance = new Employee(name);
  expect(employeeInstance.name).toBe(name);
});

test("Testing the ID.", () => {
  const id = 2;
  const employeeInstance = new Employee("johnDoe", id);
  expect(employeeInstance.id).toBe(id);
});

test("test's email through getEmail.", () => {
    const testEmail = "johnDoe@test.com";
    const employeeInstance = new Employee("johnDoe", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
  });  

  test("tests getName method.", () => {
    const testName = "johnDoe";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
  });

test("test's ID through getID.", () => {
  const testID = 2;
  const employeeInstance = new Employee("johnDoe", testID);
  expect(employeeInstance.getId()).toBe(testID);
});


test("Tests role.", () => {
  const returnValue = "Employee";
  const employeeInstance = new Employee("johnDoe", 2, "johnDoe@test.com");
  expect(employeeInstance.getRole()).toBe(returnValue);
});