import { useEffect, useRef } from 'react';
import { Calendar, MapPin, ChevronRight, FileText } from 'lucide-react';

interface ResearchProject {
  title: string;
  period: string;
  location: string;
  highlights: string[];
  achievement?: string;
}

const researchProjects: ResearchProject[] = [
  {
    title: '大规模多输入多输出ODDM系统信道估计关键技术研究',
    period: '2025.06 - 至今',
    location: '清华大学 电子工程系',
    highlights: [
      '针对信道参数的四维强非线性耦合与稀疏特性，构建了高保真的 Massive MIMO ODDM 信道模型',
      '提出四维离格稀疏贝叶斯学习算法，通过参数解耦显著降低计算复杂度，突破了高维信道估计的性能瓶颈',
      '设计基于迫零准则的跨域混合预编码架构，有效消除了多用户干扰，大幅提升接收机检测准确率',
    ],
    achievement: '入选北京市自然科学基金本科生"启研"计划（获5万元科研基金支持），一作论文投至 IEEE TWC',
  },
  {
    title: '面向高移动性场景的ODDM系统信道估计算法研究',
    period: '2025.04 - 2025.10',
    location: '清华大学 电子工程系',
    highlights: [
      '针对 ODDM 信道参数耦合难题，建立部分解耦的二维稀疏信号恢复模型，突破传统方法的理论局限',
      '提出基于分层稀疏贝叶斯学习 (HSBL) 的算法框架，采用"粗网格定位+细网格精搜"策略，解决传统非网格 SBL 算法计算复杂度过高的问题',
      '仿真验证表明：该算法在高移动性场景下，相比主流方案大幅降低运算开销，同时显著提升信道估计精度与误码率性能',
    ],
    achievement: '一作论文被 IEEE ICC 录用',
  },
  {
    title: 'OTFS系统联合低带外辐射波形设计与信道估计',
    period: '2025.03 - 2025.04',
    location: '清华大学 电子工程系',
    highlights: [
      '提出一种基于"时延域边缘置零"的新型 OTFS 帧结构，通过物理隔离有效抑制带外辐射 (OOBE)，显著提升频谱纯净度',
      '设计适配该结构的二维牛顿化正交匹配追踪 (2D-NOMP) 算法，利用零填充区作为天然保护间隔，提升频谱效率',
      '验证了所提方案在极低 OOBE 代价下仍能保持稳健的误码率 (BER) 性能，实现了波形设计与信道估计的联合优化',
    ],
    achievement: '一作论文投至 IEEE Communications Letters',
  },
  {
    title: '双色散信道中基于动态信干噪比的迭代干扰消除算法',
    period: '2024.09 - 2025.03',
    location: '清华大学 电子工程系',
    highlights: [
      '构建 ODDM 时域信道模型，为信号检测算法开发提供坚实的理论支撑',
      '设计基于动态 SINR 的迭代干扰消除算法，通过动态更新机制，在降低算法复杂度的同时显著提升检测准确率',
      '搭建全链路 ODDM 信号检测仿真平台，验证了算法在复杂双色散信道环境下的鲁棒性',
    ],
    achievement: '一作论文被 IEEE CIC ICCC 录用',
  },
  {
    title: 'FilterLoss：一种用于通信场景识别的迁移学习算法',
    period: '2023.09 - 2024.07',
    location: '清华大学 电子工程系',
    highlights: [
      '提出加权损失函数"FilterLoss"，有效解决通信场景识别中样本匮乏与分布不平衡的难题',
      '利用迁移学习压缩神经网络规模，显著降低计算资源需求，实现模型在移动终端设备的轻量化部署',
    ],
    achievement: '一作论文被 IEEE ICCC 录用',
  },
];

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="research"
      className="py-20 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">科研经历</h2>
        </div>

        {/* Research Projects */}
        <div className="space-y-8">
          {researchProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg font-medium">
                    <Calendar className="w-4 h-4" />
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-5">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>

              {/* Highlights */}
              <ul className="space-y-3 mb-5">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Achievement */}
              {project.achievement && (
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100">
                  <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-amber-800 font-medium text-sm">
                    {project.achievement}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
