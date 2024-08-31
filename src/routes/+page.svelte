<script>
	let tasks = $state([
		{ text: 'cut the grass', done: false },
		{ text: 'paint the wall', done: true }
	]);

	function addTask(event) {
		if (event.key !== 'Enter') return;

		const taskEl = event.target;
		const text = taskEl.value;
		const done = false;

		tasks = [...tasks, { text, done }];

		taskEl.value = '';
	}

	function editTask(i, e) {
		const inputEl = e.target;
		// const index = e.target.dataset.index;
		// console.log('the index from DTS is ', i);

		console.log('input element for', i, 'is ', inputEl);
		tasks[i].text = inputEl.value;
		console.log('readng from tasks', i, tasks[i].text, tasks[i].done);
	}

	$effect(() => {
		console.log(tasks);
	});

	function toggleTask(event) {
		const inputEl = event.target;
		const index = inputEl.dataset.index;
		tasks[index].done = !tasks[index].done;
	}
</script>

<form class="addTask">
	<h1>Add New</h1>
	<input onkeydown={addTask} placeholder="add new tasks" type="text" />
</form>

<div class="tasks">
	{#each tasks as task, i}
		<div class="task">
			<input oninput={(e) => editTask(i, e)} data-index={i} value={task.text} type="text" />
			<input onchange={toggleTask} data-index={i} checked={task.done} type="checkbox" />
		</div>
	{/each}
</div>

<style>
	.addTask {
		margin-left: 42%;
		margin-bottom: 50px;
		padding: 20px;
		margin-top: 40px;
		border-color: gray;
		border-style: solid;
		width: 240px;
	}
	.tasks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: auto;
		/* margin-block-start: 1rem; */
		/* width: 50%; */
	}
	.task {
		display: flex;
		margin: auto;
		flex-direction: row;
		justify-content: center;
	}
	input[type='text'] {
		width: 200px;
		padding: 1rem;
	}
	input[type='checkbox'] {
		position: relative;
		top: 50%;
	}
</style>
