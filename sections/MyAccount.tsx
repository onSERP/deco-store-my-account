import Title from "../components/my-account/Title.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "../components/ui/Icon.tsx";
import Menu from "../components/my-account/Menu.tsx";
import UserInfo from "../components/my-account/UserInfo.tsx";
import MyAccountJS from "../islands/MyAccountJS.tsx";

import { useId } from "$store/sdk/useId.ts";

import { Section } from "deco/blocks/section.ts";

import Address from "../components/my-account/Address.tsx";
import AddressList from "../components/my-account/AddressList.tsx";
import CardList from "../components/my-account/CardList.tsx";
import OrderList from "../components/my-account/OrderList.tsx";
import { default as OrderComponent } from "../components/my-account/Order.tsx";
import UserData from "../components/my-account/UserData.tsx";

import NotFound from "../sections/product/NotFound.tsx";

import { AppContext } from "apps/vtex/mod.ts";

export interface LoaderReturn extends Props {
  notFound?: boolean;
  orderPage?: number;
}

export const loader = (
  props: Props,
  req: Request,
  ctx: AppContext,
): LoaderReturn => {
  const url = new URL(req.url);

  if (url.pathname === "/my-account") {
    return props;
  }

  if (url.pathname.startsWith("/my-account/order/")) {
    const id = url.pathname.split("/order/")[1];

    if (loaderData.orders.find((order) => order.id === Number(id))) {
      return { ...props, orderPage: Number(id) };
    }
  }

  ctx.response.status = 404;
  return { ...props, notFound: true };
};

export interface Props {
  sectionTitle?: string;

  activeComponents?: {
    showOrderList?: boolean;
    showAddressList?: boolean;
    showCardList?: boolean;
    showUserData?: boolean;
  };
  /** @titleBy title */
  /** @description Adicione seções personalizadas */
  customSections?: {
    title: string;
    subtitle: string;
    content: Section[];
  }[];

  customSectionsPosition?: "before" | "after";

  orderListTitle?: string;
  addressListTitle?: string;
  cardListTitle?: string;
  userDataTitle?: string;
}

export type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type Order = {
  id: number;
  date: string;
  status: string;
  total: number;
  shipping: number;
  discount: number;
  items: Item[];
};

export type Card = {
  cardNumber: string;
  flag: string;
  name: string;
  expiry: string;
  isDefault: boolean;
};

export type Address = {
  nickName: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  recipient: string;
  recipientDocument: string;
  reference: string;
  isDefault: boolean;
};

export type UserData = {
  name: string;
  email: string;
  friendlyName: string;
  document: string;
  birthDate: string;
  phone: string;
  gender: string;
};

export interface LoaderData {
  user: UserData;
  orders: Order[];
  cards: Card[];
  addresses: Address[];
}

const loaderData: LoaderData = {
  user: {
    name: "Rafael Santos de Souza",
    email: "rafael@gmail.com",
    friendlyName: "Rafinha",
    document: "000.000.000-00",
    birthDate: "01/01/2000",
    phone: "(00) 00000-0000",
    gender: "Masculino",
  },
  orders: [
    {
      id: 987292,
      date: "01/01/2021",
      status: "Completo",
      total: 200,
      shipping: 10,
      discount: 5,
      items: [
        {
          id: 1,
          name: "Camiseta lisa tech T-shirt",
          price: 100,
          image: "https://via.placeholder.com/175x175/D3D3D3/?text=Imagem+1",
        },
        {
          id: 2,
          name: "Calça jeans skinny tamanho 43",
          price: 100,
          image: "https://via.placeholder.com/175x175/D3D3D3/?text=Imagem+2",
        },
      ],
    },
    {
      id: 987292,
      date: "01/10/2022",
      status: "Cancelado",
      total: 700,
      shipping: 10,
      discount: 5,
      items: [
        {
          id: 1,
          name: "Camiseta",
          price: 100,
          image: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+1",
        },
        {
          id: 2,
          name: "Calça",
          price: 100,
          image: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+2",
        },
      ],
    },
    {
      id: 624392,
      date: "01/03/2023",
      status: "Em processamento",
      total: 300,
      shipping: 0,
      discount: 35,
      items: [
        {
          id: 1,
          name: "Camiseta",
          price: 100,
          image: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+1",
        },
        {
          id: 2,
          name: "Calça",
          price: 100,
          image: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+2",
        },
        {
          id: 3,
          name: "Tênis",
          price: 100,
          image: "https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+3",
        },
      ],
    },
  ],
  cards: [
    {
      cardNumber: "**** **** **** 4444",
      flag: "visa",
      name: "Rafael",
      expiry: "01/01",
      isDefault: true,
    },
    {
      cardNumber: "**** **** **** 4444",
      flag: "mastercard",
      name: "Rafael",
      expiry: "01/01",
      isDefault: false,
    },
  ],
  addresses: [
    {
      nickName: "Apartamento",
      zipCode: "00000-000",
      street: "Rua das Couves",
      number: "123",
      complement: "Casa",
      neighborhood: "Centro",
      city: "São Paulo",
      state: "SP",
      recipient: "Rafael",
      recipientDocument: "000.000.000-00",
      reference: "Próximo ao mercado",
      isDefault: true,
    },
    {
      nickName: "Trabalho",
      zipCode: "00000-000",
      street: "Rua das Couves",
      number: "123",
      complement: "Casa",
      neighborhood: "Centro",
      city: "São Paulo",
      state: "SP",
      recipient: "Rafael",
      recipientDocument: "000.000.000-00",
      reference: "Próximo ao mercado",
      isDefault: false,
    },
  ],
};

