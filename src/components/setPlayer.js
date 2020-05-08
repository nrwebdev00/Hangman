import React, { Component } from 'react';

import SetLevel from './setLevel';

export default class SetPlayer extends Component {
    constructor(props){
        super(props)

        this.state = {
            isPlayerSet: false,
            playerName: '',
            isError: false,
            errorMessage: ''
        }
        this.setPlayerName = this.setPlayerName.bind(this);
        this.isPlayerSet = this.isPlayerSet.bind(this);
        this.PlayerName = this.PlayerName.bind(this);
    }
    setPlayerName = () =>{
        this.setState({
            playerName: event.target.value
        })
    }
    isPlayerSet = () =>{
        if(this.state.playerName.length > 2){
            this.setState({
                isPlayerSet: true,
                isError: false,
                errorMessage: ''
            })
        }else {
            this.setState({
                isError: true,
                errorMessage: 'Name must be at least 2 Characters Long'
            })
        }
    }
    PlayerName = () =>{
        return(
            <div className="enter-name">
                <div id='players-name-enter'>
                    <div className="player-name-label-wrapper">
                        <label className='player-name-label'>Please Enter Your Name:</label>
                        <div className={this.state.isError ? "error-message": "hidden"}>{this.state.errorMessage}</div>    
                    </div>
                    <div className="player-name-input-wrapper">
                        <input placeholder="Players Name" onChange={this.setPlayerName} type='text' />
                    </div>   
                    <div className="player-name-btn-wrapper">
                        <button onClick={this.isPlayerSet}>Enter</button>
                    </div> 
                </div>
            </div>
        );
    }
   
    
    render(){
        return(
            <div>
                {this.state.isPlayerSet ? <SetLevel playerName={this.state.playerName}/> : this.PlayerName()}
            </div>
        );
    }  
}