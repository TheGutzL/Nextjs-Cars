import { CardCar } from "./CardCar";
import { ListCarsProps } from "./ListCars.types";

const ListCars = ({ cars }: ListCarsProps) => {
  return (
    <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-4">
      {cars.map((car) => (
        <CardCar car={ car} key={car.id} />
      ))}
    </div>
  );
};

export default ListCars;
