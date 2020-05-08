import React, { Component } from 'react';


import SetLevel from './setLevel';
import { levelOneWord, levelTwoWord, levelThreeWord } from './randomWord'
import RenderGame from './renderGame';


export default class DisplayGame extends Component{
    constructor(props){
        super(props);

        this.state = {
            Word: '',
            numberWrong: 0,
            guessed: new Set(),
            changeLevel: false
        }
        this.handleGuess = this.handleGuess.bind(this);
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
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
    handleChangeLevel(){
        this.setState({
            changeLevel: true
        })
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
                className={this.state.guessed.has(letter) ? "letters-already-guessed" : "letters-guess"}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>
        ));
    }
    displayGameRender(){
        let letters = this.generateLetter()
        return(
            <div>
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
                        <button className='Change-level' onClick={this.handleChangeLevel}>Click Here to Change Level</button>
                    </div>
                </div>
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

    render(){
        return(
            <div>
                {this.state.changeLevel ? <SetLevel name={this.props.name}/> : this.displayGameRender()}
            </div>
        )
    }
}