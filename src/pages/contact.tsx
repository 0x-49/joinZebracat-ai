import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Have questions? We'd love to hear from you.
        </p>
        
        <div className="max-w-2xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}