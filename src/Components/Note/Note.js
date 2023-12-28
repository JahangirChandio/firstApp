import React from "react";
import deleteIcon from '../../assests/delete.png'
import './Note.css'


let timer=1000,timeout
function Note(props) {

  const formateDate =(value)=> {
    if(!value) return "";

    const date = new Date(value);
    const monthNmaes =['jan','feb','Mar','Apr','May','Jun','July','Aug','Oct','Nov','Dec'];


    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs? hrs : "12";

    let min = date.getMinutes();
    min = min < 10 ? "0" +min : min;
     
    let day = date.getDate();
    const month=monthNmaes[date.getMonth()]

    return `${hrs}: ${min} ${amPm} ${day} ${month} `;

  };

  const debounce=(func)=> {
     clearTimeout(timeout)
     timeout=setTimeout(func , timer);
  }

  const updateText=(text,id)=>{
    debounce(() => props.updateText(text,id));
  };

  
  return (
    <div className="note" style={{backgroundColor:props.note.color}}>
      <textarea className="note_text" defaultValue={props.note.text} 
      onChange={(event)=> updateText(event.target.value,props.note.id)  } />
      <div className="note_footer">
      <p> {formateDate(props.note.time)} </p>
      <img src={deleteIcon} alt="delete"
      onClick={()=> props.deleteNote(props.note.id)}
      />
    </div>
    </div>  
  );
}

export default Note;
   