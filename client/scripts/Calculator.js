

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Input, Layout, Dropdown } from 'element-react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorResult: null,
      firstOp: 0,
      secondOp: 0,
      operator: '+'
    };
  }

  updateFirst(evt) {
    this.setState({
      firstOp: evt
    });
  }

  updateSecond(evt) {
    this.setState({
      secondOp: evt
    });
  }

  handleCalculator = () => {
    let api = '';
    if (this.state.operator === '+') {
      api = 'http://localhost:3000/users/add';
    } else if (this.state.operator === '-') {
      api = 'http://localhost:3000/users/sub';
    } else if (this.state.operator === '*') {
      api = 'http://localhost:3000/users/mul';
    } else if (this.state.operator === '/') {
      api = 'http://localhost:3000/users/divid';
    }
    axios.post(api, {
      first: this.state.firstOp,
      second: this.state.secondOp
    })
    .then((response) => {
      // console.log(response.data);
      this.setState({ calculatorResult: response.data.result });
      return null;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  }

  handleOperator = (op) => {
    this.setState({ operator: op });
  }

  render() {
    const inputStyle = {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    };
    const commentStyle = {
      color: '#99a9bf',
      marginTop: '10px'
    };
    return (
      <div style={inputStyle}>
        <Layout.Row align="middle" justify="center" type="flex">
          <h1>Calculator</h1>
        </Layout.Row>
        <Layout.Row gutter="20" align="middle" justify="center" type="flex">
          <Layout.Col span="4">
            <Input placeholder="input" onChange={evt => this.updateFirst(evt)} />
          </Layout.Col>

          <Layout.Col span="2">
            <Dropdown
              onCommand={this.handleOperator} menu={(
                <Dropdown.Menu>
                  <Dropdown.Item command="+">+</Dropdown.Item>
                  <Dropdown.Item command="-">-</Dropdown.Item>
                  <Dropdown.Item command="*">*</Dropdown.Item>
                  <Dropdown.Item command="/">/</Dropdown.Item>
                </Dropdown.Menu>
              )}
            >
              <span className="el-dropdown-link">
                {this.state.operator}<i className="el-icon-caret-bottom el-icon--right" />
              </span>
            </Dropdown>
          </Layout.Col>

          <Layout.Col span="4">
            <Input placeholder="input" onChange={evt => this.updateSecond(evt)} />
          </Layout.Col>

          <Layout.Col span="1">
            <div>=</div>
          </Layout.Col>

          <Layout.Col span="4">
            <Input value={this.state.calculatorResult} />
          </Layout.Col>
          <Layout.Col span="4">
            <Button placeholder="result" onClick={this.handleCalculator}>calculate!!!!!</Button>
          </Layout.Col>
        </Layout.Row>
        <Layout.Row align="middle" justify="center" type="flex">
          <div style={commentStyle}>
            use drop box select operator, press calculate to get result
          </div>
        </Layout.Row>
      </div>
    );
  }
}
