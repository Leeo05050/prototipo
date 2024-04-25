import Image from "next/image";
import styles from "./input.module.css";
import { InputHTMLAttributes } from "react";

export interface InputProps {
  label: String;
  props: InputHTMLAttributes<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {props.label}{" "}
        {props.props.required ? <span className={styles.req}>*</span> : <></>}
      </label>
      <input className={styles.inin} {...props.props}></input>
    </div>
  );
}
