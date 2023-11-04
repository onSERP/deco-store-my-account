import Title from "./Title.tsx";
import type {Card as CardType} from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
}

function Card({title}: Props) {
  return <div>
    <Title content={title} size="small" />
    <div>
      <div class="form-control w-full mb-4">
        <input type="text" placeholder="Número do Cartão" class="input input-bordered w-full" />
      </div>

      <div class="form-control w-full mb-4">
        <input type="text" placeholder="Nome impresso no cartão" class="input input-bordered w-full" />
      </div>

      <div class="form-control w-full mb-4 flex flex-row justify-between">
        <input type="text" placeholder="Validade" class="input input-bordered w-2/3" />
        <input type="text" placeholder="CVV" class="input input-bordered w-1/3" />
      </div>

      <div class="form-control mb-4">
        <label class="cursor-pointer flex items-center">
          <input type="checkbox" class="checkbox" />
          <span class="label-text ml-2">Marcar como cartão principal</span> 
        </label>
      </div>

      <a aria-label="Salvar Cartão" href="#" class="btn btn-primary uppercase">Salvar Cartão</a>
    </div>
  </div>;
}

export default Card;