import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Sparkles, Video, Code } from "lucide-react";

const researchAreas = [
	{
		icon: Brain,
		title: "Multimodal Video AI",
		description: "Creating models that connect text and video, utilizing language as an interface to engage with video content. Our advanced AI understands context and generates coherent visual narratives."
	},
	{
		icon: Sparkles,
		title: "Video Scene Generation",
		description: "Harnessing generative AI and state-of-the-art diffusion models to craft scenes that are indistinguishable from reality, setting new standards for consistency and imagination."
	},
	{
		icon: Video,
		title: "Scene Understanding",
		description: "Deep semantic analysis of video scenes, decoding every element and object motion for unprecedented levels of detail and quality in video creation."
	},
	{
		icon: Code,
		title: "Video Montage",
		description: "Advanced AI models that don't just stitch clips together, but weave seamless video narratives, maintaining harmonious flow throughout longer sequences."
	}
];

export default function Research() {
	return (
		<>
			<Head>
				<title>AI Research | Zebracat</title>
				<meta name="description" content="Discover how Zebracat is leading the transformation of content creation with cutting-edge AI research in video generation and understanding." />
			</Head>
			<Header />
			
			{/* Hero Section */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
				<div className="max-w-7xl mx-auto text-center">
					<Badge variant="secondary" className="mb-4">AI Research</Badge>
					<h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
						Leading the Future of AI Video Creation
					</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Content creation is changing rapidly. Soon, AI-generated videos will surpass what human producers can achieve in both quality and marketing impact.
					</p>
					<div className="flex gap-4 justify-center">
						<Button size="lg">Explore Our Technology</Button>
					</div>
				</div>
			</section>

			{/* Research Areas */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Our Research Focus</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{researchAreas.map((area, index) => (
							<Card key={index} className="relative overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
								<CardHeader>
									<div className="mb-4">
										<area.icon className="h-8 w-8 text-primary" />
									</div>
									<CardTitle className="mb-2">{area.title}</CardTitle>
									<CardDescription>{area.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Vision Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
				<div className="max-w-3xl mx-auto text-center">
					<Badge variant="outline" className="mb-4">Our Vision</Badge>
					<blockquote className="text-2xl font-medium mb-8">
						"Future AI will not just generate videos; it will create sentient narratives that evolve and interact with viewers as living stories."
					</blockquote>
					<div className="flex items-center justify-center gap-4">
						<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
							<Brain className="h-6 w-6 text-primary" />
						</div>
						<div className="text-left">
							<div className="font-semibold">Reza Zolfaghari</div>
							<div className="text-muted-foreground">CTO, Zebracat</div>
						</div>
					</div>
				</div>
			</section>

			{/* Technology Partners */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-12">Technology Partners</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
						<img src="/images/logo1.png" alt="Partner 1" className="h-12" />
						<img src="/images/logo.png" alt="Partner 2" className="h-12" />
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Experience the Future Today</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join us in shaping the future of video content creation with AI technology.
					</p>
					<Button size="lg">Get Started Free</Button>
				</div>
			</section>
			
			<Footer />
		</>
	);
}