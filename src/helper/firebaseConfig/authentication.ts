import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from './firebaseConfig'; // Assuming you have initialized firebaseApp
import {
  REACT_APP_FIRE_BASE_USER_EMAIL,
  REACT_APP_FIRE_BASE_USER_PASSWORD,
} from '../envConfig/envConfig';

export const auth = getAuth(firebaseApp);

const getAuthToken = async () => {
  const user = auth.currentUser;
  console.log('==========getAuthToken user', user);
  if (user) {
    return await user.getIdToken(); // Get the user's authentication token
  } else {
    throw new Error('User not authenticated');
  }
};

const signInUser = async () => {
  const auth = getAuth(firebaseApp);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      REACT_APP_FIRE_BASE_USER_EMAIL as string,
      REACT_APP_FIRE_BASE_USER_PASSWORD as string,
    );
    console.log('User signed in:', userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/wrong-password') {
      console.error('Incorrect password');
    } else if (error.code === 'auth/user-not-found') {
      console.error('User not found');
    } else {
      console.error('Error signing in:', error.message);
    }
    return null; // Return null if sign-in fails
  }
};
export { getAuthToken, signInUser };
