<script>
	import { _ } from '../../../../services/i18n';

	export let color = 'white';
</script>

<div class="container" style:--button-color={color}>
	<div class="image-container">
		<img src="/landing/google-play-64.png" alt="google play link" />
	</div>
	<div class="text-container">
		<p class="subtitle">{$_('market-buttons.google.subtitle')}</p>
		<p class="title">{$_('market-buttons.google.title')}</p>
	</div>
</div>

<style lang="scss">
	@import './market-button.scss';

	.subtitle {
		font-size: 12px;
		text-transform: uppercase;
		margin: 0;
	}

	.title {
		font-size: 22px;
		margin: 0;
	}

	.image-container {
		max-width: 100%;
	}
</style>
