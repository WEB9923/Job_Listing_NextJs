"use client";
import {ChangeEvent, JSX, useEffect, useState} from "react";
import {useEdgeStore} from "@/lib/edgestore";
import {useForm} from "react-hook-form";
import {createJob, FormData} from "@/actions/createJob.action";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import clsx from "clsx";

export default function CreateForm(): JSX.Element {
	const [file, setFile] = useState<File>();
	const [imagePath, setImagePath] = useState<string>("");
	const {edgestore} = useEdgeStore();

	const {
		register,
		setValue,
		handleSubmit,
		formState: {
			errors,
			isSubmitting,
			isLoading,
			isDirty,
			dirtyFields
		},
		reset
	} = useForm<FormData>({
		defaultValues: {
			name: "",
			author: "",
			description: "",
			location: "",
			img: "",
			employmentType: ""
		}
	});

	const uploadImageHandler = async (): Promise<void> => {
		if (file) {
			const res = await edgestore.publicFiles.upload({
				file
			});
			setValue("img", res.url);
		}
	}

	const onSubmit = handleSubmit(async (data): Promise<void> => {
		await createJob(data);
		reset();
	});

	useEffect(() => {
		if (file) {
			uploadImageHandler();
		}
	},[file]);

	return (
		<>
			<form
				onSubmit={onSubmit}
				className={"mt-10"}
			>
				<div className="flex flex-col sm:gap-10 gap-5">
					<div className="grid sm:grid-cols-2 gap-5">
						<Input
							id={"name"}
							label={"Job Title"}
							errors={errors}
							disabled={isSubmitting}
							register={{...register("name", {
								required: true
							})}}
						/>
						<Input
							id={"location"}
							label={"Location"}
							errors={errors}
							disabled={isSubmitting}
							register={{...register("location", {
								required: true
							})}}
						/>
					</div>
					<div className="grid sm:grid-cols-2 gap-5">
						<Input
							id={"author"}
							label={"Company Name"}
							errors={errors}
							disabled={isSubmitting}
							register={{...register("author", {
								required: true
							})}}
						/>
						<Input
							id={"salary"}
							label={"Salary"}
							errors={errors}
							disabled={isSubmitting}
							register={{...register("salary", {
								required: true,
								validate: (value: string) => {
									const parsedValue: number = parseFloat(value.replace(/,/g,""));
									return (
										!isNaN(parsedValue) || "Must be a Number"
									)
								}
							})}}
						/>
					</div>
					<div className="grid sm:grid-cols-2 gap-5">
						<Input
							label={"Select Company Image"}
							type={"file"}
							onChange={(e: ChangeEvent<HTMLInputElement>): void => {
								setFile(e.target.files?.[0])
							}}
							id={"file"}
							disabled={isSubmitting}
						/>
						<div>
							<label htmlFor="employmentType" className={"block text-sm font-medium leading-6 text-gray-900 mb-1.5"}>
								Employment Type:
							</label>
							<select
								id="employmentType"
								{...register("employmentType", {
									required: true
								})}
								disabled={isSubmitting}
								className={clsx(
									`block w-full rounded-md border-0 focus:ring-2 focus:outline-purple-600 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 mb-5 placeholder:text-gray-400 py-3 px-1 text-gray-900 shadow-md`,
									isSubmitting && `opacity-50 cursor-default`,
								)}
							>
								<option value={"Part-Time"}>Part-Time</option>
								<option value={"Full-Time"}>Full-Time</option>
								<option value={"Temporary"}>Temporary</option>
							</select>
						</div>
					</div>
					<Input
						isTextArea
						id={"description"}
						label={"Description"}
						errors={errors}
						disabled={isSubmitting}
						register={{...register("description", {
								required: true
						})}}
					/>
				</div>
				<input
					type="hidden"
					id={"img"}
					{...register("img")}
				/>
				<Button type={"submit"} marginTop>
					{isLoading ? (
						<>
							Loading...
						</>
					) : (
						<>
							Submit
						</>
					)}
				</Button>
			</form>
		</>
	);
}