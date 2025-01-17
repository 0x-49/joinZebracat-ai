import React from "react";
import Head from "next/head";
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, DollarSign, Video, Users, FileText, Mic, Sparkles, Globe2, ArrowRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zebracat AI - Turn Text into Viral Videos in Seconds</title>
        <meta name="description" content="Zebracat AI helps you stop wasting time and money on expensive video production. Create engaging videos for TikTok, Instagram, and YouTube with just a few clicks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-4 animate-float">
            <span className="animate-glow">✨ AI-Powered Video Creation</span>
          </Badge>
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight mb-8 gradient-text">
            Zebracat AI: Turn Text into Viral Videos in Seconds
          </h1>
          <p className="text-muted-foreground text-xl mb-8 max-w-2xl mx-auto">
            Zebracat AI is your all-in-one video creation platform. Stop wasting time and money on expensive video production. Create engaging videos for TikTok, Instagram, and YouTube with just a few clicks.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Get Free Access
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              See Examples
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>50,000+ AI creators</span>
            </div>
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-gradient" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-float">Revolutionary Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Transform Your Content Creation</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Unleash the power of AI to create stunning videos that captivate your audience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Text to Video
                </CardTitle>
                <CardDescription>
                  Transform any text into engaging videos. Perfect for blog posts, scripts, or articles. AI handles everything from scene generation to voiceovers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    AI Scene Generation
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-primary" />
                    Natural Voiceovers
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5 text-primary" />
                  Multi-Language Support
                </CardTitle>
                <CardDescription>
                  Create videos in 170+ languages with AI voices that sound natural. Reach global audiences effortlessly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    170+ Languages
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-primary" />
                    Natural AI Voices
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  AI Video Editing
                </CardTitle>
                <CardDescription>
                  Our AI handles everything from scene transitions to music synchronization. Save hours of editing time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Auto Scene Transitions
                  </li>
                  <li className="flex items-center gap-2">
                    <Mic className="h-4 w-4 text-primary" />
                    Music Sync
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 animate-gradient" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-float">Simple Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Create professional videos in three simple steps</p>
          </div>
          <Tabs defaultValue="blog" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="blog">Blog to Video</TabsTrigger>
              <TabsTrigger value="script">Script to Video</TabsTrigger>
              <TabsTrigger value="social">Social Content</TabsTrigger>
            </TabsList>
            <TabsContent value="blog" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Paste Your Blog URL</h3>
                  <p className="text-muted-foreground">Simply paste your blog post URL and let AI analyze the content</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. AI Magic</h3>
                  <p className="text-muted-foreground">Our AI creates scenes, adds voiceover, and edits the video</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Download & Share</h3>
                  <p className="text-muted-foreground">Get your video ready for social media in minutes</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="script" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Write Your Script</h3>
                  <p className="text-muted-foreground">Enter your video script or use our AI script generator</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Choose Voice & Style</h3>
                  <p className="text-muted-foreground">Pick from 170+ AI voices and visual styles</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Generate Video</h3>
                  <p className="text-muted-foreground">Get your professional video in minutes</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="social" className="mt-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Choose Format</h3>
                  <p className="text-muted-foreground">Select from TikTok, Instagram, or YouTube formats</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Create Content</h3>
                  <p className="text-muted-foreground">Use AI to generate trending content ideas</p>
                </div>
                <div>
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. Export & Post</h3>
                  <p className="text-muted-foreground">Share directly to your social platforms</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-gradient" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-float">Success Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Loved by Content Creators</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">See how creators are transforming their content with our AI video platform</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/images/testimonial1.jpg" />
                    <AvatarFallback>MK</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Marton K.</CardTitle>
                    <CardDescription>Founder & CMO</CardDescription>
                  </div>
                </div>
                <p className="text-sm">"Game-changer for our marketing team! We've cut video production time by 90% while maintaining quality."</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/images/testimonial2.jpg" />
                    <AvatarFallback>SL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">Sarah L.</CardTitle>
                    <CardDescription>Content Creator</CardDescription>
                  </div>
                </div>
                <p className="text-sm">"I can now create professional videos for my blog in minutes. The AI voices sound incredibly natural!"</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src="/images/testimonial3.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">James D.</CardTitle>
                    <CardDescription>Digital Marketer</CardDescription>
                  </div>
                </div>
                <p className="text-sm">"The multi-language support has helped us reach global audiences effortlessly. Worth every penny!"</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-gradient" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge variant="outline" className="mb-4 animate-float">Limited Time Offer</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Ready to Transform Your Video Creation?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50,000+ creators who are already using our AI to create engaging videos in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 animate-float bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500">
              Start Creating Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}