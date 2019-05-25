import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      document.getElementById('birfday').classList.remove('hide');
      document.getElementById('new-friend').classList.add('hide');
    })
    .catch(err => console.error('no new friend for you', err));
  console.error(newFriend);
};

const newFriendButton = () => {
  // eslint-disable-next-line no-unused-expressions
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('birfday').classList.add('hide');
  document.getElementById('new-friend').classList.remove('hide');
  document.getElementById('saveNewFriend').addEventListener('click', createNewFriend);
};

const showFriends = () => {
  const domString = '<button class = "btn btn-danger" id="add-friend-button">Add Friend</button>';
  util.printToDom('friends', domString);
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
};

export default { showFriends };
