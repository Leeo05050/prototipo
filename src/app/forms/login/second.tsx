"use client";
import Input from "@/app/components/input/input";
import { LoginProps } from "./first";
import styles from "./login.module.scss";

export default function SecondPage(props: LoginProps) {
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        props.onNextClick();
      }}
      style={{ display: props.display ? "" : "none" }}
    >
      <div className={styles.container}>
        <Input
          label={"CEP"}
          props={{
            required: true,
            type: "text",
            pattern: "[0-9]*",
            title: "Somento números",
            minLength: 8,
            maxLength: 8,
          }}
        />
        <Input label={"Endereço"} props={{ required: true }}/>
        <div className={styles.floor}>
          <p className={styles.aviso}>* Todos os campos são obrigatórios</p>
          <button className={styles.vai}>Pŕoximo</button>
        </div>
      </div>
    </form>
  );
}
