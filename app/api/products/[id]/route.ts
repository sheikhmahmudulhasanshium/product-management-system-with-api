//dynamic route eg: http://localhost:3000/api/products/12345
export const GET=async(req:Request,res:Response)=>{
    console.log("GET REQUEST (get a product by id)")
}
export const PUT=async(req:Request,res:Response)=>{
    console.log("PUT REQUEST(insert a product, replace if product already exists)")

}
export const DELETE=async(req:Request,res:Response)=>{
    console.log("DELETE REQUEST (delete a product by id)")
}