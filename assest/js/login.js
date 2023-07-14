document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const user = users.find(
          (user) => user.email === String(email).toLowerCase
        );
        if (user) {
          localStorage.setItem("userId", user.id);
          window.location.href = "userListing.html";
        } else {
          window.location.href = "postList.html";
        }
      })
      .catch((error) => console.error(error));
  });
