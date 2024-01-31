import React from 'react'
import styles from "./index.module.scss";

type ButtonProps = {
  text: string;
  handleOnClick: Function;
};

export default function Button({ text, handleOnClick }: ButtonProps) {
  return (
    <div className={styles.btn} onClick={() => handleOnClick()}>{text}</div>
  )
}
