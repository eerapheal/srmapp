"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const page = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.title}
        type="text"
        placeholder="Article Title..."
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plusicon.png" alt="plus" height={16} width={16} />
        </button>
        {open && (
          <div className={styles.addbtnDiv}>
            <button className={styles.Addbutton}>
              <Image src="/imageIcon.png" alt="image" height={16} width={16} />
            </button>
            <button className={styles.Addbutton}>
              <Image
                src="/external.jpeg"
                alt="external"
                height={16}
                width={16}
              />
            </button>
            <button className={styles.Addbutton}>
              <Image src="/VideoIcon.png" alt="Video" height={16} width={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textarea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Write Article here..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default page;
