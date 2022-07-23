import type { NextPage } from "next";
import { Button, Htag, P } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost">Читать отзывы</Button>
      <Button appearance="ghost">Читать отзывы</Button>
      <P size="s">успешно конкурировать с веб-дизайнерами уровня small.</P>
      <P size="m">успешно конкурировать с веб-дизайнерами уровня middle.</P>
      <P size="l">успешно конкурировать с веб-дизайнерами уровня large.</P>
    </div>
  );
};

export default Home;
