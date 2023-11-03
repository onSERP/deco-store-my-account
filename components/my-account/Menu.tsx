import Icon from "../ui/Icon.tsx";

export interface Props {
  id: string;
  activeComponents?: {
    showOrderList?: boolean;
    showAddressList?: boolean;
    showCardList?: boolean;
    showUserData?: boolean;
  };
  itemsIds: { [key: string]: string };
}

function Menu({ id, activeComponents, itemsIds }: Props) {
  return (
    <div class="bg-white text-black" id={id}>
      {activeComponents?.showOrderList && (
        <div
          class="flex justify-between items-center cursor-pointer"
          data-tab-menu-target={itemsIds.orderList}
          data-tab-menu-item
        >
          <div class="text-base py-4">
            <p class="uppercase font-bold py-4">Pedidos</p>
            <p class="text-gray-400">X pedidos</p>
          </div>
          <div>
            <Icon id="ChevronRight" size={16} />
          </div>
        </div>
      )}
      <hr></hr>
      {activeComponents?.showAddressList && (
        <div
          class="flex justify-between items-center cursor-pointer"
          data-tab-menu-target={itemsIds.addressList}
          data-tab-menu-item
        >
          <div class="text-base py-4">
            <p class="uppercase font-bold py-4">Endereços</p>
            <p class="text-gray-400">X endereços</p>
          </div>
          <div>
            <Icon id="ChevronRight" size={16} />
          </div>
        </div>
      )}
      <hr></hr>
      {activeComponents?.showCardList && (
        <div
          class="flex justify-between items-center cursor-pointer"
          data-tab-menu-target={itemsIds.cardList}
          data-tab-menu-item
        >
          <div class="text-base py-4">
            <p class="uppercase font-bold py-4">Formas de Pagamento</p>
            <p class="text-gray-400">VISA *** 444</p>
          </div>
          <div>
            <Icon id="ChevronRight" size={16} />
          </div>
        </div>
      )}
      <hr></hr>
      {activeComponents?.showUserData && (
        <div
          class="flex justify-between items-center cursor-pointer"
          data-tab-menu-target={itemsIds.userData}
          data-tab-menu-item
        >
          <div class="text-base py-4">
            <p class="uppercase font-bold py-4">Cadastro</p>
            <p class="text-gray-400">Total de x pedidos</p>
          </div>
          <div>
            <Icon id="ChevronRight" size={16} />
          </div>
        </div>
      )}
      <hr></hr>
    </div>
  );
}

export default Menu;