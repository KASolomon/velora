import * as z from "zod"

export const shippingFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(1, {
    message: "Please select a state.",
  }),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, {
    message: "Please enter a valid ZIP code (e.g., 12345 or 12345-6789).",
  }),
  country: z.string().min(1, {
    message: "Please select a country.",
  }),
  phone: z.string().regex(/^\+?[1-9]\d{9,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  saveInfo: z.boolean().optional(),
})

export type ShippingFormValues = z.infer<typeof shippingFormSchema>

export const paymentFormSchema = z.object({
  paymentMethod: z.enum(["credit-card", "paypal"]),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, {
      message: "Please enter a valid 16-digit card number.",
    })
    .optional(),
  expiryDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
      message: "Please enter a valid expiry date (MM/YY).",
    })
    .optional(),
  cvc: z
    .string()
    .regex(/^\d{3,4}$/, {
      message: "Please enter a valid CVC (3 or 4 digits).",
    })
    .optional(),
  nameOnCard: z
    .string()
    .min(2, {
      message: "Name on card must be at least 2 characters.",
    })
    .optional(),
  savePayment: z.boolean().optional(),
})

export type PaymentFormValues = z.infer<typeof paymentFormSchema>

