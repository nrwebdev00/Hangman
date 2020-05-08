import React, { Component } from 'react';

import img0 from '../../static/assets/img/hangman stages/brown-0.png'
import img1 from '../../static/assets/img/hangman stages/brown-1.png'
import img2 from '../../static/assets/img/hangman stages/brown-2.png'
import img3 from '../../static/assets/img/hangman stages/brown-3.png'
import img4 from '../../static/assets/img/hangman stages/brown-4.png'
import img5 from '../../static/assets/img/hangman stages/brown-5.png'
import img6 from '../../static/assets/img/hangman stages/brown-6.png'
import img7 from '../../static/assets/img/hangman stages/brown-7.png'
export default class RenderGame extends Component {
    static defaultProps = {
        images: [img0, img1, img2, img3, img4, img5, img6, img7 ]
    };
    
    constructor(props){
        super(props);

    }
    
    renderWordToGuess(){
        return this.props.word
            .split("")
            .map(letter =>{
                if(this.props.guessed.has(letter)){
                    return(
                        <div 
                            className="guessed-letter"
                        >
                            {letter}
                        </div>
                    )
                } else {
                    return (
                        <div className="not-guessed-letter">
                        </div>
                    )
                }
            } )
        }

    render(){
        return(
            <div className="main-game-view">
                <div id="gallows">
                    <img src={this.props.images[(this.props.numberWrong - 1 )]} />
                </div>
                <div id="word-to-guess">
                    {this.renderWordToGuess()}
                </div>
            </div>
        )
    }
}