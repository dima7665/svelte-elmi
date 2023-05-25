<script lang="ts">
	import { _ } from '../../../services/i18n';
	import Logo from '../../shared/components/logo.svelte';
	import Dropdown from '../../shared/buttons/dropdown/dropdown.svelte';

	const linkClick = (event: any) => {
		console.log(event);
	};

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="body">
	<Logo />

	<div class="button-group">
		{#if innerWidth > 765}
			<button class="link-btn" on:click={linkClick}>
				<img height="20px" width="20px" src="icons/heart.png" alt="" />{$_(
					'landing-header.overview'
				)}
			</button>
			<Dropdown>
				<button slot="trigger" class="dropdown-btn">
					<img height="20px" width="20px" src="icons/download.png" alt="" />
					{$_('landing-header.download')}
				</button>

				<div class="drop-menu" slot="menu">
					<div class="menu-item">
						<span class="color-primary">AppStore</span>
						<img height="31px" width="31px" src="icons/apple-drop.png" alt="" />
					</div>
					<div class="menu-item">
						<span>GooglePlay</span>
						<img height="31px" width="31px" src="icons/google-drop.png" alt="" />
					</div>
				</div>
			</Dropdown>

			<!-- TODO: fix contact icon -->
			<button class="link-btn" on:click={linkClick}>
				<img height="20px" width="20px" src="icons/mail.svg" alt="" />{$_(
					'landing-header.feedback'
				)}
			</button>
		{/if}

		{#if innerWidth < 765}
			<button><img height="20px" width="20px" src="icons/download.png" alt="" /></button>
			<button><img height="31px" width="31px" src="icons/google-drop.png" alt="" /></button>
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
			min-width: 350px;
			gap: 20px;
		}
	}

	.link-btn {
		display: grid;
		grid-template-columns: auto auto;
		gap: 3px;
		align-items: center;

		border: none;
		font-size: 16px;
		color: white;
		background-color: transparent;
	}

	.dropdown-btn {
		display: grid;
		grid-template-columns: auto auto;
		gap: 3px;
		align-items: center;

		height: 48px;
		padding: 0 16px;
		font-size: 16px;
		color: white;
		background-color: $color-primary;
		border-radius: 48px;
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
		cursor: context-menu;
	}

	.color-primary {
		color: $color-primary;
	}
</style>
