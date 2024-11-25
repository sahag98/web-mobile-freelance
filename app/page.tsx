import { LensDemo } from "@/components/LensDemo";
import Packages from "@/components/sections/packages";
import { Portfolio } from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import DotPattern from "@/components/ui/dot-pattern";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Code, Smartphone, Globe, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex relative flex-col min-h-screen">
      <header className="px-4 md:px-32 bg-background border-b fixed top-0 z-10 w-full h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Sahak Web&Mobile Freelancing</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#packages"
          >
            Packages
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full relative min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="container z-[5] px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <TextGenerateEffect
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                  words={"Web & Mobile Freelancing Excellence"}
                /> */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Web & Mobile Freelancing Excellence
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforming ideas into powerful digital solutions.
                  Specializing in web and mobile development to bring your
                  vision to life.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"https://cal.com/sahag-arz-d8kd8p"}>
                  <RainbowButton>Get Started</RainbowButton>
                </Link>
                <Link href={"#packages"}>
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
          <span className="absolute italic text-sm bottom-3">
            Colossians 3:23
          </span>
        </section>
        <Services />
        <Portfolio />
        <Packages />
        {/* <LensDemo /> */}
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className=" px-4 md:px-32">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <Card key={item}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <Star className="w-12 h-12 text-yellow-400" />
                    <p className="text-center italic">
                      "Exceptional work! The freelancer delivered beyond our
                      expectations."
                    </p>
                    <p className="font-semibold">- Client {item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-32">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Acme Freelance. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
