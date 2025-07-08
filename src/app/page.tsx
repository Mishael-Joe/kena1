/*
This is a Next.js App Router + Tailwind v4 + TypeScript setup for a landing page.
It uses Shadcn UI components and includes professional developer comments for clarity.
*/

// app/page.tsx
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
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen text-[#f5e8c7]">
      {/* Hero Section */}
      <section className="bg-[#25060d]">
        <div className="text-center max-w-3xl mx-auto pt-8 pb-12 p-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
            Done-For-You Creative Production That Sells Your Brand
          </h1>
          <p className="mt-6 text-lg text-muted">
            I'm Ziv – your digital creative partner. I craft content that blends
            strategy, storytelling, and standout visuals for brands ready to
            move fast and leave a mark.
          </p>
          <div className="mt-8">
            <Link
              href={`/contact`}
              className="bg-primary hover:bg-primary/85 text-muted font-semibold py-2 px-3 rounded-md"
            >
              Start My Project
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid with Dialog Modals */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto py-4 p-6">
        {/* Signature Visual Campaigns */}
        <Card className="border border-yellow-600/30">
          <CardContent className="p-6">
            <LucideClapperboard className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-primary">
              Signature Visual Campaigns
            </h3>
            <p className="mt-2 text-muted-foreground">
              From strategy to screen – done-for-you content that sells.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 bg-primary hover:bg-primary/85 text-muted font-medium">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground border border-primary">
                <DialogHeader>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    What I Offer
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    Where strategy meets style — and turns into content that
                    moves.
                  </p>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-primary font-semibold">
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
                    {/* <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                      Book a Campaign
                    </Button> */}
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                    Book a Campaign
                  </Button>
                </DialogFooter>
                {/* <Button className="mt-6 bg-primary text-black font-semibold">
                  Contact Me
                </Button> */}
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Content Strategy & Creative Direction */}
        <Card className="border border-yellow-600/30">
          <CardContent className="p-6">
            <LucideTrendingUp className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-primary">
              Content Strategy & Creative Direction
            </h3>
            <p className="mt-2 text-muted-foreground">
              Because visuals without strategy are just noise.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 bg-primary hover:bg-primary/85 text-muted font-medium">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground border border-primary">
                <DialogHeader>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    What I Offer
                  </h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-primary font-semibold">
                      📈 2. Content Strategy & Creative Direction
                    </h3>
                    <p>📊 Because visuals without strategy are just noise.</p>
                    <ul className="list-disc list-inside ml-4">
                      <li>Brand-aligned content planning</li>
                      <li>Campaign storyboarding</li>
                      <li>Monthly rollout calendars</li>
                      <li>Direction that aligns with your niche</li>
                    </ul>
                    {/* <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                      Request Strategy Session
                    </Button> */}
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                    Request Strategy Session
                  </Button>
                </DialogFooter>
                {/* <Button className="mt-6 bg-primary text-black font-semibold">
                  Contact Me
                </Button> */}
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Premium UGC & Branded Graphics */}
        <Card className="border border-yellow-600/30">
          <CardContent className="p-6">
            <LucideImage className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-primary">
              Premium UGC & Branded Graphics
            </h3>
            <p className="mt-2 text-muted-foreground">
              High-converting content designed to match your vibe.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 bg-primary hover:bg-primary/85 text-muted font-medium">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground border border-primary">
                <DialogHeader>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    What I Offer
                  </h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-primary font-semibold">
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
                    {/* <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                      See UGC Packages
                    </Button> */}
                  </div>
                </div>
                <DialogFooter>
                  <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                    See UGC Packages
                  </Button>
                </DialogFooter>
                {/* <Button className="mt-6 bg-primary text-black font-semibold">
                  Contact Me
                </Button> */}
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Fast Content for Busy Creators */}
        <Card className="border border-yellow-600/30">
          <CardContent className="p-6">
            <LucideClock className="h-8 w-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-primary">
              Fast Content for Busy Creators
            </h3>
            <p className="mt-2 text-muted-foreground">
              You're busy. I deliver – fast.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-4 bg-primary hover:bg-primary/85 text-muted font-medium">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="text-muted-foreground border border-primary">
                <DialogHeader>
                  <h2 className="text-2xl font-bold text-primary mb-2">
                    What I Offer
                  </h2>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-primary font-semibold">
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
                {/* <Button className="mt-6 bg-primary text-black font-semibold">
                  Contact Me
                </Button> */}
                <DialogFooter>
                  <Button className="mt-2 bg-primary hover:bg-primary/85 text-muted">
                    Get It Fast
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
