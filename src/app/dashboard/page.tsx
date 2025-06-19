import { auth } from "@/auth";
import UserAvatar from "@/components/user-avatar";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await auth();

	if (!session) {
		redirect("/");
	}

	return (
		<div className="min-h-screen bg-background">
			<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto px-4 pr-2 h-16 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<h1 className="text-2xl font-semibold">Wireframe</h1>
					</div>

					<div className="flex items-center">
						<UserAvatar />
					</div>
				</div>
			</header>

			<main className="container mx-auto px-4 py-6">
				<div className="space-y-2">
					<h2 className="text-2xl font-bold">
						Welcome back, {session?.user?.name?.split(" ")[0]}!
					</h2>
					<p className="text-muted-foreground">
						Welcome to the Wireframe dashboard.
					</p>
				</div>
			</main>
		</div>
	);
}
