document.addEventListener("DOMContentLoaded", function() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        const userListElement = document.getElementById("userList");
        users.forEach(user => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.style.width = "18rem";
  
          const cardBody = document.createElement("div");
          cardBody.classList.add("card-body");
  
          const name = document.createElement("button");
          name.classList.add("card-title");
          name.textContent = user.name;
  
          const email = document.createElement("p");
          email.classList.add("card-text");
          email.textContent = user.email;
  
          cardBody.appendChild(name);
          cardBody.appendChild(email);
  
          card.addEventListener("click", function() {
            sessionStorage.setItem("selectedUserId", user.id);
            sessionStorage.setItem("username", user.name);
            window.location.href = "postList.html";
          });
  
          card.appendChild(cardBody);
          userListElement.appendChild(card);
        });
      })
      .catch(error => console.error(error));
  });
  