import { Context, createContext, ReactNode, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

export interface Auth {
  userId: string;
  displayName: string;
  email: string;
}

export interface AuthContext {
  auth: Auth | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
}

const authContext: Context<AuthContext> = createContext<AuthContext>({
  auth: null,
  loading: true,
  signInWithGoogle: async () => new Promise<void>(() => {}),
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
      console.log('onAuthStateChanged, user = ', user);

      // TODO: Fetch user document

      setAuthState({
        // TODO: Update this to match the id of the user document,
        // once created & fetched
        userId: user?.providerId || '',
        displayName: user?.displayName || '',
        email: user?.email || '',
      });

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

  // const logout = async (): Promise<void> => {
  //   return signOut(authorization).then(() => {
  //     setAuth(null);
  //   });
  // };

  return {
    loading,
    auth: authState,
    signInWithGoogle: signInWithGoogleRedirect,
  };
}

const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>{props.children}</authContext.Provider>
  );
};

export { authContext, AuthProvider };
