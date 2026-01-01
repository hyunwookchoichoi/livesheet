export default function SolveSection() {
    const features = [
        {
            title: "끝내주는 필기감",
            description: "종이에 쓰는 것처럼 자연스러운 필기 경험. 학생들이 디지털 학습에 빠르게 적응합니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
            )
        },
        {
            title: "문항별 풀이",
            description: "문제 하나하나 개별적으로 풀이 가능. 학생의 풀이 과정을 문항별로 확인할 수 있습니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            title: "자동 집계 & 전달",
            description: "학생들의 풀이 내역을 자동으로 집계해서 선생님께 전달. 채점과 분석이 한결 쉬워집니다.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                        학생용 앱
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                        <span className="text-accent">쏠브</span>로 학습합니다
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        학생들은 쏠브 앱을 설치하고, 선생님이 보내준 URL을 열기만 하면 됩니다.<br />
                        태블릿 PC에 최적화된 학습 환경을 제공합니다.
                    </p>
                </div>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="text-center p-8 rounded-2xl border border-slate-200 hover-lift"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-5">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* App Download Hint */}
                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        쏠브는 App Store와 Google Play에서 무료로 다운로드할 수 있습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}

