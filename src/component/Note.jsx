import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import PushPinIcon from '@mui/icons-material/PushPin';
function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }

    return(<div className="note">
    <h2 className="pin"><PushPinIcon/></h2>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
            <DeleteIcon/>
        </button>
    </div>)

}
export default Note;