import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Cpu, Bot, Brain, Sparkles } from 'lucide-react';

interface Internship {
  company: string;
  period: string;
  role: string;
  highlights: string[];
  icon: React.ReactNode;
  color: string;
}

const internships: Internship[] = [
  {
    company: '中国科学院自动化研究所',
    period: '2025.11 - 至今',
    role: '大模型高效架构设计',
    highlights: [
      '提出一种融合线性注意力（Linear Attention）与树突计算（Dendritic Computing）的新型稀疏架构，旨在解决传统 MoE 模型中的记忆碎片化难题',
      '设计 Recurrent Dendritic Expert 机制，将循环状态引入专家网络内部，在保持线性复杂度的同时实现了长序列信息的有效保持与非线性整合',
    ],
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: '字节跳动',
    period: '2025.09 - 2025.11',
    role: '大模型自动化评测',
    highlights: [
      '构建面向大模型评测的多智能体（Multi-Agent）协作架构，设计工作流实现对模型复杂推理能力的自动化评估',
      '基于 AIDE 范式开发具备自我迭代能力的 Kaggle 算法 Agent，实现了从代码生成到超参数调优的全流程自动化',
      '优化评测流水线效率，通过多轮对话与反馈机制，显著提升了 Agent 在算法竞赛场景下的解题准确率与鲁棒性',
    ],
    icon: <Bot className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: '上海人工智能实验室',
    period: '2025.06 - 2025.08',
    role: '大模型基础架构',
    highlights: [
      '针对基于扩散模型（Diffusion）的多模态大模型，应用视觉对比解码（VCD）技术，旨在缓解图像生成过程中的幻觉问题',
      '开发可视化分析工具，对模型生成过程中的注意力分布进行观测，深入探究幻觉现象产生的深层机理',
      '搭建实验对比流程，验证了 VCD 方法在不同干扰条件下对增强模型生成内容可靠性的实际效果',
    ],
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-amber-500 to-orange-500',
  },
  {
    company: '上海人工智能实验室',
    period: '2024.07 - 2024.09',
    role: '大模型因果推理',
    highlights: [
      '调研并复现多种面向时间序列预测的 Transformer 变体架构，评估其在特定任务场景下的适用性与性能表现',
      '探索利用大语言模型（LLM）的通识先验知识辅助因果推断，尝试解决二元时间序列因果方向识别的难题',
      '构建时间序列测试用例，分析了 LLM 在处理不同类型因果关系时的推理准确率与局限性',
    ],
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function InternshipSection() {
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
      id="internship"
      className="py-20 px-6 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">实习经历</h2>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${internship.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white">{internship.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                    {internship.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {internship.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Role Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  {internship.role}
                </span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5">
                {internship.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
