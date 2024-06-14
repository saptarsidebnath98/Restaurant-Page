import { useState } from "react";
import "../style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard.jsx";
import Navbar from "./Navbar.jsx";

const uniqueList = [...new Set(Menu.map((currentElement)=> currentElement.category)), "All"];
// console.log(uniqueList);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList =  Menu.filter((cuurItem)=> {
            return cuurItem.category === category;
        });

        setMenuData(updatedList);
    }

    return(
        <>
        <Navbar filterItem={filterItem} menuList={uniqueList}/>
        <MenuCard menuDataItems={ menuData }/>
        </>
    )
}

export default Restaurant;