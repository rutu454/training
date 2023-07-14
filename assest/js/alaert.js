const users = [
    {
    
      name: "Terry",
      age: 50,
      email: "atuny0@sohu.com",
      password: "9uQFF1Lh",
    },
    {
    
    name: "rutu",
        age: 20,
        email: "rutu@xy.com",
        password: "9uQFF1Lh",
      },
      {
    
        Name: "pqr",
        age: 50,
        email: "pqr@sohu.com",
        password: "9uQFh",
      },
      {
    
        Name: "Tanvi",
        age: 30,
        email: "tanu0@sohu.com",
        password: "asdfghjk",
      },
      {
    
        Name: "Tarun",
        age: 35,
        email: "tarun0@sohu.com",
        password: "zxcvvbn",
      },
      {
    
        Name: "mansi",
        age: 50,
        email: "mansi0@sohu.com",
        password: "QFF1Lh",
      },
      {
    
        Name: "ram",
        age: 70,
        email: "raam0@sohu.com",
        password: "9uQ1Lh",
      },
      {
    
        Name: "sita",
        age: 10,
        email: "sita0@sohu.com",
        password: "qwrejf",
      },
      {
    
        Name: "mina",
        age: 60,
        email: "mina0@sohu.com",
        password: "pqrsty",
        },
      {
    
        Name: "rahul",
        age: 22,
        email: "rahul@atuny.com",
        password: "9FF1Lh",
      },
] 
  
  //function validateLogin(event) {
    //event.preventDefault();
  
    // Get the input values
    //var email = document.getElementById("email").value;
    //var password = document.getElementById("password").value;
  
    // Check if email and password match any user in the array
    //var isValid = users.some(function(user) {
      //return user.email === email && user.password === password;
    //});
    //if (isValid) {
        //alert("Login successful!");
      //} else {
        //alert("Invalid email or password.");
      //}
    //}
    
    //document.getElementById("loginForm").addEventListener("submit", validateLogin);




function findUser(email, password) {
  const userFound = users.some(user => {
    if (user.email === email) {
      if (user.password === password) {
        return true; 
      } else {
        alert('Incorrect password');
        return true;
      }
    }
    return false; 
  });

  if (!userFound) {
    alert('User not found');
  }
}

