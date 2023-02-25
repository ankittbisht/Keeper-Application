import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab, Zoom } from '@mui/material';
function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const[initial ,setexpand] =useState(false)
function handleChange(event){
    const{name ,value} =event.target;
    setNote(prevNote =>{
        return{
            ...prevNote,[name]:value
        };
    });
}
function submitNote(event){
    props.onAdd(note)
    setNote({
        title : "",
        content: ""
    })
    event.preventDefault();
}
function expand(){
    setexpand(true)
}    
    return (
        <div>
            <form className="create-note">
            {initial ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> :null}
                
                <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows= {initial ? 3 : 1}  />
                <Zoom in ={initial}>
                <Fab onClick={submitNote}>
                    <AddCircleIcon/>
                </Fab> 
                </Zoom>
            </form>
        </div>
    )
}
export default CreateArea;