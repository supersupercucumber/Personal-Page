import { useEffect, useRef } from 'react';
import { FileCheck, Send, ExternalLink, Users } from 'lucide-react';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  status: 'accepted' | 'submitted';
  year?: string;
}

const acceptedPapers: Publication[] = [
  {
    title: 'Channel Estimation with Hierarchical Sparse Bayesian Learning for ODDM Systems',
    authors: 'Jiasong Han, Xuehan Wang, Jingbo Tan, Jintao Wang, Yu Zhang, Hai Lin, Jinhong Yuan',
    venue: 'IEEE International Conference on Communications (ICC)',
    status: 'accepted',
    year: '2026',
  },
  {
    title: 'Dynamic SINR-Guided Iterative Interference Cancellation for ODDM Systems in Doubly Dispersive Channels',
    authors: 'Jiasong Han, Xuehan Wang, Jintao Wang',
    venue: 'IEEE/CIC International Conference on Communications in China (ICCC)',
    status: 'accepted',
    year: '2025',
  },
  {
    title: 'FilterLoss: A Transfer Learning Approach for Communication Scene Recognition',
    authors: 'Jiasong Han, Yufei Feng, Xiaofeng Zhong',
    venue: 'International Conference on Computer and Communications (ICCC)',
    status: 'accepted',
    year: '2025',
  },
];

const submittedPapers: Publication[] = [
  {
    title: 'Channel Estimation with Hierarchical Sparse Bayesian Learning for Hybrid Precoding Massive MIMO ODDM Systems',
    authors: 'Jiasong Han, Xuehan Wang, Jintao Wang, Yu Zhang',
    venue: 'IEEE Transactions on Wireless Communications (TWC)',
    status: 'submitted',
  },
  {
    title: 'Joint Low-OOBE Waveform Design and Channel Estimation for OTFS Systems',
    authors: 'Jiasong Han, Xuehan Wang, Jintao Wang, Yu Zhang',
    venue: 'IEEE Communications Letters',
    status: 'submitted',
  },
];

export default function PublicationsSection() {
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
      id="publications"
      className="py-20 px-6 bg-gray-50 opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-purple-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-900">科研成果</h2>
        </div>

        {/* Accepted Papers */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <FileCheck className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">已录用/发表论文</h3>
            <span className="px-2.5 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              {acceptedPapers.length}
            </span>
          </div>

          <div className="space-y-4">
            {acceptedPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {paper.title}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Users className="w-4 h-4" />
                      <span className="truncate">{paper.authors}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {paper.venue}
                      </span>
                      {paper.year && (
                        <span className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                          {paper.year}
                        </span>
                      )}
                      {paper.status === 'accepted' ? (
                        <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                          已录用
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium">
                          审稿中
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submitted Papers */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Send className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl font-semibold text-gray-900">在投论文</h3>
            <span className="px-2.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
              {submittedPapers.length}
            </span>
          </div>

          <div className="space-y-4">
            {submittedPapers.map((paper, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-600">{index + 4}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                      {paper.title}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Users className="w-4 h-4" />
                      <span className="truncate">{paper.authors}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {paper.venue}
                      </span>
                      <span className="px-2.5 py-1 bg-amber-100 text-amber-700 rounded-lg text-sm font-medium">
                        审稿中
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
