import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      display: 'flex',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div style={{ flex: '10' }}>
          <input type="checkbox" style={boxStyle} onChange={this.props.markComplete.bind(this, id)} />
          {title}
        </div>
        <Button style={btnStyle} variant="contained" color="secondary" onClick={this.props.delTodo.bind(this, id)}>
          削除
        </Button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  cursor: 'pointer',
  float: 'right',
  flex: '1'
};

const boxStyle = {
  margin: '10px 5px'
};

export default TodoItem;
