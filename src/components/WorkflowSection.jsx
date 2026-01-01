export default function WorkflowSection() {
    const steps = [
        {
            number: "01",
            title: "파일 업로드",
            description: "PDF, 이미지, 문서 파일을 드래그 앤 드롭으로 업로드하세요. HWP, DOCX, PPT 모두 지원됩니다.",
            details: [
                "드래그 앤 드롭으로 간편 업로드",
                "한 번에 여러 파일 업로드 가능",
                "자동으로 학생용 뷰어 형식으로 변환"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
            )
        },
        {
            number: "02",
            title: "링크 전송",
            description: "생성된 URL을 카카오톡이나 문자로 학생들에게 전달하면 끝입니다.",
            details: [
                "URL 복사 후 카톡에 붙여넣기",
                "학생별/반별 그룹 전송 지원",
                "학생은 쏠브 앱에서 바로 열람"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
            )
        },
        {
            number: "03",
            title: "열람 확인",
            description: "누가 언제 어떤 자료를 열람했는지 실시간으로 확인하세요. 안 본 학생에게 리마인드도 가능합니다.",
            details: [
                "학생별 열람 시간, 페이지 추적",
                "미열람 학생 한눈에 파악",
                "자동 리마인드 알림 발송"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            number: "04",
            title: "숙제 회수 & 검사",
            description: "필요하시면 학생들에게 나눠준 교재에 대해 숙제를 회수하고 검사할 수 있어요.",
            details: [
                "학생별 풀이 내역 자동 수집",
                "각 학생별 대시보드 제공",
                "오답노트 자동 생성 기능"
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                        이렇게 간단합니다
                    </h2>
                    <p className="text-lg text-slate-600">
                        복잡한 설정 없이, 4단계면 학습자료 배포부터 검사까지
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl p-6 border border-slate-200 hover-lift"
                        >
                            {/* Step Number & Icon */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-white">
                                    {step.icon}
                                </div>
                                <span className="text-3xl font-bold text-slate-200">{step.number}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>

                            {/* Description */}
                            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{step.description}</p>

                            {/* Details */}
                            <ul className="space-y-1.5">
                                {step.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                                        <svg className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{detail}</span>
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
