<script lang="ts">
	let menuVisible = false;
    let color: string | null = null;

	const triggerClick = () => {
		console.log('dropdown trigger click');
		menuVisible = !menuVisible;
        color = menuVisible ? 'white' : null;
	};
</script>

<div class="dropdown-container">
	<div class="trigger" on:click={triggerClick}><slot name="trigger" /></div>

	<div style="--arrowColor: {color}" class="menu-container">
		{#if menuVisible}
			<slot name="menu" />
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../../../styles/colors.scss';

	.trigger {
		background-color: transparent;
	}

	.dropdown-container {
		position: relative;
		background-color: transparent;
	}

	.menu-container {
		position: absolute;
		width: 100%;
		margin: 8px 0;
		background-color: white;
	}

	.menu-container:after {
		content: '';
		position: absolute;

		transform: rotate(-90deg);

		border-width: 12px;
		border-style: solid;

		top: -21px;
		right: 21px;

		border-color: transparent transparent transparent var(--arrowColor, transparent);
	}
</style>
