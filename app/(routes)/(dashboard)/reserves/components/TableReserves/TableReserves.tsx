import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/formatPrice";
import { TableReservesProps } from "./TableReserves.types";

const TableReserves = ({ orders }: TableReservesProps) => {
  const totalAmount = orders.reduce((acc, order) => {
    return acc + parseFloat(order.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent bookings</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Date Start</TableHead>
          <TableHead>Date End</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell>{new Date(order.orderDate).toLocaleString()}</TableCell>
            <TableCell>
              {new Date(order.orderEndDate).toLocaleString()}
            </TableCell>
            <TableCell>
              <div className="p-2 text-white bg-green-600 rounded-lg w-fit">
                {order.status}
              </div>
            </TableCell>
            <TableCell className="text-right">{formatPrice(Number(order.totalAmount))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">
            {formatPrice(totalAmount)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default TableReserves;
