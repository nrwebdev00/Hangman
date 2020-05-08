import React, { Component } from 'react';

import TopSection from './topSection';
import { levelOneWord, levelTwoWord, levelThreeWord } from './randomWord'
import RenderGame from './renderGame';


export default class DisplayGame extends Component{
    constructor(props){
        super(props);

        this.state = {
            Word: '',
            numberWrong: 0,
            guessed: new Set()
        }
        this.handleGuess = this.handleGuess.bind(this);
    }
    componentDidMount(){
        this.generateWord(this.props.level);
        
    }
    handleGuess(event) {
        let ltr = event.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            numberWrong: st.numberWrong + (st.Word.includes(ltr) ? 0 : 1)
        }))
    }

    generateWord = (level) => {
       if(level == 'level-1'){
           this.setState({
               Word: levelOneWord()
           })       
       }
       if(level == 'level-2'){
           this.setState({
               Word: levelTwoWord()
           })
       }
       if(level == 'level-3'){
           this.setState({
               Word: levelThreeWord()
           })
       } 
    }
    generateLetter(){
        return "abcdefghijklmonpqrstuvwxyz".split("").map(letter => (
            <button
                key={letter}
                value={letter}
                className="letters-guess"
                onClick={this.handleGuess}
                // add disabled to hide when letter is guessed
            >
                {letter}
            </button>
        ));
    }

    render(){
        let letters = this.generateLetter();
        return(
            <div>
                <TopSection 
                    name={this.props.name} 
                    level={this.props.level}
                />
                <RenderGame 
                    word={this.state.Word} 
                    numberWrong={this.state.numberWrong} 
                    guessed={this.state.guessed}
                />
                <div className='action-letters'>
                    {letters}
                </div>
            </div>
        )
    }
}