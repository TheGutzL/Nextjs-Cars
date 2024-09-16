import { z } from "zod";

export const formAddCarSchema = z.object({
  name: z.string().min(2).max(50),
  cv: z.string().min(2).max(50),
  transmission: z.string().min(2).max(50),
  people: z.string().min(1),
  photo: z.string().min(2).max(100),
  engine: z.string().min(2).max(50),
  type: z.string().min(2).max(50),
  priceDay: z.string().min(2).max(50),
  isPublish: z.boolean(),
});

export type FormAddCarSchema = z.infer<typeof formAddCarSchema>;

export const defaultValues = {
  name: "",
  cv: "",
  transmission: "",
  people: "",
  photo: "",
  engine: "",
  type: "",
  priceDay: "",
  isPublish: false,
};
