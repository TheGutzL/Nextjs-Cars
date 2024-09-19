import { Navbar } from "@/components/Shared/Navbar";
import { db } from "@/lib/db";
import { FiltersAndListCars } from "./components/FiltersAndListCars";
import { HeaderCars } from "./components/HeaderCars";

const pageCars = async () => {
  const cars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto max-w-7xl">
        <HeaderCars />
        <div>
          <FiltersAndListCars cars={cars} />
        </div>
      </div>
    </div>
  );
};

export default pageCars;
