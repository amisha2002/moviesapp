import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

class AuthRepository {
  async signInWithGoogle(): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.data.idToken
      if (!idToken) {
        throw new Error('Google Sign-In failed');
      }

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      throw error;
    }
  }
}

export const authRepository = new AuthRepository();
