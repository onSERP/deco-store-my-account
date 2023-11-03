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
    <UserDataEdit title="Editar informações" data={data} />
  </>);
}

function UserDataEdit({title, data}: Props) {
  return (<div id="user-data-edit-form" class="hidden">
      <Title content={title} size="medium" />
      <div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text uppercase font-bold">Nome</span>
          </label>
          <input type="text" placeholder="Nome" value={`${data.name? data.name : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text uppercase font-bold">E-mail</span>
          </label>
          <input type="text" placeholder="E-mail" value={`${data.email? data.email : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text uppercase font-bold">Nome que deseja ser chamado(a)</span>
          </label>
          <input type="text" placeholder="Nome que deseja ser chamado(a)" value={`${data.friendlyName? data.friendlyName : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>
      </div>

      <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text uppercase font-bold">Sexo</span>
          </label>
          <select class="select select-bordered w-full max-w-xs">
            <option value="Masculino" selected={data.gender === "Masculino"}>Masculino</option>
            <option value="Feminino" selected={data.gender === "Feminino"}>Feminino</option>
            <option value="Outro" selected={data.gender === "Outro"}>Outro</option>
          </select>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text uppercase font-bold">CPF</span>
          </label>
          <input type="text" placeholder="CPF" value={`${data.document? data.document : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control w-full max-w-xs mb-4">
          <label class="label">
            <span class="label-text uppercase font-bold">Telefone</span>
          </label>
          <input type="text" placeholder="Telefone" value={`${data.phone? data.phone : ""}`} class="input input-bordered w-full max-w-xs" />
        </div>

        <div class="form-control flex content-center mb-4">
          <label class="cursor-pointer">
            <input type="checkbox" checked="checked" class="checkbox" />
            <span class="label-text ml-2">Quero receber e-mails com novidades</span> 
          </label>
        </div>

      <a aria-label="Salvar Alterações" href="#" class="btn btn-primary uppercase">Salvar Alterações</a>
      <a id="user-data-edit-return" aria-label="Voltar" href="#" class="btn btn-primary uppercase ml-4">Voltar</a>
    </div>
  );
}

export default UserData;