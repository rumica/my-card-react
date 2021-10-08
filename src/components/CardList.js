import React, {useEffect, useState} from "react";
import CardListItem from "./CardListItem";

const CardList = (props) => {

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8")
      .then((response) => response.json())
      .then((response) => setDatas(response));
  }, []);

  const handleRemoveItem = (e) => {
    const newDatas = datas.filter(element => !element.title.includes(e))
    setDatas(newDatas)
  } 

    return (
            <div className="cards">
              {datas.map((data) => {
                return (
                <CardListItem key = {data.id}
                image = {`https://picsum.photos/id/${110 + data.id}/270/190`}
                title = {data.title}
                info = {data.body}
                handleRemoveItem = {handleRemoveItem}
                />
                )})}
            </div> 
    )
}

export default CardList;