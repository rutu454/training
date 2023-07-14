//fetch('https://jsonplaceholder.typicode.com/users')
//.then(response => response.json())
//.then(data => console.log(data));

//  fetch("https://api.example.com/data")
 // .then(response => response.json())
  //.then(data => {
    //var cardContainer = document.getElementById("cardContainer");

    //data.forEach(item => {
      //var card = document.createElement("div");
      //card.classList.add("card");

      //var cardBody = document.createElement("div");
      //cardBody.classList.add("card-body");

      //var cardTitle = document.createElement("h5");
      //cardTitle.classList.add("card-title");
      //cardTitle.textContent = item.title;

      //var cardText = document.createElement("p");
      //cardText.classList.add("card-text");
      //cardText.textContent = item.description;

      //cardBody.appendChild(cardTitle);
      //cardBody.appendChild(cardText);
      //card.appendChild(cardBody);
      //cardContainer.appendChild(card);
    //});
  //})
  //.catch(error => console.error(error));


  //function outerFunction() {
    //var outerVariable = 'I am from the outer function';
  
    //function innerFunction() {
      //console.log(outerVariable);
    //}
  
    //return innerFunction;
  //}
  
  //var closure = outerFunction(); // closure now contains the innerFunction
  
  //closure(); // This will log 'I am from the outer function'
  



	//let fetchRes = fetch(
	//"https://jsonplaceholder.typicode.com/users");
		//fetchRes.then(res =>
	//	res.json()).then(d => {
		//	console.log(d)
		//})


		//user = {
		//	"name": "Geeks for Geeks",
			//"age": "23"
	//	}
		//let options = {
			//method: 'POST',
			//headers: {
				//'Content-Type':
					//'application/json;charset=utf-8'
			//},
			//body: JSON.stringify(user)
	//	}
		// Fake api for making post requests
		//let fetchRes = fetch(
//"http://dummy.restapiexample.com/api/v1/create",
	//									options);
		//fetchRes.then(res =>
			//res.json()).then(d => {
				//console.log(d)
			//})

//
    //  fetch('https://jsonplaceholder.typicode.com/users')
      //.then(response => response.json())
      //.then(data => {
        //console.log(data);
      //})
      //.catch(error => {
        //console.error('Error:', error);
      //});
    

//
    //  const data = { username: 'JohnDoe', password: 'secret' };

//fetch('https://jsonplaceholder.typicode.com/users', {
  //method: 'POST',
  //headers: {
    //'Content-Type': 'application/json',
  //},
  //body: JSON.stringify(data)
//})
  //.then(response => response.json())
  //.then(data => {
    //console.log(data);
  //})
  //.catch(error => {
    //console.error('Error:', error);
  //});



  //
  //fetch('https://jsonplaceholder.typicode.com/users')
  //.then(response => {
    //if (!response.ok) {
      //throw new Error('Request failed with status code ' + response.status);
    //}
    //return response.json();
  //})
  //.then(data => {
    //console.log(data);
  //})
  //.catch(error => {
    //console.error('Error:', error);
  //});


  //
  
//let url = 'https://jsonplaceholder.typicode.com/users';  
//console.log(url);  
//fetch(url).then(response => response.json())    
//.then(json => console.log(json))     
//.catch(error => console.log('URL Request Failed', error)); 



//
let url = 'https://jsonplaceholder.typicode.com/users';  
async function fetchData() {  
    let response_data = await fetch(url);  
    console.log(response_data.status);   
    console.log(response_data.statusText);   
    if (response_data.status === 200) {  
        let data = await response_data.text();  
        console.log(data); 
        }  
}  
fetchData();  


//
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    const data = JSON.parse(request.responseText);
  console.log(data);
  } else {
    console.error('Error:', request.status);
  }
};
request.onerror = function() {
  console.error('Request failed');
};
request.send();



//await
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();


//
async function exampleFetch() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    console.log(json);
}
exampleFetch();



