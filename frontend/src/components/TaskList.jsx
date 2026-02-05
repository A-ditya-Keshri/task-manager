import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggle, onDelete }) {
    if (tasks.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">

                <h3 className="text-xl font-semibold text-gray-800 mb-2">All caught up!</h3>
                <p className="text-gray-500 max-w-xs">
                    Your task list is empty. Add a task above to reproduce your productivity flow.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3 pb-8">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
