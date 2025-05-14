"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

function FormTask(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const router = useRouter()


    const handleSubmit = async e => {
        e.preventDefault()
        console.log(title, description)
        console.log("this is the banckend url ", process.env.NEXT_PUBLIC_BACKEND_URL)
        console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
        const resp = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`, {
            method: "POST",
            body: JSON.stringify({title, description}),
            headers:{
                "Content-Type": "application/json",
            }
        })
        if (!resp.ok){
            throw new Error("failed")
        }
        const data = await resp.json()
        console.log(data)
        console.log(resp)
        router.refresh()
    }

    return(
        <div className="bg-slate-200 p-7 h-fit">
            <form action="" onSubmit={handleSubmit}>

                <h1 className="text-5x1 text-black-800">Add Task</h1>
                
                <label htmlFor="Title" className="text-xs text-black">Title:</label>
                
                <input type="text" name="Title"
                    className="bg-slate-400 rounded-md p-2 mb-2 block w-f  ull, text-slate-900"
                    onChange={e => setTitle(e.target.value)}
                />

                
                <label htmlFor="Description" className="text-xs text-black">Description:</label>
                
                <textarea className="bg-slate-400 rounded-md p-2 mb-2 block w-f  ull, text-slate-900" onChange={e => setDescription(e.target.value)} name="Description" ></textarea>
                
                <button className="text-white bg-indigo-500 rounded-md p-2 block  w-full">
                    Save
                </button>
            </form>
        </div> 
    )
} 

export default FormTask