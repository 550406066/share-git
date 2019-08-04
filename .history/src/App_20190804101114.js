
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

  }
  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    const { data, inputValue } = this.props
    return (
      <div>
        <TodoList inputValue={inputValue}
          onChange={this.props.onChange}
          onAddItem={this.props.onAddItem}
          onDeleteItem={this.props.onDeleteItem}
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
    },
    onAddItem() {
      dispatch(addValue())
    },
    onDeleteItem(index) {
      store.dispatch(deleteItem(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

