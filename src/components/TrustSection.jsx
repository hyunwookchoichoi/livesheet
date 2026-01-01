export default function TrustSection() {
    const partners = [
        {
            name: "YBM어학원",
            url: "https://www.ybmedu.com",
            logo: "https://www.ybmedu.com/resource/images/common/logo-edu.svg",
            description: "국내 대표 어학원"
        },
        {
            name: "에듀윌",
            url: "https://www.eduwill.net",
            logo: "https://img.eduwill.net/Img2/Common/BI/type2/live/logo.svg",
            description: "종합 교육 기업"
        },
        {
            name: "해커스",
            url: "https://www.hackers.com",
            logo: "https://www.hackers.com/images/main/renew/logo.png",
            description: "어학·자격증 전문"
        },
        {
            name: "시원스쿨",
            url: "https://www.siwonschool.com",
            logo: "https://siwon-cdn.siwonschool.com/www/comm/logo_20year.svg",
            description: "온라인 어학 교육"
        }
    ];

    return (
        <section className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
                        이미 대형 학원들이 사용하고 있습니다
                    </h2>
                    <p className="text-slate-600">
                        검증된 솔루션으로 안심하고 도입하세요
                    </p>
                </div>

                {/* Partner Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl p-6 border border-slate-200 hover-lift flex flex-col items-center justify-center group min-h-[120px]"
                        >
                            <img 
                                src={partner.logo} 
                                alt={partner.name}
                                className="h-10 max-w-[140px] object-contain mb-2 grayscale group-hover:grayscale-0 transition-all"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <div className="text-lg font-bold text-navy group-hover:text-accent transition-colors hidden">
                                {partner.name}
                            </div>
                            <div className="text-xs text-slate-400 mt-1">
                                {partner.description}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>보안 인증 완료</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>10,000+ 학생 사용중</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>24시간 기술 지원</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
