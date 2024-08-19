import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  // State declaration
  state = {
    timerIDs: []
  };

  componentDidMount() {
    // Add a new timer when the component mounts
    this.handleAddTimer();
  }

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }

  // Returns array of Timer components
  renderTimers = () => this.state.timerIDs.map(id => {
    return <Timer key={id} id={id} removeTimer={this.removeTimer} />
  });

  // Adds a new timer with a random ID
  handleAddTimer = () => {
    this.setState(prevState => ({
      timerIDs: [...prevState.timerIDs, Math.floor(Math.random() * 1000)]
    }));
  };

  // Removes a timer based on its ID
  removeTimer = id => {
    this.setState(prevState => ({
      timerIDs: prevState.timerIDs.filter(timer_id => timer_id !== id)
    }));
  };
}

export default App;
