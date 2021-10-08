import React from "react";

const CardListItem = (props) => {

    return (
            <div className="card-item">
                <button  onClick={(e)=> props.handleRemoveItem(props.title)} className="btn1">X</button>
                <img src={props.image} alt="odev"/>
                <h3>{props.title}</h3>
                <div className="info-border">
                   <p>{props.info}</p>
               </div>
               <button className="btn2">Click to edit!</button>
          </div> 
        )
}

export default CardListItem;

