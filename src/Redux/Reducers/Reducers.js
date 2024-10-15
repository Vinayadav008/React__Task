import { addFav, removeFav } from "../Action/ActionType"

const initState={
    fav:[]
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case addFav:
            return {...state,fav:[...state.fav,action.payload]}
        case removeFav:
            return {...state,fav:state.fav.filter((i)=>i.id!=action.payload.id)}
        case addFav:
            return state
    }
}

export default reducer;