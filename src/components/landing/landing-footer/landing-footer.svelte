<script>
	import { _ } from '../../../services/i18n';
	import GooglePlayButton from '../../shared/buttons/market-buttons/google-play-button.svelte';
	import AppStoreButton from '../../shared/buttons/market-buttons/app-store-button.svelte';
</script>

<div class="body">
	<div class="app-buttons">
		<GooglePlayButton />
		<AppStoreButton />
	</div>

	<div class="body-right">
		<div class="links">
			<a href="www.google.com" class="link">{$_('landing-footer.news')}</a>
			<a href="www.google.com" class="link">{$_('landing-footer.terms')}</a>
			<a href="www.google.com" class="link">{$_('landing-footer.contact')}</a>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

        margin-top: 78px;
	}

	.link {
		font-size: 16px;
		font-weight: 500;
		color: $color-elmi-base;
	}

	.app-buttons {
		width: 400px;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
	}

    .links {
        display: flex;
        gap: 15px;
    }
</style>
