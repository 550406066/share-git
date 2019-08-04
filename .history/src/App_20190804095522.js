
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodoList } from './action/creators'
import TodoList from './component/TodoList'
import { changValue, addValue, deleteItem } from './constant'
import store from './store'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

  }
  componentDidMount() {
    const action = getTodoList()
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

  render() {
    const { data, inputValue } = this.props
    return (
      <div>
        <TodoList inputValue={inputValue}
          onChange={this.props.onChange}
          onAddItem={this.onAddItem}
          onDeleteItem={this.onDeleteItem}
          data={data}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    data: state.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChange(e) {
      dispatch(changValue(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

