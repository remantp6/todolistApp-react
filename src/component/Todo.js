import React from 'react'
import img1 from "../images/img1.png"
import { useState } from 'react'

const Todo = () => {
    const[inputData, setInputData] = useState('');
    const[items, setItems] = useState([]);

    const addItem = () => {
      if(!inputData){
        alert('Input must no be empty')
      }
      else{
        setItems([...items, inputData])
        setInputData('')
      }   
    }
    const deleteItem = (id) =>{
      const updatedItem = items.filter((elem, ind) => {
          return ind !== id;
      })
      setItems(updatedItem);
    }
    const removeAll = () => {
      setItems([]);
    }
  return (
    <>
      <div className="todo_ListApp">
      <div className="todo_ListApp_wrapper">
      <figure className='mb-0'>
            <img src= {img1} alt="todoLogo"/>
            <figcaption className="py-3 fs-3">Add Your List Here ✌️</figcaption>
            </figure>
      </div>
      <div className="addItems">
        <input type="text" placeholder='✍🏻 Add Items...' className='ps-2'
            value = {inputData} onChange = {(e) => setInputData(e.target.value)}
        />
        <i className="bi bi-plus pe-2" title="Add Item" onClick = {addItem}></i>
      </div>
      <div className="showItems mt-3" >
      {
        items.map((elem, ind) => {
          return(
            <div className="eachItem d-flex align-items-center justify-content-between px-2 my-3" key = {ind}>
            <p className='mb-0'>{elem}</p>
            <i className="bi bi-trash3" onClick={() => deleteItem(ind)}></i>
        </div>
          )
        })
      }    
      </div>
      <button onClick={removeAll} style = {{border:"none", padding: '10px 16px'}}>Remove All</button>
      </div>
    </>
  )
}

export default Todo
