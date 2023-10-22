import Head from "next/head";
import { useEffect } from "react";
import { loadFirebaseAuthUI } from "@/services/firebase";

export default function Home() {
  useEffect(() => {
    loadFirebaseAuthUI();
  }, []);

  return (
    <>
      <Head>
        <title>FirebaseUI Authentication</title>
      </Head>
      <main>
        <div id="firebaseui-auth-container"></div>
      </main>
    </>
  );
}
