import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Heart, Users, Check, AlertCircle, Lock } from "lucide-react";

export default function Ethics() {
  return (
    <>
      <Head>
        <title>AI Ethics & Responsible Innovation | Zebracat AI</title>
        <meta name="description" content="Learn about Zebracat's commitment to ethical AI practices, content authenticity, and responsible innovation in video creation technology." />
        <meta name="keywords" content="AI ethics, responsible AI, content authenticity, ethical innovation, AI transparency" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Content Authenticity Initiative Member</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Committed to Ethical AI Innovation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            At Zebracat, we believe in developing AI technology that empowers creators while maintaining the highest standards of ethics and responsibility.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ethical Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Content Authenticity</CardTitle>
                <CardDescription>
                  We're committed to transparency in AI-generated content, ensuring viewers can trust and verify the authenticity of videos created on our platform.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Responsible Innovation</CardTitle>
                <CardDescription>
                  Our development process prioritizes ethical considerations and societal impact alongside technological advancement.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>User Empowerment</CardTitle>
                <CardDescription>
                  We empower creators with tools that enhance their storytelling while maintaining creative control and authenticity.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Commitments</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Check className="h-6 w-6 text-primary" />
                Content Transparency
              </h3>
              <p className="text-muted-foreground mb-6">
                We clearly label AI-generated content and provide transparency about how our technology works, helping maintain trust in digital media.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Clear AI content labeling</li>
                <li>• Transparent creation process</li>
                <li>• Authenticity verification tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                Responsible Use
              </h3>
              <p className="text-muted-foreground mb-6">
                We implement safeguards to prevent misuse of our technology and promote responsible content creation practices.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Content moderation systems</li>
                <li>• Usage guidelines and policies</li>
                <li>• User accountability measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Authenticity Initiative */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Content Authenticity Initiative</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              As a proud member of the Content Authenticity Initiative, we work alongside industry leaders to develop standards and technologies that promote transparency in digital content creation.
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="text-lg py-2 px-4">Official CAI Member</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Privacy & Security</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Protection</h3>
                <p className="text-muted-foreground">Enterprise-grade security for your content and data</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Content Rights</h3>
                <p className="text-muted-foreground">You retain full rights to your created content</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">User Privacy</h3>
                <p className="text-muted-foreground">Strict privacy controls and data handling policies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Create with Confidence</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join a platform committed to ethical AI innovation and responsible content creation.
          </p>
          <Button size="lg" className="text-lg px-8">Get Started Free</Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}