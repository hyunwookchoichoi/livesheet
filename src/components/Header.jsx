export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-navy">Live</span>
                    <span className="text-xl font-bold text-accent">Sheet</span>
                </div>

                {/* Partner Badge - 여기에만 한번 등장 */}
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-sm font-medium text-slate-700">공부선배 공식 파트너</span>
                </div>
            </div>
        </header>
    );
}
