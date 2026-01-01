export default function FeatureSection() {
    const features = [
        {
            title: "AI 시대, 맞춤형 개발 파트너",
            description: "단순한 프로그램이 아닙니다. 선생님들의 수업 방식에 맞춰 진화하는 맞춤형 솔루션입니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "빠른 기능 추가",
            description: "사용하시다가 불편하거나 필요하신 기능이 있으시면 말씀해주세요. 빠르게 기능 추가가 됩니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "대형 학원급 디지털 역량",
            description: "대형 학원들 못지않은 디지털 역량을 갖추게 해드립니다. IT 인력 없이도 가능합니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "종이 인쇄 병행 가능",
            description: "디지털이 불편한 학생에게는 PDF로 전달하세요. 종이와 디지털을 자유롭게 병행할 수 있습니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-navy">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        단순 프로그램이 아닙니다
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        학원의 디지털 전환을 함께하는 <span className="text-accent font-semibold">파트너</span>입니다
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover-lift"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
