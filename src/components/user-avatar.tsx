"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ring2 } from "ldrs/react";
import "ldrs/react/Ring2.css";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function UserAvatar() {
	const session = useSession();
	const [loading, setLoading] = useState(false);

	const handleSignOut = async () => {
		setLoading(true);
		try {
			await signOut({ callbackUrl: "/" });
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="h-8 w-8 cursor-pointer hover:opacity-80 transition-opacity">
					<AvatarImage
						src={session?.data?.user?.image || ""}
						alt={session?.data?.user?.name || ""}
					/>
					<AvatarFallback className="font-bold">
						{session?.data?.user?.name?.[0]?.toUpperCase() || "U"}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-base font-bold leading-none mb-1.5">
							{session?.data?.user?.name}
						</p>
						<p className="text-xs leading-none text-muted-foreground">
							{session?.data?.user?.email}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					variant="destructive"
					onClick={handleSignOut}
					disabled={loading}
				>
					{loading ? (
						<Ring2
							size="16"
							stroke="2"
							strokeLength="0.25"
							bgOpacity="0.1"
							speed="0.8"
							color="currentColor"
						/>
					) : (
						<LogOut className="mr-2 h-4 w-4" />
					)}
					<span>{loading ? "Signing out..." : "Log out"}</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
