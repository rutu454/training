document.addEventListener("DOMContentLoaded", function() {
    const selectedUserId = sessionStorage.getItem("selectedUserId");
    const selectedUserName = sessionStorage.getItem("username");
    
    const nm = document.getElementById("postnm");

    nm.textContent = selectedUserName;
    

    if (selectedUserId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`)
        .then(response => response.json())
        .then(posts => {
          const postListElement = document.getElementById("postList");

          
          
  
          if (posts.length === 0) {
            postListElement.textContent = "No posts found.";
          } else {
            posts.forEach(post => {
              const card = document.createElement("div");
              card.classList.add("card");
              card.style.width = "100%";
  
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
        .catch(error => console.error(error));
    } else {
      window.location.href = "userListing.html";
    }
  });
  