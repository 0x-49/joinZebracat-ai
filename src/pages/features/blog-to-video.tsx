import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FileText, Sparkles, Video, Star, BarChart, Globe, Clock, ChevronDown, ChevronUp } from "lucide-react";

// Dynamically import heavy components
const Header = dynamic(() => import("@/components/Header"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

// FAQ Data
const faqData = [
  {
    question: "How long does it take to convert a blog post to video?",
    answer: "Our AI typically converts blog posts to videos in 5-15 minutes, depending on content length. The process includes content analysis, script generation, visual matching, and voiceover creation - all automated for maximum efficiency."
  },
  {
    question: "What types of blogs work best with the video converter?",
    answer: "Our system works excellently with how-to guides, listicles, product reviews, and educational content. We support blogs from 500 to 5000 words, optimizing them for video format while maintaining key messages."
  },
  {
    question: "Can I customize the video style and branding?",
    answer: "Yes! You can customize colors, fonts, transitions, and add your logo. Premium users can access advanced features like custom intro/outro sequences and branded templates."
  },
  {
    question: "What video formats and quality options are available?",
    answer: "We support multiple formats including vertical (9:16) for Stories/TikTok, square (1:1) for Instagram, and landscape (16:9) for YouTube. Videos are available in up to 4K resolution."
  },
  {
    question: "How does the AI ensure quality and coherence?",
    answer: "Our AI uses advanced NLP to understand context, maintain narrative flow, and select relevant visuals. It's trained on millions of successful videos to ensure professional-quality output."
  }
];

export default function BlogToVideo() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // Preload critical images
    const imageUrls = [
      '/hero-background.jpg',
      '/testimonial-avatar.jpg',
    ];
    
    imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
    });

    // Add intersection observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    document.querySelectorAll('.lazy-load').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleStartConverting = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Add actual API call
      console.log("Starting conversion process...");
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (err) {
      setError("Failed to start conversion. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewExamples = () => {
    // TODO: Implement examples navigation
    console.log("Viewing examples...");
  };
  return (
    <>
      <Head>
        <title>Blog to Video Converter | AI Video Creation | Zebracat AI</title>
        <meta name="description" content="Transform blog posts into engaging videos automatically. Boost engagement by 80% and maximize your content reach. Perfect for content creators and marketers." />
        <meta name="keywords" content="blog to video converter, AI video creation, content repurposing, video marketing, content marketing" />
      </Head>
      <Header />
      
        {/* Error Message */}
        {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md">
          {error}
        </div>
        )}

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
          src="/hero-background.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
          quality={75}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">Boost Blog Engagement by 80%</Badge>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
            Transform Blog Posts Into Engaging Videos
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop missing out on video traffic. Convert your blog content into captivating videos in minutes with AI. Reach wider audiences and boost engagement across all platforms.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={handleStartConverting}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Start Converting Free"}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleViewExamples}
            >
              View Examples
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>Rated 4.8/5 by Content Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              <span>15,000+ Blog Videos Created</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 lazy-load opacity-0 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Convert Blogs to Videos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>80% Higher Engagement</CardTitle>
                <CardDescription>
                  Videos drive significantly higher engagement than text content. Capture attention and keep viewers watching longer.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Reach New Audiences</CardTitle>
                <CardDescription>
                  Tap into video-first platforms like YouTube, TikTok, and Instagram. Expand your content's reach exponentially.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Save Hours of Work</CardTitle>
                <CardDescription>
                  Convert blogs to videos in minutes, not hours. No video editing skills required - our AI handles everything.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50 lazy-load opacity-0 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Blog to Video Conversion Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Input Blog URL</h3>
              <p className="text-muted-foreground">Paste your blog URL or content - we'll analyze it automatically</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. AI Summarizes Content</h3>
              <p className="text-muted-foreground">Our AI extracts key points and creates an engaging script</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. Generate Video</h3>
              <p className="text-muted-foreground">AI matches visuals to your content and adds professional voiceover</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">4. Export & Share</h3>
              <p className="text-muted-foreground">Download your video or share directly to social media</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 lazy-load opacity-0 transition-opacity duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Content Creators Say</h2>
          <blockquote className="max-w-2xl mx-auto mb-8">
            <p className="text-xl italic mb-4">
              "Creating video content from our blogs used to be a time-consuming task, but now we've cut our production time in half while doubling our content output. Massive impact for our content strategy."
            </p>
            <footer className="text-muted-foreground">
              - Alex, Content Strategy Lead
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 lazy-load opacity-0 transition-opacity duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Amplify Your Blog Content?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of content creators who are expanding their reach and boosting engagement with AI-powered blog-to-video conversion.
          </p>
          <Button size="lg" className="text-lg px-8">Start Converting Free</Button>
        </div>
      </section>
      
        {/* New FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border rounded-lg p-4">
            <button
              className="w-full flex justify-between items-center"
              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
            >
              <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
              {openFaqIndex === index ? (
              <ChevronUp className="h-5 w-5" />
              ) : (
              <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {openFaqIndex === index && (
              <p className="mt-4 text-muted-foreground">{faq.answer}</p>
            )}
            </div>
          ))}
          </div>
        </div>
        </section>

        <Footer />
      </>
  );
}