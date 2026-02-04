import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAddTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="relative mb-8 group">
            <div className="relative flex items-center transform transition-all focus-within:scale-[1.02]">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="w-full py-4 pl-6 pr-16 text-lg bg-white border-0 ring-1 ring-gray-200 rounded-2xl shadow-lg shadow-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-gray-400"
                />
                <button
                    type="submit"
                    disabled={!title.trim()}
                    className="absolute right-2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 active:scale-95"
                    aria-label="Add task"
                >
                    <Plus className="w-6 h-6" />
                </button>
            </div>
        </form>
    );
}
