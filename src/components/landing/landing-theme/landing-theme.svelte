<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	import Carousel from 'svelte-carousel';
	import mainDarkPng from '$lib/images/themes/main-dark.png';
	import mainDefaultPng from '$lib/images/themes/main-default.png';
	import darkPng from '$lib/images/themes/dark.png';
	import lightPng from '$lib/images/themes/light.png';
	import monoPng from '$lib/images/themes/mono.png';

	let innerWidth = 1;
	let width = 1;
	let particlesToShow = 1;
	let titleWidth = 0;

	let comboImageWidth = 0;
	let comboImageHeight = 0;
	let sliderVerticalPos = 0;
	let sliderPos = 150;

	let dragging = false;
	let maxWidth = 0;
	let boxPadding = 0;

	$: sliderVerticalPos = comboImageHeight / 2 - 25;

	const onMouseDown = (event: any) => {
		if (event.target.id === 'slider' || event.target.id === 'slider-icon') {
			dragging = true;

			const sliderTarget = event.target.id === 'slider' ? event.target : event.target.parentElement;

			boxPadding = event.clientX - sliderTarget.offsetLeft - 3;

			maxWidth = sliderTarget.parentElement.offsetWidth;
		}
	};

	const onMouseMove = (event: any) => {
		if (!dragging) {
			return;
		}

		const curPos = event.clientX - boxPadding + 10;
		sliderPos = curPos < 0 ? 0 : curPos > maxWidth ? maxWidth : curPos;
	};

	const onMouseUp = () => {
		dragging = false;
	};

	$: if (width) {
		particlesToShow = Math.floor(width / 250);
	}
</script>

<svelte:window bind:innerWidth />

<div class="component" on:mouseup={onMouseUp}>
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
			<div
				bind:clientWidth={comboImageWidth}
				style:--slider-width={comboImageWidth + 'px'}
				style:--slider-v-pos={sliderVerticalPos + 'px'}
				style:--slider-pos={sliderPos + 'px'}
				class="image-container"
				on:mousedown={onMouseDown}
				on:mousemove={onMouseMove}
			>
				<div class="first-image-box" bind:clientHeight={comboImageHeight}>
					<img class="first-image" src={mainDarkPng} alt="combined themes" />
				</div>
				<div class="second-image-box">
					<img class="second-image" src={mainDefaultPng} alt="combined themes" />
				</div>

				<div class="slider-button-container">
					<div id="slider" style:left="{sliderPos - 25}px" class="slider-button">
						<div id="slider-icon" class="resize-icon" />
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

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

		--resize-icon: url('/icons/resize_h.svg');
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
		position: relative;
		min-width: 240px;
		max-width: 350px;
		margin-left: auto;

		user-select: none;

		@media (min-width: 1200px) {
			max-width: 420px;
		}
	}

	.first-image-box {
		width: 100%;
	}

	.second-image-box {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--slider-pos);
		overflow: hidden;
	}

	.first-image {
		width: 100%;
	}

	.second-image {
		width: var(--slider-width);
	}

	.slider-button-container {
		position: absolute;
		width: 100%;
		height: 50px;
		top: var(--slider-v-pos);

		.slider-button {
			position: absolute;
			width: 50px;
			height: 50px;
			cursor: pointer;
			background-color: $color-primary;
			border-radius: 25px;

			display: flex;
			align-items: center;
			justify-content: center;
		}
	}

	.resize-icon {
		width: 30px;
		height: 15px;
		background-image: var(--resize-icon);
		background-size: contain;
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

			&:hover {
				transform: scale(1.1);
			}
		}

		&.arrow-left {
			margin-right: 5px;
		}

		&.arrow-right {
			margin-left: 5px;
		}
	}
</style>
