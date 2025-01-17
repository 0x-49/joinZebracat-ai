import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingPage = () => {
  const [isYearly, setIsYearly] = React.useState(true);

  const features = [
    { name: "Video Generation", free: "1 min/week", cat: "30 min/month", superCat: "70 min/month" },
    { name: "Credits", free: "5/week", cat: "120/month", superCat: "300/month" },
    { name: "Export Resolution", free: "720p", cat: "1080p", superCat: "1080p" },
    { name: "AI Voices", free: "Standard", cat: "Ultra-realistic", superCat: "Ultra-realistic + Cloning" },
    { name: "Languages", free: "80+", cat: "170+", superCat: "170+" },
    { name: "Watermark", free: "Yes", cat: "No", superCat: "No" },
    { name: "Brand Kit", free: "No", cat: "1", superCat: "10" },
    { name: "AI Avatars", free: "No", cat: "No", superCat: "Yes" },
    { name: "Custom AI Styles", free: "No", cat: "No", superCat: "Yes" },
  ];

  const faqs = [
    {
      question: "Can I use Zebracat AI video generator for free?",
      answer: "Yes! Our free plan includes 5 credits per week and allows you to create up to 1 minute of video content weekly."
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings."
    },
    {
      question: "What payment services do you support?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for enterprise customers."
    },
    {
      question: "Can I pay monthly for Zebracat?",
      answer: "Yes, while we offer discounts for annual plans, you can choose to pay monthly for any of our plans."
    }
  ];
  return (
    <>
      <Head>
        <title>Pricing - Zebracat</title>
        <meta
          name="description"
          content="Choose the perfect plan for your video creation needs. From free to enterprise, we have you covered."
        />
      </Head>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        {/* Hero Section */}
        <section className="container py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your video creation needs. All plans include core features.
            </p>
            <div className="flex items-center justify-center gap-4 mb-12">
            <Label htmlFor="billing-toggle">Monthly</Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <Label htmlFor="billing-toggle" className="text-primary font-semibold">
              Yearly (Save 60%)
            </Label>
            </div>
          </section>

        {/* Pricing Cards */}
        <section className="container pb-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Free Plan</CardTitle>
                <CardDescription>Perfect for trying out Zebracat</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>5 credits/week</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 min/week video generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Export up to 720p</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Standard AI voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>80+ languages</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>

            {/* Cat Mode */}
            <Card className="border-primary">
              <CardHeader>
                <div className="px-4 py-1 bg-primary text-primary-foreground rounded-full w-fit text-sm mb-4">
                  Most Popular
                </div>
                <CardTitle>Cat Mode</CardTitle>
                <CardDescription>For regular content creators</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-sm text-muted-foreground mt-1">Billed $187.2 yearly</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>120 credits/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>30 mins/month video generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Export up to 1080p</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Ultra-realistic AI voices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Premium AI visuals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Brand Kit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>No watermark</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">Try Cat Mode</Button>
              </CardFooter>
            </Card>

            {/* Super Cat */}
            <Card>
              <CardHeader>
                <CardTitle>Super Cat</CardTitle>
                <CardDescription>For power users and teams</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-muted-foreground">/month</span>
                  <p className="text-sm text-muted-foreground mt-1">Billed $470.40 yearly</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>300 credits/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>70 mins/month video generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Export up to 1080p</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>AI Avatars</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Voice Cloning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Custom AI styles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Character consistency</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>10 Brand Kits</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Try Super Cat</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="container pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
          <div className="max-w-6xl mx-auto">
          <Table>
            <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Free Plan</TableHead>
              <TableHead>Cat Mode</TableHead>
              <TableHead>Super Cat</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {features.map((feature) => (
              <TableRow key={feature.name}>
              <TableCell className="font-medium">{feature.name}</TableCell>
              <TableCell>{feature.free === "Yes" ? <Check className="h-4 w-4 text-primary" /> : 
                    feature.free === "No" ? <X className="h-4 w-4 text-muted-foreground" /> : 
                    feature.free}</TableCell>
              <TableCell>{feature.cat === "Yes" ? <Check className="h-4 w-4 text-primary" /> : 
                    feature.cat === "No" ? <X className="h-4 w-4 text-muted-foreground" /> : 
                    feature.cat}</TableCell>
              <TableCell>{feature.superCat === "Yes" ? <Check className="h-4 w-4 text-primary" /> : 
                    feature.superCat === "No" ? <X className="h-4 w-4 text-muted-foreground" /> : 
                    feature.superCat}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
          </div>
        </section>

        {/* FAQ Section with Accordion */}
        <section className="container pb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
            ))}
          </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Creating?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of creators who are already using Zebracat to create amazing videos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg">Get Started for Free</Button>
              <Button size="lg" variant="outline">Contact Sales</Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;