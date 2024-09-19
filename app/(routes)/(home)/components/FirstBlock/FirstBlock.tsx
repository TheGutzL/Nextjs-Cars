import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

const FirstBlock = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
      <Reveal
        className="p-6 lg:pl-40"
        position="bottom"
      >
        <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold">
          Premium
          <span className="block">Rental Cars </span>
          in Spain
        </h1>
        <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
          Don&apos;t miss the opportunity to rent a luxury car in Spain. We have
          the
        </p>
      </Reveal>

      <Reveal
        className="flex justify-end"
        position="right"
      >
        <Image
          src="/images/porsche.jpg"
          alt="Rent cars"
          width={800}
          height={800}
          priority
        />
      </Reveal>
    </div>
  );
};

export default FirstBlock;
