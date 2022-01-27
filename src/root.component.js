import { useState, useEffect } from 'react';
import books from "./Books.json"
import "./app.css"

function Root(props) {
  const [data, setData] = useState(books);
  const { onSearch } = props
  const handleenter = (e) => {
    if (e.key === 'Enter') {
      onSearch(messages)
    }
  }
  const Card = ({ image, title, author, url }) => {
    return (
      <div className="CardWrapper">
        <div className="ColImg">
          <img className="Img" src={image} alt={title} />
        </div>
        <div className="ColDetail">
          <div className="Header">
            <div className="BookTitle">{title}</div>
          </div>
          <div className="Description">{author}</div>
          <a className="Link" href={url}>
            Learn more
          </a>
        </div>
      </div>
    );
  };

  const [messages, setMessages] = useState("");


    const handleNewMessage = (event) => {
      setMessages(event.detail);
      console.log(messages);
      filterr(messages)
    };
  
    window.addEventListener('message', handleNewMessage);


  const filterr = e => {
    const search = e.target.value.toLowerCase()
    console.log(search);
    const filtered = books.filter(names => names.title.toLowerCase().includes(search))
    setData(filtered)
  }
  return (
    <><div className="Search" ><input className="SearchInput" type="text" key={messages} placeholder="Search" value={messages} onChange={(e) => filterr(e)} onkeypress={handleenter}></input>
    </div>
      <div className="Container">
        {data.map((item) => (
          <Card {...item} key={item.name} />
        ))}
      </div></>

  );
};

export default Root;
