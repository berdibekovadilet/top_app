import type { NextPage } from "next";
import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";

const Home: NextPage = () => {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(1);
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
      <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
};

export default Home;
