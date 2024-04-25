"use client";
import styles from "./page.module.scss";
import Card from "./components/card/card";
import FirstPage from "./forms/login/first";
import { useState } from "react";
import SecondPage from "./forms/login/second";
import ThirdPage from "./forms/login/third";

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <Card>
      <FirstPage display={index == 0} onNextClick={() => setIndex(1)} />
      <SecondPage display={index == 1} onNextClick={() => setIndex(2)} />
      <ThirdPage
        display={index == 2}
        onNextClick={() => alert("Registrado :)")}
      />
    </Card>
  );
}
