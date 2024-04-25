"use client";
import Input from "@/app/components/input/input";
import { LoginProps } from "./first";
import styles from "./login.module.scss";
import Dropdown from "@/app/components/dropdown/dropdown";

export default function ThirdPage(props: LoginProps) {
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
          label={"Responsável Financeiro"}
          props={{
            required: true,
            pattern: "^[^0-9]*$",
            title: "O nome não pode ter números",
          }}
        ></Input>
        <Input
          label={"Pai"}
          props={{
            pattern: "^[^0-9]*$",
            title: "O nome não pode ter números",
          }}
        ></Input>
        <Input
          label={"Mãe"}
          props={{
            pattern: "^[^0-9]*$",
            title: "O nome não pode ter números",
          }}
        ></Input>
        <div className={styles.multiple}>
          <Dropdown
            props={{}}
            label={"Estado cívil"}
            options={[
              {
                label: "Solteiro(a)",
                value: "sol",
              },
              {
                label: "Casado(a)",
                value: "cas",
              },
              {
                label: "Divorciado(a)",
                value: "div",
              },  
              {
                label: "Viúvo(a)",
                value: "viu",
              },
            ]}
          />
          <Input props={{}} label={"Ocupação"} />
        </div>
        <div className={styles.floor}>
          <p className={styles.aviso}>* Campos obrigatórios</p>
          <button className={styles.vai}>Finalizar</button>
        </div>
      </div>
    </form>
  );
}
