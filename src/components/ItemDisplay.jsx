import React,{useState} from 'react';
import { itemData } from '../data';

const ItemDisplay = () => {
    const [displayItem,setDisplayItem]=useState(itemData);
   
  return (
    <div className="itemSection">
        {displayItem.map((item)=>{
            return(
                <div className="gellery" key={item.item_img}>
                    <img src={item.item_img} alt={item.item_img}/>
                    <h4>{item.item_name}</h4>
                </div>
            )
        })}
    </div>
  )
}

export default ItemDisplay