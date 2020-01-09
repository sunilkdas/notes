import React from 'react';

function Note(props){
console.log(props.id);  
return (<div className="note"><h1>{props.title} <button type="button" 
onClick={() => {
    props.deleteItem(props.id);
  }}
>X</button></h1><p>{props.content}</p>
</div>);
}


export default Note;