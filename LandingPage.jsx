import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white flex flex-col items-center p-6">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-center max-w-2xl mt-16">
        <h1 className="text-4xl font-bold">Connecting Law Firms with Vetted Cybersecurity Providers</h1>
        <p className="mt-4 text-lg">Ensure your law firm’s data stays secure with trusted cybersecurity experts.</p>
        <Button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">Get Connected Now</Button>
      </motion.div>

      {/* Benefits Section */}
      <div className="mt-16 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Trusted Experts", desc: "We vet every cybersecurity provider to ensure top-tier service." },
          { title: "Legal-Specific Security", desc: "Providers specialize in securing sensitive legal data." },
          { title: "Seamless Matching", desc: "We connect you with the right expert based on your needs." },
        ].map((item, index) => (
          <Card key={index} className="bg-white text-blue-900 p-6 rounded-2xl shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="mt-16 w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl text-blue-900">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-2">Fill out the form below, and we'll connect you with the right cybersecurity provider.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <Input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <Textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <Button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">Submit</Button>
        </form>
      </motion.div>
    </div>
  );
}
