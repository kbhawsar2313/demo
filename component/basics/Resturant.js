import React, { useState } from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
import Navbar from './Navbar';





const uniqueList = [
  ...new Set(
  Menu.map((curElem) => { 
  return curElem.category;
  })
  ),
];
 const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList);
  
  const filterItem = (category) =>{
      const updatedList = Menu.filter((curElem)=>{
        return curElem.category===category;
      });
      setMenuData(updatedList);
  };
  // console.log(setMenuData);
  return (
    <>
<Navbar filterItem={filterItem } menuList={menuList}/>
   
     <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
