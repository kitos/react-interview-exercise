import React from 'react';
import { connect } from 'react-redux';

import {
  addFriend,
  deleteFriend,
  goTo,
  starFriend
} from '../actions/FriendsActions';
import { AddFriendInput, FriendList } from '../components';
import Pagination from '../components/Pagination';

import styles from './FriendListApp.css';

let FriendListApp = ({ page, itemsPerPage, total, friends, actions }) => {
  return (
    <div className={styles.friendListApp}>
      <h1>The FriendList</h1>

      <AddFriendInput addFriend={actions.addFriend} />

      <FriendList friends={friends} actions={actions} />

      <Pagination {...{ page, itemsPerPage, total }} onChange={actions.goTo} />
    </div>
  );
};

let mapStateToProps = ({
  friendlist: { page, itemsPerPage, friendsById }
}) => ({
  page,
  itemsPerPage,
  total: friendsById.length,
  friends: friendsById.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
});

export default connect(
  mapStateToProps,
  {
    addFriend,
    deleteFriend,
    starFriend,
    goTo
  },
  (state, actions) => ({ ...state, actions })
)(FriendListApp);
