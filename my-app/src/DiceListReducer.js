export default function DiceListReducer(diceList=[], action){
    if(action.type === "ROLL_DICE"){
        return [...diceList, Math.floor(Math.random() * 6 +1)]
    }
    else if(action.type === "CLEAR_DICE"){
        return []
    }
    else{
        return diceList
    }
}