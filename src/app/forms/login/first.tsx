"use client";
import Input from "@/app/components/input/input";
import styles from "./login.module.scss";
import Dropdown from "@/app/components/dropdown/dropdown";

export interface LoginProps {
  display: boolean;
  onNextClick: () => void;
}

export default function FirstPage(props: LoginProps) {
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
        <div className={styles.multiple}>
          <Input
            label={"Nome"}
            props={{
              required: true,
              type: "text",
              pattern: "^[^0-9]*$",
              title: "Seu nome não pode ter números",
            }}
          />
          <Input
            label={"Sobrenome"}
            props={{
              required: true,
              type: "text",
              pattern: "^[^0-9]*$",
              title: "Seu nome não pode ter números",
            }}
          />
          <Input
            label={"CPF"}
            props={{
              required: true,
              type: "text",
              pattern: "[0-9]*",
              title: "Somento números",
              minLength: 11,
              maxLength: 11,
            }}
          />
        </div>
        <Input label={"E-Mail"} props={{ required: true, type: "email" }} />
        <Input
          label={"Senha"}
          props={{
            required: true,
            type: "password",
            minLength: 8,
            pattern: "^(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$",
            title:
              "A sua senha precisa de pelo menos 2 números de um caractere especial",
          }}
        />
        <div className={styles.multiple}>
          <Input
            label={"Data de Nascimento"}
            props={{
              required: true,
              type: "date",
              min: "1900-01-01",
              max: new Date().toISOString().split("T")[0],
            }}
          />
          <Dropdown
            label="Sexo"
            props={{}}
            options={[
              {
                label: "a",
                value: "a",
              },
              {
                label: "b",
                value: "b",
              },
            ]}
          />
          <Input
            label={"Celular"}
            props={{
              required: false,
              type: "tel",
              pattern: "([0-9]{2})[0-9]{9}",
            }}
          />
          <Dropdown
            label="Curso"
            props={{ required: true }}
            options={[
              {
                label: "ADS",
                value: "ads",
              },
              {
                label: "Medicina",
                value: "med",
              },
              {
                label: "Uber",
                value: "uber",
              },
            ]}
          />
        </div>
        <div className={styles.floor}>
          <p className={styles.aviso}>* Campos obrigatórios</p>
          <button className={styles.vai}>Pŕoximo</button>
        </div>
      </div>
    </form>
  );
}
