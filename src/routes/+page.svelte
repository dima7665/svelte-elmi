<script>
	import MainPageHeader from '../components/landing/landing-headers/landing-header.svelte';
	import LandingStart from '../components/landing/landing-start/landing-start.svelte';
	import LandingFeatures from '../components/landing/landing-features/landing-features.svelte';
	import LandingTheme from '../components/landing/landing-theme/landing-theme.svelte';
	import LandingFeedback from '../components/landing/landing-feedback/landing-feedback.svelte';
	import LandingFooter from '../components/landing/landing-footer/landing-footer.svelte';
	import { setupI18n, waitLocale } from '../services/i18n';

	setupI18n({ withLocale: 'en' });
</script>

<div class="container">
	{#await waitLocale() then}
		<div class="header"><MainPageHeader /></div>

		<div class="body">
			<LandingStart />

			<div class="white-bg"><LandingFeatures /></div>

			<LandingTheme />
			<LandingFeedback />
			<LandingFooter />
		</div>
	{/await}
</div>

<style lang="scss">
	@import '../styles/fonts.scss';

	.container {
		margin: 0;

		background-image: url('/landing/background/bg-black.png');
		background-size: cover;
	}

	:global(body) {
		margin: 0;
	}

	.header {
		position: fixed;
		left: 100px;
		right: 100px;
		top: 36px;
		z-index: 1000;

		@media (max-width: 1000px) {
			left: 15px;
			right: 15px;
		}

		@media (max-width: 600px) {
			left: 10px;
			right: 10px;
			top: 10px;
		}
	}

	.white-bg {
		// width: 100%;
		padding: 0 100px;
		background-color: white;

		@media (max-width: 1000px) {
			padding: 0 15px;
		}
	}

	.body {
		padding-top: 160px;
		font-family: 'Inter';
		overflow: hidden;
	}
</style>
