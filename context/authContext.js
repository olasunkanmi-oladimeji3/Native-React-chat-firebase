import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isauthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        updateUserData(user.uid);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const updateUserData = async (userId) => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let data = docSnap.data();
      setUser({
        ...user,
        username: data.username,
        profileUrl: data.profileUrl,
        userId: data.userId,
      });
    }
  };
  const login = async (email, password) => {
    // call firebase login
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      return { success: true, data: response?.user };
    } catch (e) {
      let msg = e.message;
      if (msg.includes("(auth/invalid-credential)")) msg = "wrong credentials";
      if (msg.includes("(auth/invalid-email)")) msg = "Invalid email Address";
      return { success: false, msg };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setUser(null)
      return { success: true };
    } catch (e) {
      return { success: false, msg: e.message, error: e };
    }
    // call firebase logout
  };

  const register = async (email, password, username, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", response?.user?.uid), {
        username: username,
        profileUrl: profileUrl,
        userId: response?.user?.uid,
      });
      return { success: true, data: response?.user };
    } catch (e) {
      let msg = e.message;
      if (msg.includes("(auth/invalid-email)")) msg = "Invalid email Address";
      if (msg.includes("(auth/email-already-in-use)"))
        msg = "This email is alreay in use";
      return { success: false, msg };
    }
    // call firebase register
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, isauthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error(" useAuth must be wrapped inside AuthProvider");
  }
  return value;
};
