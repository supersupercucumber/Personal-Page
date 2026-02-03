import { useEffect, useRef } from 'react';
import { Award, Trophy, Medal, Star, Calendar } from 'lucide-react';

interface Honor {
  title: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  highlight?: boolean;
}

const honors: Honor[] = [
  {
    title: '清华大学学业优秀奖学金',
    date: '2025.09',
    icon: <Award className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: '入选北京市自然科学基金本科生"启研"计划，获得5万元科研基金支持',
    date: '2025.05',
    icon: <Star className="w-5 h-5" />,
    color: 'from-amber-500 to-orange-500',
    highlight: true,
  },
  {
    title: '2025华为终端硬件精英挑战赛北部赛区决赛十六强',
    date: '2025.03',
    icon: <Trophy className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: '清华大学学业优秀奖学金',
    date: '2023.09',
    icon: <Award className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: '清华大学硬件设计大赛二等奖',
    date: '2023.09',
    icon: <Medal className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function HonorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="honors"
      className="py-20 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">个人荣誉</h2>
        </div>

        {/* Honors List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {honors.map((honor, index) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors duration-200 opacity-0 ${
                index !== honors.length - 1 ? 'border-b border-gray-100' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${honor.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                <span className="text-white">{honor.icon}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className={`text-base font-medium leading-snug ${
                  honor.highlight ? 'text-amber-700' : 'text-gray-900'
                }`}>
                  {honor.title}
                </h3>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-gray-500 text-sm flex-shrink-0">
                <Calendar className="w-4 h-4" />
                <span>{honor.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-1">2</div>
            <div className="text-sm text-gray-500">学业优秀奖学金</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-amber-600 mb-1">1</div>
            <div className="text-sm text-gray-500">科研基金项目</div>
          </div>
          <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-1">2</div>
            <div className="text-sm text-gray-500">竞赛荣誉</div>
          </div>
        </div>
      </div>
    </section>
  );
}
