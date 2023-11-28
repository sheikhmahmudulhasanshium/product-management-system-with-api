import {addProduct, getProducts } from "@/data/products"
import { NextResponse } from "next/server"

//static route eg: http://localhost:3000/api/products/
export const GET=async(req:Request,res:Response)=>{
    console.log("GET REQUEST")
    try{
        const products=getProducts()
        return NextResponse.json(
            {message:"OK",products},
            {status:200},
        )

    }
    catch(err){
        return NextResponse.json(
            {message:"ERROR",err},
            {status:500},
        )
    }
}
export const POST=async(req:Request,res:Response)=>{
    console.log("POST REQUEST")
    const {name,price,description,image,category,quantity,createdAt,__v}=await req.json();
    try{
        const product={name,price,description,image,category,quantity,createdAt:new Date(),updatedAt:new Date(), _id:Date.now().toString(),__v}
        addProduct(product)
        return NextResponse.json({message:"OK", product},{status:201})
    }
    catch(err){
        return NextResponse.json(
            {message:"Error",err},{status:500}
        )
    }
}