import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  farmSize: z
    .string()
    .min(1, "Farm size is required")
    .refine((val) => !Number.isNaN(Number(val)) && Number(val) > 0, {
      message: "Enter a valid acreage",
    }),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s-]+$/, "Enter a valid phone number"),
  service: z
    .string()
    .refine((value): value is "spray" | "nutrient" | "mapping" =>
      ["spray", "nutrient", "mapping"].includes(value),
    { message: "Please select a service" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
