import {JSX} from "react";
import Hero from "@/components/shared/Hero";
import {prisma} from "@/lib/prisma";
import Jobs from "@/components/shared/Jobs";
import Sponsors from "@/components/shared/Sponsors";
import About from "@/components/shared/About";
import {jobType} from "@/types/types";
import Contact from "@/components/shared/Contact";

export default async function Home(): Promise<JSX.Element> {
  const jobs: jobType[] = await prisma.jobPosting.findMany({
    orderBy: {createdAt: "desc"}
  });
  return (
    <>
      <Hero jobs={jobs}/>
      <Jobs/>
      <Sponsors/>
      <About/>
      <Contact/>
    </>
  );
}
