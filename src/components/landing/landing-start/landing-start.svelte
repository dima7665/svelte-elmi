<script lang="ts">
	import { _, locale } from '../../../services/i18n';
	import { getRoleI18n } from './landing-start.i18n';
	import { onMount } from 'svelte';
	import { typewriter } from '../../shared/animations/typewriter';

	const loc = $locale || 'en';
	const roles = [
		getRoleI18n(loc).developer,
		getRoleI18n(loc).writer,
		getRoleI18n(loc).human,
		getRoleI18n(loc).everyone
	];

	let currentRoleIndex = 0;
	let displayRole = getRoleI18n(loc).everyone;
	let showRole = true;

	let titleWidth = 0;
	let titleLines = 0;
	let titleHeight = 0;

	$: titleLines =
		innerWidth > 800 ? (titleWidth > 774 ? 3 : 4) : titleWidth > 529 ? 2 : titleWidth > 388 ? 3 : 4;
	$: titleHeight = titleLines * (innerWidth > 800 ? 96 : 48);

	let innerWidth: number;

	onMount(() => {
		const roleChangeInterval = setInterval(() => {
			showRole = false;

			setTimeout(() => {
				showRole = true;
			}, 200);

			currentRoleIndex = (currentRoleIndex + 1) % roles.length;
			displayRole = roles[currentRoleIndex];
		}, 6000);

		return () => clearInterval(roleChangeInterval);
	});
</script>

<svelte:window bind:innerWidth />

<div class="start-component">
	<div class="start-body">
		<div class="text-container">
			<h3 class="title" bind:clientWidth={titleWidth} style:min-height="{titleHeight}px">
				<span>{$_('landing-start.title')}</span>

				<span class="role">
					{#if showRole}
						<span in:typewriter={{ speed: 10 }} class="typing">{displayRole}</span>
					{/if}
				</span>
			</h3>
			<p class="description">{$_('landing-start.description')}</p>
			<div class="app-buttons">
				<a
					href="https://play.google.com/store/apps/details?id=com.elminote.android"
					target="_blank"
				>
					<img src="/landing/badge_google.svg" alt="google play link" />
				</a>

				<a href="https://apps.apple.com/us/app/elminote/id6446087493" target="_blank">
					<img src="/landing/badge_apple.svg" alt="apple store link" />
				</a>

				<!-- <GooglePlayButton /> -->
				<!-- <AppStoreButton /> -->
			</div>
		</div>

		<div class="image-container">
			<div class="phones-image">
				{#if innerWidth > 1000}
					<img src="/landing/phones.png" alt="phones" />
				{/if}

				{#if innerWidth <= 1000}
					<img src="/landing/phones2.png" alt="phones" />
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
		background-position: bottom;
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

			@keyframes blink {
				0%,
				100% {
					opacity: 1;
				}
				50% {
					opacity: 0.1;
				}
			}

			.role {
				color: $color-primary;
				min-width: 200px;
				min-height: 96px;
				width: 200px;
				// display: contents;

				.typing::after {
					content: '';
					border-right: 5px solid $color-primary;
					animation: blink 1.2s linear infinite;
				}
			}
		}

		.description {
			min-width: 600px;
			padding-right: 100px;
			padding-top: 40px;
			padding-bottom: 40px;

			line-height: 26px;
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

		@media (max-width: 1000px) {
			max-width: 600px;
			min-width: 300px;
			margin-left: auto;
			margin-right: auto;
		}

		img {
			max-width: 120%;

			@media (max-width: 1000px) {
				max-width: 100%;
			}
		}
	}
</style>
