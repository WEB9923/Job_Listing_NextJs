"use client";
import {JSX} from "react";
import {
	FieldErrors,
	UseFormRegisterReturn
} from "react-hook-form";
import {ChangeEvent} from "react";
import clsx from "clsx";

interface InputProps {
	label?: string;
	id: string;
	type?: string;
	register?: UseFormRegisterReturn;
	errors?: FieldErrors;
	disabled?: boolean;
	noLabel?: boolean;
	isTextArea?: boolean;
	placeHolder?: string;
	noBorder?: boolean;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	value?: string;
}

export default function Input({
	label,
	id,
	type,
	register,
	errors,
	disabled,
	noLabel,
	isTextArea,
	placeHolder,
	noBorder,
	onChange,
	value
}: InputProps): JSX.Element {
	const inputElement = isTextArea ? (
		<textarea
			id={id}
			autoComplete={"off"}
			rows={6}
			cols={6}
			disabled={disabled}
			placeholder={placeHolder}
			{...register}
			className={clsx(
				`block w-full rounded-md border-0 focus:ring-2 min-h-[160px] max-h-[300px] focus:outline-purple-600 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 placeholder:text-gray-400 py-1.5 px-1 text-gray-900 shadow-md`,
				errors && errors[id] && `ring-rose-700`,
				disabled && `opacity-50 cursor-default`
			)}
		/>
	) : (
		<input
			id={id}
			type={type}
			name={id}
			value={value}
			onChange={onChange}
			autoComplete={"off"}
			disabled={disabled}
			placeholder={placeHolder}
			{...register}
			className={clsx(
				`block w-full rounded-md border-0 focus:ring-2 focus:outline-purple-600 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 placeholder:text-gray-400 py-1.5 px-1 text-gray-900 shadow-md`,
				errors && errors[id] && `ring-rose-700`,
				disabled && `opacity-50 cursor-default`,
				noBorder && `ring-0 shadow-none mb-5 `
			)}
		/>
	)
	return (
		<>
			<div className="">
				{!noLabel && (
					<label
						htmlFor={id}
						className={"block text-sm font-medium leading-6 text-gray-900 mb-1.5 "}
					>
						{label}:
					</label>
				)}
				<div className="">
					{inputElement}
					{errors && errors[id] && (
						<span className={"text-red-600 text-sm"}>
							{errors[id]?.message && (
								<>
									{errors[id]?.message}
								</>
							)}
							{!errors[id]?.message && `${label} is required`}
						</span>
					)}
				</div>
			</div>
		</>
	);
}
