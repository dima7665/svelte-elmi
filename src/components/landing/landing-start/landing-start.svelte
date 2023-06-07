<script lang="ts">
	import { _, locale } from '../../../services/i18n';
	import GooglePlayButton from '../../shared/buttons/market-buttons/google-play-button.svelte';
	import AppStoreButton from '../../shared/buttons/market-buttons/app-store-button.svelte';
	import { getRoleI18n } from './landing-start.i18n';

	const loc = $locale || 'en';
	const role = getRoleI18n(loc).everyone;

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="start-component">
	<div class="start-body">
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
				{#if innerWidth > 1000}
					<img src="landing/phones.png" alt="phones" />
				{/if}

				{#if innerWidth <= 1000}
					<img src="landing/phones2.png" alt="phones" />
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.start-component {
		padding: 0 100px;
		color: white;

		background-image: url('/landing/background/bg1.png');
		background-size: cover;

		@media (max-width: 1000px) {
			padding: 0 15px;
		}
	}

	.start-body {
		display: flex;
		max-width: 1320px;
		margin-left: auto;
		margin-right: auto;

		@media (max-width: 1000px) {
			flex-direction: column;
			gap: 30px;
			padding: 0 15px;
		}
	}

	.text-container {
		// width: 800px;

		@media (max-width: 800px) {
			width: 100%;
		}

		.title {
			margin: 0;
			font-size: 80px;
			line-height: 96px;

			@media (max-width: 800px) {
				font-size: 40px;
				line-height: 48px;
			}

			.role {
				color: $color-primary;
			}
		}

		.description {
			min-width: 600px;
			padding-right: 100px;
			padding-top: 40px;
			padding-bottom: 40px;

			line-height: 24px;
			font-size: 18px;

			@media (max-width: 765px) {
				min-width: 300px;
				padding-right: 0;
			}
		}
	}

	.app-buttons {
		width: 400px;
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

	.image-container {
		max-width: 600px;
		min-width: 600px;
		margin-left: -100px;

		@media (max-width: 800px) {
			max-width: 600px;
			min-width: 300px;
			margin-left: 0;
		}

		img {
			transform: rotate(-9.22deg);
			max-width: 120%;

			@media (max-width: 1000px) {
				max-width: 100%;
				transform: rotate(0deg);
		}
		}
	}
</style>
