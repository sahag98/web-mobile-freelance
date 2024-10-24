"use client";
import { useEffect, useRef } from "react";
import { LensDemo } from "../LensDemo";
import { Card, CardContent } from "../ui/card";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
export function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const portfolioCards = //@ts-ignore
      portfolioRef.current.querySelectorAll(".portfolio-card");

    gsap.set([portfolioCards], { opacity: 0, y: 25 });

    ScrollTrigger.batch(portfolioCards, {
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
  const portfolioItems = [
    {
      id: 1,
      title: "Doug's Tractor Works",
      image: "/dougstractorworks.png",
      link: "https://dougstractorworks.com/",
      description: "Landing page website for a tractor business.",
    },
    {
      id: 2,
      title: "Mr. O Fresh",
      image: "/mrofresh.png",
      link: "https://mrofresh.com/",
      description: "Landing page website for a car detailing business.",
    },
    {
      id: 3,
      title: "Alan Reyes Real Estate",
      image: "/alanreyeswebsite.png",
      link: "https://alan-reyes.vercel.app/",
      description: "Landing page website for a real estate agent.",
    },
    {
      id: 4,
      title: "Rooted Truth",
      image: "/rootedtruthwebsite.png",
      link: "https://rootedtruth.vercel.app/",
      description: "Blog website.",
    },
    {
      id: 5,
      title: "Cordelia Photography",
      image: "/cordeliawebsite.png",
      link: "https://www.cordeliafaithphotography.ca/",
      description: "Landing page website for a photography business.",
    },
    {
      id: 6,
      title: "Portfolio Website",
      image: "/portfoliowebsite.png",
      link: "https://sahak-portfolio.com/",
      description: "Personal portfolio website.",
    },
  ];
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className=" px-4 md:px-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Portfolio
        </h2>
        <div
          ref={portfolioRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioItems.map((item) => (
            <LensDemo key={item.id} item={item} />
            // <Card key={item.id}>
            //   <CardContent className="p-4">
            //     <img
            //       alt={`Portfolio item ${item}`}
            //       className="object-cover w-full h-48 rounded-lg"
            //       height="200"
            //       src={`/placeholder.svg?height=200&width=300`}
            //       style={{
            //         aspectRatio: "300/200",
            //         objectFit: "cover",
            //       }}
            //       width="300"
            //     />
            //     <h3 className="mt-2 text-xl font-bold">Project {item}</h3>
            //     <p className="text-sm text-gray-500 dark:text-gray-400">
            //       Brief description of the project and technologies used.
            //     </p>
            //   </CardContent>
            // </Card>
          ))}
        </div>
      </div>
    </section>
  );
}