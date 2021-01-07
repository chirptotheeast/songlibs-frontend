import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
          <div>
            This is a form hi
            <form>
              <h1>Hello,</h1>
              <p>Enter your name:</p>
              <input type="text" />
            </form>
          </div>
        );
    }
}
