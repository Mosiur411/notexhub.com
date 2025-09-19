"use client";
import { TbMailShare } from "react-icons/tb";
import Input from "../../sheard/FormElement/Input";
import Textarea from "../../sheard/FormElement/Textarea";
import Button from "../../sheard/button/Button";
import toast, { Toaster } from 'react-hot-toast';

export default function PricingAndQuote() {
   const handleQuoteForm = e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const number = form.number.value;
        const message = form.message.value;
        const newConsoleValue = {firstName, lastName, email, number, message}
        console.log(newConsoleValue);
         toast('Your details have been submitted.');
         form.reset()

    }
  return (
    <section
      className="text-white py-20 px-5 sm:px-10 lg:px-20 relative z-[5]"
      aria-labelledby="pricing-quote-heading"
    >
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p
          className="text-sm text-lime-400 tracking-widest uppercase"
          id="pricing-quote-heading"
        >
          🧾 Pricing & Quote
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-white leading-snug">
          Choose a Plan or Request a Custom Quote
        </h2>
        <p className="text-gray-400 mt-4 text-base">
          We offer scalable solutions globally. Select a predefined package or
          contact us for a fully customized plan tailored to your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-24">
        {[
          {
            title: "Starter",
            price: "$120+",
            highlight: false,
            features: [
              "Static Website",
              "Up to 5 Pages",
              "Mobile Responsive",
              "Basic SEO",
            ],
            bg: "from-[#0c0c0c] via-[#111111] to-[#1a1a1a]",
          },
          {
            title: "Pro",
            price: "$300+",
            highlight: true,
            features: [
              "Dynamic Website",
              "CMS Panel",
              "API Integration",
              "Optimization & SEO",
            ],
            bg: "from-lime-600 via-lime-500 to-lime-400",
          },
          {
            title: "Custom",
            price: "Flexible",
            highlight: false,
            features: [
              "Tailored Solution",
              "Any Stack",
              "Full-Scale App",
              "Ongoing Support",
            ],
            bg: "from-[#0c0c0c] via-[#111111] to-[#1a1a1a]",
          },
        ].map((plan, idx) => (
          <article
            key={idx}
            className={`relative group rounded-2xl border border-white/10 p-8 bg-gradient-to-br ${plan.bg} text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
            role="region"
            aria-labelledby={`plan-${idx}`}
          >
            {plan.highlight && (
              <span className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                Most Popular
              </span>
            )}
            <h3
              id={`plan-${idx}`}
              className="text-2xl font-bold mb-2 text-white"
            >
              {plan.title}
            </h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-2 text-sm text-white/90 mb-8">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={`${
                      plan.highlight ? "text-black" : "text-lime-400"
                    } text-lg leading-5`}
                  >
                    ✔
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-lime-400 transition
              ${
                plan.highlight
                  ? "bg-black text-lime-400 hover:bg-white hover:text-black border border-white"
                  : "border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
              }
              `}
            >
              {plan.title === "Custom" ? "Get a Quote" : "Select Plan"}
            </button>
          </article>
        ))}
      </div>
        <Toaster toastOptions={{
               style: {
                marginTop: '50px',
      background: '#111204',
      padding: '16px',
      color: 'white',
      border: '1px solid #B9FD50'
    },
            }}
  position="top-right"
  reverseOrder={false} 
/>

      {/* Contact Form */}
      <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-10 border border-white/10 backdrop-blur-xl">
      
        <h3 className="text-2xl font-bold mb-6 text-center text-lime-400">
          📩 Request a Custom Quote
        </h3>
        {/* form section starts from here */}
        <form onSubmit={handleQuoteForm}>
          
          <div className="xl:px-10">
            
          <div className="sm:flex items-center xl:gap-14 gap-10 my-8">
            <Input
            name="firstName"
              data-aos="fade-up"
              type="text"
              idFor="firstName"
              label="First name"
              placeholder="Enter your first name"
            />
            <Input
            name="lastName"              data-aos="fade-down"
              type="text"
              idFor="lastName"
              label="Last name"
              placeholder="Enter your last name"
            />
          </div>
          <div className="sm:flex items-center xl:gap-14 gap-10 my-8">
            <Input
            name="email"       
              data-aos="fade-up"
              type="email"
              idFor="email"
              label="Email"
              placeholder="Enter your email"
            />
            <Input
            name="number"
            data-aos="fade-down"
              type="number"
              idFor="number"
              label="Phone number"
              placeholder="Enter your phone number"
            />
          </div>
          <Textarea
          name="message"
            data-aos="fade-up"
            idFor="message"
            label="Your message"
            placeholder="Describe your project..."
          />
          <div className="flex justify-end mt-10">
            <Button
              data-aos="fade-up"
              type="submit"
              text="Send Request"
              isFill={false}
              icon={<TbMailShare />}
            />
          </div>
        </div>
        </form>

      </div>
    </section>
  );
}
