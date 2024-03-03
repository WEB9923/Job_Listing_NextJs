"use client";
import {JSX, useState} from "react";
import useJobStore from "@/store/use.jobStore";
import JobCard from "@/components/shared/JobCard";
import Button from "@/components/ui/Button";

export default function Jobs(): JSX.Element {
	const [visibleJobs, setVisibleJobs] = useState<number>(8);
	const {filteredJobs} = useJobStore();
	const jobsIncrement: number = 4;

	const handleShowMore = (): void => {
		setVisibleJobs((prevState) => {
			return prevState + jobsIncrement;
		});
	}

	return (
		<>
			<div id={"jobs"} className="py-10 w-full">
				<div className="w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600">
					<h1>Job Listings</h1>
				</div>
				{filteredJobs.length < 1 ? (
					<div className="w-full text-center ">
						<h1 className={"text-2xl capitalize"}>no jobs found</h1>
						<span className={"text-sm capitalize"}>check back later</span>
					</div>
				): (
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-[90%] mx-auto max-w-[1400px]">
						{filteredJobs.slice(0, visibleJobs).map((job) => (
							<JobCard key={job.id} job={job}/>
						))}
					</div>
				)}
				{filteredJobs.length > visibleJobs && (
					<div className="text-center mt-10 text-sm">
						<Button onClick={handleShowMore}>
							Show More
						</Button>
					</div>
				)}
			</div>
		</>
	);
}