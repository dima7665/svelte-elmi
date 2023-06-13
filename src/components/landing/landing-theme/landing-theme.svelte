<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	import Carousel from 'svelte-carousel';
	import mainPng from '$lib/images/themes/main.png';
	import darkPng from '$lib/images/themes/dark.png';
	import lightPng from '$lib/images/themes/light.png';
	import monoPng from '$lib/images/themes/mono.png';

	let innerWidth: number = 1;
	let width: number = 1;
	let particlesToShow = 1;
	let titleWidth = 0;

	$: if (width) {
		particlesToShow = Math.floor(width / 250);
	}
</script>

<svelte:window bind:innerWidth />

<div class="component">
	<h1 bind:clientWidth={titleWidth} class="main-title">{$_('landing-theme.title')}</h1>
	{#if innerWidth > 1000}
		<TooltipStatic maxWidth={300} tooltipTop={45} tooltipLeft={titleWidth - 90}>
			User accessibility test ready: AA + AAA
		</TooltipStatic>
	{/if}

	<div class="body">
		<div class="description-container">
			<div class="description" bind:clientWidth={width}>
				<p>{$_('landing-theme.description.1')}</p>
				<p>{$_('landing-theme.description.2')}</p>
				<p>{$_('landing-theme.description.3')}</p>
			</div>

			<Carousel swiping={false} dots={true} {particlesToShow} let:showPrevPage let:showNextPage>
				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.light')}</h5>
						<img class="theme-image" src={lightPng} alt="light" />
					</div>
				</div>

				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.dark')}</h5>
						<img class="theme-image" src={darkPng} alt="dark" />
					</div>
				</div>

				<div class="outer-container">
					<div class="inner-container">
						<h5 class="theme-title">{$_('landing-theme.themes.mono')}</h5>
						<img class="theme-image" src={monoPng} alt="mono" />

						<TooltipStatic tooltipTop={0} tooltipLeft={70}>
							{$_('coming_soon')}
						</TooltipStatic>
					</div>
				</div>

				<div class="arrow-container" slot="prev">
					<img
						on:click={showPrevPage}
						src="/landing/arrows/arrow-left.svg"
						alt="arrow left"
						loading="lazy"
					/>
				</div>
				<div class="arrow-container" slot="next">
					<img
						on:click={showNextPage}
						src="/landing/arrows/arrow-right.svg"
						alt="arrow right"
						loading="lazy"
					/>
				</div>
			</Carousel>
		</div>

		{#if innerWidth > 1000}
			<div class="image-container">
				<img class="combo-theme-image" src={mainPng} alt="combined themes" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.component {
		position: relative;
		padding: 50px 100px 0;

		max-width: 1320px;
		margin-left: auto;
		margin-right: auto;

		color: white;

		@media (max-width: 1000px) {
			padding: 0 15px;
		}
	}

	.main-title {
		font-size: 50px;
		min-width: 765px;
		max-width: fit-content;

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
		grid-template-columns: minmax(600px, 3fr) 2fr;
		gap: 120px;

		@media (max-width: 1000px) {
			grid-template-columns: minmax(300px, 1fr);
		}
	}

	.image-container {
		min-width: 240px;
		max-width: 350px;
		margin-left: auto;

		@media (min-width: 1200px) {
			max-width: 420px;
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
	}

	.theme-title {
		margin: 40px 0 0 30px;
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
