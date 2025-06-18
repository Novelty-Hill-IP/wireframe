"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function LoginPage() {
	const handleMicrosoftLogin = () => {
		console.log("Redirecting to Microsoft login...");
	};

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="w-full max-w-md space-y-8">
				<div className="text-center">
					<div className="flex items-center justify-center space-x-2 mb-4">
						<Image
							src="/branding/logos/logo-dark.png"
							alt="Wireframe Logo"
							width={48}
							height={48}
						/>
						<h1 className="text-5xl font-bold text-foreground">
							Wireframe
						</h1>
					</div>
					<p className="text-muted-foreground">
						Internal Novelty Hill IP Tool For Creating And Managing
						Models
					</p>
				</div>

				<Card>
					<CardHeader className="text-center">
						<CardTitle className="mb-1">Sign In</CardTitle>
						<CardDescription>
							Use your Microsoft account to continue
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Button
							onClick={handleMicrosoftLogin}
							className="w-full h-11"
						>
							<Image
								src="/icons/microsoft.svg"
								alt="Microsoft Logo"
								width={24}
								height={24}
							/>
							Sign in with Microsoft
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
