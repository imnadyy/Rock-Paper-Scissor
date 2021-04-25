import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
    state = { 
      playerChoice: { },
      comChoice: { },
      result: '',
      input: true
    };
  
  handlePlayer = (choice,animation) => {
    let playerChoice = { value: choice, anime: animation};
    this.setState({ playerChoice }, () => this.handleComputer());  
  }

  handleComputer = () => {
    const comp = Math.random();
    
    if( 0 < comp < 0.4 ) {
      let comChoice = { value: 'Rock', anime: '✊'};
      this.setState({ comChoice }, () => this.handleResult());
    }

    else if( 0.3 < comp <= 0.7 ) {
      let comChoice = { value: 'Paper', anime: '✋'};
      this.setState({ comChoice }, () => this.handleResult());
    }

    else {
      let comChoice = { value: 'Scissor', anime: '✌'};
      this.setState({ comChoice }, () => this.handleResult());
    }
   }

   handleResult = () => {
    const { playerChoice, comChoice } = this.state;

    if((playerChoice.value == 'Rock' && comChoice.value == 'Scissor')||
        (playerChoice.value == 'Paper' && comChoice.value == 'Rock') || 
        (playerChoice.value == 'Scissor' && comChoice.value == 'Paper')) {
          let result = 'Hurray! You won this round.';
          this.setState({ result });
        }

    else if((playerChoice.value == 'Rock' && comChoice.value == 'Paper')||
        (playerChoice.value == 'Paper' && comChoice.value == 'Scissor') || 
        (playerChoice.value == 'Scissor' && comChoice.value == 'Rock')) {
          let result = 'Oh! You lost this round.';
          this.setState({ result });
        }
    
    else {
      let result = 'Hmm! This round is draw. Try again!';
      this.setState({ result });
    }

    this.setState({ input: !this.state.input });
  }

  handleReset = () => {    
    this.setState({
      playerChoice: { },
      comChoice: { },
      result: '',
      input: !this.state.input
    })
  }

  render() { 
      
    return(
      <div className='container'>

        { this.state.input ? (<div className='input'>
          <h1>Rock, Paper, Scissor.</h1>
          <p>Choose any one to play the game.</p>
          <button className='signs' onClick={() => this.handlePlayer('Rock', '✊')}>✊</button>
          <button className='signs' onClick={() => this.handlePlayer('Paper', '✋')}>✋</button>
          <button className='signs' onClick={() => this.handlePlayer('Scissor', '✌')}>✌</button>
        </div>) :
        (<div className='result'>
          <div className='resultAnime'>
            <div><span>{this.state.playerChoice.anime}</span>
                <p>You chose</p>
            </div>
            <div><span>{this.state.comChoice.anime}</span>
                <p>Computer chose</p>
            </div>
          </div>
          <h2 className={this.resultDeclaration()}>{this.state.result}</h2>
          <button className='reset' onClick={this.handleReset}>Play Again</button>
        </div>) }
      </div>
       );
  }

  resultDeclaration() {
    let resultDec = 'result-';
      if (this.state.result === 'Hurray! You won this round.') {
        resultDec += 'won';
      }
      else if (this.state.result === 'Oh! You lost this round.') {
        resultDec += 'lost';
      }
      else { resultDec += 'draw'; }

      return(resultDec);
  }
}

export default App;