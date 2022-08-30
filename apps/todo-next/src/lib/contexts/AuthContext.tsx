import { Context, createContext, ReactNode, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase';

export interface Auth {
  userId: string;
  displayName: string;
  email: string;
  profilePicture: string;
}

export interface AuthContext {
  auth: Auth | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const authContext: Context<AuthContext> = createContext<AuthContext>({
  auth: null,
  loading: true,
  signInWithGoogle: async () => new Promise<void>(() => {}),
  signOut: async () => new Promise<void>(() => {}),
});

function useProvideAuth(): AuthContext {
  const [authState, setAuthState] = useState<Auth | null>(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const signInWithGoogleRedirect = async () => {
    await signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      /**
       * TODO: Get user doc when more info is added
       */
      // getDoc(doc(db.users, user?.uid)).then(userDoc => {
      //   const userData = userDoc.data() as UserDoc;
      // });

      if (user) {
        setAuthState({
          userId: user?.providerId || '',
          displayName: user?.displayName || '',
          email: user?.email || '',
          profilePicture: user?.photoURL || '',
        });
      } else {
        // Clear auth state
        setAuthState(null);
      }

      setLoading(false);
    });
  }, []);

  // const loginUser = (email: string, password: string) => {
  //   setLoading(true);
  //   return signInWithEmailAndPassword(authorization, email, password);
  // };

  // const resetPassword = (email: string) => {
  //   return sendPasswordResetEmail(authorization, email);
  // };

  const logout = async (): Promise<void> => {
    return signOut(auth).then(() => {
      setAuthState(null);
    });
  };

  return {
    loading,
    auth: authState,
    signInWithGoogle: signInWithGoogleRedirect,
    signOut: logout,
  };
}

const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
};

export { authContext, AuthProvider };
