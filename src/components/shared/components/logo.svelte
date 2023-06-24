<script>
	export let color = 'white';
</script>

<img class="logo" width="216" height="48" src="/logo_{color}.svg" alt="logo" />

<style lang="scss">
	.logo {
		@media (max-width: 400px) {
			width: 170px;
		}
	}
</style>
