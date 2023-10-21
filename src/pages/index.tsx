import Head from "next/head";
import styles from "@/styles/Home.module.css";
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
      <main className={styles.main}>
        <div id="firebaseui-auth-container"></div>
      </main>
    </>
  );
}
