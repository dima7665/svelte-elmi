<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	import Carousel from 'svelte-carousel';

	let innerWidth: number = 1;
	let width: number = 1;
	let particlesToShow = 1;

	$: if (width) {
		particlesToShow = Math.floor(width / 250);
	}
</script>

<svelte:window bind:innerWidth />

<div class="component">
	<h1 class="main-title">{$_('landing-theme.title')}</h1>

	<div class="body">
		<div class="description-container">
			<div class="description" bind:clientWidth={width}>
				<p>{$_('landing-theme.description.1')}</p>
				<p>{$_('landing-theme.description.2')}</p>
				<p>{$_('landing-theme.description.3')}</p>
			</div>

			<Carousel dots={true} {particlesToShow} let:showPrevPage let:showNextPage>
				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.light')}</h5>
						<img class="theme-image" src="landing/themes/light.png" alt="light" />
					</div>
				</div>

				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.dark')}</h5>
						<img class="theme-image" src="landing/themes/dark.png" alt="dark" />
					</div>
				</div>

				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.mono')}</h5>
						<img class="theme-image" src="landing/themes/mono.png" alt="mono" />

						<TooltipStatic tooltipTop={0} tooltipLeft={50}>
							{$_('coming_soon')}
						</TooltipStatic>
					</div>
				</div>

				<div class="arrow-container" slot="prev">
					<img
						on:click={showPrevPage}
						src="landing/arrows/arrow-left.png"
						alt="arrow left"
						loading="lazy"
					/>
				</div>
				<div class="arrow-container" slot="next">
					<img
						on:click={showNextPage}
						src="landing/arrows/arrow-right.png"
						alt="arrow right"
						loading="lazy"
					/>
				</div>
			</Carousel>
		</div>

		{#if innerWidth > 1000}
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
		grid-template-columns: minmax(600px, 1fr) 1fr;
		gap: 120px;

		@media (max-width: 1000px) {
			grid-template-columns: minmax(300px, 1fr);
		}
	}

	.image-container {
		min-width: 240px;
		max-width: 350px;

		@media (min-width: 1200px) {
			max-width: 400px;
		}
	}

	.combo-theme-image,
	.theme-image {
		width: 100%;
		align-self: end;
	}

	.outer-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.inner-container {
		position: relative;
		width: 180px;
	}

	.theme-title {
		margin: 40px 0 20px;
		font-size: 18px;
	}

	.arrow-container {
		display: flex;
		align-items: center;

		img {
			cursor: pointer;
		}
	}
</style>
