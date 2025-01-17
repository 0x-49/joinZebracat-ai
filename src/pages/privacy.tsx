import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from other sources.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and our users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p>
              We do not share your personal information except in specific situations outlined in this policy.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </main>
      <Footer />
    </>
  );
}