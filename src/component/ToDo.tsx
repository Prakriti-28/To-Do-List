import React, { useState } from 'react'
interface abc{
    id:number,
    task: string
}

const ToDo = () => {
    const [data, setData] = useState<abc[]>([])
    const [id, setId] = useState<number>()
    const [task, setTask] = useState<string>("")


    const add = ()=>{
        
        const newItem:abc = {
            id: data.length+1,
            task
        }
        if(data.length>4){
            alert("complete the previous tasks")
        }else{
            setData((prevItem)=>[...prevItem, newItem])
            setId(id)
            setTask("")
        }
        
    }

    const deleted = (id:any)=>{
        const deleteItem = data.filter((item)=>{
            return item.id!==id
        })
        setData(deleteItem)
    }

  return (
    <div className='container' style={{backgroundImage:"linear-gradient(to left, skyblue, blueviolet)", height:"400px", borderRadius:"10px", boxShadow:"0 0 20px blue", width:"390px", marginTop:"10%"}}>
        <div className='d-flex justify-content-center m-5' style={{gap:"2px"}}>
            <input type="text" placeholder='task' value={task} onChange={(e)=>{setTask(e.target.value)}} className="rounded m-3 border-white text-warning" style={{width:"350px", height:"50px"}}/>
            <button className="rounded m-3 border-white text-warning" onClick={add} style={{width:"120px"}}>Add</button>
        </div>
        
            {
                data.map((item:abc)=>{
                    return(
                        <div className='container'>
                            <div className='d-flex justify-content-center'>
                            <ul className='d-flex justify-content-between border mb-2 bg-white rounded' style={{width:"500px", listStyle:"none"}}>
                                <li>{item.id}.</li>
                                <li>{item.task}</li>
                                <li><button className="btn btn-danger" onClick={()=>{deleted(item.id)}}>Delete</button></li>
                            </ul>
                            </div>
                        
                        </div>

                    )

                })
            }
      
    </div>
  )
}

export default ToDo

