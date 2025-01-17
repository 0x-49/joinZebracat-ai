import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock, DollarSign, Sparkles, Video, BarChart } from "lucide-react";

export default function AIEditing() {
  return (
    <>
      <Head>
        <title>AI Video Editing | Zebracat AI</title>
        <meta name="description" content="Automate tedious video editing tasks with AI. Save up to 95% of editing time and reduce costs by 80% while maintaining professional quality." />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">AI-Powered Editing</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Automate Tedious Video Editing with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI video editing reduces editing time from 4 hours per minute to mere seconds and masters techniques to boost viewer engagement and conversion.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg">Try Zebracat for Free</Button>
            <Button size="lg" variant="outline">See Examples</Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use AI Automated Video Editing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Saves Time</CardTitle>
                <CardDescription>
                  Save an average of 95% of the time typically spent on manual editing tasks like footage selection and audio syncing.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Saves Costs</CardTitle>
                <CardDescription>
                  Traditional editing costs $100-$250 per minute. Automating this process saves up to 80% of your expenses.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Optimizes Performance</CardTitle>
                <CardDescription>
                  Improves viewer retention rates by up to 50% compared to template-based approaches.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How AI Video Editing Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Input Content</h3>
              <p className="text-muted-foreground">Upload your footage or input your script</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Select Settings</h3>
              <p className="text-muted-foreground">Choose video style, music mood, and effects</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. AI Edits</h3>
              <p className="text-muted-foreground">AI handles footage selection, transitions, and effects</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Review & Export</h3>
              <p className="text-muted-foreground">Make final adjustments and export your video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">Success Story</Badge>
          <blockquote className="text-2xl font-medium mb-8">
            "Switching to Zebracat's AI video editor has streamlined our workflow incredibly. Now, we transform ideas into polished videos quickly. No lengthy editing process anymore."
          </blockquote>
          <p className="text-muted-foreground">Min Jun - Marketing Director</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Video Editing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join marketers who have created over 200,000 AI-edited videos with Zebracat.
          </p>
          <Button size="lg" className="text-lg px-8">Get Started Free</Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}