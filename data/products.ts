type Product={
    _id:string; 
    name:string; 
    price:number; 
    description:string;
    image:string; 
    category:Category; 
    quantity:number; 
    createdAt:Date; 
    updatedAt:Date;
    __v:number;  
}; 
type Category="Cat Food"|"Dog Food"|"Rabbid Food"|"Other"; 



//updating product list with previous api https://devapi.petspital.app/product
{/*fetch('https://devapi.petspital.app/product')
.then(Response=>Response.json())
.then(products=>{
    const productlist=products
    console.log(products)
})*/}
//handlers
//initilizing product array
let products:Product[]=[]; 
export const getProducts=()=>products; 
export const addProduct=(product:Product)=>{
   products.push(product)
}
export const deleteProduct=(_id:string)=>{
    products=products.filter((product)=>product._id!==_id)
}
export const updateProduct = (
    _id: string,
    name: string,
    price: number,
    description: string,
    image: string,
    category: Category,
    quantity: number,
    __v:number) => {
    const product = products.find((product) => product._id === _id);
    if(product) {
      product.name = name;
      product.price = price;
      product.description = description;
      product.image = image;
      product.category = category;
      product.quantity = quantity;
      product.updatedAt = new Date(Date.now()); // Create a new Date object
      product.__v=__v;

    }
    else {
        throw new Error("No Product Found")
    }

  };
  
  export const getById=(_id:string)=>{
    return products.find((product)=>product._id===_id);
}
