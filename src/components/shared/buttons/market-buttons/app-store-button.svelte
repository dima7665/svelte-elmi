<script>
	import { _ } from '../../../../services/i18n';
</script>

<div class="container">
	<div class="image-container"><img src="landing/app-store-64.png" alt="app store link" /></div>

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
