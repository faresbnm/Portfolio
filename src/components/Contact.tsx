import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs.sendForm(
      'service_p9d3vdf',      // Replace with your actual EmailJS service ID
      'template_7uf4cpm',     // Replace with your EmailJS template ID
      formRef.current,
      'XhNuR_yXJSWUmUYgy'       // Replace with your EmailJS public key
    ).then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      toast({
        title: "Failed to send!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }).finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Let's Work Together
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold text-purple-400 mb-6">Get In Touch</h3>
            <p className="text-lg text-foreground/80 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white"><MdOutlineEmail /></span>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Email</div>
                  <div className="text-foreground/80">fbnm8829@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white"><FaPhoneAlt /></span>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Phone</div>
                  <div className="text-foreground/80">+213 562 21 64 03</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white"><FaMapLocationDot /></span>
                </div>
                <div>
                  <div className="text-purple-400 font-semibold">Location</div>
                  <div className="text-foreground/80">Algiers, Algeria</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-effect p-6 rounded-xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
