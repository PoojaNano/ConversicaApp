<template>
	<div class="app">
		<!-- sidebar -->
		<sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
import Sidebar from './components/sidebar.vue';
</script>

<style lang="scss">
:root {
	--primary:  #64748b;
	--primary-alt:  #64748b;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 150px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}

body {
	background: var(--light);
}

button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;

	main {
		flex: 1 1 0;
		padding: 2rem;

		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>