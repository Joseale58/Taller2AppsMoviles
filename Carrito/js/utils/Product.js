class Product{
    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.price = obj.price;
        this.descripcion = obj.description;
        this.image = new Image();
        this.image.src = obj.imagen;
    }
}

export default Product;