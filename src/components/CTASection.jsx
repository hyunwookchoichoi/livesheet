export default function CTASection() {
    return (
        <section className="py-20 bg-navy">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    고민은 써보고 하셔도<br />
                    <span className="text-accent">늦지 않습니다</span>
                </h2>

                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                    공부선배 원장님께는 1개월 무료 체험을 제공합니다.<br />
                    카드 등록 없이 모든 기능을 사용해보세요.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>가입비 무료</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>1개월 무료 체험</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>맞춤 기능 개발 지원</span>
                    </div>
                </div>

                {/* CTA Button */}
                <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover-lift">
                    무료 체험 시작하기
                </button>

                <p className="text-slate-400 text-sm mt-4">
                    30초 만에 신청 완료
                </p>
            </div>
        </section>
    );
}

