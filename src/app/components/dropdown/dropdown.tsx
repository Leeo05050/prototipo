import styles from "./dropdown.module.scss";
import { InputHTMLAttributes, SelectHTMLAttributes } from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  label: string;
  props: SelectHTMLAttributes<HTMLSelectElement>;
}

export default function Dropdown(props: DropdownProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {props.label}{" "}
        {props.props.required ? <span className={styles.req}>*</span> : <></>}
      </label>
      <select className={styles.inin}>
        {props.options.map((x) => (
          <option key={x.value}>{x.label}</option>
        ))}
      </select>
    </div>
  );
}
