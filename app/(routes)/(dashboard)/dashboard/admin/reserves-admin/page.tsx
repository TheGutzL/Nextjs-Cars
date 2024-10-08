import { db } from "@/lib/db";
import { isAdministrator } from "@/lib/isAdministrator";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";

const pageReservesAdmin = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdministrator(userId)) return redirect("/");

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <h1 className="text-3xl mb-4">Reserves page</h1>

      <TableReserves orders={orders} />
    </div>
  );
};

export default pageReservesAdmin;
