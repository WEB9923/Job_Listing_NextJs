import {JSX} from "react";
import formatPostedDate from "@/utils/formatDate";

interface DynamicProps {
	params: {
		id: string;
	}
}

const getData = async (id: string) => {
	const res: Response = await fetch(`http://localhost:3000/api/job/${id}`, {
		cache: "no-store"
	});
	if (!res.ok) {
		throw new Error("Failed to load resource.");
	}
	return res.json();
}

export default async function JobPage({params}: DynamicProps): Promise<JSX.Element> {
	const {id} = params;
	const job = await getData(id);
	const formattedPostDate = formatPostedDate(
		job["createdAt"]
	);
	return (
		<>
			<div className="bg-[url('/hero.png')] h-fit bg-cover relative w-full mt-[-70px] py-28">
				<div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
					<h1 className={"text-purple-600 font-bold text-4xl"}>{job["name"]}</h1>
				</div>
			</div>
			<div className="w-[90%] mx-auto max-w-[1450px] py-20">
				<div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
					<div className="lg:col-span-4 md:col-span-6 ">
						<div className="shadow rounded-md bg-white sticky top-20">
							<div className="p-6">
								<h5 className={"text-lg font-semibold"}>
									Job Information
								</h5>
								<div className="p-6 border-t border-slate-100">
									<ul>
										<li className={""}>
											<div className="">
												<p>Employment Type:</p>
												<span className={"font-medium"}>
													{job["employmentType"]}
												</span>
											</div>
										</li>
										<li>
											<div className="mt-4">
												<p>Company:</p>
												<span className={"font-medium"}>
													{job["author"]}
												</span>
											</div>
										</li>
										<li className={"mt-4"}>
											<div className="">
												<p>Location:</p>
												<span className={"font-medium"}>
													{job["location"]}
												</span>
											</div>
										</li>
										<li className={"mt-4"}>
											<div className="">
												<p>Salary:</p>
												<span className={"font-medium"}>
													{job["salary"]}k/year
												</span>
											</div>
										</li>
										<li className={"mt-4"}>
											<div className="">
												<p>Posted:</p>
												<span className={"font-medium"}>
													{formattedPostDate}
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:col-span-8 md:col-span-6">
						<h5 className={"text-lg font-semibold"}>
							Job Description:
						</h5>
						<p className={"mt-4 text-slate-400"}>
							{job["description"]}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
