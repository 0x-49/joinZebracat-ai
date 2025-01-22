import React from "react";
import Head from "next/head";
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Video, Users, FileText, Mic, Sparkles, Globe2, ArrowRight, Play } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <>
      {/* Testimonials Section */}
      <section aria-labelledby="testimonials-heading" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" role="region">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 animate-float">Verified Results</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Content Teams</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Mitchell",
                role: "Lead Video Producer",
                company: "SocialBoost Media",
                text: "Cut our video production time by 70% while maintaining quality control.",
                img: "/images/testimonials/sarah-mitchell.jpg"
              },
              {
                name: "James Chen",
                role: "Content Director", 
                company: "GlobalTrend",
                text: "The multi-language support helped us expand to 3 new markets.",
                img: "/images/testimonials/james-chen.jpg"
              },
              {
                name: "Emma González",
                role: "Social Media Manager",
                company: "TechStart Inc",
                text: "Now create 50+ videos weekly with just 2 team members.",
                img: "/images/testimonials/emma-gonzalez.jpg"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage 
                        src={testimonial.img}
                        alt={`${testimonial.name} headshot`}
                        loading="lazy"
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role}<br/>
                        {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm relative z-10">
                    "{testimonial.text}"
                    <span className="block mt-2 text-xs text-muted-foreground">
                      Verified user since {new Date().getFullYear() - 1}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-heading" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Start Creating Free</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent"
              variant="default"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
            <Button
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg border-2 hover:bg-accent/10"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Join 50,000+ creators including industry leaders
          </p>
        </div>
      </section>
    </>
  );
}
