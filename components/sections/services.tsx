"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Code, Globe, Smartphone, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    //@ts-expect-error
    const cards = servicesRef?.current.querySelectorAll(".bento-card");

    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.batch(cards, {
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
      id="services"
      className="w-full py-12 md:py-24 bg-gray-50 lg:py-32"
      ref={servicesRef}
    >
      <div className=" px-4 md:px-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3">
          <Card className="bento-card hover:border-blue-200 transition-all border col-span-2 row-span-2">
            <CardContent className="flex flex-col items-center justify-center space-y-4 p-6 h-full">
              <Code className="w-12 h-12 text-primary" />
              <h3 className="md:text-2xl text-xl font-bold">Web Development</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Custom websites and web applications tailored to your needs.
              </p>
            </CardContent>
          </Card>
          <Card className="bento-card hover:border-red-200 border transition-all">
            <CardContent className="flex flex-col items-center justify-center space-y-2 p-4 h-full">
              <Smartphone className="w-8 h-8 text-primary" />
              <h3 className="md:text-2xl text-xl font-bold">Mobile Apps</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Cross-platform mobile apps for iOS and Android. From concept to
                app store submission, we've got you covered.
              </p>
            </CardContent>
          </Card>
          <Card className="bento-card hover:border-green-200 border">
            <CardContent className="flex flex-col items-center justify-center space-y-2 p-4 h-full">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="md:text-2xl text-xl font-bold">UI/UX Design</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Creating intuitive and engaging user experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="bento-card col-span-2 hover:border-orange-200 border">
            <CardContent className="flex flex-col items-center justify-center space-y-2 p-4 h-full">
              <Zap className="w-8 h-8 text-primary" />
              <h3 className="md:text-2xl text-xl font-bold">
                SEO Optimization
              </h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Improve your online visibility and drive organic traffic to your
                website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
