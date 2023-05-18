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

<style lang="scss">
	@import '../styles/fonts.scss';

	:global(body) {
		margin: 0;

		background-image: url('landing/background/bg-black.png');
		background-size: cover;
	}

	.header {
		position: fixed;
		left: 100px;
		right: 100px;
		z-index: 1000;
	}

	.white-bg {
		padding: 0 100px;
		background-color: white;
	}

	.body {
		padding-top: 160px;

		font-family: 'Inter';
		// mix-blend-mode: difference;
	}
</style>
