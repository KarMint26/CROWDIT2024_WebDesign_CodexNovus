import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FC,
} from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "@/firebase";

// Mendefinisikan interface untuk konteks
interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  error: string | null;
}

// Membuat konteks
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Membuat tipe data untuk props komponen provider
interface AuthContextProviderProps {
  children: React.ReactNode;
}

// Membuat komponen provider untuk konteks
export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState<string | null>(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Error during Google sign-in:", err);
      setError("An error occurred during Google sign-in.");
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (err: any) {
      if (err) {
        setError(err.message); // Set specific error message from Firebase
      } else {
        setError("An error occurred during sign-in."); // Generic error message
      }
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error("Error during sign-up:", err);
      if (err) {
        setError(err.message);
      } else {
        setError("An error occurred during sign-up.");
      }
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
    } catch (err) {
      console.error("Error during logout:", err);
      setError("An error occurred during logout.");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logOut, signIn, signUp, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk mengakses konteks
export const UserAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }
  return context;
};
