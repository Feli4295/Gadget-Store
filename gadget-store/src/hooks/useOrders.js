import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export function useOrders() {
  const ctx = useContext(OrderContext);

  if (!ctx) {
    console.error("❌ useOrders() – OrderContext is NULL!");
  }

  return ctx || { orders: [], addOrder: () => {} };
}