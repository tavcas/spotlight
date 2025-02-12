import type { MetaFunction } from "@remix-run/node";
import Faker from "~/components/Faker";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Nav from "~/components/Nav";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (

    <main className="pattern-diagonal-lines pattern-gray-200 pattern-bg-white 
          pattern-size-4 pattern-opacity-100">
      <Header />
      <Hero />
      <section id="about" className="min-h-screen bg-blue">
        <h1 className="text-xl">About me</h1>
        <Faker />
      </section>
      <section id="stack" className="min-h-screen bg-red">
        <h1 className="text-xl">Stack</h1>
        <Faker />
      </section>
      <section id="experience" className="min-h-screen bg-green">
        <h1 className="text-xl">Experience</h1>
        <Faker />
      </section>
      <Nav />
      <Footer />
    </main>
  );
}
