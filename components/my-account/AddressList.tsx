import Icon from "../ui/Icon.tsx";
import Title from "./Title.tsx";
import type {Address as AddressType} from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
  addresses: AddressType[];
}

function AddressList({title = "Endereços", addresses}: Props) {
  return <div>
    <Title content={title} size="small" />
    {addresses.map((address) => (
        <div class={`form-control border border-solid ${address.isDefault? 'border-black' : 'border-gray'} rounded-md p-4 mb-4`}>
            <div class="flex flex-row">
                <input type="radio" name="radio-10" class="radio checked:bg-black self-center" />   
                <div class="ml-4">
                  <div class="flex justify-between">
                    <p class="font-bold uppercase">{address.nickName}</p>
                    <a href="#" class="text-red-600"><Icon id="Trash" size="16"/></a>
                  </div>
                  <div>
                    <p>{address.recipient}</p>
                    <p>{address.street}, {address.number} - {address.complement} - {address.neighborhood}</p>
                    <p>{address.city} - {address.state}</p>
                    <p>CEP {address.zipcode}</p>
                  </div>
                </div>
            </div>
        </div>
    ))}

    <a aria-label="Adicionar Endereço" href="#" class="btn btn-primary uppercase">Adicionar Endereço</a>
  </div>;
}

export default AddressList;