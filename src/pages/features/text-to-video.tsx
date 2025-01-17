import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Sparkles, Video, Star } from "lucide-react";

export default function TextToVideo() {
  return (
    <>
      <Head>
        <title>Text-to-Video Generator | Zebracat AI</title>
        <meta name="description" content="Transform any text into engaging videos with Zebracat AI. Perfect for marketers and content creators looking to boost engagement by 95%." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Trusted by 30,000+ Marketers</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Text-to-Video Generator
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform text into impactful videos in minutes with AI. Consumers retain 95% of a message from video, compared to only 10% when reading text.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">Try Zebracat for Free</Button>
            <Button size="lg" variant="outline">See Examples</Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Rated 4.8/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              <span>200k+ videos created</span>
            </div>
          </div>
        </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Text to Video AI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
            <CardTitle>Video Grabs & Holds Attention</CardTitle>
            <CardDescription>
              Video engages multiple senses, capturing viewers effectively in a world with an 8-second attention span.
            </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
            <CardTitle>More Memorable Content</CardTitle>
            <CardDescription>
              The combination of visuals, sound, and motion sticks in people's minds with a 95% retention rate.
            </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
            <CardTitle>Drives Action</CardTitle>
            <CardDescription>
              Videos are shared 1,200% more times than text and images combined, motivating viewers to act.
            </CardDescription>
            </CardHeader>
          </Card>
          </div>
        </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Input Your Text</h3>
              <p className="text-muted-foreground">Input your text prompts, scripts, or blog articles</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Personalize Voice & Music</h3>
              <p className="text-muted-foreground">Choose from 120+ voices across 20+ languages</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. AI Assembles Video</h3>
              <p className="text-muted-foreground">AI selects optimal media to enrich your script</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Fine-Tune & Share</h3>
              <p className="text-muted-foreground">Preview, adjust, and share your creation</p>
            </div>
          </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Impactful Videos?</h2>
          <p className="text-xl text-muted-foreground mb-8">
          Join 30,000+ marketers and content creators who are already using Zebracat to transform their ideas into engaging videos.
          </p>
          <Button size="lg" className="text-lg px-8">Get Started Free</Button>
        </div>
        </section>
        
        <Footer />
    </>
  );
}
