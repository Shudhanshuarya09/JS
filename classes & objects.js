//you are creating a website for your college . Crteate a class user with two properties , name & email. It also has a method called viewData() that allows user to view website data.

let DATA = "Secret information";

class User{
  constructor(name,email ){
    this.name = name;
    this.email = email;
  }
  viewData(){
    console.log("DATA =", DATA);

  }
}

let student1 = new User("Shudhanshu", "shudhanshu@email.com");
let student2 = new User("Shubham", "shubham@email.com");

let teacher1 = new User("Sachan", "sachan@email.com");