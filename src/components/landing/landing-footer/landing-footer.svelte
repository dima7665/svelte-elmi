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

	<div class="links">
		<button class="link-icon"
			><i class="icon twitter-icon" />
			<a href="www.google.com" class="link">{$_('landing-footer.news')}</a>
		</button>

		<button class="link-icon"
			><i class="icon terms-icon" />
			<a href="www.google.com" class="link">{$_('landing-footer.terms')}</a>
		</button>

		<button class="link-icon"
			><i class="icon contact-icon" />
			<a href="mailto:team@elminote.io" class="link">{$_('landing-footer.contact')}</a>
		</button>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';
	@import '../../../styles/icons.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;
		gap: 20px;

		padding: 70px 100px;

		color: white;

		@media (max-width: 1000px) {
			padding: 70px 15px;
		}

		@media (max-width: 1200px) {
			grid-template-columns: auto;
		}

		@media (max-width: 765px) {
			justify-content: center;
		}
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

		@media (max-width: 765px) {
			display: grid;
			justify-content: center;
		}
	}

	.link-icon {
		display: flex;
		background-color: transparent;
		border: none;

		@media (max-width: 765px) {
			width: 340px;
			height: 48px;
			padding: 12px 16px;
			justify-content: center;
			border: 1px solid $color-elmi-base;
			border-radius: 48px;
		}
	}
</style>
