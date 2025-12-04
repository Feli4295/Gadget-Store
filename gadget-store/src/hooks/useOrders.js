import { useContext } from "react";
// Import the context constant from the component file
import { OrderContext } from "../context/OrderContext"; 

export function useOrders() {
  return useContext(OrderContext);
}