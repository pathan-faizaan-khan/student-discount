
"use client";
import React, { useState } from "react";
import {  GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {auth,db} from "../firbase"


const validateEmail = (email: string): boolean => {
  const academicEmailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)?(edu|ac\.in|college\.edu|university\.edu)$/;
  return academicEmailRegex.test(email);
};

const AuthPage: React.FC = () => {
  const user = auth.currentUser;
  const uid = user?.uid;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Email Verification, Step 2: Collect Details
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Extract user email from Google
      const user = result.user;
      if (!user.email || !validateEmail(user.email)) {
        throw new Error(
          "Please use a valid academic email address (e.g., .edu or .ac.in)."
        );
      }
      setEmail(user.email);
      setStep(2);
    } catch (err: any) {
      setError(err.message || "An error occurred during Google Sign-In.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const userDetails = {
        name,
        email,
        phone,
        college,
      };

      const userRef = doc(db, "users", email);
      await setDoc(userRef, userDetails);

      // const response = await fetch(`https://student-discount.fk4460467.workers.dev/api/users`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({name,uid,email,college,phone}),
      // });
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(`Failed to save user to D1: ${errorData.message || "Unknown error"}`);
      // }

      router.push("/");
    } catch (err: any) {
      setError(err.message || "An error occurred during sign-up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mx-3 ">
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {step === 1 ? (
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className={`w-full py-3 text-white font-semibold  rounded-md transition ${
              loading ? "bg-gray-400" : "bg-blue-500"
            }`}
          >
            
            {loading ? "Verifying..." : (<h1 className="flex text-xl justify-center gap-2 items-center"><img src="google.png" alt="google" className="h-10 bg-white rounded-full p-1"/>Sign In with Google</h1>)}
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border rounded-md"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-md"
              disabled
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 border rounded-md"
            />

            <input
              type="text"
              placeholder="College Name"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              required
              className="w-full p-3 border rounded-md"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-md transition ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Saving..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
