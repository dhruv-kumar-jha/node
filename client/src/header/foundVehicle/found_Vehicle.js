import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';




class FoundVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="formMargin">
      <div className="wrapLogin">
      <form onSubmit={this.handleSubmit}>
        <label>
          Registration / Vehicle Number:
          <label className="formTabing">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </label>
            </form>
      <form onSubmit={this.handleSubmit}>
        <label>
          Engine Number:
          <label className="formTabing">
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </label>
            </form>
      <form onSubmit={this.handleSubmit}>
        <label>
          Chassis number:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
            </form>
      <form onSubmit={this.handleSubmit}>
        <label>
          Make of vehicle:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
            </form>
      <form onSubmit={this.handleSubmit}>
        <label>
          Model:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
            </form>
      <form onSubmit={this.handleSubmit}>
        <label>
          Color:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
            </form>
            <form onSubmit={this.handleSubmit}>
              <label>
                Found at Location:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
                  </form>
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Submit" />
            </form>
            <div></div>
            </div>
      </div>
    );
  }
}
export default FoundVehicle;
