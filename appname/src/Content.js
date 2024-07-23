import React from 'react'
import { useState } from 'react'

const Content = () => {
    let [items, setItems] = useState(
        [
            {
                id: 1,
                name: "Run",
                checked: null
            },
            {
                id: 2,
                name: "Bath",
                checked: null
            },
            {
                id: 3,
                name: "Cook",
                checked: null
            },
            {
                id: 4,
                name: "sleep",
                checked: null
            },
        ]
    )


    function Handle(id) {
        let listitems = items.map(
            (item) => item.id === id ? 
            { ...item, checked: !item.checked } : item)
        setItems(listitems)
    }

    function deleting(id){
        let del = items.filter((item)=> item.id != id)
        setItems(del)
    }
    return (
        <main>
            <ul>
                {items.map((item) => 
                (
                    <li className='listdiv' key={item.id} >
                        <input type="checkbox" onChange={() => Handle(item.id)} checked={item.checked} name="" id="attend" />
                        <p> {item.name} </p>
                        <button className='btn' onClick={()=> deleting(item.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content