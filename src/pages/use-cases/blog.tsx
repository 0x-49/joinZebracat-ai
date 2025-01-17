import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Play, BarChart, Globe, Clock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Users Spend More Time",
    description: "Visitors stay 88% longer on websites with videos than those without. Keep your audience engaged with dynamic video content."
  },
  {
    icon: Globe,
    title: "More Traffic From Social",
    description: "Tap into the 85% of internet users who watch video content daily by repurposing your blog content."
  },
  {
    icon: BarChart,
    title: "Rank Higher On Google",
    description: "Websites with video content have a 50% higher chance of ranking on Google's first page."
  }
];

const successStories = [
  {
    name: "Samantha",
    role: "Content Marketing Manager",
    company: "Digital First Media",
    quote: "Zebracat's blog-to-video feature is a game-changer. Took my 800-word blog and turned it into a 2-minute video. High-quality visuals, spot-on voiceover. This thing saves me hours.",
    results: [
      "Blog traffic increased by 156%",
      "Average time on site up by 88%",
      "Social shares increased 3x"
    ]
  },
  {
    name: "Alex",
    role: "Content Strategy Lead",
    company: "Growth Marketing Co",
    quote: "Creating video content from our blogs used to be a time-consuming task, but now we've cut our production time in half while doubling our content output.",
    results: [
      "Content production time reduced by 50%",
      "Output doubled to 20 videos/month",
      "Engagement rates up by 75%"
    ]
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog to Video Converter | Zebracat AI</title>
        <meta name="description" content="Transform your blog posts into engaging videos. Increase site engagement by 88% and boost your SEO rankings with AI-powered video creation." />
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
            Stop missing out - repurpose every blog post into video to grow engagement and conversions by up to 80%.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              Try For Free <Play className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">See Examples</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Convert Blogs to Video?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Input Blog URL", desc: "Paste your blog post URL" },
              { step: "2", title: "AI Generates Video", desc: "Our AI analyzes and converts content" },
              { step: "3", title: "Customize & Refine", desc: "Adjust visuals and pacing" },
              { step: "4", title: "Share Everywhere", desc: "Publish across all platforms" }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="mb-4">{story.company}</CardTitle>
                  <blockquote className="text-lg mb-6 italic">"{story.quote}"</blockquote>
                  <div className="mb-4">
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-muted-foreground">{story.role}</div>
                  </div>
                  <div className="space-y-2">
                    {story.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Start Converting Today</Badge>
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Blog Content?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join content creators who have generated over 60,000 viral videos from blog posts.
          </p>
          <Button size="lg" className="gap-2">
            Start Creating Now <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}