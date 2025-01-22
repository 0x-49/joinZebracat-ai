import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Upload, Sparkles, Video, Star, Users, Zap, Shield } from "lucide-react";

export default function UploadFootageToVideo() {
  return (
    <>
      <Head>
        <title>AI Video Enhancement | Upload & Transform Your Footage | Zebracat AI</title>
        <meta name="description" content="Transform your raw footage into professional marketing videos with AI. Boost authenticity by 70% with your own footage while saving time and resources." />
        <meta name="keywords" content="AI video enhancement, video editing, marketing videos, brand authenticity, custom footage" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Boost Brand Authenticity by 70%</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Transform Your Footage Into Professional Marketing Videos
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Use your own footage to create authentic, engaging videos that connect with your audience. Our AI enhances your content while maintaining your brand's unique voice.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">Upload Your Footage</Button>
            <Button size="lg" variant="outline">View Examples</Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Rated 4.9/5 by Brand Managers</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              <span>100,000+ Videos Enhanced</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Your Own Footage?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Authentic Brand Connection</CardTitle>
                <CardDescription>
                  Build trust with your audience using real, authentic footage that showcases your brand's personality and values.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Stand Out from Stock</CardTitle>
                <CardDescription>
                  Break free from generic stock footage. Use your unique content to create memorable brand experiences.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Professional Enhancement</CardTitle>
                <CardDescription>
                  Our AI enhances your footage with professional effects, transitions, and optimizations while maintaining authenticity.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Footage Enhancement Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Upload Your Content</h3>
              <p className="text-muted-foreground">Upload your raw footage in any common video format</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. AI Analysis</h3>
              <p className="text-muted-foreground">Our AI analyzes your content and suggests enhancements</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Enhancement Magic</h3>
              <p className="text-muted-foreground">Add effects, music, captions, and professional touches</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Export & Share</h3>
              <p className="text-muted-foreground">Download your enhanced video in high quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Success Stories</h2>
          <blockquote className="max-w-2xl mx-auto mb-8">
            <p className="text-xl italic mb-4">
              "Integrating our own footage with Zebracat has taken our video marketing to a new level. The authenticity it brings to our brand story is unmatched, and we've seen a tangible increase in customer engagement."
            </p>
            <footer className="text-muted-foreground">
              - Taylor, Brand Manager
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Enhancement Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Smart Color Correction</h3>
                <p className="text-muted-foreground">Automatic color grading and enhancement for professional look</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dynamic Transitions</h3>
                <p className="text-muted-foreground">Smooth, professional transitions between scenes</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Auto Captions</h3>
                <p className="text-muted-foreground">AI-powered caption generation and positioning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Footage?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join brands who are creating authentic, engaging videos with their own footage enhanced by AI.
          </p>
          <Button size="lg" className="text-lg px-8">Start Enhancing Now</Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}