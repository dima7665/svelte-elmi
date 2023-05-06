<script>
	import MainPageHeader from '../components/landing/headers/main-page-header.svelte';
	import LandingStart from '../components/landing/landing-start/landing-start.svelte';
	import { setupI18n, waitLocale } from '../services/i18n';

    setupI18n({ withLocale: 'en' });
</script>

{#await waitLocale() then}
	<MainPageHeader />

	<div>
		<LandingStart />
	</div>
{/await}
