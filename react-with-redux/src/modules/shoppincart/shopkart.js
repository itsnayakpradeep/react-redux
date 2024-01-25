import React from 'react'
import "./shopkart.css"
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from "../../redux/actions/kartActions"
export default function Shopkart() {
  const state = useSelector(state => state);
  console.log("State ==>", state)
  const dispatch = useDispatch()
  return (
    <div className='Cart'>
      <h2>{`Number of items in the Shpping Cart :  ${ state.numOfItems }  `}</h2>
        <button 
          className='btn btn-primary'
          onClick={()=>dispatch(addItem())}
        >
          Add Item
        </button>
        <button 
          className='btn btn-danger'
          disabled= {state.numOfItems > 0 ? false : true}
          onClick={()=>dispatch(deleteItem())}
        >
          Remove item
        </button>
    </div>
  )
}
