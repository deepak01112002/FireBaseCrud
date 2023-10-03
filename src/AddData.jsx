import React from 'react'
import { useState } from 'react'
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'
function AddData() {
    const [name,setName] = useState("")
    const handleClick = async()=>{
      let data = collection(db,"user")
      await addDoc(data,{name : name})
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <button onClick={handleClick}>Add Data</button>
    </div>
  )
}

export default AddData