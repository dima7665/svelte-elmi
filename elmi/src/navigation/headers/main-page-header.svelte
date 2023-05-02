<script>
	import Logo from '../../core/components/logo.svelte';
	import ButtonsGroup from '../../core/buttons/buttons-group.svelte';
</script>

<p class="header">
	<Logo />

	<ButtonsGroup>
		<button>Overview</button>
		<button>Download App</button>
		<button>Feedback</button>
	</ButtonsGroup>
</p>

<div class="phones-image">
	<img src="../phones.png" alt="phones" />
</div>

<style lang="scss">
	.header {
		display: inline-block;
	}

	.phones-image {
		max-width: 400px;

		img {
			max-width: 100%;

			@media (max-width: 700px) {
				max-width: 100px;
			}
		}
	}
</style>
