import Icon from "../ui/Icon.tsx";

export interface Props {
  id: string;
  activeComponents?: {
    showCustomList?: boolean;
    showOrderList?: boolean;
    showAddressList?: boolean;
    showCardList?: boolean;
    showUserData?: boolean;
  };
  itemsIds: { [key: string]: string };
  customSections?: { id: string; title: string; subtitle: string }[];
  customSectionsPosition?: "before" | "after";
}

function Menu(
  { id, activeComponents, itemsIds, customSections, customSectionsPosition }:
    Props,
) {
  const customMenus = customSections?.map((section) => {
    return (
      <MenuItem
        id={section.id}
        title={section.title}
        subtitle={section.subtitle}
      />
    );
  });

  return (
    <div class="bg-white text-black hidden lg:block" id={id}>
      {customSectionsPosition === "before" && customSections?.length ?
        customMenus : null}
      {activeComponents?.showCustomList && (
        <MenuItem
          id={itemsIds.customList}
          title="Minhas Ofertas"
          subtitle="Ofertas personalizadas"
        />
      )}
      <hr></hr>
      {activeComponents?.showOrderList && (
        <MenuItem
          id={itemsIds.orderList}
          title="Pedidos"
          subtitle="X pedidos"
        />
      )}
      <hr></hr>
      {activeComponents?.showAddressList && (
        <MenuItem
          id={itemsIds.addressList}
          title="Endereços"
          subtitle="X endereços"
        />
      )}
      <hr></hr>
      {activeComponents?.showCardList && (
        <MenuItem
          id={itemsIds.cardList}
          title="Formas de Pagamento"
          subtitle="VISA *** 444"
        />
      )}
      <hr></hr>
      {activeComponents?.showUserData && (
        <MenuItem
          id={itemsIds.userData}
          title="Cadastro"
          subtitle="Total de x pedidos"
        />
      )}
      <hr></hr>
      {customSectionsPosition === "after" && customSections?.length ?
        customMenus : null}
    </div>
  );
}

function MenuItem(
  { id, title, subtitle }: { id: string; title: string; subtitle: string },
) {
  return (
    <>
      <div
        class="flex justify-between items-center cursor-pointer"
        data-tab-menu-target={id}
        data-tab-menu-item
      >
        <div class="text-base py-4">
          <p class="uppercase font-bold py-4">{title}</p>
          <p class="text-gray-400">{subtitle}</p>
        </div>
        <div>
          <Icon id="ChevronRight" size={16} />
        </div>
      </div>{" "}
      <hr></hr>
    </>
  );
}

export default Menu;
