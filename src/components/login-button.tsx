"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export function LoginButton() {
	const handleMicrosoftLogin = async () => {
		await signIn("microsoft-entra-id", {
			callbackUrl: "/dashboard",
		});
	};

	return (
		<Button onClick={handleMicrosoftLogin} className="w-full h-11">
			<Image
				src="/icons/microsoft.svg"
				alt="Microsoft Logo"
				width={24}
				height={24}
			/>
			Sign in with Microsoft
		</Button>
	);
}
