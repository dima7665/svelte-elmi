<script lang="ts">
	import { _ } from '../../../services/i18n';
	import Logo from '../../shared/components/logo.svelte';
	import Dropdown from '../../shared/buttons/dropdown/dropdown.svelte';

	const overviewClick = () => {
		document.getElementById('priority-features')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	};

	const feedbackClick = () => {
		document.getElementById('feedback-form')?.scrollIntoView({ behavior: 'smooth' });
	};

	let innerWidth: number;
	let scrollY: number;
</script>

<svelte:window bind:innerWidth bind:scrollY />

<div class="body" class:transparent={scrollY === 0}>
	<a href="/"><Logo /></a>

	<div class="button-group">
		{#if innerWidth > 765}
			<button class="link-btn" on:click={overviewClick}>
				<img height="24px" width="24px" src="/icons/heart.svg" alt="" />{$_(
					'landing-header.overview'
				)}
			</button>
			<Dropdown>
				<button slot="trigger" class="dropdown-btn">
					<img height="24px" width="24px" src="/icons/download.svg" alt="" />
					{$_('landing-header.download')}
				</button>

				<div class="drop-menu" slot="menu">
					<div class="menu-item">
						<span class="color-primary">AppStore</span>
						<img height="31px" width="31px" src="/icons/apple-drop.svg" alt="" />
					</div>
					<div class="menu-item">
						<span>GooglePlay</span>
						<img height="31px" width="31px" src="/icons/google-drop.svg" alt="" />
					</div>
				</div>
			</Dropdown>

			<!-- TODO: fix contact icon -->
			<button class="link-btn" on:click={feedbackClick}>
				<img height="24px" width="24px" src="/icons/mail.svg" alt="" />
				{$_('landing-header.feedback')}
			</button>
		{/if}

		{#if innerWidth < 765}
			<button class="btn-icon">
				<img height="41px" width="41px" src="/icons/google-mobile.svg" alt="" />
			</button>
			<button class="btn-icon">
				<img height="41px" width="41px" src="/icons/apple-mobile.svg" alt="" />
			</button>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

		min-width: 700px;
		padding: 20px 25px;

		background-color: rgba(32, 35, 37, 0.9);
		border-radius: 25px;

		@media (max-width: 765px) {
			min-width: 300px;
			gap: 20px;
			padding: 10px;
		}

		&.transparent {
			background-color: transparent;
		}
	}

	.btn-icon {
		background-color: transparent;
		border: none;
	}

	.link-btn {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10px;
		align-items: center;

		border: none;
		font-size: 16px;
		color: white;
		background-color: transparent;

		cursor: pointer;
	}

	.dropdown-btn {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10px;
		align-items: center;

		height: 48px;
		padding: 0 16px;
		font-size: 16px;
		color: white;
		background-color: $color-primary;
		border-radius: 48px;
		border: none;

		cursor: pointer;
	}

	.button-group {
		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: 48px;
		align-content: center;

		@media (max-width: 765px) {
			grid-template-columns: repeat(2, auto);
			gap: 20px;
		}
	}

	.drop-menu {
		display: grid;
	}

	.menu-item {
		display: flex;
		padding: 10px;
		height: 40px;
		justify-content: space-between;
		align-items: center;

		font-family: 'Inter';
		cursor: pointer;
	}

	.color-primary {
		color: $color-primary;
	}
</style>
