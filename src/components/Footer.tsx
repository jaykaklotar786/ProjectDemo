import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#e9ebe3] text-[#1f2b0a]">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-full"></div>
            <span className="text-xl font-semibold">Charity</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            The power of giving: Support a cause and make a difference through
            charity.
          </p>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Our History</li>
            <li>What We Believe</li>
            <li>Our Programs</li>
            <li>Partners</li>
          </ul>
        </div>

        {/* Ways To Give */}
        <div>
          <h4 className="font-semibold mb-4">Ways To Give</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Fundraise</li>
            <li>Planned Giving</li>
            <li>Brand Partnership</li>
            <li>Legacy Giving</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>1234 Thornridge Cir. Syracuse, Connecticut 56789</li>
            <li>(406) 555-0121</li>
            <li>mail@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Non–Profit Organization. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Facebook
              size={18}
              className="cursor-pointer hover:text-green-700 transition"
            />
            <Twitter
              size={18}
              className="cursor-pointer hover:text-green-700 transition"
            />
            <Instagram
              size={18}
              className="cursor-pointer hover:text-green-700 transition"
            />
            <Youtube
              size={18}
              className="cursor-pointer hover:text-green-700 transition"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
