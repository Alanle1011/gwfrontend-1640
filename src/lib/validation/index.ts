import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  username: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const ContributionValidation = z.object({
  uploadedUserId: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  title: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  content: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  submissionPeriodId: z.string(),
  file: z.custom<File[]>(),
});