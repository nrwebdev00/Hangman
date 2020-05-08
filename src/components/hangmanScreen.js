import React, { Component } from 'react';

import SetPlayer from './setPlayer';

export default class HangmanScreen extends Component {
    constructor(props){
        super(props);
       }

    render(){
        return(
            <div className="game-screen-wrapper">
               <SetPlayer />
            </div>
        )
    }
}