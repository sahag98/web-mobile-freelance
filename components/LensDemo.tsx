"use client";
import { useState } from "react";
import { Lens } from "./ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Eye, Globe } from "lucide-react";
import Link from "next/link";

export function LensDemo({ item }: any) {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="portfolio-card">
      <div className="w-full relative border rounded-xl overflow-hidden bg-gray-50 p-4">
        <div className="relative z-10">
          <Lens hovering={hovering} setHovering={setHovering}>
            <Image
              src={item.image}
              alt="image"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </Lens>
          <motion.div
            animate={{
              filter: hovering ? "blur(2px)" : "blur(0px)",
            }}
            className="py-4 relative z-20"
          >
            <div className="flex items-center justify-between">
              <h2 className=" text-2xl text-left font-bold">{item.title}</h2>
              <Link
                target="_blank"
                href={item.link}
                className="bg-primary/50 cursor-pointer hover:scale-105 transition-all rounded-lg p-2"
              >
                <Globe color="white" />
              </Link>
            </div>
            <p className=" text-left  mt-4">{item.description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
