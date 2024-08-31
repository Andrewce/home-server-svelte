<svelte:options runes={true} />

<script>
	let tasksObj = $state([
		{ text: 'cut the grass', done: false },
		{ text: 'paint the wall', done: true }
	]);

	$effect(() => {
		console.log(tasksObj);
	});

	function addTask(event) {
		if (event.key !== 'Enter') return;

		const text = event.target.value;
		tasksObj = [...tasksObj, { text, done: false }];
		event.target.value = '';
	}

	function editTask(i, event) {
		const updatedTasks = tasksObj.map((task, index) =>
			index === i ? { ...task, text: event.target.value } : task
		);
		tasksObj = updatedTasks;
	}

	function toggleTask(i) {
		const updatedTasks = tasksObj.map((task, index) =>
			index === i ? { ...task, done: !task.done } : task
		);
		tasksObj = updatedTasks;
	}
</script>

<form class="addTask">
	<h1>Add New</h1>
	<input on:keydown={addTask} placeholder="Add new tasks" type="text" />
</form>

<div class="tasks">
	{#each tasksObj as task, i}
		<div class="task">
			<input on:input={(e) => editTask(i, e)} value={task.text} type="text" />
			<input on:change={() => toggleTask(i)} checked={task.done} type="checkbox" />
		</div>
	{/each}
</div>

<style>
	.addTask {
		margin-bottom: 50px;
		padding: 20px;
		margin-top: 40px;
		border-color: gray;
		border-style: solid;
		border-radius: 5%;
		width: 240px;
	}
	.tasks {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: auto;
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
		border-radius: 2%;
	}
	input[type='checkbox'] {
		position: relative;
		top: 50%;
		border-radius: 5%;
		width: 40px;
	}
</style>
