export default function HeroSection() {
    return (
        <section className="pt-24 pb-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                    학습자료, 올리기만 하세요.<br />
                    <span className="text-accent">학생이 알아서 가져갑니다.</span>
                </h1>

                {/* Sub Headline */}
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    더 이상 프린트하고, 나눠주고, 회수하느라 시간 낭비하지 마세요.<br />
                    파일을 업로드하고 URL을 카카오톡이나 문자로 전달하면 끝.<br />
                    학생들은 <span className="font-semibold text-navy">쏠브 앱</span>으로 태블릿 PC에서 바로 학습합니다.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="bg-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                        무료로 시작하기
                    </button>
                    <button className="bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg border-2 border-slate-200 hover-lift">
                        도입 상담 신청
                    </button>
                </div>

                {/* Key Benefits */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>설치비 없음</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>태블릿 PC 최적화</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>열람 현황 실시간 확인</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
