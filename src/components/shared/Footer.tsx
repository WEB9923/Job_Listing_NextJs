import {JSX} from "react";
import {navLinks} from "@/constants";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer(): JSX.Element {
	return (
		<>
			<footer className={"p-10 bg-gray-50/50 text-black"}>
				<ul className={"flex justify-center items-center gap-10"}>
					{navLinks.map((link, _i) => (
						<Link href={link["route"]} key={_i}>
							<li>{link["name"]}</li>
						</Link>
					))}
				</ul>
				<div className="flex justify-center items-center gap-5 mt-5">
					<a href="https://facebook.com" target={"_blank"}><FaFacebook size={24} className={"text-gray-900/70 hover:text-purple-600 transition duration-300"}/></a>
					<a href="https://instagram.com" target={"_blank"}><FaInstagram size={24} className={"text-gray-900/70 hover:text-purple-600 transition duration-300"}/></a>
					<a href="https://twitter.com" target={"_blank"}><FaTwitter size={24} className={"text-gray-900/70 hover:text-purple-600 transition duration-300"}/></a>
				</div>
				<p className={"text-center mt-5 border-t border-gray-200 pt-10"}>
					Copyright &copy; 2024 All right reserved by JL
				</p>
			</footer>
		</>
	);
}