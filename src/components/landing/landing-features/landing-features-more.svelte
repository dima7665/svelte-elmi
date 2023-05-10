<script>
	import { _ } from '../../../services/i18n';
</script>

<h3 class="section-title">{$_('key-features.more')}</h3>

<div class="body">
	<div style:z-index="101" class="container">
		<img
			src="landing/key-features/more/editor.png"
			alt={$_('more-features.editor.alt')}
			loading="lazy"
		/>

		<div style:top="300px" style:left="30px" class="tooltip">{$_('more-features.editor.description')}</div>
	</div>

	<div class="container">
		<img
			src="landing/key-features/more/properties.png"
			alt={$_('more-features.properties.alt')}
			loading="lazy"
		/>

        <div style:top="410px" style:left="10px" class="tooltip">{$_('more-features.editor.description')}</div>
	</div>

	<div style:z-index="101" class="container">
		<img
			src="landing/key-features/more/categories.png"
			alt={$_('more-features.categories.alt')}
			loading="lazy"
		/>

        <div style:top="200px" style:left="100px" class="tooltip">{$_('more-features.editor.description')}</div>
	</div>

	<div class="container">
		<img
			src="landing/key-features/more/tags.png"
			alt={$_('more-features.tags.alt')}
			loading="lazy"
		/>

        <div style:top="330px" style:left="70px" class="tooltip">{$_('more-features.editor.description')}</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors';

	.section-title {
		font-size: 50px;
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

	.tooltip {
		position: absolute;
		max-width: 225px;
		min-width: 225px;
        padding: 4px 8px;
        font-size: 14px;
        line-height: 20px;
        overflow: visible;

        color: white;
		background-color: $color-primary;
        border-radius: 4px;
	}
</style>
