"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [bg, setBg] = useState("bg-white");
  return (
    <main
      className={`transition-all ease flex min-h-screen flex-col items-center justify-center p-8 sm:p-12 md:p-24 mx-auto ${bg}`}
    >
      <nav className="flex justify-end fixed top-0 w-full">
        <div className="flex gap-2 py-4 px-6">
          <div
            className="w-4 h-4 rounded-full bg-white border border-slate-400 cursor-pointer"
            onClick={() => setBg("bg-white")}
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-blue-100 border border-slate-400 cursor-pointer"
            onClick={() => setBg("bg-blue-100")}
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-pink-100 border border-slate-400 cursor-pointer"
            onClick={() => setBg("bg-pink-100")}
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-red-100 border border-slate-400 cursor-pointer"
            onClick={() => setBg("bg-red-100")}
          ></div>
        </div>
      </nav>
      <div className="flex md:items-center gap-10 max-w-4xl md:flex-row flex-col">
        <Image
          src="/dp2.png"
          width={450}
          alt="Surabhi Nag"
          height={450}
          className="w-48 h-48 rounded-full overflow-hidden object-cover object-center"
        />
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="text-3xl font-medium">
            Hi 👋
            <br />
            I&apos;m Surabhi.
          </h1>
          <h2 className="text-xl font-medium"></h2>
          <p className="text-lg font-normal">
            <span className="font-medium">
              Running+working out, eating healthy,
            </span>{" "}
            and critiquing<span className="font-medium"> matcha</span> are a big
            part of my personality. I enjoy{" "}
            <span className="font-medium">writing code</span> and building
            stuff. I am currently studying{" "}
            <span className="font-medium">CS</span> at{" "}
            <span className="font-medium">University of British Columbia.</span>
          </p>
          <p className="text-lg mt-2">
            Click to see my{" "}
            <Link href="/resume.pdf" className="font-medium underline">
              resume
            </Link>{" "}
            or contact me.
          </p>
          <div className="flex gap-4 mt-2 items-center">
            <Link href="https://github.com/surabhinag2001" target="_blank">
              <Image
                width={25}
                height={25}
                src="/git.svg"
                alt="Github"
                className="hover:scale-[1.08] transition-all duration-200 ease"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/snag/" target="_blank">
              <Image
                width={25}
                height={25}
                src="/link.svg"
                alt="LinkedIn"
                className="hover:scale-[1.08] transition-all duration-200 ease"
              />
            </Link>
            <Link href="mailto:surabhinag2001@icloud.com" target="_blank">
              <Image
                width={25}
                height={25}
                src="/mail.svg"
                alt="E-mail"
                className="hover:scale-[1.08] transition-all duration-200 ease"
              />
            </Link>
            <Link
              href="https://www.strava.com/athletes/surabhi_nag"
              target="_blank"
            >
              <Image
                width={25}
                height={25}
                src="/strava.svg"
                alt="Strava"
                className="rounded-full overflow-hidden hover:scale-[1.08] transition-all duration-200 ease"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
