"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"

async function loadTask(){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/task/`)
    const task = await res.json()
    return task
}

async function TaskCard() {
    const task = await loadTask()
    console.log(task)
    return(
        <div className="bg-slate-700 p-4 w-full">
            <h1 className="text-white">TaskCard</h1>
                {task.map(task =>(
                    <div className="bg-slate-500 px-4 py-3 mb-2 rounded-md text-slate-200" key={task.id}>
                        <div>
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                        </div>
                        <div className="flex justify-between gap-x-2">
                            <button>
                                Task Done
                            </button>
                            <button className="bg-indigo-500 text-white rounded-md p-2">
                                Update
                            </button>
                            <button className="bg-red-500 text-white rounded-md p-2">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default TaskCard;