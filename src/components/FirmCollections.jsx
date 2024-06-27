import React,{useState,useEffect} from 'react'
import { API_URL } from '../api'
import { Link } from 'react-router-dom';

const FirmCollections = () => {
    const [firmData,setFirmData]=useState([]);
    const [selectedRegion,setSelectedRegion]=useState('All');
    const [activeCategory,setActiveCategory]=useState('all')
    const firmDataHandler=async()=>{
        try {
            const response=await fetch(`${API_URL}/vendor/allVendors`);
            const NewFirmData=await response.json();
            setFirmData(NewFirmData.vendors);
            console.log("firmData",NewFirmData)
        } catch (error) {
            alert('firmData not fetched')
            console.log("firm data not fatched",error)
        }
    }
    useEffect(()=>{
        firmDataHandler();
    },[])
    const filterHandler=(region,category)=>{
       setSelectedRegion(region)
       setActiveCategory(category)
    }
  return (
    <>
    <h3 className='title'>Restaurants with online food delivery</h3>
    <div className="filterSection">
      <button onClick={()=>filterHandler('All','all')} className={activeCategory==='all'?'activeButton':''}>All</button>
      <button onClick={()=>filterHandler('South-India' ,'south-india')} className={activeCategory==='south-india'?'activeButton':''}>South-India</button>
      <button onClick={()=>filterHandler('North-India','north-india')} className={activeCategory==='north-india'?'activeButton':''}>North-India</button>
      <button onClick={()=>filterHandler('Chinese','chinese')} className={activeCategory==='chinese'?'activeButton':''}>Chinese</button>
      <button onClick={()=>filterHandler('Bakery','bakery')} className={activeCategory==='bakery'?'activeButton':''}>Bakery</button>
    </div>
    <section className="firmSection">
      {firmData.map((item)=>{
        return item.firm.map((element)=>{
          if(selectedRegion==='All'||element.region.includes(selectedRegion.toLocaleLowerCase())){
           
              return(
                <Link to={`/products/${element._id}/${element.firmName}`} className='link'>
                  <div className='firmBox'>
                 <div className='firmImage'>
                  <img src={`${API_URL}/uploads/${element.image}`}/>
                  <div className="firmOffer">{element.offer}</div>
                 </div>
                 <div className="firmData">
                      <strong>{element.firmName}</strong>
                      <div className='firmArea'>{element.region}</ div>
                      <div className='firmArea'>{element.area}</div>
                      </div>
                </div>
                </Link>
              )
          
          }
        })
                 return null
      })}
    </section>
    </>
  )
}

export default FirmCollections