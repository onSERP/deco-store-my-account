export interface Props {
  title: string;
  address: AddressType;
}
import Title from "./Title.tsx";
import type {Address as AddressType} from "../../sections/MyAccount.tsx";

function Address({title = "Novo endereço", address}: Props) {
  return <div>
    <Title content={title} size='small'/>
    <form>
      <div>
        <input type="text" placeholder="CEP" class="input input-bordered w-1/3 max-w-xs" />
        <a>Não sei meu CEP</a>
      </div>

      <div>
        <select class="select select-bordered w-1/2 max-w-xs">
          <option disabled selected>Estado</option>
          <option>RJ</option>
          <option>SP</option>
        </select>
        <select class="select select-bordered w-1/2 max-w-xs">
          <option disabled selected>Cidade</option>
          <option>Rio de Janeiro</option>
          <option>São Paulo</option>
        </select>
      </div>

      <div>
        <input type="text" placeholder="Endereço" class="input input-bordered w-full max-w-xs" />
      </div>

      <div>
        <input type="text" placeholder="Número" class="input input-bordered w-1/6 max-w-xs" />
        <input type="text" placeholder="Complemento" class="input input-bordered w-5/6 max-w-xs" />
      </div>

      <div>
        <input type="text" placeholder="Ponto de Referência" class="input input-bordered w-full max-w-xs" />
      </div>

      <div>
        <input type="text" placeholder="Nome do destinatário" class="input input-bordered w-full max-w-xs" />
      </div>

      <div>
        <input type="text" placeholder="Apelido do endereço (Ex.: Casa)" class="input input-bordered w-full max-w-xs" />
      </div>

      <div>
        <input type="text" placeholder="CPF" class="input input-bordered w-1/3 max-w-xs" />
      </div>
      
      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox" />
          <span class="label-text">Tornar este meu endereço principal</span> 
        </label>
      </div>

      <input type="submit" value="Salvar endereço" class="btn btn-primary uppercase" />
    </form>
  </div>;
}

export default Address;