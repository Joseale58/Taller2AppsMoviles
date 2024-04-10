class Cart {

  //Constructor de la clase Cart
  constructor() {
    this.items = [];
    if (localStorage.getItem("product")) {
      this.items = JSON.parse(localStorage.getItem("product"));
    }
  }

  //Método para agregar productos
  addProduct(Product) {
    Product = JSON.parse(Product);
    console.log(Product);
    this.items.push(Product);
    localStorage.setItem("product", JSON.stringify(this.items));
  }

  //Método para eliminar productos
  deleteProduct(id) {
    let encontrado = false;
    this.items = this.items.filter(function (elemento) {
      if (
        !encontrado &&
        parseInt(JSON.stringify(elemento.id)) === parseInt(id)
      ) {
        encontrado = true;
        return false; // No incluir este elemento en la nueva lista
      }
      return true; // Incluir todos los otros elementos en la nueva lista
    });
    localStorage.clear();
    localStorage.setItem("product", JSON.stringify(this.items));
  }

  //Método para contar todos los productos
  count() {
    return this.items.length;
  }

  //Método para contar productos por id
  count_id(id) {
    let count = 0;
    this.items.forEach((product) => {
      if (product.id == id) {
        count++;
      }
    });
    return count;
  }
}

export default Cart;
