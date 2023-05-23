<script>
	import { _ } from '../../../services/i18n';
	import TooltipStatic from '../../shared/components/tooltip-static.svelte';
</script>

<h3 class="section-title">{$_('key-features.more')}</h3>

<div class="body">
	<div style:z-index="101" class="container">
		<img
			src="landing/key-features/more/editor.png"
			alt={$_('more-features.editor.alt')}
			loading="lazy"
		/>

		<TooltipStatic tooltipTop={300} tooltipLeft={30}
			>{$_('more-features.editor.description')}</TooltipStatic
		>
	</div>

	<div class="container">
		<img
			src="landing/key-features/more/properties.png"
			alt={$_('more-features.properties.alt')}
			loading="lazy"
		/>

		<TooltipStatic tooltipTop={420} tooltipLeft={0} direction="top"
			>{$_('more-features.properties.description')}</TooltipStatic
		>
	</div>

	<div style:z-index="101" class="container">
		<img
			src="landing/key-features/more/categories.png"
			alt={$_('more-features.categories.alt')}
			loading="lazy"
		/>

		<TooltipStatic tooltipTop={180} tooltipLeft={90}
			>{$_('more-features.categories.description')}</TooltipStatic
		>
	</div>

	<div class="container">
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

<style lang="scss">
	@import '../../../styles/colors';

	.section-title {
		font-size: 50px;
		min-width: 750px;
	}

	.body {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	.container {
		display: block;
		position: relative;
		align-content: baseline;
		z-index: 10;
	}
</style>
