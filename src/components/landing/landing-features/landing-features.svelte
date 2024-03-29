<script lang="ts">
	import { _ } from '../../../services/i18n';
	import FeatureCard from '../../shared/cards/feature-card.svelte';
	import LandingFeaturesMore from './landing-features-more.svelte';
	import Carousel from 'svelte-carousel';
	import create from '$lib/images/features/feature-create.png';
	import organize from '$lib/images/features/feature-organize.png';
	import sync from '$lib/images/features/feature-sync.png';

	const assets: StringObject = { create, organize, sync };

	let features = ['create', 'organize', 'sync'];
	let innerWidth: number = 1;
	let particlesToShow = 1;

	$: if (innerWidth) {
		particlesToShow = Math.floor((innerWidth + 200) / 500);
	}
</script>

<svelte:window bind:innerWidth />

<div class="feature-component">
	<h3 class="section-title">{$_('key-features.title')}</h3>

	<div class="container" id="priority-features">
		<Carousel dots={true} {particlesToShow} swiping={false} let:showPrevPage let:showNextPage>
			{#each features as feature}
				<div class="feature-card">
					<FeatureCard>
						<img slot="image" src={assets[feature]} alt={`${feature}`} loading="lazy" />
						<p slot="title" class="title">{$_(`key-features.${feature}.title`)}</p>
						<p slot="description" class="description">
							{$_(`key-features.${feature}.description`)}
						</p>
					</FeatureCard>
				</div>
			{/each}
			<div class="arrow-container arrow-left" slot="prev">
				<img
					on:click={showPrevPage}
					src="landing/arrows/arrow-left.svg"
					alt="arrow left"
					loading="lazy"
				/>
			</div>
			<div class="arrow-container arrow-right" slot="next">
				<img
					on:click={showNextPage}
					src="landing/arrows/arrow-right.svg"
					alt="arrow right"
					loading="lazy"
				/>
			</div>
		</Carousel>
	</div>

	<div class="more-container">
		<LandingFeaturesMore />
	</div>
</div>

<style lang="scss">
	.feature-component {
		max-width: 1320px;
		margin-left: auto;
		margin-right: auto;
	}

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
		display: flex;
	}

	.more-container {
		display: flex;
		flex-direction: column;
	}

	.arrow-container {
		display: flex;
		align-items: center;

		img {
			cursor: pointer;

			&:hover {
				transform: scale(1.1);
			}
		}

		&.arrow-left {
			margin-right: 5px;
		}

		&.arrow-right {
			margin-left: 5px;
		}
	}

	.feature-card {
		img {
			width: 250px;

			@media (max-width: 400px) {
				width: 220px;
			}
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
