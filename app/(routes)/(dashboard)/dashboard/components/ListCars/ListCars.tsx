"use client";

import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { ListCarsProps } from "./ListCars.types";

const ListCars = ({ cars }: ListCarsProps) => {
  const { addLoveItem, lovedItems, removeLoveItem } = useLovedCars();

  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {cars.map((car: Car) => {
        const {
          priceDay,
          photo,
          engine,
          id,
          people,
          name,
          transmission,
          type,
          cv,
        } = car;

        const likedCar = lovedItems.some((item) => item.id === id);

        return (
          <div
            key={id}
            className="p-1 rounded-lg shadow-md hover:shadow-lg"
          >
            <Image
              src={photo}
              alt={name}
              width={400}
              height={600}
              className="rounded-lg"
            />
            <div className="p-3">
              <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl min-h-16 lg:min-h-fit">{name}</p>
                <p>{priceDay}$ /dia</p>
              </div>
              <p className="flex items-center">
                <Gem
                  className="w-4 h-4 mr-2"
                  strokeWidth={1}
                />
                {type}
              </p>
              <p className="flex items-center">
                <Wrench
                  className="w-4 h-4 mr-2"
                  strokeWidth={1}
                />
                {transmission}
              </p>
              <p className="flex items-center">
                <Users
                  className="w-4 h-4 mr-2"
                  strokeWidth={1}
                />
                {people}
              </p>
              <p className="flex items-center">
                <Fuel
                  className="w-4 h-4 mr-2"
                  strokeWidth={1}
                />
                {engine}
              </p>

              <p className="flex items-center">
                <Gauge
                  className="w-4 h-4 mr-2"
                  strokeWidth={1}
                />
                {cv} CV
              </p>

              <div className="flex items-center justify-center gap-x-3">
                <ModalAddReservation car={car} />
                <Heart
                  className={`mt-2 cursor-pointer ${likedCar && "fill-black"}`}
                  onClick={
                    likedCar
                      ? () => removeLoveItem(car.id)
                      : () => addLoveItem(car)
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListCars;
