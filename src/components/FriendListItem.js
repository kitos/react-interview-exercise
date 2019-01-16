import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

let FriendListItem = ({
  friend: { id, name, sex, starred },
  starFriend,
  deleteFriend
}) => (
  <li className={styles.friendListItem}>
    <div className={styles.friendInfos}>
      <div>
        {sex === 'male' ? '👨' : '👩'}️ <span>{name}</span>
      </div>
      <div>
        <small>xx friends in common</small>
      </div>
    </div>
    <div className={styles.friendActions}>
      <button
        className={`btn btn-default ${styles.btnAction}`}
        onClick={() => starFriend(id)}
      >
        <i
          className={classnames('fa', {
            'fa-star': starred,
            'fa-star-o': !starred
          })}
        />
      </button>
      <button
        className={`btn btn-default ${styles.btnAction}`}
        onClick={() => deleteFriend(id)}
      >
        <i className="fa fa-trash" />
      </button>
    </div>
  </li>
);

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    starred: PropTypes.bool
  }),
  starFriend: PropTypes.func.isRequired,
  deleteFriend: PropTypes.func.isRequired
};

export default FriendListItem;
