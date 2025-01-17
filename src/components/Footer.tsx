import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><Button variant="link" href="/features/text-to-video">Features</Button></li>
            <li><Button variant="link" href="/pricing">Pricing</Button></li>
            <li><Button variant="link" href="/use-cases/marketing">Use Cases</Button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Button variant="link" href="/about">About</Button></li>
            <li><Button variant="link" href="/contact">Contact</Button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2">
            <li><Button variant="link" href="/features/text-to-video">Text to Video</Button></li>
            <li><Button variant="link" href="/features/ai-voices">AI Voices</Button></li>
            <li><Button variant="link" href="/features/ai-editing">AI Editing</Button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Button variant="link" href="/privacy">Privacy</Button></li>
            <li><Button variant="link" href="/terms">Terms</Button></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border text-center text-muted-foreground">
        <p className="mb-4">&copy; 2025 Zebracat AI. All rights reserved.</p>
        <p className="text-sm">
          Affiliate Disclosure: Some links on this site may be affiliate links. If you click on them and make a purchase, we may receive a commission. This helps support our platform while ensuring you don't pay anything extra. We only recommend tools and services we genuinely believe in.
        </p>
      </div>
    </footer>
  );
};

export default Footer;