"use client";
import {JSX} from "react";
import {jobType} from "@/types/types";
import Link from "next/link";
import Image from "next/image";

interface JobsCardProps {job: jobType;}

export default function JobCard({job}: JobsCardProps): JSX.Element {
	return (
		<>
			<Link href={`/job/${job["id"]}`}>
				<div className="border p-3 rounded-md flex flex-col hover:bg-purple-600 transition duration-500 hover:text-white">
					<div className="flex justify-between">
						<div className="">
							<Image src={job["img"] ? job["img"] : "/fallbackimage.png"} alt={`${job["author"]} logo`} height={40} width={40}/>
							<h2 className={"text-sm"}>{job["author"]}</h2>
						</div>
						<h2>{job["salary"]}k/year</h2>
					</div>
					<div className="mt-3 text-xl">
						<h3>{job["name"]}</h3>
						<p className={"text-[17px]"}>{job["location"]}</p>
						<span className={"bg-purple-600 inline-block text-xs px-3 py-1 rounded-md text-white"}>
							{job["employmentType"]}
						</span>
					</div>
				</div>
			</Link>
		</>
	);
}
