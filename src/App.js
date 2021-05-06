import React,{useState} from 'react';
import './App.css';

function App() {
  const [value,setValue] = useState("");
  const [results,setResults] = useState([]);
  // IXO9C772nKjD_BDhhFw-MByycOlyAXb3PINXS99wCME
  const fetchApi = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=IXO9C772nKjD_BDhhFw-MByycOlyAXb3PINXS99wCME&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results);
    })
  }
  return (
    <div className="App">
      <div className="mydiv">
      <span>Search</span>
      <input className="input1" type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={()=>fetchApi()}>send</button>
      </div>
    <div className="gallery"> 
     {
       results.map((item,id)=>{
         return <img className="item1" key={id} src={item.urls.regular} alt=""/>
       })
     }
     </div>
    </div>
  );
}

export default App;
