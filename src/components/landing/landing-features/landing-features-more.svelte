<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	import Carousel from 'svelte-carousel';
	import categoriesPng from '$lib/images/features/more/categories.png';
	import editorPng from '$lib/images/features/more/editor.png';
	import propertiesPng from '$lib/images/features/more/properties.png';
	import tagsPng from '$lib/images/features/more/tags.png';

	let innerWidth: number = 1;
	let particlesToShow = 1;

	$: if (innerWidth) {
		particlesToShow = Math.floor((innerWidth - 200) / 300);
	}
</script>

<svelte:window bind:innerWidth />

<h3 class="section-title">{$_('key-features.more')}</h3>

<div style:display={'flex'}>
	<Carousel swiping={false} dots={true} {particlesToShow} let:showPrevPage let:showNextPage>
		<div class="outer-container">
			<div style:z-index="101" class="inner-container">
				<img src={editorPng} alt={$_('more-features.editor.alt')} loading="lazy" />

				<TooltipStatic tooltipTop={300} tooltipLeft={40}
					>{$_('more-features.editor.description')}</TooltipStatic
				>
			</div>
		</div>

		<div class="outer-container">
			<div class="inner-container">
				<img src={propertiesPng} alt={$_('more-features.properties.alt')} loading="lazy" />

				<TooltipStatic tooltipTop={420} tooltipLeft={0} direction="top"
					>{$_('more-features.properties.description')}</TooltipStatic
				>
			</div>
		</div>

		<div class="outer-container">
			<div style:z-index="101" class="inner-container">
				<img src={categoriesPng} alt={$_('more-features.categories.alt')} loading="lazy" />

				<TooltipStatic tooltipTop={190} tooltipLeft={40}
					>{$_('more-features.categories.description')}</TooltipStatic
				>
			</div>
		</div>

		<div class="outer-container">
			<div class="inner-container">
				<img src={tagsPng} alt={$_('more-features.tags.alt')} loading="lazy" />

				<TooltipStatic tooltipTop={330} tooltipLeft={40}
					>{$_('more-features.tags.description')}</TooltipStatic
				>
			</div>
		</div>

		<div class="arrow-container" slot="prev">
			<img
				on:click={showPrevPage}
				src="landing/arrows/arrow-left.svg"
				alt="arrow left"
				loading="lazy"
			/>
		</div>
		<div class="arrow-container" slot="next">
			<img
				on:click={showNextPage}
				src="landing/arrows/arrow-right.svg"
				alt="arrow right"
				loading="lazy"
			/>
		</div>
	</Carousel>
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

	.arrow-container {
		display: flex;
		align-items: center;

		img {
			cursor: pointer;
		}
	}

	.outer-container {
		display: flex;
		justify-content: center;
	}

	.inner-container {
		display: flex;
		position: relative;
		align-items: end;
		z-index: 10;

		img {
			max-width: 280px;

			@media (max-width: 400px) {
				max-width: 100%;
			}
		}
	}
</style>
