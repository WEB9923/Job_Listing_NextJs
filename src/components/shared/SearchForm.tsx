"use client";
import {ChangeEvent, FormEvent, JSX, useEffect, useState} from "react";
import {jobType} from "@/types/types";
import useJobStore from "@/store/use.jobStore";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
interface SearchFormProps {
	jobs: jobType[];
}
const initialState = {
	title: "",
	location: "",
	author: ""
}
export default function SearchForm({jobs}: SearchFormProps): JSX.Element {
	const [state, setState] = useState<typeof initialState>(initialState);
	const [value, setValue] = useState<string>("");
	const {setFilteredJobs} = useJobStore();
	function onChange(event: ChangeEvent<HTMLInputElement>) {
		setState({...state, [event.target.name]: event.target.value})
	}
	function onSubmit(event: FormEvent<HTMLFormElement>) {event.preventDefault();}
	useEffect((): void => {
		(function filterAndSetJobs(): void {
			const filteredJobs = jobs?.filter((item) => {
				const titleCondition: boolean = state.title === "" || item.name.toLowerCase().includes(state.title.toLowerCase());
				const locationCondition: boolean = state.location === "" || item.location.toLowerCase().includes(state.location.toLowerCase());
				const companyCondition: boolean = state.author === "" || item.author.toLowerCase().includes(state.author.toLowerCase());
				return (titleCondition && locationCondition && companyCondition);
			});
			setFilteredJobs(filteredJobs);
		})();
	}, [jobs, state, setFilteredJobs]);
	return (
		<>
			<div className="bg-gray-50/50 shadow rounded-md p-5 w-full">
				<form onSubmit={onSubmit}>
					<div className="grid grid-cols-12 gap-3">
						<div className="col-span-12 lg:col-span-3">
							<Input
								id={"title"}
								type={"text"}
								noLabel
								placeHolder={"Job Title"}
								onChange={onChange}
							/>
						</div>
						<div className="col-span-12 lg:col-span-3">
							<Input
								id={"location"}
								type={"text"}
								noLabel
								placeHolder={"Location"}
								onChange={onChange}
							/>
						</div>
						<div className="col-span-12 lg:col-span-3">
							<Input
								id={"author"}
								type={"text"}
								noLabel
								placeHolder={"Company"}
								onChange={onChange}
							/>
						</div>
						<div className="col-span-12 lg:col-span-3">
							<Button type={"submit"} fullWidth>
								Search Jobs
							</Button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
