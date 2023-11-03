import Title from "./Title.tsx";
import type {UserData} from "../../sections/MyAccount.tsx";

export interface Props {
    title: string;
    data: UserData
}

function UserInfo({title, data}: Props) {
  return (<div>
      <Title content={title} size="medium" />
      <div>
        <div class="mb-2">
          <p class="uppercase font-bold">Nome completo</p>
          <p class="font-sm">{data.name}</p>
        </div>

        <div class="mb-2">
          <p class="uppercase font-bold">E-mail</p>
          <p class="font-sm">{data.email}</p>
        </div>

        <div class="mb-2">
          <p class="uppercase font-bold">Nome que deseja ser chamado(a)</p>
          <p class="font-sm">{data.friendlyName}</p>
        </div>

        <div class="mb-2">
          <p class="uppercase font-bold">Sexo</p>
          <p class="font-sm">{data.gender}</p>
        </div>

        <div class="mb-2">
          <p class="uppercase font-bold">CPF</p>
          <p class="font-sm">{data.document}</p>
        </div>

        <div class="mb-2">
          <p class="uppercase font-bold">Telefone</p>
          <p class="font-sm">{data.phone}</p>
        </div>
      </div>

      <a aria-label="Editar Informações" href="#" class="btn btn-primary uppercase">Editar Informações</a>
    </div>
  );
}

export default UserInfo;