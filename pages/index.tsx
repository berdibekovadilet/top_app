import type { NextPage } from "next";
import { useState } from "react";
import { Button, Htag, P, Tag } from "../components";

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter(counter + 1)}
      >
        Прибавить
      </Button>
      <Button
        appearance="ghost"
        arrow="right"
        onClick={() => setCounter(counter - 1)}
      >
        Убавить
      </Button>
      <Button appearance="ghost" arrow="right">
        Читать отзывы
      </Button>
      <P size="s">успешно конкурировать с веб-дизайнерами уровня small.</P>
      <P size="m">успешно конкурировать с веб-дизайнерами уровня middle.</P>
      <P size="l">успешно конкурировать с веб-дизайнерами уровня large.</P>
      <Tag color="ghost">10000</Tag>
      <Tag color="red">10000</Tag>
      <Tag color="green">10000</Tag>
      <Tag color="grey">10000</Tag>
      <Tag color="primary">10000</Tag>
    </div>
  );
};

export default Home;
