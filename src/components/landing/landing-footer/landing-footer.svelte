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
			<span class="link-icon"
				><i class="icon twitter-icon" />
				<a href="www.google.com" class="link">{$_('landing-footer.news')}</a>
			</span>

			<span class="link-icon"
				><i class="icon terms-icon" />
				<a href="www.google.com" class="link">{$_('landing-footer.terms')}</a>
			</span>

			<span class="link-icon"
				><i class="icon contact-icon" />
				<a href="www.google.com" class="link">{$_('landing-footer.contact')}</a>
			</span>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';
	@import '../../../styles/icons.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

		padding: 70px 100px;

		color: white;
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
		gap: 20px;
		justify-content: space-between;
	}

	.links {
		display: flex;
		gap: 30px;
	}

	.link-icon {
		display: flex;
	}
</style>
