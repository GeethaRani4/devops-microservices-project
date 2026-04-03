// Get Users
document.getElementById("getUsers").addEventListener("click", () => {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
      const output = document.getElementById("output");
      output.innerHTML = "";

      data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        output.appendChild(li);
      });
    })
    .catch(err => console.log(err));
});


// Get Products
document.getElementById("getProducts").addEventListener("click", () => {
  fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
      const output = document.getElementById("output");
      output.innerHTML = "";

      data.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        output.appendChild(li);
      });
    })
    .catch(err => console.log(err));
});