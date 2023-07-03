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
	@import '../styles/colors.scss';

	.container {
		margin: 0;

		background-image: url('/landing/background/bg_line_1l.svg'),
			url('/landing/background/bg_line_1r.svg'), url('/landing/background/bg_line_2.svg'),
			url('/landing/background/bg_line_1l.svg'), url('/landing/background/bg_line_2.svg'),
			url('/landing/background/bg-black.png');
		background-size: 80%, 50%, 140%, 70%, 130%, cover;
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat, round;
		background-position: 0 17%, 100% 5%, -200px 90%, -100px 70%, -300px calc(100% + 400px), 0 0;

		@media (max-width: 600px) {
			background-size: 120%, 90%, cover;
		}
	}

	:global(::selection) {
		color: black;
		background-color: $color-elmi-base;
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
		max-width: 1400px;
		margin-left: auto;
		margin-right: auto;

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
		background-image: url('/landing/background/bg_line_2.svg');
		background-repeat: no-repeat;
		background-size: 90%;

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
