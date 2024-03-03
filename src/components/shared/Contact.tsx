import {JSX} from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Contact(): JSX.Element {
	return (
		<>
			<div className="lg:py-24 py-16" id={"contact"}>
				<div className="mx-auto max-w-[1450px] w-[90%]">
					<h2 className={"w-full text-center mb-10 text-2xl font-extrabold uppercase text-purple-600"}>
						Contact
					</h2>
					<div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] items-center">
						<div className="md:col-span-6">
							<img
								src="/contact.png"
								alt="contact image"
								className={""}
							/>
						</div>
						<div className="md:col-span-6 bg-gray-50/50">
							<div>
								<div className="rounded-md shadow p-6 w-full">
									<h3 className={"mb-6 text-2xl leading-normal"}>
										Get in touch!
									</h3>
									<form className={"flex flex-col gap-5"}>
										<div className="grid md:grid-cols-2 gap-5">
											<Input
												id={"name"}
												label={"Name"}
												placeHolder={"Your Name"}
											/>
											<Input
												id={"email"}
												label={"Email"}
												placeHolder={"Your Email Address"}
											/>
										</div>
										<Input
											id={"subject"}
											label={"Subject"}
											placeHolder={"Subject"}
										/>
										<Input
											isTextArea
											id={"message"}
											label={"Message"}
											placeHolder={"Your Message"}
										/>
										<Button type={"submit"}>
											Send Message
										</Button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}