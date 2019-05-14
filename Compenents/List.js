import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { user: "Matheus" },
        { user: "Joao" },
        { user: "Carlos" },
        { user: "Luiz" },
        { user: "Roberto" }
      ]
    };

    this.randomList = data => {
      console.log(this.state.data);
      this.setState({
        data: this.state.data.sort(function() {
          return 0.5 - Math.random();
        })
      });
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.randomList()}>Randomize</button>
        <h1>Lista de usuarios</h1>
        <ul>
          {this.state.data.map((item, index) => {
            return <li>{item.user}</li>;
          })}
        </ul>
      </div>
    );
  }
}
