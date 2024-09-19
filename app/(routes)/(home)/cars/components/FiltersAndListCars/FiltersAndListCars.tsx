"use client";

import { Car } from "@prisma/client";
import { useEffect, useState } from "react";
import FiltersCars from "../FiltersCars/FiltersCars";
import { ListCars } from "../ListCars";
import { FiltersAndListCarsProps } from "./FiltersAndListCars.types";

const FiltersAndListCars = ({ cars }: FiltersAndListCarsProps) => {
  const [filteredCars, setfilteredCars] = useState<Car[]>();
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    let filtered = cars;

    if (filters.type) {
      filtered = filtered.filter((car) =>
        car.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.transmission
          .toLowerCase()
          .includes(filters.transmission.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.engine.toLowerCase().includes(filters.engine.toLowerCase())
      );
    }

    if (filters.transmission) {
      filtered = filtered.filter((car) =>
        car.people.toLowerCase().includes(filters.people.toLowerCase())
      );
    }

    setfilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = (filterName: string, filterValue: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: filterValue,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
    });
  };

  return (
    <div>
      <FiltersCars
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
        filters={filters}
      />
      <ListCars cars={filteredCars} />
    </div>
  );
};

export default FiltersAndListCars;
