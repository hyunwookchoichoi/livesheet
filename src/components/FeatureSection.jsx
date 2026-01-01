export default function FeatureSection() {
    const features = [
        {
            title: "학원 동선에 맞춘 솔루션",
            description: "만들어진 서비스에 학원을 꾸겨넣는 서비스가 아닙니다. 학원 동선에 맞게 계속 업데이트됩니다.",
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
            title: "학생 풀이 내역 자동 수집",
            description: "학생들이 푼 문제, 정답률, 오답 패턴까지 자동으로 집계되어 선생님 대시보드로 전달됩니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "종이 인쇄 + 워터마크",
            description: "종이로도 다운로드 가능. 누가 다운로드 받았는지 워터마크를 찍어서 제공합니다.",
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
                        학원의 디지털 전환을 함께하는 파트너입니다
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
