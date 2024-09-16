import Image from "next/image";
import Link from "next/link";

const LogoDashboard = () => {
  return (
    <Link
      href="/"
      className="flex items-center p-2 md:p-6 h-20 gap-2 border-b cursor-pointer min-h-20"
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        priority
      />
      <h1 className="text-xl font-bold">Gutz Cars</h1>
    </Link>
  );
};

export default LogoDashboard;
