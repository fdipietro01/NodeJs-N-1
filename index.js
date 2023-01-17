class ProductManager {
    constructor(){
        this.productos = []
    }

    agregarProducto = (title, description, price, thumbnail, code, stock)=>{
        const producto = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock 
        }

        if(title && description && price && thumbnail && code, stock){
            if(this.productos.length === 0) {
                producto.id = 1
                this.productos.push(producto)
            }
            else {
                if(this.productos.some((prod => prod.code === code))) console.log("Duplicated product")
                else {
                    producto.id = this.productos[this.productos.length-1].id + 1
                    this.productos.push(producto)
                }
            } 
        }            
    }

    getProducts = ()=> this.productos
    getProductById = (id)=>{
        const find = this.productos.find(prod=> prod.id === id)
        return find ? find  : "Not Found"
    }
}

//create an instance
const manager = new ProductManager()

//calling getProducts method
console.log("Empty collection", manager.getProducts())

//adding products
manager.agregarProducto("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25)
console.log("Productos: ", manager.getProducts())

//rejecting duplicated product
manager.agregarProducto("producto prueba", "Este es un producto prueba", 200, "Sin Imagen", "abc123", 25)
console.log("Productos: ", manager.getProducts())

//finding product success case
console.log("Success case: ", manager.getProductById(1))

//finding product error case
console.log("Error case: ", manager.getProductById(2))