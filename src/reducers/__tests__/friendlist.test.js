import reducer from '../friendlist';
import { ADD_FRIEND, DELETE_FRIEND } from '../../constants/ActionTypes';

describe('friendlist reducer', () => {
  it('should add friend', () => {
    let {
      friendsById: [addedFriend]
    } = reducer(
      { friendsById: [] },
      { type: ADD_FRIEND, payload: { name: 'Nikita' } }
    );

    expect(typeof addedFriend.id).toEqual('number');
    expect(addedFriend.name).toEqual('Nikita');
  });

  it('should delete friend', () => {
    let { friendsById } = reducer(
      {
        friendsById: [
          { id: 0, name: 'Nikita' },
          { id: 1, name: 'Not a Nikita' }
        ]
      },
      { type: DELETE_FRIEND, id: 0 }
    );

    expect(friendsById.length).toEqual(1);
    expect(friendsById[0].name).toEqual('Not a Nikita');
  });
});
