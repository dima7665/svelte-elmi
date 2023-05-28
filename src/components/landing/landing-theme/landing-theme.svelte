<script lang="ts">
	import { _ } from '../../../services/i18n';

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="component">
	<h1 class="main-title">{$_('landing-theme.title')}</h1>

	<div class="body">
		<div class="description-container">
			<div class="description">
				<p>{$_('landing-theme.description.1')}</p>
				<p>{$_('landing-theme.description.2')}</p>
				<p>{$_('landing-theme.description.3')}</p>
			</div>

			<div class="scrollable">
				<div class="themes-container">
					<div class="theme-container">
						<h5 class="theme-title">{$_('landing-theme.themes.light')}</h5>
						<img class="theme-image" src="landing/themes/light.png" alt="light" />
					</div>

					<div class="theme-container">
						<h5 class="theme-title">{$_('landing-theme.themes.dark')}</h5>
						<img class="theme-image" src="landing/themes/dark.png" alt="dark" />
					</div>

					<div class="theme-container">
						<h5 class="theme-title">{$_('landing-theme.themes.mono')}</h5>
						<img class="theme-image" src="landing/themes/mono.png" alt="mono" />
					</div>
				</div>
			</div>
		</div>

		{#if innerWidth > 765}
			<div class="image-container">
				<img class="combo-theme-image" src="landing/themes/main.png" alt="combined themes" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.component {
		padding: 0 100px;

		color: white;

		@media (max-width: 1000px) {
			padding: 0 15px;
		}
	}

	.main-title {
		font-size: 50px;
		min-width: 765px;

		@media (max-width: 765px) {
			min-width: 300px;
		}
	}

	.description {
		font-size: 16px;
		line-height: 24px;
		white-space: pre-line;
	}

	.body {
		display: grid;
		grid-template-columns: minmax(600px, 1fr) auto;
		gap: 120px;

		@media (max-width: 765px) {
			grid-template-columns: minmax(300px, 1fr);
		}
	}

	.image-container {
		min-width: 240px;
		max-width: 400px;
	}

	.combo-theme-image,
	.theme-image {
		width: 100%;
		align-self: end;
	}

	.scrollable {
		@media (max-width: 765px) {
			overflow-x: auto;
		}
	}

	.themes-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 40px;
	}

	.theme-container {
		width: 180px;
	}

	.theme-title {
		font-size: 18px;
	}
</style>
