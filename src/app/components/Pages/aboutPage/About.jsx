import React from "react";
import Head from "next/head";
import Image from "next/image";
import TitleBox from "../../uiKit/TitleBox";
import { TbCheckbox } from "react-icons/tb";
import aboutImg from "../../../assets/image/about/about1.png";
import aboutImg2 from "../../../assets/image/about/about2.png";

const benefitsArray = [
  "Full-Stack JavaScript Expertise",
  "Modern UI with Tailwind CSS",
  "Cross-Platform App Development",
  "Secure Authentication & Access Control",
  "Cloud Integration with AWS",
  "Scalable & Maintainable Code",
  "Agile & Transparent Workflow",
  "Client-Centric Communication",
  "Customized Digital Solutions",
  "Proactive Technical Support",
];

const coreValues = [
  "Integrity & Transparency",
  "Continuous Learning",
  "Client-First Mindset",
  "Collaborative Innovation",
  "Long-Term Code Quality",
];

const aiFeatures = [
  "ChatGPT / OpenAI API Integration",
  "AI-Based Resume Screening & Skill Matching",
  "Voice & Tone Analysis for Interviews",
  "AI-Powered Crime Report Analyzer",
  "Custom AI for Bangladesh-Specific Data",
];

const apiFeatures = [
  "Payment Gateway Integration (SSLCommerz, Stripe, bKash)",
  "Courier APIs (Pathao, RedX, SteadFast)",
  "Social Login (Google, Facebook, GitHub)",
  "Email & SMS APIs (SendGrid, Twilio)",
  "AI, OCR & 3rd Party API Integration",
];

function ListSection({ title, items }) {
  return (
    <section className="mt-10" data-aos="zoom-in-up">
      <h3 className="text-2xl font-semibold text-lime-400 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1 ml-5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Benefits() {
  return (
    <div
      className="grid sm:grid-cols-2 2xl:gap-x-12 gap-x-2 gap-y-3 mt-8"
      data-aos="fade-up"
    >
      {benefitsArray.map((benefit, idx) => (
        <div key={idx} className="flex items-start gap-2">
          <TbCheckbox className="text-lime-400 text-xl mt-1" />
          <p className="hover:text-lime-400 cursor-pointer">{benefit}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Notex",
    url: "https://yourwebsite.com", // <-- Replace with your website
    logo: "https://yourwebsite.com/path-to-logo.png", // <-- Replace with your logo URL
    sameAs: [
      "https://www.facebook.com/yourprofile",
      "https://twitter.com/yourprofile",
      "https://www.linkedin.com/company/yourcompany",
    ],
    description:
      "Notex is a global software agency headquartered in Bangladesh delivering secure, scalable, and intelligent full-stack solutions worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880123456789", // <-- Your phone
      contactType: "Customer Service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Bengali"],
    },
  };

  return (
    <>
      <Head>
        <title>
          About Notex - Global Software Agency | Secure & Scalable Solutions
        </title>
        <meta
          name="description"
          content="Notex is a global software agency headquartered in Bangladesh, empowering businesses worldwide with secure, scalable, and intelligent full-stack software solutions using modern technologies."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="About Notex - Global Software Agency"
        />
        <meta
          property="og:description"
          content="Empowering businesses worldwide with secure, scalable, and intelligent full-stack software solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-og-image.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <section className="pb-12 pt-32 z-[10] relative text-white max-w-7xl mx-auto px-6">
        <TitleBox
          tag="About Us"
          title1="Decoding Notex"
          title2="Empowering the Digital Future"
        />

        <div className="xl:flex 2xl:items-start items-center gap-10 py-10 mt-16">
          {/* Image Section */}
          <div className="relative xl:w-1/2">
            <Image
              data-aos="fade-up"
              src={aboutImg}
              alt="About Notex team working together"
              className="w-full rounded-lg shadow-lg"
            />
            <Image
              data-aos="fade-down"
              src={aboutImg2}
              alt="Creative brainstorming at Notex"
              className={`w-32 absolute left-12 opacity-80 -top-36`}
            />
          </div>

          {/* Content Section */}
          <div className="xl:w-1/2 mt-10 xl:mt-0 md:px-8 xl:px-0">
            <h1
              data-aos="fade-down"
              className="text-3xl font-semibold text-lime-400 mb-3"
            >
              Who We Are
            </h1>
            <p data-aos="zoom-in-up" className="text-gray-300 text-justify">
              <strong className="text-lime-400">Notex</strong> is a global
              software agency proudly headquartered in Bangladesh, empowering
              businesses across the world with secure, scalable, and intelligent
              full-stack solutions. We combine modern technologies like{" "}
              <strong>Next.js</strong>, <strong>React</strong>,{" "}
              <strong>Redux</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Tailwind CSS</strong> for frontend;{" "}
              <strong>Node.js</strong>, <strong>Express.js</strong> for backend;{" "}
              <strong>MongoDB</strong>, <strong>PostgreSQL</strong> for
              databases; <strong>GraphQL</strong> for API design; and{" "}
              <strong>Docker</strong>, <strong>AWS</strong>,{" "}
              <strong>Firebase</strong>, and other cloud platforms for
              deployment and scalability.
            </p>

            <p data-aos="zoom-in-up" className="text-gray-300 mt-4">
              At <strong>Notex</strong>, we are driven by core values that
              define our culture and quality:
            </p>

            <ul
              data-aos="zoom-in-up"
              className="list-disc list-inside ml-5 mt-2 text-gray-300"
            >
              {coreValues.map((value, idx) => (
                <li key={idx}>
                  <strong>{value.split(" ")[0]}:</strong>{" "}
                  {value.slice(value.indexOf(" ") + 1)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex  flex-col lg:flex-row gap-32 mt-12">
          <div className="lg:w-1/2">
            <div data-aos="zoom-in-up" className="space-y-4">
              <h2 className="text-2xl font-semibold text-lime-400">
                🚀 Our Mission & Vision
              </h2>
              <p className="text-gray-300 text-justify">
                To simplify technology and solve real-world challenges through
                high-quality code, automation, and client-centric innovation. To
                be a globally trusted digital partner that delivers intelligent,
                secure, and transformative software.
              </p>
            </div>

            <Benefits />

            {/* CTA */}
            <div
              data-aos="fade-up"
              className="mt-10 border-t border-gray-800 pt-6"
            >
              <h3 className="text-xl font-medium text-lime-400">
                🤝 Let’s Build Something Great Together!
              </h3>
              <p className="text-gray-300 mt-2">
                Have a big idea in mind?{" "}
                <span className="text-lime-400 font-medium">Notex</span> is here
                to turn your vision into reality — from code to launch.
              </p>
              <button className="mt-4 bg-lime-500 hover:bg-lime-600 transition px-6 py-2 rounded-md text-white font-medium">
                Get in Touch
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-10">
            <ListSection
              title="🤖 AI-Powered Capabilities"
              items={aiFeatures}
            />
            <ListSection
              title="🔗 Seamless API Integration"
              items={apiFeatures}
            />
          </div>
        </div>
      </section>
    </>
  );
}
