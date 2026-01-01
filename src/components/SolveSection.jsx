export default function SolveSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
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
                <div className="mb-16 text-center">
                    <img 
                        src="https://testbank.ai/images/solve/jVPrzJtLR4Azfi6fmhtDBy43AdQ.png"
                        alt="쏠브 앱 화면"
                        className="max-w-2xl mx-auto w-full rounded-2xl shadow-xl"
                    />
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* 자동 채점 */}
                    <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                        <div className="mb-4">
                            <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                                핵심 기능
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">
                            버튼 한 번이면 자동채점
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            문제를 풀고 채점 버튼만 누르면 끝! 정답과 오답이 바로 표시되고,
                            해설도 한 페이지에서 바로 확인할 수 있어요.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                정답/오답 즉시 표시
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                해설 즉시 확인
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                오답노트 자동 추가
                            </li>
                        </ul>
                        <img 
                            src="https://testbank.ai/_next/image?url=%2Fsolve-auto-grading.jpg&w=1920&q=75"
                            alt="자동 채점 화면"
                            className="mt-6 rounded-xl shadow-lg w-full"
                        />
                    </div>

                    {/* 필기 & 정답 체크 */}
                    <div className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                        <div className="mb-4">
                            <span className="inline-block bg-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
                                학습 경험
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">
                            펜슬로 필기, 손으로 정답 체크
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            종이에 쓰는 것처럼 자연스러운 필기 경험. 펜슬 모드 전환 없이 
                            손가락으로 바로 정답을 체크할 수 있어요.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                끝내주는 필기감
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                문항별 개별 풀이
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                한 페이지 통으로 보기
                            </li>
                        </ul>
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <img 
                                src="https://testbank.ai/_next/image?url=%2Fsolve-answer-writing.png&w=640&q=75"
                                alt="펜슬 필기"
                                className="rounded-xl shadow-lg w-full"
                            />
                            <img 
                                src="https://testbank.ai/_next/image?url=%2Fsolve-answer-check.png&w=640&q=75"
                                alt="손으로 정답 체크"
                                className="rounded-xl shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>

                {/* 선생님에게 전달 */}
                <div className="bg-navy rounded-2xl p-8 lg:p-12 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        학생 풀이 내역이 선생님에게 자동 전달
                    </h3>
                    <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                        학생들이 푼 문제, 정답률, 오답 패턴까지 자동으로 집계되어 선생님 대시보드로 전달됩니다.
                        일일이 채점할 필요 없이 학습 현황을 한눈에 파악하세요.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-white">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>풀이 내역 자동 수집</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>학생별 대시보드</span>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>오답노트 자동 생성</span>
                        </div>
                    </div>
                </div>

                {/* App Download Hint */}
                <div className="mt-12 text-center">
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
