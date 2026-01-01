export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-navy">Live</span>
                        <span className="text-lg font-bold text-accent">Sheet</span>
                    </div>

                    {/* Company Info */}
                    <div className="text-sm text-slate-500 space-y-1 md:text-right">
                        <p>
                            <span className="font-medium text-slate-600">testbank</span>
                        </p>
                        <p>
                            대표 최현욱 | 사업자등록번호 688-88-01020
                        </p>
                        <p>
                            주소 서울 강남구 테헤란로25길 23, 5층 테스트뱅크
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 pt-6 border-t border-slate-100 text-center text-sm text-slate-400">
                    Copyright © Testbank Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
