import React,{useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateNote from './CreateNote';
import notes from './notes';

function App(){

    const [post, setPost]=useState({
        title:"",
        text:""
    });
    const [items, setItems] = useState([]);
    function change(event){
        const name=event.target.name;
        const val=event.target.value;

        setPost((prevVal)=>{
            if(name==="title"){
                return {
                    title:val,
                    text: prevVal.text
                }
            }
            else if(name==="content"){
                return {
                    title:prevVal.title,
                    text: val
                }
            }
        })

    }
    useEffect(() => {
        get()
   }, []);
    
    function add(){
        
        setItems(
            (prev)=>{
             
            localStorage.setItem("notes",JSON.stringify([...prev,post])) ;  
            return [...prev,post];    
            }
        )
    }
    function get(){
        let val=localStorage.getItem("notes");
        console.log(val)
        setItems(
            (prev)=>{
                return [...prev,...notes];    
            }
        )
    }

    function deleteItem(index){
        console.log(index)
        setItems(
            (prevItems)=>{
             
                
            return prevItems.filter((item,i)=>{
                return (index!==i)
            })   
            }
        )
    }
    return <div onLoad={get}>
        <Header/>
        <CreateNote add={add} change={change}/>
        <div>
        <div >
       
          {items.map((todoItem, index) => (
            <Note
              key={index}
              id={index}
              deleteItem={deleteItem}
              title={todoItem.title}
              content={todoItem.text}
                
            />
          ))}
        
      </div>
      </div>

    
    
    <Footer/></div>;

}


export default App;