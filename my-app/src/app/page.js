import Image from "next/image";
import styles from "./page.module.css";
import ChatRoom from "../app/components/ChatRoom";





export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

      <div>
      <h1>Chat Room</h1>
      <ChatRoom />
    </div>


    <footer className={styles.footer}>

  </footer>

      </main>

    </div>
  );
};
