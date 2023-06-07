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

	<div class="right-side">
		<div class="links">
			<button class="link-icon">
				<!-- <i class="icon twitter-icon" /> -->
				<img height="20px" width="20px" src="icons/twitter.png" alt="" />
				<a href="https://twitter.com/ElmiNote" rel="external" class="link">
					{$_('landing-footer.news')}
				</a>
			</button>

			<button class="link-icon">
				<!-- <i class="icon terms-icon" /> -->
				<img height="20px" width="20px" src="icons/terms.png" alt="" />
				<a href="/terms" class="link">{$_('landing-footer.terms')}</a>
			</button>

			<button class="link-icon">
				<!-- <i class="icon contact-icon" /> -->
				<img height="20px" width="20px" src="icons/contact.png" alt="" />
				<a href="mailto:team@elminote.io" class="link">{$_('landing-footer.contact')}</a>
			</button>
		</div>

		<div class="made">Made with 🦄 Elminote v1.0 © 2023</div>
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
		max-width: 1320px;
		margin-left: auto;
		margin-right: auto;

		padding: 70px 100px;

		color: white;

		@media (max-width: 1000px) {
			padding: 70px 15px;
		}

		@media (max-width: 900px) {
			grid-template-columns: auto;
			justify-content: center;
			gap: 50px;
		}
	}

	.link {
		font-size: 16px;
		font-weight: 500;
		color: $color-elmi-base;

		text-decoration: unset;
	}

	.app-buttons {
		// width: 400px;
		display: grid;
		grid-auto-flow: column;
		gap: 20px;
		justify-content: space-between;

		@media (max-width: 450px) {
			width: auto;
			grid-auto-flow: row;
			justify-content: center;
		}
	}

	.right-side {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.made {
		display: flex;
		justify-content: end;
		font-size: 14px;

		@media (max-width: 900px) {
			justify-content: center;
		}
	}

	.links {
		display: flex;
		gap: 30px;

		@media (max-width: 1200px) {
			display: grid;
			justify-content: center;
		}
	}

	.link-icon {
		display: flex;
		background-color: transparent;
		border: none;
		gap: 5px;

		@media (max-width: 900px) {
			width: 340px;
			height: 48px;
			padding: 12px 16px;
			justify-content: center;
			border: 1px solid $color-elmi-base;
			border-radius: 48px;
			gap: 20px;
		}
	}
</style>
