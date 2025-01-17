import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, DollarSign, Video, Users, BarChart, ArrowRight } from "lucide-react";

export default function Social() {
  return (
    <>
      <Head>
        <title>Social Media Videos | Zebracat AI</title>
        <meta name="description" content="Create engaging faceless social videos with AI. Perfect for TikTok, Instagram, and YouTube content creators looking to save time and boost engagement." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Social Media Content</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Create Engaging Faceless Social Videos with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create engaging videos from text in minutes. Perfect for TikTok, Instagram, and YouTube content creators.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">Try Zebracat for Free</Button>
            <Button size="lg" variant="outline">See Examples</Button>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Common Social Media Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Video Production Takes Too Much Time</CardTitle>
                <CardDescription>
                  Creating high-quality videos takes many hours of work, diverting time from other key business tasks.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Experts And Equipment Are Expensive</CardTitle>
                <CardDescription>
                  Hiring skilled professionals and acquiring equipment makes video production expensive, especially for smaller creators.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Unclear Marketing Impact</CardTitle>
                <CardDescription>
                  Difficulty in consistently creating videos that have clear marketing impact across various platforms.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transform Your Social Video Creation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">10x</span>
              </div>
              <h3 className="font-semibold mb-2">Faster Creation</h3>
              <p className="text-muted-foreground">Create videos in minutes, not hours. Stay consistent with your posting schedule.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">5x</span>
              </div>
              <h3 className="font-semibold mb-2">More Engagement</h3>
              <p className="text-muted-foreground">AI-optimized content that drives likes, shares, and follows.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">70%</span>
              </div>
              <h3 className="font-semibold mb-2">Lower Cost</h3>
              <p className="text-muted-foreground">No need for expensive equipment or editing expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Success Story</Badge>
          <blockquote className="text-2xl font-medium mb-8">
            "Zebracat is like having a 24/7 creative assistant. It's transformed my TikTok content, significantly boosting engagement."
          </blockquote>
          <p className="text-muted-foreground">Emily - Content Creator</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Social Content?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join creators who have generated over 15,000 faceless social videos with Zebracat.
          </p>
          <Button size="lg" className="text-lg px-8">
            Start Creating Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}