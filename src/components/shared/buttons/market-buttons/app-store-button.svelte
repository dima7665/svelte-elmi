<script>
	import { _ } from '../../../../services/i18n';

	export let color = 'white';
</script>

<div class="container" style:--button-color={color}>
	<div class="image-container"><img src="landing/app-store-64_{color}.png" alt="app store link" /></div>

	<div class="text-container">
		<p class="subtitle">{$_('market-buttons.apple.subtitle')}</p>
		<p class="title">{$_('market-buttons.apple.title')}</p>
	</div>
</div>

<style lang="scss">
	@import './market-button.scss';

	.subtitle {
		font-size: 14px;
		margin: 0;
	}

	.title {
		font-size: 24px;
		margin: 0;
	}
</style>
