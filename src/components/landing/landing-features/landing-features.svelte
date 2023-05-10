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
					<p slot="description" class="description">{$_(`key-features.${feature}.description`)}</p>
				</FeatureCard>
			</div>
		{/each}
	</div>
	<div class="right-container">
		<button on:click={onRightClick}
			><img src="landing/arrows/arrow-right.png" alt="arrow right" loading="lazy" /></button
		>
	</div>
</div>

<LandingFeaturesMore />

<style lang="scss">
	.section-title {
		font-size: 50px;
	}

	.container {
		display: grid;
		grid-template-columns: 50px 1fr 50px;
	}

	.left-container,
	.right-container {
		display: grid;
		place-content: center;

		button {
			border: none;
			background-color: transparent;
		}
	}

	.features-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 70px;

		padding: 0 50px;
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
