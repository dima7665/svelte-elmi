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
	<MainPageHeader />

	<div class="body">
		<LandingStart />
		<LandingFeatures />
		<LandingTheme />
		<LandingFeedback />
		<LandingFooter />
	</div>
{/await}

<style lang="scss">
	@import '../styles/fonts.scss';

	.body {
		padding-right: 100px;
		padding-left: 100px;

		font-family: 'Inter';
	}
</style>
