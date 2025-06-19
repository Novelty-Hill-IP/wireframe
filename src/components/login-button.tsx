"use client";

import { Button } from "@/components/ui/button";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export function LoginButton() {
	const [loading, setLoading] = useState(false);

	const handleMicrosoftLogin = async () => {
		setLoading(true);
		try {
			await signIn("microsoft-entra-id", {
				callbackUrl: "/dashboard",
			});
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<Button
			onClick={handleMicrosoftLogin}
			className="w-full h-11"
			disabled={loading}
		>
			{loading ? (
				<Ring2
					size="20"
					stroke="3"
					strokeLength="0.25"
					bgOpacity="0.1"
					speed="0.8"
					color="currentColor"
				/>
			) : (
				<>
					<Image
						src="/icons/microsoft.svg"
						alt="Microsoft Logo"
						width={24}
						height={24}
					/>
					Sign in with Microsoft
				</>
			)}
		</Button>
	);
}
