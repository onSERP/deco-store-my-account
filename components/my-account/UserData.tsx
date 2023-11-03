import Title from "./Title.tsx";
import type {UserData as UserDataType} from "../../sections/MyAccount.tsx";

export interface Props {
    title: string;
    data: UserDataType
}

function UserData({title, data}: Props) {
  return (<>
    <div id="user-data-show">
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

      <a id="user-data-edit" aria-label="Editar Informações" href="#" class="btn btn-primary uppercase">Editar Informações</a>
      <a aria-label="Alterar Senha" href="#" class="btn btn-primary uppercase ml-4">Alterar Senha</a>
    </div>
    <UserDataEdit title={title} data={data} />
  </>);
}

function UserDataEdit({title, data}: Props) {
  return (<div id="user-data-edit-form" class="hidden">
      <Title content={title} size="medium" />
      <div>
        <div class="mb-2">
          <input type="text" placeholder={`${data.name? data.name : "Nome Completo"}`} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="mb-2">
        <input type="text" placeholder={`${data.email? data.email : "E-mail"}`} class="input input-bordered w-full max-w-xs" />
        </div>
      </div>

      <a aria-label="Salvar Informações" href="#" class="btn btn-primary uppercase">Salvar Informações</a>
      <a id="user-data-edit-return" aria-label="Voltar" href="#" class="btn btn-primary uppercase ml-4">Voltar</a>
    </div>
  );
}

export default UserData;