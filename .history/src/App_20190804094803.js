
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getTodoList } from './action/creators'
import TodoList from './component/TodoList'
import { changValue, addValue, deleteItem } from './constant'
import store from './store'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.onChange = this.onChange.bind(this);
    this.getNewState = this.getNewState.bind(this);
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    store.subscribe(this.getNewState)
  }
  componentDidMount(){
    const action = getTodoList()
    store.dispatch(action)
  }
  onChange(e) {
    const action = changValue(e.target.value)
    store.dispatch(action)
  }
  onAddItem() {
    const action = addValue()
    store.dispatch(action)
  }
  onDeleteItem(index) {
    const action = deleteItem(index)
    store.dispatch(action)
  }
  getNewState() {
    this.setState(store.getState())
  }
  render() {
    const { data, inputValue } = this.state
    return (
      <div>
        <TodoList inputValue={inputValue}
          onChange={this.onChange}
          onAddItem={this.onAddItem}
          onDeleteItem={this.onDeleteItem} 
          data={data}
          />
      </div>
    )
  }
}

export default App;

