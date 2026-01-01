export default function SolveSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <img 
                            src="https://testbank.ai/solve-logo.svg" 
                            alt="Solve" 
                            className="h-8"
                        />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                        학생들은 <span className="text-accent">쏠브</span>로 학습합니다
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        학생들은 쏠브 앱을 설치하고, 선생님이 보내준 URL을 열기만 하면 됩니다.<br />
                        태블릿 PC에 최적화된 학습 환경을 제공합니다.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="mb-12 text-center">
                    <img 
                        src="https://testbank.ai/images/solve/jVPrzJtLR4Azfi6fmhtDBy43AdQ.png"
                        alt="쏠브 앱 화면"
                        className="max-w-2xl mx-auto w-full rounded-2xl shadow-xl"
                    />
                </div>

                {/* Features - 워딩 위주 */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-slate-50 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">버튼 한 번이면 자동채점</h3>
                        <p className="text-sm text-slate-600">
                            정답/오답 즉시 표시, 해설 즉시 확인, 오답노트 자동 추가
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">끝내주는 필기감</h3>
                        <p className="text-sm text-slate-600">
                            종이에 쓰는 것처럼 자연스러운 필기, 펜슬 전환 없이 손으로 바로 정답 체크
                        </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6 text-center">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-navy mb-2">문항별 개별 풀이</h3>
                        <p className="text-sm text-slate-600">
                            한 페이지 통으로 보기, 문제집과 동일한 학습 경험 제공
                        </p>
                    </div>
                </div>

                {/* App Download Hint */}
                <div className="text-center">
                    <p className="text-slate-500 text-sm mb-4">
                        쏠브는 App Store와 Google Play에서 무료로 다운로드할 수 있습니다.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a 
                            href="https://solvetheproblem.page.link/app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover-lift"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            App Store
                        </a>
                        <a 
                            href="https://play.google.com/store/apps/details?id=com.testbank.solve"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover-lift"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                            </svg>
                            Google Play
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
