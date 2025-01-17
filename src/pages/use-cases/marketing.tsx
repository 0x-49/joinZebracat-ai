import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, DollarSign, BarChart, ArrowRight, Play, Star } from "lucide-react";

const caseStudies = [
  {
    company: "TechStartup Inc.",
    industry: "SaaS",
    challenge: "Spent 20+ hours weekly on video content creation",
    solution: "Automated video creation with Zebracat AI",
    results: [
      "90% reduction in production time",
      "3x increase in social engagement",
      "45% lower content creation costs"
    ]
  },
  {
    company: "Global Marketing Agency",
    industry: "Marketing",
    challenge: "High costs for video production across multiple languages",
    solution: "Utilized Zebracat's multilingual AI voices",
    results: [
      "Reached 15 new markets",
      "70% cost reduction",
      "2x faster campaign launches"
    ]
  }
];

const journeySteps = [
  {
    title: "Traditional Video Creation",
    steps: [
      "Plan content (2-3 days)",
      "Write script (1 day)",
      "Record video (1 day)",
      "Edit footage (2-3 days)",
      "Revisions (1-2 days)",
      "Total: 7-10 days"
    ]
  },
  {
    title: "With Zebracat AI",
    steps: [
      "Input text (2 mins)",
      "Select style (1 min)",
      "AI generates video (5 mins)",
      "Quick review (2 mins)",
      "Export & share (1 min)",
      "Total: 10 minutes"
    ]
  }
];

export default function Marketing() {
  return (
    <>
      <Head>
        <title>AI Video Marketing | Zebracat</title>
        <meta name="description" content="Create high-performing marketing videos in minutes with AI. Save time and money while achieving better results." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Marketing Use Case</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Transform Your Marketing with AI Videos
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create high-performing video ads in minutes, not days. Cut costs by 70% while boosting engagement.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="gap-2">
              Try For Free <Play className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">Watch Demo</Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Faster Creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%+</div>
              <div className="text-sm text-muted-foreground">Higher Engagement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Traditional vs AI-Powered Journey</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {journeySteps.map((journey, index) => (
              <Card key={index} className={index === 1 ? "border-primary" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {journey.title}
                    {index === 1 && <Badge variant="secondary">10x Faster</Badge>}
                  </CardTitle>
                  <div className="space-y-4 mt-4">
                    {journey.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm">
                          {stepIndex + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index}>
                <CardHeader>
                  <Badge className="mb-4">{study.industry}</Badge>
                  <CardTitle className="mb-4">{study.company}</CardTitle>
                  <CardDescription>
                    <div className="space-y-4">
                      <div>
                        <div className="font-semibold mb-2">Challenge:</div>
                        <p>{study.challenge}</p>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Solution:</div>
                        <p>{study.solution}</p>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Results:</div>
                        <ul className="list-disc list-inside">
                          {study.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Limited Time Offer</Badge>
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join marketers who have created over 20,000 high-performing videos with Zebracat.
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