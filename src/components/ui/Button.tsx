"use client";
import {JSX, ReactNode} from "react";
import {useFormStatus} from "react-dom";
import clsx from "clsx";
interface ButtonProps {
	type?: "button" | "submit" | "reset" | undefined;
	children?: ReactNode;
	onClick?: () => void;
	outline?: boolean;
	fullWidth?: boolean;
	marginTop?: boolean;
}
export default function Button({children, type, onClick, outline, fullWidth, marginTop}: ButtonProps): JSX.Element {
	const {pending} = useFormStatus();

	return (
		<>
			<button
				type={type}
				disabled={pending}
				onClick={onClick}
				className={clsx(
					`bg-purple-600 px-4 py-1 rounded-md text-white h-full transition duration-300 hover:bg-purple-600/75`,
					fullWidth && `w-full`,
					marginTop && `mt-5`
				)}
			>
				{children}
			</button>
		</>
	);
}
