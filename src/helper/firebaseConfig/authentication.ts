import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from './firebaseConfig'; // Assuming you have initialized firebaseApp

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
      'vasuparsaniya21@yopmail.com',
      'Test@123456789',
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
