import * as zod from "zod";

export const authValidationSchema = zod.object({
  login: zod.string(),
  password: zod.string(),
});

export type AuthValidationSchema = zod.infer<typeof authValidationSchema>;
