import { Car } from "@prisma/client";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "./use-toast";

interface UseLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLoveItem: (id: string) => void;
}

export const useLovedCars = create(
  persist<UseLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id === data.id
        );

        if (existingItem)
          return toast({
            title: "El coche ya existe en la lista ❤️",
          });

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Coche añadido a la lista 🚗",
        });
      },
      removeLoveItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Coche eliminado de la lista",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
