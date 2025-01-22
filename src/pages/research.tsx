import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Cpu, Network, Lightbulb, Code, LineChart, Shield } from "lucide-react";

export default function Research() {
  return (
    <>
      <Head>
        <title>AI Research & Innovation | Zebracat AI Video Technology</title>
        <meta name="description" content="Discover Zebracat's cutting-edge AI research in multimodal video generation, scene understanding, and content optimization. Leading the future of AI video creation." />
        <meta name="keywords" content="AI research, video AI, machine learning, content generation, multimodal AI" />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Pioneering AI Video Technology</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Research & Innovation at Zebracat
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Exploring the frontiers of AI to transform how the world creates video content. Our multimodal AI system outperforms traditional video creation tools.
          </p>
        </div>
      </section>

      {/* Core Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Multimodal AI System</CardTitle>
                <CardDescription>
                  Our advanced AI understands and processes multiple types of content - text, images, audio, and video - creating seamless, context-aware video content.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Network className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Scene Understanding</CardTitle>
                <CardDescription>
                  Deep learning algorithms analyze and comprehend visual elements, ensuring coherent and engaging video narratives.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Neural Video Montage</CardTitle>
                <CardDescription>
                  Proprietary AI models optimize scene transitions and visual flow for maximum viewer engagement.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Innovation</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Lightbulb className="h-6 w-6 text-primary" />
                Scene Generation
              </h3>
              <p className="text-muted-foreground mb-6">
                Our AI pushes the boundaries of scene generation technology, creating unique and engaging visuals that perfectly match your content's context and tone.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Advanced neural rendering for realistic scenes</li>
                <li>• Context-aware visual synthesis</li>
                <li>• Style-consistent image generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" />
                Content Intelligence
              </h3>
              <p className="text-muted-foreground mb-6">
                Smart algorithms analyze and optimize content structure, ensuring your videos maximize viewer engagement and retention.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Engagement prediction models</li>
                <li>• Automated content optimization</li>
                <li>• Viewer retention analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Faster Video Creation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-muted-foreground">Higher Engagement Rates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-muted-foreground">Cost Reduction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Performance Optimization</h3>
                <p className="text-muted-foreground">Advanced algorithms ensure fast processing and high-quality output</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Content Safety</h3>
                <p className="text-muted-foreground">Built-in content moderation and safety checks</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scalable Architecture</h3>
                <p className="text-muted-foreground">Designed for reliability and performance at scale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of Video Creation</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in revolutionizing content creation with cutting-edge AI technology.
          </p>
          <Button size="lg" className="text-lg px-8">Try Zebracat Free</Button>
        </div>
      </section>
      
      <Footer />
    </>
  );
}