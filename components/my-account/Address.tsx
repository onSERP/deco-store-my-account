import Title from "./Title.tsx";
import type { Address as AddressType } from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
  address: AddressType;
}

function Address({ title, address }: Props) {
  return <div>
    <Title content={title} size='small' />
    <form>
      <div class="form-control w-1/3 max-w-xs">
        <label class="label">
          <span class="label-text uppercase font-bold">CEP</span>
        </label>
        <input type="text" placeholder="CEP" value={`${address.zipCode? address.zipCode : ""}`} class="input input-bordered w-1/3 max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs flex flex-row">
        <div class="w-1/2">
          <label class="label">
            <span class="label-text uppercase font-bold">Estado</span>
          </label>
          <select class="select select-bordered">
            <option disabled selected>Estado</option>
            <option>RJ</option>
            <option>SP</option>
          </select>
        </div>
        <div class="w-1/2">
          <label class="label">
            <span class="label-text uppercase font-bold">Cidade</span>
          </label>
          <select class="select select-bordered">
            <option disabled selected>Cidade</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
          </select>
        </div>
      </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text uppercase font-bold">Endereço</span>
        </label>
        <input type="text" placeholder="Endereço" value={`${address.street? address.street : ""}`} class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs flex flex-row">
        <div class="w-1/6">
          <label class="label">
            <span class="label-text uppercase font-bold">Número</span>
          </label>
          <input type="text" placeholder="Número" value={`${address.number? address.number : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>
        <div class="w-5/6">
          <label class="label">
            <span class="label-text uppercase font-bold">Complemento</span>
          </label>
          <input type="text" placeholder="Complemento" value={`${address.complement? address.complement : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>
      </div>

      <div class="form-control w-full max-w-xs  mb-4">
        <label class="label">
          <span class="label-text uppercase font-bold">Ponto de referência</span>
        </label>
        <input type="text" placeholder="Ponto de referência" value={`${address.reference? address.reference : ""}`} class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs  mb-4">
        <label class="label">
          <span class="label-text uppercase font-bold">Nome do destinatário</span>
        </label>
        <input type="text" placeholder="Nome do destinatário" value={`${address.recipient? address.recipient : ""}`} class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs  mb-4">
        <label class="label">
          <span class="label-text uppercase font-bold">Apelido do endereço (Ex.: Casa)</span>
        </label>
        <input type="text" placeholder="Apelido do endereço (Ex.: Casa)" value={`${address.nickName? address.nickName : ""}`} class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control w-full max-w-xs mb-4">
        <label class="label">
          <span class="label-text uppercase font-bold">CPF</span>
        </label>
        <input type="text" placeholder="CPF" value={`${address.recipientDocument? address.recipientDocument : ""}`} class="input input-bordered w-full max-w-xs" />
      </div>

      <div class="form-control flex content-center">
        <label class="cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox" />
          <span class="label-text ml-2">Tornar este meu endereço principal</span> 
        </label>
      </div>

      <input type="submit" value="Salvar endereço" class="btn btn-primary uppercase" />
    </form>
  </div>;
}

export default Address;