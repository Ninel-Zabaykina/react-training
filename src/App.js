/** @jsx jsx */
import React from 'react';
import { connect } from "react-redux";
import './App.css';
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import {fetchMessages} from "./store";
import { jsx, css } from '@emotion/core'

import axios from 'axios';
const apiUrl = "http://localhost:3001";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      nick: ""
    };
    this.receiveMessages = this.receiveMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.props.dispatch(fetchMessages()), 1000);
  }

  receiveMessages(){
    axios.get(apiUrl).then((response) => {
      this.setState({messages: response.data});
    })
  }

  sendMessage(){
    axios.post(apiUrl, JSON.stringify({message: this.state.message, nick: this.state.nick}))
        .then((response) => this.setState({messages: response.data}));
    this.setState({message: ""});
  }

  componentDidMount() {
    setInterval(this.receiveMessages, 1000);
  }

  render() {
      return (
        <div css={css`
            display: flex;
            flex-flow: column;
            height: 100%;
            width: 600px;
            margin: 0 auto;
        `}>
          <MessagesList/>
          <MessageForm/>
        </div>
        );
    }
}

export default connect()(App);
