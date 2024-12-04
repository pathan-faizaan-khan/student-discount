import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase"; // Ensure the correct path to your Firebase config

export const signUp = async (name: string, email: string, password: string, optOut: boolean = false): Promise<string | void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        uid: user.uid,
        email: user.email,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to save user data to the database.");
    }

    console.log("User signed up and saved in the database.");
    return "User signed up successfully."; // Return success message
  } catch (error: any) {
    console.error("Sign-up Error:", error.message);
    return error.message; // Return error message to the calling function
  }
};

export const logIn = async (email: string, password: string): Promise<string | void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully:", userCredential.user);
    return "User logged in successfully."; // Return success message
  } catch (error: any) {
    console.error("Log-in Error:", error.message);
    return error; // Return error message to the calling function
  }
};
