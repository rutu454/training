const users = [
    {
    
      Name: "Terry",
      age: 50,
      email: "atuny0@sohu.com",
      password: "9uQFF1Lh",
    },
    {
    
      Name: "rutu",
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



//function myfunction(){
  
      //if(users.email == users.password){
      
    //alert("id and passward are true");
    //}
    //else{

   // alert("id and passward are not true");
//}}

//function check(email, password) {  // check() email id and password are correct with the help of some function
  //return users.some(user => user.email === email && user.password === password);

//}
//function checkValue() { //checkValue retrive value enter in id and password and pass through check function for check the value is correct or not.
  //const enteredEmail = document.getElementById('email').value;
  //const enteredPassword = document.getElementById('password').value;

  //if (check(enteredEmail, enteredPassword)) {
   // alert('id and password are true');
  //} else {
    //alert('Id and password are false');
  //}
//}

function check() {
  const enteredEmail = document.getElementById('email').value;
  const enteredPassword = document.getElementById('password').value;
  const userFound = users.find(user => {
    return user.email === enteredEmail; 
  });

  if (!userFound) {
    alert('User not found');
    return
  }

  if(userFound && userFound.password !== enteredPassword) {
    alert("password not match");
    return
  }

  alert("welcome to the Home Page");
  
}