function MyAccount({
  sectionTitle = "Minha Conta",
  activeComponents = {
    showOrderList: true,
    showAddressList: true,
    showCardList: true,
    showUserData: true,
  },
  customSections = [],
  customSectionsPosition = "before",
  orderListTitle = "Pedidos",
  addressListTitle = "Endereços",
  cardListTitle = "Formas de Pagamento",
  userDataTitle = "Cadastro",
  notFound = false,
  orderPage,
}: LoaderReturn) {
  const ids = {
    root: useId(),
    activeContent: useId(),
    menu: useId(),
    components: {
      orderList: useId(),
      addressList: useId(),
      order: useId(),
      cardList: useId(),
      userData: useId(),
    },
  };

  if (notFound) {
    return <NotFound />;
  }

  const customElements = customSections.map((list) => {
    const customListId = useId();
    return {
      id: customListId,
      title: list.title,
      subtitle: list.subtitle,
      fragment: (
        <div id={customListId} data-tab-content>
          <Title content={list.title} size="medium" />
          {list.content.map((section) => (
            <section.Component {...section.props} />
          ))}
        </div>
      ),
    };
  });

  return (
    <>
      <div class="container px-4" id={ids.root}>
        <Title content={sectionTitle} />
        <div class="flex justify-between flex-wrap">
          <div class="w-full lg:w-80">
            <div class="mb-8">
              <UserInfo
                name={loaderData.user.name}
                email={loaderData.user.email}
              />
            </div>
            <Menu
              id={ids.menu}
              activeComponents={activeComponents}
              itemsIds={ids.components}
              customSections={customElements.map((item) => ({
                id: item.id,
                title: item.title,
                subtitle: item.subtitle,
              }))}
              customSectionsPosition={customSectionsPosition}
            />
          </div>
          <Button
            class="btn btn-primary btn-sm my-custom-drawer lg:hidden"
            aria-label="open menu"
          >
            <Icon id="Bars3" size={16} strokeWidth={2} />
          </Button>

          <div class="w-full lg:w-auto flex-1 lg:pl-8" id={ids.activeContent}>
            {customSectionsPosition === "before" && customSections.length > 0 &&
              <>{customElements.map((item) => item.fragment)}</>}
            {activeComponents.showOrderList &&
              (
                <div id={`${ids.components.orderList}`} data-tab-content>
                  {orderPage
                    ? (
                      <OrderComponent
                        title={`Pedido #${orderPage}`}
                        order={loaderData.orders.find((order) =>
                          order.id
                        ) as Order}
                      />
                    )
                    : (
                      <OrderList
                        title={orderListTitle}
                        orders={loaderData.orders}
                      />
                    )}
                </div>
              )}
            {activeComponents.showAddressList &&
              (
                <div id={`${ids.components.addressList}`} data-tab-content>
                  <AddressList
                    title={addressListTitle}
                    addresses={loaderData.addresses}
                  />
                </div>
              )}
            {activeComponents.showCardList && (
              <div id={`${ids.components.cardList}`} data-tab-content>
                <CardList
                  title={cardListTitle}
                  cards={loaderData.cards}
                />
              </div>
            )}
            {activeComponents.showUserData && (
              <div id={`${ids.components.userData}`} data-tab-content>
                <UserData title={userDataTitle} data={loaderData.user} />
              </div>
            )}

            {customSectionsPosition === "after" && customSections.length > 0 &&
              <>{customElements.map((item) => item.fragment)}</>}
          </div>
        </div>
      </div>
      <MyAccountJS
        tabsData={{
          rootId: ids.root,
          tabContainerId: ids.activeContent,
          menuId: ids.menu,
          userDataId: ids.components.userData,
        }}

      />
    </>
  );
}

export default MyAccount;
