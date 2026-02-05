import { ClipboardList } from 'lucide-react';

export default function Header() {
    return (
        <header className="flex items-center justify-center gap-3 p-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 mb-8 sticky top-0 z-10 shadow-sm">

            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Task Manager
            </h1>
        </header>
    );
}
