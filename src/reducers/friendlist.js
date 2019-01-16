import * as types from '../constants/ActionTypes';

const initialState = {
  page: 0,
  itemsPerPage: 2,
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true
    },
    {
      name: 'Abraham Lincoln',
      starred: false
    },
    {
      name: 'George Washington',
      starred: false
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);

      // reducer is not supposed to mutate state
      // it's better to create new object
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.GO_TO:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state;
  }
}
