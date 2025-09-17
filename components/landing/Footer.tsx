"use client";
import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-background text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4">
              <Image
                src="https://res.cloudinary.com/dcwsgwsfw/image/upload/t_NO-BG/v1756637922/lit/lit-logo.png"
                alt="Logo"
                height={50}
                width={50}
              ></Image>
            </div>
            <p className="max-w-xs mb-4">Lit Labs; Bringing Ideas to Life</p>
            <div className="flex space-x-4">
              <Link href={"https://www.linkedin.com/company/bashcraft/"}>
                <Linkedin size={20} />
              </Link>
              <Link href={"https://github.com/BashCraftClub"}>
                <Github size={20} />
              </Link>
              <Link href={"https://www.instagram.com/bashcraft.vit/"}>
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Product</h3>
              <ul className="space-y-2">
                <li>Registry</li>
                <li>Pricing</li>
                <li>Sign in ↗</li>
                <li>Docs ↗</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-2">
                <li>Blog</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>Refrences</li>
                <li>Telemetry Compliance</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="w-full justify-center mt-5">
          <TextHoverEffect text="@yourmail" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
