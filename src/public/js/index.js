const socketclient = io();
const form = document.getElementById("NuevoProd");
const verProductos = document.getElementById("productos");
const titulo = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const thumbnail = document.getElementById("thumbnail");
const code = document.getElementById("code");
const stock = document.getElementById("stock");

form.onsubmit = (e) => {
    e.preventDefault();
    const obj = {
        title: titulo.value,
        description: description.value,
        price: price.value,
        thumbnail: thumbnail.value,
        code: code.value,
        stock: stock.value
    };
    socketclient.emit("AddProduct", obj);
};

socketclient.on("productAdded", (newObj) => {
    const { id, title, description, price, thumbnail, code, stock } = newObj;
    const vista = `
    <div>
      <h3>${title}</h3>
      <h2>${id}</h2>
      <p>${price}</p>
      <p>stock: ${stock}</p>
    </div>
    `;
    verProductos.innerHTML += vista;
});