document.addEventListener("DOMContentLoaded", function () {
  const selectedUserId = sessionStorage.getItem("selectedUserId");
  const selectedUserName = sessionStorage.getItem("username");

  const nm = document.getElementById("postnm");

  nm.textContent = selectedUserName;
  nm.style.margin= "30px";
  nm.style.color = "red";
  nm.style.textAlign="center";
  nm.style.background = "lightblue";

  if (selectedUserId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
      .then((response) => response.json())
      .then((posts) => {
        const postListElement = document.getElementById("postList");

        if (posts.length === 0) {
          postListElement.textContent = "No posts found.";
        } else {
          posts.forEach((post) => {
            const card = document.createElement("div");
            card.classList.add("card", "sm-6");
            card.style.width = "100%";
            card.style.margin = "30px";
            card.style.color = "blue";

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = post.title;

            const body = document.createElement("p");
            body.classList.add("card-text");
            body.textContent = post.body;

            cardBody.appendChild(title);
            cardBody.appendChild(body);
            card.appendChild(cardBody);
            postListElement.appendChild(card);
          });
        }
      })
      .catch((error) => console.error(error));
  } else {
    window.location.href = "userListing.html";
  }
});
