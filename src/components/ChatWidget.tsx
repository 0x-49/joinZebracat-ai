import React, { useState } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

export default function ChatWidget() {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState("");

	return (
		<div className="fixed bottom-4 right-4 z-50">
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button size="lg" className="rounded-full h-14 w-14">
						<MessageCircle className="h-6 w-6" />
					</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[425px]">
					<DialogHeader>
						<DialogTitle>Chat Support</DialogTitle>
						<DialogDescription>
							Get help from our support team
						</DialogDescription>
					</DialogHeader>
					<div className="h-[300px] overflow-y-auto border rounded-md p-4 mb-4">
						<div className="flex flex-col gap-4">
							<div className="bg-muted p-3 rounded-lg max-w-[80%]">
								👋 Hi! How can we help you today?
							</div>
						</div>
					</div>
					<div className="flex gap-2">
						<Input
							placeholder="Type your message..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							onKeyPress={(e) => {
								if (e.key === 'Enter') {
									// Handle send message
									setMessage("");
								}
							}}
						/>
						<Button size="icon" onClick={() => setMessage("")}>
							<Send className="h-4 w-4" />
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}