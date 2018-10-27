import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav"
import friends from "./friends.json"
import Jumbotron from "./components/jumbotron"
import Cards from "./components/cards"
import Footer from "./components/footer"

function shuffleCards(array) {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array[i];
      array[i] = array[j];
      array[j] = x;
  }
  return array;
}

class App extends Component {
    // Set this.state
    state = {
      friends,
      score: 0,
      topScore: 0,
      rightOrWrong: "Click an image to begin!",
      clicked: [],
    };

    click = id => {
      if (this.state.clicked.indexOf(id) === -1) {
        this.scoreIncrement();
        this.setState({ clicked: this.state.clicked.concat(id)});
      } else {
        this.setState({ rightOrWrong: "Incorrect, Start Over!" })
        this.reset();
      }
    }

    scoreIncrement = () => {
      const increaseScoring = this.state.score + 1;
      this.setState({
        score: increaseScoring,
        rightOrWrong: "Correct! Roo Dit Dit Doo Doo!"
      });
        if (increaseScoring >= this.state.topScore) {
          this.setState({ topScore: increaseScoring});
        } else if(increaseScoring === 12) {
          this.setState({ rightOrWrong: "You win! Let's all do the Scarn!"});
        }
        this.shuffle();
    };

    reset = () => {
      this.setState({
        friends,
        score: 0,
        topScore: this.state.topScore,
        rightOrWrong: "Incorrect, click to try again!!",
        clicked: [],
      })
    }

    shuffle = () => {
      let shuffledCards = shuffleCards(friends);
      this.setState({ friends: shuffledCards});
    }
  render() {
    return (
      <div>
        <Nav
          title="The Office Clicky Game"
          score={this.state.score}
          topScore={this.state.topScore}
          rightOrWrong={this.state.rightOrWrong}
        />

        <Jumbotron />

        <div className="container">
          {this.state.friends.map(friends => (
            <Cards
              click={this.click}
              scoreIncrement={this.scoreIncrement}
              reset={this.reset}
              shuffled={this.shuffle}
              id={friends.id}
              key={friends.id}
              image={friends.image}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
