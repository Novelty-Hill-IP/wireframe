import { auth } from "@/auth";
import { LoginButton } from "@/components/login-button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
	const session = await auth();

	if (session) {
		redirect("/dashboard");
	}

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
						<LoginButton />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
