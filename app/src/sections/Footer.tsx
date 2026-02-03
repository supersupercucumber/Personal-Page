import { Mail, Phone, Heart, Github, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">韩佳松</h3>
            <p className="text-purple-200 text-sm mb-4">
              清华大学 电子工程系 · 信息与通信工程
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-purple-200">
              <a
                href="mailto:hanjs22@mails.tsinghua.edu.cn"
                className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                hanjs22@mails.tsinghua.edu.cn
              </a>
              <span className="hidden sm:inline text-purple-400">|</span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                138 3699 3113
              </span>
            </div>
          </div>

          {/* Right - Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:hanjs22@mails.tsinghua.edu.cn"
              className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-200"
              title="Google Scholar"
            >
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-purple-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-purple-300">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> by Jiasong Han
          </p>
          <p>Last updated: February 2025</p>
        </div>
      </div>
    </footer>
  );
}
