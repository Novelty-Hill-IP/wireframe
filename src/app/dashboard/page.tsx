import { auth } from "@/auth";
import ASTRunsTable from "@/components/ast-runs-table";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserAvatar from "@/components/user-avatar";
import { PlusCircleIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await auth();

	if (!session) {
		redirect("/");
	}

	return (
		<div className="min-h-screen bg-background">
			<header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container mx-auto px-4 h-16 flex items-center justify-between">
					<h1 className="text-2xl font-semibold">Wireframe</h1>
					<UserAvatar />
				</div>
			</header>

			<main className="container mx-auto px-4 py-8">
				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-2">
						Welcome back, {session?.user?.name?.split(" ")[0]}!
					</h2>
					<p className="text-muted-foreground text-lg">
						Manage your analysis runs and view results.
					</p>
				</div>

				<Tabs defaultValue="ast" className="w-full">
					{/* Tabs List */}
					<TabsList className="grid w-full grid-cols-2 mb-6">
						<TabsTrigger value="corpus" disabled>
							Corpus Analysis (Coming Soon)
						</TabsTrigger>
						<TabsTrigger value="ast">AST Analysis</TabsTrigger>
					</TabsList>

					{/* Corpus Runs Tab */}
					<TabsContent value="corpus" className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-2xl font-semibold mb-2">
									Corpus Analysis
								</h3>
								<p className="text-muted-foreground">
									Create and manage corpus runs.
								</p>
							</div>
							<Button size="lg" disabled>
								<PlusCircleIcon className="w-4 h-4 mr-2" />
								New Corpus Run
							</Button>
						</div>
						<div className="rounded-lg border-2 border-dashed border-muted-foreground/25 p-12 text-center">
							<div className="text-muted-foreground">
								<h4 className="text-lg font-medium mb-2">
									Corpus Analysis Coming Soon
								</h4>
								<p>
									This feature is currently under development.
								</p>
							</div>
						</div>
					</TabsContent>

					{/* AST Runs Tab */}
					<TabsContent value="ast" className="space-y-6">
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-2xl font-semibold mb-2">
									AST Runs
								</h3>
								<p className="text-muted-foreground">
									Create and manage AST runs.
								</p>
							</div>
							<Button size="lg">
								<PlusCircleIcon className="w-4 h-4 mr-2" />
								New AST Run
							</Button>
						</div>
						<ASTRunsTable />
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
