import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <Head>
        <title>About Zebracat AI | Our Story</title>
        <meta name="description" content="Learn about Zebracat's mission to reinvent visual storytelling through the power of AI." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Our Vision</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Reinventing Visual Storytelling Through AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're making video marketing as simple as typing text. No fluff. No unnecessary complications.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="mb-6">
              Zebracat was born from frustration. For our last ventures, we had to create a ton of video content but getting there had us go through a valley of pain: slow, complex, and shockingly expensive!
            </p>
            <p className="mb-6">
              We experienced firsthand the challenges of:
            </p>
            <ul className="space-y-4 mb-8">
              <li>Spending hours on Adobe editing videos without achieving results</li>
              <li>Digging half a day for stock media, chasing voice artists or the perfect song</li>
              <li>Hiring video editors, only to be disappointed by low-quality outcomes</li>
              <li>Investing heavily in agencies, yet still not achieving desired campaign results</li>
            </ul>
            <p>
              That's why we built Zebracat. We want to make high-quality video creation easy and affordable for everyone!
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl mb-8">
            We're making video marketing as simple as typing text. No fluff. No unnecessary complications. Marketers, you've dealt with complex tools and timelines. We cut that clutter, giving you the power to generate high-quality videos, fast.
          </p>
          <p className="text-xl">
            We exist to bridge the gap between your message and your audience. With our AI-powered video generation platform, we're making it easier for marketers to engage, convert, and win.
          </p>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Investors and Supporters</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-75">
            <img src="/images/logo1.png" alt="Entrepreneur First" className="h-12" />
            <img src="/images/logo.png" alt="Google for Startups" className="h-12" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Video Creation</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the future of video creation with Zebracat AI.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}