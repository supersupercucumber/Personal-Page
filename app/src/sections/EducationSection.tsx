import { useEffect, useRef } from 'react';
import { Calendar, Award, BookOpen, TrendingUp } from 'lucide-react';

export default function EducationSection() {
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

  const courses = [
    'C/C++',
    '信号与系统',
    '概率论与随机过程',
    '数字逻辑与处理器基础',
    '数据与算法',
    '通信与网络',
    '电磁场与波',
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">教育背景</h2>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                清华大学
              </h3>
              <p className="text-lg text-purple-600 font-medium">
                电子工程系 · 本科
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
              <Calendar className="w-4 h-4" />
              2022.09 - 2026.06
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">GPA</div>
                <div className="text-lg font-semibold text-gray-900">3.82 / 4.0</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">专业排名</div>
                <div className="text-lg font-semibold text-gray-900">41 / 258 (15.89%)</div>
              </div>
            </div>
          </div>

          {/* Academic Development */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">学术发展</div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  目前大四，已成功推免至清华大学电子工程系攻读信息与通信工程博士学位，预计2026年9月入学
                </p>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="text-sm font-medium text-gray-500 mb-3">主修课程</div>
            <div className="flex flex-wrap gap-2">
              {courses.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
