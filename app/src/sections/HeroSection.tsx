import { useEffect, useRef } from 'react';
import { Mail, Phone, GraduationCap, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-20 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Avatar/Icon */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-xl">
              <span className="text-6xl md:text-7xl font-bold text-white">韩</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              韩佳松
            </h1>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                清华大学 电子工程系
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                <BookOpen className="w-4 h-4" />
                信息与通信工程 博士(推免)
              </span>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
              目前大四，已成功推免至清华大学电子工程系攻读信息与通信工程博士学位，预计2026年9月入学。研究方向聚焦于无线通信、信道估计与大规模MIMO系统。
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-gray-600">
              <a
                href="mailto:hanjs22@mails.tsinghua.edu.cn"
                className="inline-flex items-center gap-2 hover:text-purple-600 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">hanjs22@mails.tsinghua.edu.cn</span>
              </a>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm">138 3699 3113</span>
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">3.82</div>
            <div className="text-sm text-gray-500">GPA / 4.0</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">5</div>
            <div className="text-sm text-gray-500">篇论文</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
            <div className="text-sm text-gray-500">段实习</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-1">5+</div>
            <div className="text-sm text-gray-500">项荣誉</div>
          </div>
        </div>
      </div>
    </section>
  );
}
