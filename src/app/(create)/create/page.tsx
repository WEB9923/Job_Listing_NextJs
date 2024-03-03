import {JSX} from "react";
import CreateForm from "@/components/shared/CreateForm";

export default function CreatePage(): JSX.Element {
	return (
		<>
			<div className="max-w-[1450px] w-[90%] mx-auto">
				<div className="w-full mt-5 text-center">
					<h1 className={"md:text-6xl text-4xl font-extrabold uppercase mb-1"}>
						post a {" "}
						<span className={"text-purple-600"}>job</span>
					</h1>
					<span className={"w-full text-center"}>
						currently 100,000 users are actively looking for a job
					</span>
				</div>
				<CreateForm/>
			</div>
		</>
	);
}
