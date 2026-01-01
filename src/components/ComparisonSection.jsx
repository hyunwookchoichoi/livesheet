export default function ComparisonSection() {
    const comparisons = [
        {
            category: "열람 확인",
            old: "학생이 봤는지 알 수 없음",
            new: "누가, 언제, 얼마나 봤는지 실시간 추적"
        },
        {
            category: "학생 편의성",
            old: "맨날 잃어버리고 다시 달라고 함",
            new: "언제든지 디지털로 꺼내보기"
        },
        {
            category: "보안 관리",
            old: "배포 후 회수 불가능",
            new: "손쉽게 배포하고 손쉽게 회수"
        },
        {
            category: "채점",
            old: "조교 선생님이 손으로 일일이 채점",
            new: "자동 채점 + 결과 수집까지 자동화"
        },
        {
            category: "자료 관리",
            old: "분실, 훼손, 재인쇄 반복",
            new: "클라우드에 영구 보관, 언제든 재배포"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                        종이 프린트 vs 라이브시트
                    </h2>
                    <p className="text-lg text-slate-600">
                        같은 일을 더 효율적으로
                    </p>
                </div>

                {/* Comparison Table - Desktop */}
                <div className="hidden md:block bg-white rounded-2xl overflow-hidden border border-slate-200">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-navy text-white">
                                <th className="py-4 px-6 text-left font-bold">구분</th>
                                <th className="py-4 px-6 text-left font-bold">기존 방식</th>
                                <th className="py-4 px-6 text-left font-bold text-accent">라이브시트</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, index) => (
                                <tr key={index} className="border-t border-slate-100">
                                    <td className="py-4 px-6 font-semibold text-navy">{item.category}</td>
                                    <td className="py-4 px-6 text-slate-500">{item.old}</td>
                                    <td className="py-4 px-6 text-navy font-medium bg-orange-50">{item.new}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Comparison Cards - Mobile */}
                <div className="md:hidden space-y-4">
                    {comparisons.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                            <div className="bg-navy text-white px-4 py-2 font-semibold">
                                {item.category}
                            </div>
                            <div className="p-4 space-y-3">
                                <div>
                                    <div className="text-xs text-slate-400 mb-1">기존 방식</div>
                                    <div className="text-sm text-slate-600">{item.old}</div>
                                </div>
                                <div className="border-t border-slate-100 pt-3">
                                    <div className="text-xs text-accent mb-1">라이브시트</div>
                                    <div className="text-sm text-navy font-medium">{item.new}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
