export let tasks = $state([
    { text: 'cut the grass', done: false },
    { text: 'paint the wall', done: true }
]);

$effect(() => {
    console.log(tasks);
});

export function addTask(event) {
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