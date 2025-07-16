/*
This is a Next.js App Router + Tailwind v4 + TypeScript setup for a landing page.
It uses Shadcn UI components and includes professional developer comments for clarity.
*/

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  LucideClapperboard,
  LucideTrendingUp,
  LucideImage,
  LucideClock,
  PlayCircleIcon,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen text-[#f5e8c7] bg-white px-6 py-6 lg:px-20 space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
            Done-For-You Creative Production That Sells Your Brand
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            I'm Ziv – your digital creative partner. I craft content that blends
            strategy, storytelling, and standout visuals for brands ready to
            move fast and leave a mark.
          </p>
          <Button
            className="mt-6 bg-yellow-600 hover:bg-yellow-700 text-white"
            asChild
          >
            <Link
              href={`/contact`}
              className="bg-muted hover:bg-muted/90 text-[#25060d] font-semibold py-2 px-3 rounded-md"
            >
              Start My Project
            </Link>
          </Button>
        </div>

        {/* Video Section */}
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <PlayCircleIcon className="w-14 h-14 text-gray-500" />
        </div>
      </section>

      {/* Services Grid with Dialog Modals */}
      <section className="grid md:grid-cols-2 gap-10">
        {/* Signature Visual Campaigns */}
        <Card>
          <CardContent className="p-6 space-y-2">
            <LucideClapperboard className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">
              Signature Visual Campaigns
            </h3>
            <p className="mt-2 text-muted-foreground">
              From strategy to screen – done-for-you content that sells.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4" variant={"outline"}>
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground">
                <DialogHeader>
                  <h2 className="text-2xl font-bold mb-2">What I Offer</h2>
                  <p className="mb-4 text-muted-foreground">
                    Where strategy meets style — and turns into content that
                    moves.
                  </p>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      🔲 1. Signature Visual Campaigns
                    </h3>
                    <p>
                      🎬 From strategy to screen — done-for-you content that
                      sells.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>
                        Short-form commercial videos (TikTok, Reels, Shorts)
                      </li>
                      <li>Lifestyle & motion edits</li>
                      <li>Cast highlights / trailers</li>
                      <li>Entertainment or product-based promos</li>
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2" variant={"outline"} asChild>
                    <Link href="/contact">Book a Campaign</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Content Strategy & Creative Direction */}
        <Card>
          <CardContent className="p-6 space-y-2">
            <LucideTrendingUp className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">
              Content Strategy & Creative Direction
            </h3>
            <p className="mt-2 text-muted-foreground">
              Because visuals without strategy are just noise.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4" variant={"outline"}>
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground">
                <DialogHeader>
                  <h2 className="text-2xl font-bold mb-2">What I Offer</h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      📈 2. Content Strategy & Creative Direction
                    </h3>
                    <p>📊 Because visuals without strategy are just noise.</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Brand-aligned content planning</li>
                      <li>Campaign storyboarding</li>
                      <li>Monthly rollout calendars</li>
                      <li>Direction that aligns with your niche</li>
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2" variant={"outline"} asChild>
                    <Link href="/contact">Request Strategy Session</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Premium UGC & Branded Graphics */}
        <Card>
          <CardContent className="p-6 space-y-2">
            <LucideImage className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">
              Premium UGC & Branded Graphics
            </h3>
            <p className="mt-2 text-muted-foreground">
              High-converting content designed to match your vibe.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4" variant={"outline"}>
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground">
                <DialogHeader>
                  <h2 className="text-2xl font-bold mb-2">What I Offer</h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      🧠 3. Premium UGC & Branded Graphics
                    </h3>
                    <p>
                      🎨 High-converting content designed to match your vibe.
                    </p>
                    <ul className="list-disc list-inside ml-4">
                      <li>UGC-style videos</li>
                      <li>Branded social carousels</li>
                      <li>Posters, promo cards</li>
                      <li>Templates you can reuse</li>
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2" variant={"outline"} asChild>
                    <Link href="/contact">See UGC Packages</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Fast Content for Busy Creators */}
        <Card>
          <CardContent className="p-6 space-y-2">
            <LucideClock className="h-8 w-8 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold">
              Fast Content for Busy Creators
            </h3>
            <p className="mt-2 text-muted-foreground">
              You're busy. I deliver – fast.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4" variant={"outline"}>
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground">
                <DialogHeader>
                  <h2 className="text-2xl font-bold mb-2">What I Offer</h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">
                      ⚡ 4. Fast Content for Busy Creators
                    </h3>
                    <p>⚙️ You’re busy. I deliver — fast.</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>48–72hr editing</li>
                      <li>Caption overlays & audio sync</li>
                      <li>Content packs for launch weeks</li>
                      <li>Re-editing your raw footage</li>
                    </ul>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2" variant={"outline"} asChild>
                    <Link href="/contact">Get It Fast</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
