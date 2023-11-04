export interface Props {
  title: string;
  order: OrderType;
}
import Title from "./Title.tsx";
import type { Order as OrderType } from "../../sections/MyAccount.tsx";

function Order({ title, order }: Props) {
  let statusClass = "";
  switch (order.status) {
    case "Em processamento":
      statusClass = "text-yellow-400 uppercase";
      break;
    case "Completo":
      statusClass = "text-green-500 uppercase";
      break;
    case "Cancelado":
      statusClass = "text-red-600 uppercase";
      break;
  }

  return (
    <div>
      <Title content={title} />
      <div class="flex justify-between items-center">
        <p class={statusClass}>{order.status}</p>
        <p class="text-gray-400">{order.date}</p>
      </div>

      <div class="flex flex-row my-2">
        <div class="basis-1/2">
          <p class="font-bold uppercase">Endereço de entrega</p>
          <p class="font-semibold">Rafael Monteiro</p>
          <p>Rua</p>
          <p>Complemento - Bairro</p>
          <p>Cidade - Estado</p>
          <p>CEP</p>
        </div>
        <div class="basis-1/2">
          <p class="font-bold uppercase">Forma de pagamento</p>
          <p class="font-semibold">Cartão de crédito</p>
          <p>Rafael Monteiro</p>
          <p>**** **** **** 3399</p>
          <p>1x de R$200,00 sem juros</p>
        </div>
      </div>
      <hr></hr>
      <div class="flex flex-col py">
        {order.items.map((item) => (
          <div class="flex justify-start items-left py-4">
            <image src={item.image} />
            <div class="uppercase font-bold ml-4">
              <p>{item.name}</p>
              <p>R$ {item.price}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <hr></hr>
      <div class="flex justify-between items-center py-2 text-lg">
        <p>Subtotal</p>
        <p>R$ {order.total}</p>
      </div>
      <div class="flex justify-between items-center py-2 text-lg">
        <p>Desconto</p>
        <p>- R$ {order.discount}</p>
      </div>
      <div class="flex justify-between items-center py-2 text-lg">
        <p>Frete</p>
        <p>R$ {order.shipping === 0 ? "Grátis" : order.shipping}</p>
      </div>
      <div class="flex justify-between items-center py-2 text-lg">
        <p class="font-bold uppercase">Total</p>
        <p class="font-bold">
          R$ {order.total + order.shipping - order.discount}
        </p>
      </div>

      <a
        id="user-data-edit-return"
        aria-label="Voltar"
        href="/my-account"
        class="btn uppercase"
      >
        Voltar
      </a>
      <a
        aria-label="Comprar novamente"
        href="#"
        class="btn btn-primary uppercase ml-4"
      >
        Comprar novamente
      </a>
    </div>
  );
}

export default Order;
