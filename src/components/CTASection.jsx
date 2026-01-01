export default function CTASection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Main CTA */}
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                    지금 바로 시작하세요
                </h2>
                
                {/* Pricing Info */}
                <div className="bg-slate-50 rounded-2xl p-6 mb-8 max-w-xl mx-auto">
                    <div className="text-3xl font-bold text-navy mb-2">
                        월 <span className="text-accent">7,000</span>원 / 인
                    </div>
                    <p className="text-slate-600 text-sm mb-4">
                        최소 인원 제한 없음
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                            1개월 무료 이용
                        </span>
                        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full font-medium">
                            공부선배 가입 시 +1개월 추가 무료
                        </span>
                    </div>
                </div>

                <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                    복잡한 계약 없이 바로 사용해보세요.<br />
                    <span className="text-accent font-semibold">공부선배를 통해 가입하시면</span> 총 2개월 무료!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover-lift animate-pulse-glow">
                        무료 체험 시작하기
                    </button>
                    <button className="bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover-lift">
                        도입 상담 신청
                    </button>
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>신용카드 불필요</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5분 내 시작</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>언제든 해지 가능</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
