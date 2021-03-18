import React from 'react';
import {connect} from "react-redux";
import './App.css';
import Dice from './Dice';
import { useSelector } from 'react-redux'


class App extends React.Component {
  constructor(props){
    super(props);
  }
  state = {diceList:[]};
  

  render(){
    console.log(this.props)
    return(
      <div className="Roll">
      <button 
      style={{width:"60px", height:"60px",border:"1px solid grey"}}
      onClick={()=> this.props.dispatch({type:"ROLL_DICE"})}> <h3>roll dice</h3></button> 
      <button 
      style={{width:"60px", height:"60px",border:"1px solid grey"}}
      onClick={()=> this.props.dispatch({type:"CLEAR_DICE"})}> <h3>clear dice</h3></button>
      <div>
        <h3>Sum: {this.props.diceList.reduce((a,b)=> a+b, 0)}</h3>
      </div>
      <div className="container">
      {this.props.diceList.map((value, index) => <Dice value={value} key={index} />)}
      </div>
      </div>
    )
  }
}


let mapDispatchToProps = function(dispatch, props) {
  return {
    dispatch:dispatch 
  }
}

let mapStateToProps = function(state, props) {
  return {
    diceList:state.diceList
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)