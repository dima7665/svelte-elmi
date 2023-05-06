import { locale, _, register, init, getLocaleFromNavigator, waitLocale } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: getLocaleFromNavigator() }) {
	register('en', () => import('../lang/en.json'));

	init({ initialLocale: _locale, fallbackLocale: 'en' });
}

export { _, waitLocale, locale, setupI18n };
