<script>
	import { _ } from '../../../services/i18n';
</script>

<div class="body">
	<div class="app-buttons">
		<img src="/landing/badge_google.svg" alt="google play link" />
		<a href="https://apps.apple.com/us/app/elminote/id6446087493" target="_blank">
			<img src="/landing/badge_apple.svg" alt="apple store link" />
		</a>

		<!-- <GooglePlayButton /> -->
		<!-- <AppStoreButton /> -->
	</div>

	<div class="right-side">
		<div class="links">
			<a href="https://twitter.com/ElmiNote" target="_blank" rel="external" class="link">
				<img height="20px" width="20px" src="/icons/twitter.svg" alt="" />
				{$_('landing-footer.news')}
			</a>

			<a href="/terms" class="link">
				<img height="20px" width="20px" src="/icons/feather.svg" alt="" />
				{$_('landing-footer.terms')}
			</a>

			<a href="/policy" class="link">
				<img height="20px" width="20px" src="/icons/terms.svg" alt="" />
				{$_('landing-footer.policy')}
			</a>

			<a href="mailto:team@elminote.io" class="link">
				<img height="20px" width="20px" src="/icons/contact.svg" alt="" />
				{$_('landing-footer.contact')}
			</a>
		</div>

		<div class="made">Made by 🦄 ElmiNote Team © 2023</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

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

	.app-buttons {
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

		@media (max-width: 1350px) {
			display: grid;
			justify-content: center;
		}
	}

	.link {
		display: flex;
		gap: 5px;
		align-items: center;

		font-size: 16px;
		font-weight: 500;
		color: $color-elmi-base;
		text-decoration: unset;

		&:hover {
			text-decoration: underline;
		}

		@media (max-width: 900px) {
			width: 340px;
			height: 48px;
			justify-content: center;
			border: 1px solid $color-elmi-base;
			border-radius: 48px;
			gap: 20px;

			&:hover {
				text-decoration: none;
				transform: scale(1.05);
			}
		}
	}
</style>
