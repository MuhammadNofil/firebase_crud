import React,{useState,useEffect} from 'react'
import { db } from '../service/firebase.config'
import { collection,getDocs } from 'firebase/firestore'
const Task = () => {
    const collectionRef=collection(db,'tasks')
    const [tasks,setTasks]=useState([])
    useEffect(()=>{
        const getTasks=async()=>{
            await getDocs(collectionRef).then((task)=>{
                let taskData=task.docs.map((doc)=>({...doc.data(),id:doc.id}))
                setTasks(taskData)
            })
        }
        getTasks()
    })
    console.log('tasks',tasks)
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="card card-white">
                    <div className="card-body">
                        {
                            tasks.map(({task,id})=>
                        <div className="todo-list" key={id}>
                            <div className="todo-item">
                                <hr />
                                <span>
                                    <div className="checker">
                                        <span>
                                            <input type="checkbox" />
                                        </span>
                                    </div>
                                    &nbsp;{task}
                                </span>
                                
                                <span className='float-end mx-3'><button type='button' className='btn btn-primary '>Edit</button></span>
                                <span><button type='button' className='btn btn-danger float-end'>Delete</button></span>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Task