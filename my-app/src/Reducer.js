import { combineReducers } from 'redux';
import DiceListReducer from './DiceListReducer';

export default combineReducers({
    diceList:DiceListReducer
})