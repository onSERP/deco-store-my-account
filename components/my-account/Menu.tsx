import Icon from "../ui/Icon.tsx";

export interface Props {
    id: string;
    activeComponents?: {
        showOrderList?: boolean;
        showAddressList?: boolean;
        showCardList?: boolean;
        showUserData?: boolean;
    }
}

function Menu({activeComponents, id}: Props) {
  return <div class="bg-white text-black" id={id}>
    {activeComponents?.showOrderList && (
        <div class="flex justify-between items-center" data-menu-item>
            <div class="text-base py-4">
                <a href="#" class="uppercase font-bold py-4">Pedidos</a>
                <p class="text-gray-400">X pedidos</p>
            </div>
            <div>
                <Icon id="ChevronRight" size="16"/>
            </div>
        </div>
    )}
    <hr></hr>
    {activeComponents?.showAddressList && (
    <div class="flex justify-between items-center" data-menu-item>
        <div class="text-base py-4">
            <a href="#" class="uppercase font-bold py-4">Endereços</a>
            <p class="text-gray-400">X endereços</p>
        </div>
        <div>
            <Icon id="ChevronRight" size="16"/>
        </div>
    </div>
    )}
    <hr></hr>
    {activeComponents?.showCardList && (
    <div class="flex justify-between items-center" data-menu-item>
        <div class="text-base py-4">
            <a href="#" class="uppercase font-bold py-4">Formas de Pagamento</a>
            <p class="text-gray-400">VISA *** 444</p>
        </div>
        <div>
            <Icon id="ChevronRight" size="16"/>
        </div>
    </div>
    )}
    <hr></hr>
    {activeComponents?.showUserData && (
    <div class="flex justify-between items-center" data-menu-item>
        <div class="text-base py-4">
            <a href="#" class="uppercase font-bold py-4">Cadastro</a>
            <p class="text-gray-400">Total de x pedidos</p>
        </div>
        <div>
            <Icon id="ChevronRight" size="16"/>
        </div>
    </div>
)}
    <hr></hr>
  </div>;
}

export default Menu;