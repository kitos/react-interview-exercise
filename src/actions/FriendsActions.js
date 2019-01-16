import * as types from '../constants/ActionTypes';

export function addFriend(friend) {
  return {
    type: types.ADD_FRIEND,
    payload: friend
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function goTo(page) {
  return {
    type: types.GO_TO,
    payload: page
  };
}
