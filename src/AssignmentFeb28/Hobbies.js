import { useReducer,useState } from "react";
import HobbiesReducer from "./HobbiesReducer";
const HobbiesUseReducer= ()=>{
    const [hobby,sethobby] = useState("");
    const initialState = ["initialhobby1","initialhobby2"]
    const [state,dispatch] = useReducer(HobbiesReducer,initialState)
    return (
        <div className="Hobbies-div">
            <h1 className="Hobby-heading">Hobbies</h1>
                <input type = "text" name = "hobby" placeholder="Enter ur Hobby" onInput ={(event)=>{sethobby(event.target.value)}}/>
                <button onClick={()=>{dispatch({type:'add',value:hobby})}}>Add Hobby</button>
            <div>
            <h1 className="Hobby-heading">List of Hobbies</h1>
              {
                state.map((val,index)=>{
                  if(val !="initialhobby1"&&val!="initialhobby2"){
                    return(
                      <div>
                        <p className="Hobby-Para">Hobby :  {val}</p>
                        <button onClick={()=>{dispatch({type:'deletehobby',index:index})}}>Delete</button>
                      </div>
                    )
                  }
                })
              }
              <button onClick={()=>{dispatch({type:'deleteAll'})}}>Delete All Hobbies</button>
            </div>
        </div>
    )
}
export default HobbiesUseReducer;
