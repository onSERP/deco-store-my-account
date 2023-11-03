export interface Props {
  title: string;
  order: Order;
}
import Title from "./Title.tsx";
import type { Order } from "../../sections/MyAccount.tsx";

function Order({ title = "Pedido", order }: Props) {
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

      <div class="flex flex-row">
        <div class="basis-1/2">
          <p class="font-bold uppercase">Endereço de entrega</p>
          <p>Rua</p>
          <p>Complemento - Bairro</p>
          <p>Cidade - Estado</p>
          <p>CEP</p>
        </div>
        <div class="basis-1/2">
          <p class="font-bold uppercase">Forma de pagamento</p>
        </div>
      </div>
      <hr></hr>
      <div class="flex flex-col">
        {order.items.map((item) => {
          <div class="flex justify-between items-left">
            <image src={item.image} />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>;
        })}
      </div>
      <hr></hr>
      <div class="flex justify-between items-center">
        <p>Subtotal</p>
        <p>{order.total}</p>
      </div>
      <div class="flex justify-between items-center">
        <p>Desconto</p>
        <p>{order.discount}</p>
      </div>
      <div class="flex justify-between items-center">
        <p>Frete</p>
        <p>{order.shipping === 0 ? "Grátis" : order.shipping}</p>
      </div>
      <div class="flex justify-between items-center">
        <p class="font-bold uppercase">Total</p>
        <p class="font-bold">
          R${order.total + order.shipping - order.discount}
        </p>
      </div>
    </div>
  );
}

export default Order;
