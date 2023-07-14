document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      console.debug(users);
      const userListElement = document.getElementById("userList");
      users.forEach((user) => {
        const card = document.createElement("div");
        card.innerHTML = `<div class="card col-sm-6">
            <div class="left">
              <div class="avatar">
              </div>
              <div class="info">
                ${user.name}
                ${user.email}<br>
                ${user.id}
                
              </div>
            
            </div>
          </div>`;
        card.addEventListener("click", function () {
          sessionStorage.setItem("selectedUserId", user.id);
          sessionStorage.setItem("username", user.name);
          window.location.href = "postList.html";
        });

        userListElement.appendChild(card);
      });
    })
    .catch((error) => console.error(error));
});
