import React,{useState} from "react";
import "./styles.css";
import Menu from "./API";
import HandleContainer from "./HandleContainer";
function Resturant()
{
    
    const [MenuData,setData]=useState(Menu);
    const [MenuData1,setData1]=useState(MenuData);

    function handleClick(Event)
    {
        
        console.log(MenuData);
       const name=Event.target.name;

       if(name==="all")
       {
           setData1(Menu);
       }else{

        const updated=MenuData.filter((currentElement,index)=>{
            return currentElement.category===name;
           })
          
    
           
           setData1(updated);
           console.log(updated);
       }
    }
    
    function handleCard(currEle)
    {
        return (
            <>
               
             <HandleContainer currEle={currEle} />
            
            </>
          
           
             );

    }
    

   return (
    <>

                <nav className="navbar">
                    <div className="btn-group">

                        <button onClick={handleClick} name="breakfast" className="btn-group__item">BreakFast</button>
                        <button onClick={handleClick} name="lunch" className="btn-group__item">Lunch</button>
                        <button  onClick={handleClick} name="dinner" className="btn-group__item">Dinner</button>
                        <button onClick={handleClick}  name="evening" className="btn-group__item">Evening</button>
                        <button onClick={handleClick} name="all" className="btn-group__item">All</button>
                    </div>
                </nav>
      <section className="main-card--cointainer">
                     {MenuData1.map(handleCard)}
        </section>
        
    </>
   )
}

export default Resturant;