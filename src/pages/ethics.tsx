import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Users, Lock, Check } from "lucide-react";

const ethicalPrinciples = [
	{
		icon: Shield,
		title: "Ethics First, No Exceptions",
		description: "Our guiding principle remains consistent: we focus on creating tools that facilitate genuine storytelling and add value to human interaction."
	},
	{
		icon: Users,
		title: "Respect for Boundaries",
		description: "Given the potential risks associated with AI in marketing, we actively ensure our algorithms operate within ethical parameters."
	},
	{
		icon: Lock,
		title: "Commitment to Transparency",
		description: "We proactively share how our technology works, the safeguards in place, and the ethical guidelines we follow."
	}
];

const authenticityFeatures = [
	"Content origin verification",
	"Transparent AI disclosure",
	"Ethical content generation",
	"User privacy protection",
	"Data security measures",
	"Regular ethical audits"
];

export default function Ethics() {
	return (
		<>
			<Head>
				<title>Ethics at Zebracat | AI Video Creation</title>
				<meta name="description" content="Learn about Zebracat's commitment to ethical AI practices and responsible use of technology in video creation." />
			</Head>
			<Header />
			
			{/* Hero Section */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
				<div className="max-w-7xl mx-auto text-center">
					<Badge variant="secondary" className="mb-4">Ethics at Zebracat</Badge>
					<h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
						Ethical AI for Authentic Content Creation
					</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						As we pioneer AI-driven video generation technology, our commitment to ethical practices and authentic content remains unwavering.
					</p>
				</div>
			</section>

			{/* Principles Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Our Ethical Principles</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{ethicalPrinciples.map((principle, index) => (
							<Card key={index}>
								<CardHeader>
									<div className="mb-4">
										<principle.icon className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="mb-2">{principle.title}</CardTitle>
									<CardDescription>{principle.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Content Authenticity Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
				<div className="max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<Badge variant="outline" className="mb-4">Content Authenticity Initiative</Badge>
							<h2 className="text-3xl font-bold mb-6">Leading the Way in Authentic AI Content</h2>
							<p className="text-lg text-muted-foreground mb-8">
								We are proud members of the Content Authenticity Initiative, alongside industry leaders like Adobe, Nvidia, and Microsoft. This collaboration reinforces our commitment to transparent and responsible use of AI technology.
							</p>
							<div className="space-y-4">
								{authenticityFeatures.map((feature, index) => (
									<div key={index} className="flex items-center gap-2">
										<Check className="h-5 w-5 text-primary" />
										<span>{feature}</span>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
								<Shield className="h-32 w-32 text-primary" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Experience Ethical AI in Action</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join us in creating authentic, engaging content that respects ethical boundaries while delivering exceptional results.
					</p>
					<Button size="lg">Start Creating Responsibly</Button>
				</div>
			</section>
			
			<Footer />
		</>
	);
}