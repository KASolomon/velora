"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const profileFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  bio: z.string().max(160).optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can be replaced with actual user data
const defaultValues: Partial<ProfileFormValues> = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  bio: "Premium shopper with an eye for quality and design.",
}

export function UserProfileForm() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log(data)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Profile Picture</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              Upload New Image
            </Button>
            <Button variant="outline" size="sm" className="text-destructive">
              Remove
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your phone number" {...field} />
                </FormControl>
                <FormDescription>This will be used for order updates and delivery notifications.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                </FormControl>
                <FormDescription>You can @mention other users and organizations.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-gold hover:bg-gold/90 text-gold-foreground" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </form>
      </Form>
    </div>
  )
}

