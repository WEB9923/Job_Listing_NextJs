import {JSX} from "react";
import SearchForm from "@/components/shared/SearchForm";
import {jobType} from "@/types/types";

interface HeroProps {
	jobs: jobType[];
}

export default function Hero({jobs}: HeroProps): JSX.Element {
	return (
		<>
			<div className={"bg-[url('/hero.png')] h-screen relative w-full bg-cover mt-[-70px]"} id={"home"}>
				<div className="flex flex-col h-full items-center justify-center pt-[82px] gap-20 w-[90%] mx-auto max-w-[1450px]">
					<div className="text-center flex flex-col gap-3">
						<h1 className="text-6xl font-extrabold text-black capitalize">
							land the{" "}
							<span className={"text-purple-600 font-extrabold"}>dream job</span>
							, you deserve
						</h1>
						<span className={"font-thin"}>
							100,000 jobs listed here! your dream job is waiting
						</span>
					</div>
					<SearchForm jobs={jobs}/>
				</div>
			</div>
		</>
	);
}
