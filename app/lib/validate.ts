import { z } from "zod";

export const numberValidator = z
  .string()
  .trim()
  .min(1, "String must not be empty")
  .pipe(z.coerce.number().positive())
  .refine((n) => !isNaN(n), {
    message: "Invalid number",
  });
