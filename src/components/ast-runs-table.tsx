import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { DownloadIcon, XIcon } from "lucide-react";

interface ASTRun {
	id: string;
	name: string;
	description: string;
	client: string;
	status: "Completed" | "In Progress" | "Failed";
	started: string;
	files: number;
	issues: number;
}

const sampleASTRuns: ASTRun[] = [
	{
		id: "1",
		name: "Frontend Analysis",
		description:
			"Comprehensive analysis of React components and TypeScript files",
		client: "TechCorp Inc.",
		status: "Completed",
		started: "2024-01-15",
		files: 24,
		issues: 3,
	},
	{
		id: "2",
		name: "Backend API Review",
		description: "Security and performance analysis of REST API endpoints",
		client: "DataFlow Systems",
		status: "In Progress",
		started: "2024-01-14",
		files: 18,
		issues: 7,
	},
	{
		id: "3",
		name: "Database Schema Check",
		description: "Validation of database migrations and schema consistency",
		client: "CloudTech Solutions",
		status: "Failed",
		started: "2024-01-13",
		files: 12,
		issues: 15,
	},
	{
		id: "4",
		name: "Authentication Module",
		description:
			"Security audit of authentication and authorization systems",
		client: "SecureNet Ltd.",
		status: "Completed",
		started: "2024-01-12",
		files: 8,
		issues: 1,
	},
	{
		id: "5",
		name: "Mobile App Analysis",
		description:
			"Code quality assessment for React Native mobile application",
		client: "MobileFirst Corp.",
		status: "In Progress",
		started: "2024-01-16",
		files: 32,
		issues: 5,
	},
	{
		id: "6",
		name: "Legacy Code Review",
		description: "Analysis of legacy JavaScript codebase for modernization",
		client: "LegacyTech Inc.",
		status: "Completed",
		started: "2024-01-10",
		files: 45,
		issues: 12,
	},
];

function StatusBadge({ status }: { status: ASTRun["status"] }) {
	const statusConfig = {
		Completed: {
			className: "bg-green-100 text-green-800",
			label: "Completed",
		},
		"In Progress": {
			className: "bg-blue-100 text-blue-800",
			label: "In Progress",
		},
		Failed: { className: "bg-red-100 text-red-800", label: "Failed" },
	};

	const config = statusConfig[status];

	return (
		<Badge variant="secondary" className={config.className}>
			{config.label}
		</Badge>
	);
}

function RunsTableHeader() {
	return (
		<TableHeader>
			<TableRow>
				<TableHead>Name</TableHead>
				<TableHead>Description</TableHead>
				<TableHead>Client</TableHead>
				<TableHead>Status</TableHead>
				<TableHead>Started</TableHead>
				<TableHead className="text-right">Actions</TableHead>
			</TableRow>
		</TableHeader>
	);
}

function RunsTableRow({
	run,
	actionType,
}: {
	run: ASTRun;
	actionType: "cancel" | "download";
}) {
	return (
		<TableRow>
			<TableCell className="font-medium">{run.name}</TableCell>
			<TableCell className="max-w-xs truncate">
				{run.description}
			</TableCell>
			<TableCell>{run.client}</TableCell>
			<TableCell>
				<StatusBadge status={run.status} />
			</TableCell>
			<TableCell>{run.started}</TableCell>
			<TableCell className="text-right">
				{actionType === "cancel" ? (
					<Button
						variant="ghost"
						size="sm"
						className="h-8 px-3 text-red-600 hover:text-red-700 hover:bg-red-50"
					>
						<XIcon className="h-4 w-4 mr-1" />
						Cancel Run
					</Button>
				) : (
					<Button
						variant="ghost"
						size="sm"
						className="h-8 px-3 text-green-600 hover:text-green-700 hover:bg-green-50"
					>
						<DownloadIcon className="h-4 w-4 mr-1" />
						Download File
					</Button>
				)}
			</TableCell>
		</TableRow>
	);
}

function RunsTable({
	runs,
	title,
	badgeColor,
	actionType,
}: {
	runs: ASTRun[];
	title: string;
	badgeColor: string;
	actionType: "cancel" | "download";
}) {
	return (
		<div className="space-y-4">
			<div className="flex items-center justify-between">
				<h4 className="text-xl font-semibold text-muted-foreground">
					{title}
				</h4>
				<Badge variant="secondary" className={badgeColor}>
					{runs.length} Runs
				</Badge>
			</div>
			<div className="rounded-md border">
				<Table>
					<RunsTableHeader />
					<TableBody>
						{runs.length > 0 ? (
							runs.map((run) => (
								<RunsTableRow
									key={run.id}
									run={run}
									actionType={actionType}
								/>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={6}
									className="text-center text-muted-foreground py-8"
								>
									No {title.toLowerCase()}
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}

export default function ASTRunsTable() {
	const ongoingRuns = sampleASTRuns.filter(
		(run) => run.status === "In Progress" || run.status === "Failed"
	);
	const completedRuns = sampleASTRuns.filter(
		(run) => run.status === "Completed"
	);

	return (
		<div className="space-y-8">
			<RunsTable
				runs={ongoingRuns}
				title="Ongoing Runs"
				badgeColor="bg-blue-100 text-blue-800"
				actionType="cancel"
			/>
			<RunsTable
				runs={completedRuns}
				title="Completed Runs"
				badgeColor="bg-green-100 text-green-800"
				actionType="download"
			/>
		</div>
	);
}
