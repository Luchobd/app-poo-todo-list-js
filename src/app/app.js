/*
1. Class Product de valores de la clases
2. Class Interface de UI para la intercace grafica
*/

class Product {
  constructor(name, item, store, price) {
    this.name = name;
    this.item = item;
    this.store = store;
    this.price = price;
  }
}

class Interface {
  // Add Product => Agrega la funcionalidad del ToDo
  addProduct(product) {
    const productBox = document.getElementById("productBox");
    const box = document.createElement("div");
    box.innerHTML = `
    <div id="productList" class="product_list">
        <p>Product: ${product.name}</p> <br/>
        <p>Items: ${product.item} unit(s)</p> <br/>
        <p>Store: ${product.store}</p>  <br/>
        <p>Price: ${product.price} $</p>
        <button id="buttonDelete">Delete</button>
    </div>`;
    productBox.appendChild(box);
  }

  // Reset Product => Resetea todo el formulario al usar "save"
  resetForm() {
    const formContainer = document.getElementById("formContainer").reset();
  }

  // Delete Product => Eleimina un item de los agregados
  deleteProduct(box) {
    box.parentElement.remove();
    this.showMesaage(
      `
    Removed an item from the list`,
      (message.style = "color:#ffd700;")
    );
  }

  // Show Message => Muestra el texto
  showMesaage(msg, style) {
    const message = document.getElementById("message");

    (message.innerHTML = `<p class="message_info">${msg}</p>`), `${style}`;

    setTimeout(() => {
      document.querySelector(".message_info").remove();
    }, 3000);
  }
}
const formContainer = document
  .getElementById("formContainer")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const inputName = document.getElementById("inputName").value;
    const inputItem = document.getElementById("inputItem").value;
    const inputStore = document.getElementById("inputStore").value;
    const inputPrice = document.getElementById("inputPrice").value;

    const interface = new Interface();
    const product = new Product(inputName, inputItem, inputStore, inputPrice);

    if (
      inputName === "" ||
      inputItem === "" ||
      inputStore === "" ||
      inputPrice === ""
    ) {
      return interface.showMesaage(
        `
      Please, fill in the empty fields`,
        (message.style = "color: #a52a2a;")
      );
    }

    // Se debe invocar la clase y su metodo para que funcione.
    interface.addProduct(product);
    interface.resetForm();
    interface.showMesaage(
      `
    Product saved successfully`,
      (message.style = " color: #008000;")
    );
  });

const productBox = document
  .getElementById("productBox")
  .addEventListener("click", (e) => {
    const interface = new Interface();
    interface.deleteProduct(e.target);
  });
