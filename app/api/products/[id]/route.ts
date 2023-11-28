import { deleteProduct, getById, updateProduct } from "@/data/products"
import { NextResponse } from "next/server";

//dynamic route eg: http://localhost:3000/api/products/12345
export const GET=async(req:Request,res:Response)=>{
    console.log("GET REQUEST (get a product by id)")
    const id=req.url.split("products/")[1]
    try{
        const product = getById(id);
        if(!product){
            return NextResponse.json({message:"ERROR"},{status:404})
        }
        return NextResponse.json({message:"OK",product},{status:200})
    }
    catch(err){
        return NextResponse.json({message:"ERROR",err},{status:500})
    }

}
export const PUT=async(req:Request)=>{
    console.log("PUT REQUEST(insert a product, replace if product already exists)")
    try{
        const {name,price,description,image,category,quantity,createdAt,updatedAt,__v}=await req.json();
        const id=req.url.split("products/")[1];
        updateProduct(id,name,price,description,image,category,quantity,__v);
        return NextResponse.json({message:"OK"},{status:200})

    }
    catch(err){
        return NextResponse.json({message:"ERROR",err},{status:500})
    }
    

}
export const DELETE=async(req:Request)=>{
    console.log("DELETE REQUEST (delete a product by id)")
    try{
        const _id=req.url.split("products/")[1]
        deleteProduct(_id)
        return NextResponse.json({message:"OK"},{status:200})
    }
    catch(err){
        return NextResponse.json({message:"ERROR",err},{status:500})
    }
}