import React from 'react';

export default class Dice extends React.Component {
    constructor(props){
      super(props);
    }

    render(){
        return(
            <div className="box" style={{border:"1px solid grey"}}>
            <h1>{this.props.value}</h1>
            </div>
        )
    }
    }

