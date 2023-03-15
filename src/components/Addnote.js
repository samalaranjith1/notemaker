import React, { useEffect, useState } from 'react'

export default function Addnote() {
    const [count,setCount]=useState(0);
    const [note,setNote]=useState({
        title:'',
        id:'',
        description:''
    });

    const [data,setData]=useState([note]);

    function handleClick(){
        setCount(count+1)
        setNote(pd=>{
            return {
                ...pd,
                id:{count}
            }
        })
        setData(pd=>[
            ...pd,
            {...note}
        ])
        console.log(data)
            
    }
   
    function handleChange(e){
        const {name,value,id}=e.target;
        setNote(pd=>{
            return {
                ...pd,
                [name]:value
            }
        })
    }
    function removeItem(id){
        let newPeople = data.filter((data) => data.id !== id);
    setData(newPeople);
    }
    
  return (
    <div className='addnote'>

        <input type='text'
         name='title' 
         onChange={handleChange}
         value={note.title} 
         placeholder='title of the note'/>
         <br />
         <input type='text'
         name='description' 
         onChange={handleChange}
         value={note.description} 
         placeholder='enter description'/>
        <button onClick={handleClick}>Add text</button>

        <div className='data'>
            {data.map(cv=>{
                const {title,id,description}=cv;
                return (<div className='data-data'>
                {title && <h4>Note title:- {title}</h4>}
                {description && <p>description :- {description}</p>}
                <button onClick={()=>removeItem(id)}>remove</button>


                </div>)
        
            })}
        </div>


    </div>
  )
}
