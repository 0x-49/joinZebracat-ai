import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Education() {
  return (
    <>
      <Header />
      <main className="container py-16">
        <h1 className="text-4xl font-bold mb-8">Educational Content</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Create engaging educational videos easily with our AI video platform.
        </p>
        {/* Add more content here */}
      </main>
      <Footer />
    </>
  );
}