import React from 'react'

const Navbar = ({filterItem}) => {
  return (
    
      
    <>
     <nav className='navbar'>
      <div className='btn-group'>
       
        <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
        <button className='btn-group__item' onClick={() => filterItem("lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={() => filterItem("evening")}>Snacks</button>
        <button className='btn-group__item' onClick={() => filterItem("dinner")}>Dinner</button>
       
      </div>
    </nav></>
  )
}

export default Navbar
