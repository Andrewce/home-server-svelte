

export default function addTask(event) {
    if (event.key !== 'Enter') return;

    const text = event.target.value;
    tasks = [...tasks, { text, done: false }];
    event.target.value = '';
}

export function editTask(i, event) {
    tasks[i].text = event.target.value;
}

export function toggleTask(i) {
    tasks[i].done = !tasks[i].done;
}