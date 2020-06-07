import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.title.length === 0) {
      alert('1字以上の文字列を入力してください');
    } else {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          style={{ flex: '10', padding: '10px' }}
          placeholder="Todoを追加する"
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="追加"
          className="btn"
          style={{
            flex: '1'
          }}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
