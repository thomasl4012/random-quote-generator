import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import QuoteBlock from "./components/quote/quoteblock.component";

export default class App extends Component {
  state = {
    data: [],
    colors: [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ],
    colorRandom: "#73A857",
  };

  componentDidMount() {
    document.body.style.backgroundColor = this.state.colorRandom;

    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((response) => {
        this.setState({ data: response.data.quotes });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleClick = () => {
    axios
      .get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((response) => {
        this.setState({
          data: response.data.quotes,
          colorRandom: this.state.colors[
            Math.floor(Math.random() * this.state.colors.length)
          ],
        });
        document.body.style.backgroundColor = this.state.colorRandom;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div
        style={{
          color: `${this.state.colorRandom}`,
        }}
      >
        {this.state.data.map(({ text, author }) => (
          <QuoteBlock
            handleClick={this.handleClick}
            text={text}
            author={author}
            colors={this.state.colorRandom}
          />
        ))}
        {/* {this.state.data.map(({ ...props }) => (
          
        ))} */}
      </div>
    );
  }
}
