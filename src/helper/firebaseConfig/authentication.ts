import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebaseConfig'; // Assuming you have initialized firebaseApp

const getAuthToken = async () => {
  const auth = getAuth(firebaseApp);
  const user = auth.currentUser;

  if (user) {
    return await user.getIdToken(); // Get the user's authentication token
  } else {
    throw new Error('User not authenticated');
  }
};

export { getAuthToken };
