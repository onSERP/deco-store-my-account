import Title from "./Title.tsx";
import type { Order as OrderType } from "../../sections/MyAccount.tsx";

export interface Props {
  title: string;
  orders: OrderType[];
}

function OrderList({ title = "Pedidos", orders }: Props) {
  return (
    <div>
      <Title content={title} size="medium" />
      {orders.map((order, i) => {
        let statusClass = "";
        switch (order.status) {
          case "Em processamento":
            statusClass = "text-yellow-400 uppercase font-bold";
            break;
          case "Completo":
            statusClass = "text-green-500 uppercase font-bold";
            break;
          case "Cancelado":
            statusClass = "text-red-600 uppercase font-bold";
            break;
        }
        return (
          <div
            key={i}
            class="flex-col bg-white rounded shadow-xl my-4 px-4 py-4"
          >
            <div class="flex justify-between items-center">
              <p class="font-bold">Pedido Nº {order.id}</p>
              <p class="text-gray-400">{order.date}</p>
            </div>
            <div class="flex justify-between items-center pt-4">
              <p>Valor: R${order.total}</p>
              <p>Itens: {order.items.length}</p>
              <p>Pagamento:</p>
            </div>
            <div class="flex justify-between items-center py-4">
              <a
                aria-label="Detalhes"
                href={`/my-account/order/${order.id}`}
                class="btn"
              >
                Detalhes
              </a>
              <p class={statusClass}>{order.status}</p>
            </div>
          </div>
        );
      })}
      <a
        aria-label="Ver mais pedidos"
        href="#"
        class="btn btn-primary uppercase"
      >
        Ver mais pedidos
      </a>
    </div>
  );
}

export default OrderList;
