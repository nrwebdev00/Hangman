import React, { Component } from 'react';


export default class TopSection extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='top-section'>
                <div className="top-left">
                    <h3>Welcome</h3>
                    <h3>{this.props.name}</h3>
                </div>
                <div className="top-middle">
                    <h1>HangMan</h1>
                </div>
                <div className="top-right">
                    <h3>Playing {this.props.level}</h3>
                    {/* <button className='Change-level'>Click Here to Change Level</button> */}
                </div>
            </div>
        );
    }
}