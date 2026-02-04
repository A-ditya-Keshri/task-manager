import { Trash2, Circle, CheckCircle2 } from 'lucide-react';

export default function TaskItem({ task, onToggle, onDelete }) {
    // Handle toggling completion with visual feedback
    const handleToggle = () => onToggle(task.id, !task.completed);

    return (
        <div
            className={`group flex items-center justify-between p-4 bg-white border rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:border-indigo-100 items-start ${task.completed ? 'border-gray-100 bg-gray-50/50' : 'border-gray-100'
                }`}
        >
            <div className="flex items-start gap-4 flex-1 pt-0.5">
                <button
                    onClick={handleToggle}
                    className={`mt-0.5 flex-shrink-0 transition-all duration-300 ${task.completed
                            ? 'text-green-500 scale-110'
                            : 'text-gray-300 hover:text-indigo-500 hover:scale-110'
                        }`}
                    aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
                >
                    {task.completed ? (
                        <CheckCircle2 className="w-6 h-6 fill-green-50" />
                    ) : (
                        <Circle className="w-6 h-6" />
                    )}
                </button>
                <span
                    onClick={handleToggle}
                    className={`text-lg font-medium transition-all duration-300 cursor-pointer select-none break-all ${task.completed
                            ? 'text-gray-400 line-through decoration-2 decoration-gray-200'
                            : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                >
                    {task.title}
                </span>
            </div>

            <button
                onClick={() => onDelete(task.id)}
                className="ml-2 p-2 text-gray-400 transition-all duration-200 rounded-lg opacity-0 lg:opacity-0 lg:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 focus:opacity-100 focus:translate-x-0 hover:bg-red-50 hover:text-red-500 active:bg-red-100 md:opacity-100 md:translate-x-0"
                aria-label="Delete task"
            >
                <Trash2 className="w-5 h-5" />
            </button>
        </div>
    );
}
