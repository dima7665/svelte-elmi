<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	// import Carousel from '../../shared/components/carousel.svelte';
	import Carousel from 'svelte-carousel';

	let carousel;
	let innerWidth: number = 1;
	let particlesToShow = 1;

	$: if (innerWidth) {
		particlesToShow = Math.floor((innerWidth - 200) / 300);
	}
</script>

<svelte:window bind:innerWidth />

<h3 class="section-title">{$_('key-features.more')}</h3>

<div class="scrollable">
	<div class="body">
		<Carousel dots={false} {particlesToShow}>
			<div class="outer-container">
				<div style:z-index="101" class="inner-container">
					<img
						src="landing/key-features/more/editor.png"
						alt={$_('more-features.editor.alt')}
						loading="lazy"
					/>

					<TooltipStatic tooltipTop={300} tooltipLeft={30}
						>{$_('more-features.editor.description')}</TooltipStatic
					>
				</div>
			</div>

			<div class="outer-container">
				<div class="inner-container">
					<img
						src="landing/key-features/more/properties.png"
						alt={$_('more-features.properties.alt')}
						loading="lazy"
					/>

					<TooltipStatic tooltipTop={420} tooltipLeft={0} direction="top"
						>{$_('more-features.properties.description')}</TooltipStatic
					>
				</div>
			</div>

			<div class="outer-container">
				<div style:z-index="101" class="inner-container">
					<img
						src="landing/key-features/more/categories.png"
						alt={$_('more-features.categories.alt')}
						loading="lazy"
					/>

					<TooltipStatic tooltipTop={180} tooltipLeft={90}
						>{$_('more-features.categories.description')}</TooltipStatic
					>
				</div>
			</div>

			<div class="outer-container">
				<div class="inner-container">
					<img
						src="landing/key-features/more/tags.png"
						alt={$_('more-features.tags.alt')}
						loading="lazy"
					/>

					<TooltipStatic tooltipTop={330} tooltipLeft={70}
						>{$_('more-features.tags.description')}</TooltipStatic
					>
				</div>
			</div>
		</Carousel>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors';

	.section-title {
		font-size: 50px;
		min-width: 750px;

		@media (max-width: 765px) {
			min-width: 300px;
			font-size: 40px;
		}
	}

	.scrollable {
		overflow-x: auto;
		margin-right: -100px;

		@media (max-width: 1000px) {
			margin-right: -15px;
		}

		@media (max-width: 765px) {
			overflow-x: auto;
			margin-right: 0px;
		}
	}

	.body {
		display: flex;
		// display: grid;
		// grid-template-columns: 1fr;
		// min-width: 1000px;
	}

	.outer-container {
		display: flex;
		justify-content: center;
		// position: relative;
		// align-content: baseline;
		// z-index: 10;
	}

	.inner-container {
		display: block;
		position: relative;
		align-content: baseline;
		z-index: 10;
	}
</style>
