import React from 'react'

const CreateTask = () => {
  return (
    
   <div>
<form className=" flex flex-col justify-center items-start py-11 w-[500px] mt-5 px-16" >

<h1 className="text-white">Task Title</h1>
<input className="bg-amber-100 w-80 " type="text" placeholder="" />
<h1 className="text-white">Date</h1>
<input className="bg-amber-100 w-80" type="date" placeholder=""/>
<h1 className="text-white">Assign to</h1>
<input className="bg-amber-100 w-80" type="text" placeholder="employee name"/>
<h1 className="text-white">Category</h1>
<input className=" bg-amber-100 w-80" type="text" placeholder="design,dev,etc"/>
<div className="flex flex-col w-80">
<h1 className=" text-white">Description</h1>
<textarea className=" bg-amber-100 w-80 h-40 resize-none" name="description" id="" cols="30" rows="10"></textarea>
<button className="bg-blue-700 text-amber-100 font-medium outline-none mt-4 p-2 w-80">Create task</button>
</div>
</form>


      </div>



  )
}

export default CreateTask