import React from 'react';
import './App.css';
import { throttle, debounce } from "throttle-debounce";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ""
    };
    this.onChange = this.onChange.bind(this);
    this.autosaveDebounced = debounce(500, this.autosave);
    this.autosaveThrottled = throttle(500, this.autosave);
  };

  onChange = event => {    
    const target = event.target;
    const value = target.type === "checkbox" 
      ? target.checked 
      : target.value;
    const name = target.name;    
    this.setState({ [name]: value }, () => {
      const note = this.state.note;
      if (note.length < 5) {
        this.autosaveThrottled(note);
      } else {
        this.autosaveDebounced(note);
      }
    });
  };

  autosave = note => {
    this._post(note);
  };

  _post = note => {
    fetch('https://httpbin.org/anything', {
      method: 'post',
      body: JSON.stringify({note})
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Document Editor</header>
        <textarea className="note" rows="7" name="note" value={this.state.note} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
