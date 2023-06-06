<script>
	export let color = 'white';
</script>

<img class="logo" src="logo_{color}.png" alt="logo" />

<style lang="scss">
	.logo {
		@media (max-width: 400px) {
			width: 170px;
		}
	}
</style>
