import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Sparkles, Video, BarChart, Globe, Clock } from "lucide-react";

export default function BlogToVideo() {
	return (
		<>
			<Head>
				<title>Blog to Video Converter | Zebracat AI</title>
				<meta name="description" content="Transform your blog posts into engaging videos with Zebracat AI. Increase site engagement by 88% and boost your SEO rankings." />
			</Head>
			<Header />
			
			{/* Hero Section */}
			<section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
				<div className="max-w-7xl mx-auto text-center">
					<Badge variant="secondary" className="mb-4">More Reach And Traffic</Badge>
					<h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
						Turn Your Blog Into Video With AI
					</h1>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						85% of internet users watch video content daily. Transform your blog posts into videos to maximize your reach and engage a wider audience.
					</p>
					<div className="flex gap-4 justify-center mb-12">
						<Button size="lg">Try Zebracat for Free</Button>
						<Button size="lg" variant="outline">Watch Demo</Button>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">Why Convert Blogs to Video?</h2>
					<div className="grid md:grid-cols-3 gap-8">
						<Card>
							<CardHeader>
								<div className="mb-4">
									<Clock className="h-8 w-8 text-primary" />
								</div>
								<CardTitle>Users Spend More Time</CardTitle>
								<CardDescription>
									Users stay 88% longer on websites with videos than those without. Keep visitors engaged with dynamic video content.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<div className="mb-4">
									<Globe className="h-8 w-8 text-primary" />
								</div>
								<CardTitle>More Traffic From Social</CardTitle>
								<CardDescription>
									Tap into the 85% of internet users who watch video content daily by repurposing your blog content.
								</CardDescription>
							</CardHeader>
						</Card>
						<Card>
							<CardHeader>
								<div className="mb-4">
									<BarChart className="h-8 w-8 text-primary" />
								</div>
								<CardTitle>Rank Higher On Google</CardTitle>
								<CardDescription>
									Websites with video content have a 50% higher chance of ranking on Google's first page.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</section>

			{/* How It Works */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">How to Turn Your Blog Into Video</h2>
					<div className="grid md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
								<FileText className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">1. Input Blog URL</h3>
							<p className="text-muted-foreground">Zebracat automatically fetches and analyzes your content</p>
						</div>
						<div className="text-center">
							<div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
								<Sparkles className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">2. AI Generates Video</h3>
							<p className="text-muted-foreground">Select voice, music, and let AI create your video</p>
						</div>
						<div className="text-center">
							<div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
								<Video className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">3. Customize & Refine</h3>
							<p className="text-muted-foreground">Adjust visuals and pacing to match your brand</p>
						</div>
						<div className="text-center">
							<div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
								<Globe className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">4. Publish & Share</h3>
							<p className="text-muted-foreground">Share across platforms and track performance</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonial Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center">
					<Badge variant="outline" className="mb-4">Success Story</Badge>
					<blockquote className="text-2xl font-medium mb-8">
						"Zebracat's blog-to-video feature is a game-changer. Took my 800-word blog and turned it into a 2-minute video. High-quality visuals, spot-on voiceover. This thing saves me hours."
					</blockquote>
					<p className="text-muted-foreground">Samantha - Content Marketing Manager</p>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Ready to Transform Your Blog Content?</h2>
					<p className="text-xl text-muted-foreground mb-8">
						Join content creators who have generated over 60,000 viral videos from blog posts.
					</p>
					<Button size="lg" className="text-lg px-8">Get Started Free</Button>
				</div>
			</section>
			
			<Footer />
		</>
	);
}