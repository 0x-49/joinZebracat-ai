import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
            <p>
              By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Zebracat's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Zebracat's website are provided on an 'as is' basis. Zebracat makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </main>
      <Footer />
    </>
  );
}