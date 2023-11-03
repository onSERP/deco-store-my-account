import Icon from "../ui/Icon.tsx";
import Title from "./Title.tsx";
import type { Address as AddressType } from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
  addresses: AddressType[];
}

function AddressList({ title = "Endereços", addresses }: Props) {
  return (
    <div>
      <Title content={title} size="medium" />
      {addresses.map((address, i) => (
        <label key={i} class="group cursor-pointer select-none relative">
          <input
            type="radio"
            name="radio-10"
            class="peer/radio hidden"
            checked={address.isDefault}
          />
          <div class="flex p-1 border ring-4 ring-inset ring-white border-gray-400 h-6 w-6 rounded-full shrink-0 peer-checked/radio:bg-black self-center absolute left-4 top-1/2 transform-gpu -translate-y-1/2" />
          <div
            class={`form-control peer-checked/radio:border-black border border-solid rounded-md p-4 mb-4`}
          >
            <div class="relative">
              <div class="ml-16">
                <div class="flex justify-between">
                  <p class="font-bold uppercase mb-4">{address.nickName}</p>
                  <div class="flex items-center gap-2">
                    <a href="#" class="text-gray-600" title="Editar endereço">
                      <Icon id="Edit" size={16} />
                    </a>
                    <a href="#" class="text-red-600" title="Excluir endereço">
                      <Icon id="Trash" size={18} />
                    </a>
                  </div>
                </div>
                <div>
                  <p>{address.recipient}</p>
                  <p>
                    {address.street}, {address.number} - {address.complement} -
                    {" "}
                    {address.neighborhood}
                  </p>
                  <p>{address.city} - {address.state}</p>
                  <p>CEP {address.zipCode}</p>
                </div>
              </div>
            </div>
          </div>
        </label>
      ))}

      <a
        aria-label="Adicionar Endereço"
        href="#"
        class="btn btn-primary uppercase"
      >
        Adicionar Endereço
      </a>
    </div>
  );
}

export default AddressList;
