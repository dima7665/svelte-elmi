<script>
	import { _, locale } from '../../../services/i18n';
	import GooglePlayButton from '../../shared/buttons/market-buttons/google-play-button.svelte';
	import AppStoreButton from '../../shared/buttons/market-buttons/app-store-button.svelte';
	import { getRoleI18n } from './landing-start.i18n';

	const loc = $locale || 'en';
	const role = getRoleI18n(loc).developer;
</script>

<div class="body">
	<div class="text-container">
		<h3 class="title">
			{$_('landing-start.title')} <span class="role">{role}</span>
		</h3>
		<p class="description">{$_('landing-start.description')}</p>
		<div class="app-buttons">
			<GooglePlayButton />
			<AppStoreButton />
		</div>
	</div>
	<div class="image-container">
		<div class="phones-image">
			<img src="landing/phones.png" alt="phones" />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.body {
		width: 100%;
		display: flex;

		padding: 0 100px;
		color: white;

		background-image: url('landing/background/bg1.png');
		background-size: cover;
	}

	.text-container {
		width: 800px;

		.title {
			margin: 0;
			font-size: 80px;
			line-height: 96px;

			.role {
				color: $color-primary;
			}
		}

		.description {
			// width: 720px;
			min-width: 600px;
			padding-top: 40px;
			padding-bottom: 40px;

			line-height: 24px;
			font-size: 18px;
		}
	}

	.app-buttons {
		width: 400px;
		display: grid;
		grid-auto-flow: column;
		gap: 20px;
		justify-content: space-between;
	}

	.image-container {
		max-width: 600px;
		min-width: 400px;

		img {
			transform: rotate(-9.22deg);
			max-width: 100%;

			@media (max-width: 700px) {
				max-width: 100px;
			}
		}
	}
</style>
