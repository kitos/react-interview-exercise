import React, { PropTypes } from 'react';
import styles from './FriendList.css';
import FriendListItem from './FriendListItem';

let FriendList = ({ friends, actions }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} {...actions} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default FriendList;
