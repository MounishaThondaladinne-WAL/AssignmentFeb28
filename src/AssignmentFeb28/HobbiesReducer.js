
const HobbiesReducer=(state,action)=>{
    console.log(state);
    console.log(action);
    if (action.type == "add"){
        return [...state,action.value]
    }
    if (action.type == "deletehobby"){
        let newState = state.filter((val,index)=>{
            if(index==action.index){
                return false;
            }
            else{
                return true;
            }
        })
        return newState;
    }
    if(action.type == "deleteAll"){
        return [];
      }
   
}
export default HobbiesReducer;