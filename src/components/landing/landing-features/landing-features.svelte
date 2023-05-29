<script>
	import { _ } from '../../../services/i18n';
	import FeatureCard from '../../shared/cards/feature-card.svelte';
	import LandingStart from '../landing-start/landing-start.svelte';
	import LandingFeaturesMore from './landing-features-more.svelte';

	let features = ['create', 'organize', 'sync'];

	const onLeftClick = () => {
		features = [features[features.length - 1], ...features.slice(0, -1)];
	};

	const onRightClick = () => {
		features = [...features.slice(1), features[0]];
	};
</script>

<h3 class="section-title">{$_('key-features.title')}</h3>

<div class="container">
	<div class="left-container">
		<button on:click={onLeftClick}
			><img src="landing/arrows/arrow-left.png" alt="arrow left" loading="lazy" /></button
		>
	</div>
	<div class="features-scrollable">
		<div class="features-container">
			{#each features as feature}
				<div class="feature-card">
					<FeatureCard>
						<img
							slot="image"
							src={`landing/key-features/feature-${feature}.png`}
							alt={`${feature}`}
							loading="lazy"
						/>
						<p slot="title" class="title">{$_(`key-features.${feature}.title`)}</p>
						<p slot="description" class="description">
							{$_(`key-features.${feature}.description`)}
						</p>
					</FeatureCard>
				</div>
			{/each}
		</div>
	</div>
	<div class="right-container">
		<button on:click={onRightClick}>
			<img src="landing/arrows/arrow-right.png" alt="arrow right" loading="lazy" />
		</button>
	</div>
</div>

<LandingFeaturesMore />

<style lang="scss">
	.section-title {
		margin-top: 0;
		padding-top: 50px;
		min-width: 600px;

		font-size: 50px;

		@media (max-width: 765px) {
			min-width: 300px;
			font-size: 40px;
		}
	}

	.container {
		display: grid;
		grid-template-columns: 50px 1fr 50px;
		gap: 50px;
		justify-items: center;

		@media (max-width: 765px) {
			gap: 30px;
		}

		@media (max-width: 500px) {
			grid-template-columns: auto;
		}
	}

	.left-container,
	.right-container {
		display: grid;
		place-content: center;

		@media (max-width: 500px) {
			display: none;
		}

		button {
			border: none;
			background-color: transparent;
		}
	}

	.features-scrollable {
		width: 100%;

		@media (min-width: 765px) and (max-width: 1000px) {
			max-width: 540px;
			overflow-x: auto;
		}

		@media (max-width: 765px) {
			max-width: 300px;
			overflow-x: auto;
		}
	}

	.features-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 70px;

		@media (min-width: 765px) and (max-width: 1000px) {
			display: flex;
		}

		@media (max-width: 765px) {
			grid-template-columns: minmax(1fr, 300px);
			grid-template-rows: 1fr;
			min-width: 1200px;
		}
	}

	.feature-card {
		img {
			width: 250px;
		}

		.title {
			font-weight: 700;
			font-size: 24px;
			line-height: 32px;
		}

		.description {
			font-size: 16px;
			line-height: 24px;
		}
	}
</style>
