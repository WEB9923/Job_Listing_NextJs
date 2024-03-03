import {JSX} from "react";
import Image from "next/image";

export default function About(): JSX.Element {
	return (
		<>
			<div className="py-16 bg-gray-50/50 mt-10" id={"about"}>
				<div className="w-[90%] max-w-[1450px] mx-auto">
					<h2 className={"w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600"}>
						About Us
					</h2>
					<div className="mt-5 w-full flex flex-col justify-center items-center">
						<p className={"leading-loose text-center"}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Facilisis volutpat est velit egestas. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. At in tellus integer feugiat scelerisque varius morbi. Urna duis convallis convallis tellus id interdum velit laoreet. Neque egestas congue quisque egestas diam in arcu cursus euismod. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Mattis ullamcorper velit sed ullamcorper morbi. At urna condimentum mattis pellentesque id nibh. Sem nulla pharetra diam sit amet nisl suscipit. Et malesuada fames ac turpis egestas sed tempus urna. Arcu risus quis varius quam quisque. Cursus euismod quis viverra nibh.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
