let name = prompt("Enter your name");

let generalizeName = name.toLowerCase();
let newName = `@${generalizeName}${generalizeName.length}`;
console.log(newName);