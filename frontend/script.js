const API = "http://localhost:3000";

function getUsers() {
    fetch(`${API}/users`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").innerText = JSON.stringify(data, null, 2);
        });
}

function getProducts() {
    fetch(`${API}/products`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").innerText = JSON.stringify(data, null, 2);
        });
}