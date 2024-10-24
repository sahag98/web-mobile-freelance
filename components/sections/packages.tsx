"use client";

import React, { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Packages = () => {
  const packagesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //@ts-expect-error
    const packageCards = packagesRef.current.querySelectorAll(".package-card");

    gsap.set([packageCards], { opacity: 0, y: 25 });

    ScrollTrigger.batch(packageCards, {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      once: true,
    });
  }, []);
  return (
    <section
      id="packages"
      className="w-full py-12 md:py-24 lg:py-32"
      ref={packagesRef}
    >
      <div className="px-4 md:px-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="package-card flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Simple Website
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">$400</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Perfect for small businesses or individuals looking to establish
                an online presence quickly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Single page design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Responsive layout</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Contact form integration</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-base font-bold">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="package-card bg-primary text-white flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Advanced Website
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">$500</p>
              <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
                Suitable for growing businesses needing a more comprehensive
                website with easy content management.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Multi-section design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Content Management System</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-background" />
                  <span>Analytics integration</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-base font-bold hover:bg-secondary bg-background text-foreground">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="package-card flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">Mobile App</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">$600</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Ideal for startups or businesses wanting to enter the mobile
                market with a basic but functional app.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Basic mobile app design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>iOS or Android platform</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Core functionality implementation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>User authentication</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-base font-bold">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
          <Card className="package-card flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Custom Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-4">Custom</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                For enterprises or complex projects requiring tailored solutions
                and ongoing support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Full-stack development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Scalable architecture</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  <span>Ongoing support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full text-base font-bold">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Packages;
