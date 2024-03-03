"use client";
import {JSX, useState} from "react";
import Link from "next/link";
import {MdAdsClick, MdClose} from "react-icons/md";
import {navLinks} from "@/constants";
import Button from "@/components/ui/Button";
import {FiMenu} from "react-icons/fi";
import {usePathname} from "next/navigation";
export default function Navbar(): JSX.Element {
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
	const handleOpenMobileMenu = () => {
		setIsOpenMobileMenu((prevState) => {
			return !prevState;
		});
	}
	return (
		<>
			<nav className={"py-5 bg-transparent relative top-0 z-10 w-full"}>
				<div className={"max-w-[1450px] w-[90%] mx-auto flex justify-between items-center"}>
					<Link href={"/"}>
						<div className="flex items-center gap-1">
							<h1 className={"text-black font-semibold uppercase text-xl"}>JL</h1>
							<MdAdsClick className={"text-purple-600 text-3xl"}/>
						</div>
					</Link>
					<ul className={"flex gap-16 items-center max-md:hidden"}>
						{navLinks.map((link, _i) => (
							<Link
								href={link["route"]}
								key={_i}
							>
								<li className={""}>
									{link["name"]}
								</li>
							</Link>
						))}
					</ul>
					<div className="max-md:flex justify-center items-center gap-10">
						<Link href={"/create"}>
							<Button>Post a Job</Button>
						</Link>
						<div
							onClick={handleOpenMobileMenu}
							className={"md:hidden text-3xl text-black cursor-pointer"}
						>
							{isOpenMobileMenu ? <MdClose/> : <FiMenu/>}
						</div>
						{isOpenMobileMenu && (
							<ul className={"md:hidden bg-purple-600 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md"}>
								{navLinks.map((link, _i) => (
									<Link href={link["route"]} key={_i} onClick={() => setIsOpenMobileMenu(false)}>
										<li>
											{link["name"]}
										</li>
									</Link>
								))}
							</ul>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}
