import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mic, Globe, Volume2, Play, ArrowRight } from "lucide-react";

export default function AIVoices() {
  return (
    <>
      <Head>
        <title>AI Voices | Zebracat AI</title>
        <meta name="description" content="Natural-sounding AI voices in 170+ languages. Create professional voiceovers in minutes with our advanced text-to-speech technology." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">AI-Powered Voices</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Natural-Sounding AI Voices in 170+ Languages
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create professional voiceovers in minutes with our advanced text-to-speech technology.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">Try Zebracat for Free</Button>
            <Button size="lg" variant="outline">Hear Examples</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Zebracat AI Voices?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Mic className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Natural Sounding</CardTitle>
                <CardDescription>
                  Our AI voices are indistinguishable from human voices, with natural intonation and emotion.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>170+ Languages</CardTitle>
                <CardDescription>
                  Reach global audiences with support for major languages and regional dialects.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Volume2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customizable Voices</CardTitle>
                <CardDescription>
                  Adjust speed, pitch, and tone to match your brand's personality and style.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How AI Voices Work</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Input Text</h3>
              <p className="text-muted-foreground">Type or paste your script</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Select Voice</h3>
              <p className="text-muted-foreground">Choose from 170+ languages and accents</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Customize</h3>
              <p className="text-muted-foreground">Adjust speed, pitch, and tone</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Generate & Download</h3>
              <p className="text-muted-foreground">Get your professional voiceover in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Success Story</Badge>
          <blockquote className="text-2xl font-medium mb-8">
            "Zebracat's AI voices have transformed our content creation process. The quality is so good that our audience can't tell it's AI-generated!"
          </blockquote>
          <p className="text-muted-foreground">Michael - Content Producer</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Voiceovers?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join creators who have generated over 100,000 voiceovers with Zebracat.
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
