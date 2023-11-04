import Title from "./Title.tsx";

import type {Card as CardType} from "../../sections/MyAccount.tsx";

export interface Props {
  title: string
  cards: CardType[]
}

function CardList({title, cards}: Props) {
  return <div>
    <Title content={title} size="medium" />
    <div class="bg-white flex flex-row items-start mb-4 gap-6">
      {cards.map((card, i) => {
      return (
        <div key={i} class="w-96 h-56 bg-red-100 rounded-xl relative text-white shadow-2xl">
            <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png"></img>
            <div class="w-full px-8 absolute top-8 content-center">
              <div class="pt-1">
                <p class="text-3xl tracking-more-wider">{card.cardNumber}</p>
              </div>
              <div class="pt-6 pr-6">
                  <div class="flex justify-between">
                    <div class="">
                        <p class="font-light text-xs">Nome</p>
                        <p class="font-medium tracking-wider text-sm">{card.name}</p>
                    </div>
                    <div class="">
                        <p class="font-light text-xs">Validade</p>
                        <p class="font-medium tracking-wider text-sm">{card.expiry}</p>
                    </div>
                    <img class="w-14 h-14 self-start" src="https://i.imgur.com/bbPHJVe.png"/>
                  </div>
              </div>
            </div>
        </div>
      )})}
    </div>

    <a aria-label="Adicionar Cartão" href="#" class="btn btn-primary uppercase">Adicionar Cartão</a>
  </div>
}

export default CardList;
