import * as types from '../constants/ActionTypes';

let id = 0;
let uuid = () => id++;

const initialState = {
  page: 0,
  itemsPerPage: 2,
  friendsById: [
    {
      id: uuid(),
      name: 'Theodore Roosevelt',
      sex: 'male',
      starred: true
    },
    {
      id: uuid(),
      name: 'Angela Merkel',
      sex: 'female',
      starred: false
    },
    {
      id: uuid(),
      name: 'George Washington',
      sex: 'male',
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
            ...action.payload,
            id: uuid(),
          }
        ]
      };
    case types.DELETE_FRIEND:
      let updatedFriends = state.friendsById.filter(
        ({ id }) => id !== action.id
      );
      let lastPageIndex =
        Math.ceil(updatedFriends.length / state.itemsPerPage) - 1;

      return {
        ...state,
        friendsById: updatedFriends,
        page: state.page > lastPageIndex ? state.page - 1 : state.page
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find(({ id }) => id === action.id);

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
      };

    default:
      return state;
  }
}
