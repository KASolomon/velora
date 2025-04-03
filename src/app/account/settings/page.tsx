"use client"
import { Bell, Globe, Lock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UserProfileForm } from "@/components/account/user-profile-form"
import { PasswordChangeForm } from "@/components/account/password-change-form"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-2">Account Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="password" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Password</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="preferences" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Preferences</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information and contact details.</CardDescription>
            </CardHeader>
            <CardContent>
              <UserProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="password" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password to keep your account secure.</CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordChangeForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications from Velora.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="order-updates" className="flex-1">
                      Order updates
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive emails about your order status
                      </p>
                    </Label>
                    <Switch id="order-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="promotions" className="flex-1">
                      Promotions and deals
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive emails about promotions, discounts, and limited-time offers
                      </p>
                    </Label>
                    <Switch id="promotions" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter" className="flex-1">
                      Newsletter
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive our weekly newsletter with new products and trends
                      </p>
                    </Label>
                    <Switch id="newsletter" />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Push Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-order" className="flex-1">
                      Order updates
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive push notifications about your order status
                      </p>
                    </Label>
                    <Switch id="push-order" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="push-promotions" className="flex-1">
                      Promotions and deals
                      <p className="text-sm font-normal text-muted-foreground">
                        Receive push notifications about promotions and deals
                      </p>
                    </Label>
                    <Switch id="push-promotions" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Save Notification Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>Customize your shopping experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Language and Region</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en-US">English (US)</option>
                      <option value="en-GB">English (UK)</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <select
                      id="currency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="usd">USD ($)</option>
                      <option value="eur">EUR (€)</option>
                      <option value="gbp">GBP (£)</option>
                      <option value="cad">CAD ($)</option>
                      <option value="aud">AUD ($)</option>
                    </select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Privacy Settings</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="data-collection" className="flex-1">
                      Data collection
                      <p className="text-sm font-normal text-muted-foreground">
                        Allow us to collect data to improve your shopping experience
                      </p>
                    </Label>
                    <Switch id="data-collection" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="personalized-ads" className="flex-1">
                      Personalized ads
                      <p className="text-sm font-normal text-muted-foreground">
                        Show personalized ads based on your browsing history
                      </p>
                    </Label>
                    <Switch id="personalized-ads" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cookies" className="flex-1">
                      Cookies
                      <p className="text-sm font-normal text-muted-foreground">
                        Allow cookies to remember your preferences
                      </p>
                    </Label>
                    <Switch id="cookies" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-gold hover:bg-gold/90 text-gold-foreground">Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

