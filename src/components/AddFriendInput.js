import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />

        <label className={styles.sexLabel}>
          Sex
          <select
            value={this.state.sex}
            onChange={e => this.setState({ sex: e.target.value })}
          >
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
      </div>
    );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      sex: 'male'
    };
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const { name, sex } = this.state;

    if (e.which === 13) {
      this.props.addFriend({ name: name.trim(), sex });
      this.setState({ name: '' });
    }
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;
