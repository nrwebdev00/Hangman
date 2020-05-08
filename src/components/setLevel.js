import React, { Component } from 'react';
import DisplayGame from './displayGame';


export default class SetLevel extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLevelSet: false,
            Level: ''
        }

    }
    changeLevel = () =>{
        this.setState({
            Level: event.target.value,
            isLevelSet: true
        })
    }
    level = () => {
        return(
            <div className="change-level-wrapper">
            <h2>Welcome {this.props.playerName}</h2>
            <h2>Please Choose a Level</h2>
            <div className="level-btn-wrapper">
                <button className="level-button btn" onClick={this.changeLevel} value="level-1">Level 1</button>
                <button className="level-button btn" onClick={this.changeLevel} value="level-2">Level 2</button>
                <button className="level-button btn" onClick={this.changeLevel} value="level-3">Level 3</button>
            </div>
        </div>
        );
    }

    render(){
        return(
          <div>
              {this.state.isLevelSet ? <DisplayGame name={this.props.playerName} level={this.state.Level}/> : this.level()}
          </div>
        );
    }
}