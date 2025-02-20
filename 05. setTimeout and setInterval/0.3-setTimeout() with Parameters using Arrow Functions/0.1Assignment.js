// Problem: Create a function greetUser(name) that prints "Hello, [name]!" after 2 seconds using setTimeout() with an arrow function.

const greetUser = (name) => {
  setTimeout(() => console.log(`hello, ${name}`), 2000);
};

greetUser("vishv");
greetUser("manish");
