import type { NextPage } from "next";
import { Button, Htag } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost">Читать отзывы</Button>
      <Button appearance="ghost">Читать отзывы</Button>
    </div>
  );
};

export default Home;
