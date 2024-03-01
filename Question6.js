let name = prompt("Enter your full name without spaces :");

let generalizeName = name.toLowerCase();
let newName = `@${generalizeName}${generalizeName.length}`;
console.log(newName);