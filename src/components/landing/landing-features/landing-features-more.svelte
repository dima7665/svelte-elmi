<script lang="ts">
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
	import Carousel from 'svelte-carousel';

	let innerWidth: number = 1;
	let particlesToShow = 1;

	$: if (innerWidth) {
		particlesToShow = Math.floor((innerWidth - 200) / 300);
	}
</script>

<svelte:window bind:innerWidth />

<h3 class="section-title">{$_('key-features.more')}</h3>

<div style:display={'flex'}>
	<Carousel dots={true} {particlesToShow} let:showPrevPage let:showNextPage>
		<div class="outer-container">
			<div style:z-index="101" class="inner-container">
				<img
					src="landing/key-features/more/editor.png"
					alt={$_('more-features.editor.alt')}
					loading="lazy"
				/>

				<TooltipStatic tooltipTop={300} tooltipLeft={40}
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

				<TooltipStatic tooltipTop={190} tooltipLeft={40}
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

				<TooltipStatic tooltipTop={330} tooltipLeft={40}
					>{$_('more-features.tags.description')}</TooltipStatic
				>
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
	}
</style>
