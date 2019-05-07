import axios from 'axios';
import store from './src/store';
import * as action from './src/redux/actions/auth/login';

export const loggedIn = async () => {
  try {
    const token = localStorage.getItem('token');

    if (token) {
      return;
    }

    const response = await axios.get(
      'https://ireporter-node.herokuapp.com/api/v1/red-flags',
      {
        headers: { authorization: token },
      }
    );

    store.dispatch(action.loginUserSuccess(response.data));
  } catch (error) {
    store.dispatch(action.loginUserFailure());
  }
};
