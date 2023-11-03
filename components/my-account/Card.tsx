import Title from "./Title.tsx";
import type {Card as CardType} from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
  card: CardType;
}

function Card({title, card}: Props) {
  return <div>
    <Title content={title} />
  </div>;
}

export default Card;