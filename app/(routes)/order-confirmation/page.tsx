import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderConfirmationPage = () => {
  return (
    <div>
      <Navbar />

      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl">¡Muchas gracias por confiar en nosotros!</h1>
          <p>
            En breves momentos recibiras toda la información a traves de tu
            correo electronico
          </p>
          <p>
            Puedes visualizar todas tus reservas dentro de tu Area de cliente
          </p>
          <Link href="/">
            <Button>Volvera ver los productos</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
