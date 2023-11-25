
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-indigo-950">
      <div className="">
        {/**Header */}
        <div className='flex bg-slate-800 p-2 w-screen justify-center font-extrabold text-slate-50 text-2xl '>Product Management System </div>
        {/**Body */}
      <div className='grid justify-center grid-cols-12 '>
          {/**Sidebar */} 
          <div className='col-span-4 bg-green-900 p-4 text-slate-100 space-y-4 '>
            <div className='shadow-lg shadow-slate-400 px-1 bg-green-700 hover:shadow-green-200 hover:text-yellow-200'>Add Product</div>
            <div className='shadow-lg shadow-slate-400 px-1 bg-green-700 hover:shadow-green-200 hover:text-yellow-200'>Update Product</div>
            <div className='shadow-lg shadow-slate-400 px-1 bg-green-700 hover:shadow-green-200 hover:text-yellow-200'>Delete Product</div>
            <div className='shadow-lg shadow-slate-400 px-1 bg-green-700 hover:shadow-green-200 hover:text-yellow-200'>Show Product</div>
          </div>
          {/**Output */}
          <div className='col-span-8 bg-slate-200 p-2'>
            <div className='flex flex-col font-extrabold '>
              {/**Output Header */}
              <div className=' text-center'>Seller Portal</div>
              {/**Product Card*/}
              <div className='flex flex-col justify-center bg-blue-400 p-2 rounded-lg items-center'>
                  <img src="https://petspital-prescription.s3.ap-southeast-1.amazonaws.com/Screenshot_5.png" alt="icon"  />
                  <div className=' p-2 text-lg'>Product Name</div>
                  <div className='text-yellow-400 text-xl'>410/-</div>
                  <div className='flex flex-col items-center text-sm font-normal'>
                    <span>Quantity: 10</span>
                    <span className=''>Product Descriptions jhhjgjgjghjgjhgjgj</span>
                    <span className=''>Created At: 12/12/1212</span>
                    <span className=''>Updated At: 12/13/1212</span>
                  </div>
                  
              </div>
            </div>
          </div>
      
      </div>
      </div>
      
    </main>
  )
}
