<script>
	import { _ } from '../../../services/i18n';
	import GooglePlayButton from '../../shared/market-buttons/google-play-button.svelte';
	import AppStoreButton from '../../shared/market-buttons/app-store-button.svelte';
</script>

<div class="body">
	<div class="text-container">
		<h3 class="title">{$_('landing-start.title')} <span class="role">{$_('landing-start.role.developer')}</span></h3>
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
			width: 662px;
			padding-right: 75px;

			line-height: 24px;
			font-size: 18px;
		}
	}

	.app-buttons {
		width: 400px;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
	}

	.image-container {
		max-width: 600px;
		min-width: 600px;

		img {
			transform: rotate(-9.22deg);
			max-width: 100%;

			@media (max-width: 700px) {
				max-width: 100px;
			}
		}
	}
</style>
