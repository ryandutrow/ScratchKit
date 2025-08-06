
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Gift, GolfIcon, Star } from "lucide-react";

export default function ScratchKitLanding() {
  return (
    <div className="min-h-screen bg-green-50 text-gray-800 font-sans">
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">ScratchKit</h1>
        <p className="text-lg">Your Monthly Golf Upgrade—Delivered.</p>
      </header>

      <main className="p-8 grid gap-10">
        {/* Hero Section */}
        <section className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Elevate Your Game, One Box at a Time</h2>
            <ul className="space-y-2">
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" />1 Sleeve of Pro V1 Balls</li>
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" />Hand-picked Accessories</li>
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" />Exclusive Bonuses & Surprises</li>
            </ul>
            <Button className="mt-6 bg-green-700 hover:bg-green-800">Get ScratchKit</Button>
          </div>
          <img src="https://images.unsplash.com/photo-1602772879139-5f5b3a3f3a3a" alt="Golf Subscription Box" className="rounded-xl shadow-md" />
        </section>

        {/* Pricing Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Choose Your Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white p-6 rounded-2xl shadow-md">
              <CardContent className="space-y-4">
                <Star className="mx-auto text-yellow-500" size={40} />
                <h3 className="text-xl font-semibold">Basic Kit</h3>
                <p className="text-2xl font-bold">$34.99/mo</p>
                <ul className="text-left space-y-1">
                  <li>✓ Pro V1 Sleeve</li>
                  <li>✓ 2-3 Golf Accessories</li>
                  <li>✓ Monthly Surprise</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Subscribe</Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 rounded-2xl shadow-md">
              <CardContent className="space-y-4">
                <Gift className="mx-auto text-red-500" size={40} />
                <h3 className="text-xl font-semibold">Premium Kit</h3>
                <p className="text-2xl font-bold">$49.99/mo</p>
                <ul className="text-left space-y-1">
                  <li>✓ Everything in Basic</li>
                  <li>✓ Premium Glove or Towel Quarterly</li>
                  <li>✓ Exclusive Items</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Subscribe</Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 rounded-2xl shadow-md">
              <CardContent className="space-y-4">
                <GolfIcon className="mx-auto text-blue-500" size={40} />
                <h3 className="text-xl font-semibold">Annual Kit</h3>
                <p className="text-2xl font-bold">$399/year</p>
                <ul className="text-left space-y-1">
                  <li>✓ 12 Monthly Deliveries</li>
                  <li>✓ Bonus Dozen Pro V1s</li>
                  <li>✓ Priority Shipping</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-10 text-sm text-gray-600">
          © 2025 ScratchKit. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
