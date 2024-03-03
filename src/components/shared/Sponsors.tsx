import {JSX} from "react";
import {sponsorImages} from "@/constants";
import Image from "next/image";

export default function Sponsors(): JSX.Element {
	return (
		<>
			<section className={"py-10"}>
				<div className="max-w-[1450px] mx-auto w-[90%]">
					<div className="w-full text-center">
						<h2 className={"text-3xl"}>
							More Than {" "}
							<span className={"text-purple-600 font-bold"}>
								10,000 Companies
							</span>{" "}
							Trust us
						</h2>
					</div>
					<div className="flex justify-between items-center mt-5 flex-wrap gap-10">
						{sponsorImages.map((sponsor, _i) => (
							<Image
								src={sponsor["src"]}
								alt={sponsor["alt"]}
								width={144}
								height={144}
								key={_i}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}