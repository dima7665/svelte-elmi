<script lang="ts">
	import { _ } from '../../../services/i18n';
	import Logo from '../../shared/components/logo.svelte';
	import Dropdown from '../../shared/buttons/dropdown/dropdown.svelte';

	const overviewClick = () => {
		document
			.getElementById('priority-features')
			?.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
			<button class="link-btn after" on:click={overviewClick}>
				<!-- <img height="24px" width="24px" src="/icons/heart.svg" alt="" /> -->
				<span class="icon heart-icon" />
				<span>{$_('landing-header.overview')}</span>
			</button>
			<Dropdown>
				<button slot="trigger" class="dropdown-btn">
					<img height="24px" width="24px" src="/icons/download.svg" alt="" />
					{$_('landing-header.download')}
				</button>

				<div class="drop-menu" slot="menu">
					<a
						class="drop-link"
						href="https://apps.apple.com/us/app/elminote/id6446087493"
						target="_blank"
					>
						<div class="menu-item">
							<span>AppStore</span>
							<span class="drop-icon apple-icon" />
							<!-- <img height="31px" width="31px" src="/icons/apple-drop.svg" alt="" /> -->
						</div>
					</a>

					<a
						class="drop-link"
						href="https://play.google.com/store/apps/details?id=com.elminote.android"
						target="_blank"
					>
						<div class="menu-item">
							<span>GooglePlay</span>
							<span class="drop-icon google-icon" />
							<!-- <img height="31px" width="31px" src="/icons/google-drop.svg" alt="" /> -->
						</div>
					</a>
				</div>
			</Dropdown>

			<button class="link-btn" on:click={feedbackClick}>
				<!-- <img height="24px" width="24px" src="/icons/mail.svg" alt="" /> -->
				<span class="icon mail-icon" />
				{$_('landing-header.feedback')}
			</button>
		{/if}

		{#if innerWidth < 765}
			<a
				href="https://play.google.com/store/apps/details?id=com.elminote.android"
				target="_blank"
				class="btn-icon"
			>
				<img height="48px" width="48px" src="/icons/google-mobile.svg" alt="" />
			</a>
			<a
				href="https://apps.apple.com/us/app/elminote/id6446087493"
				target="_blank"
				class="btn-icon"
			>
				<img height="48px" width="48px" src="/icons/apple-mobile.svg" alt="" />
			</a>
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

		--heart-icon: url('/icons/heart.svg');
		--mail-icon: url('/icons/mail.svg');

		&:hover {
			color: $color-elmi-base;
			// transition: color 0.25s ease-in;

			--heart-icon: url('/icons/heart_hover.svg');
			--mail-icon: url('/icons/mail_hover.svg');
		}
	}

	.icon {
		width: 24px;
		height: 24px;
	}

	.heart-icon {
		background-image: var(--heart-icon);
	}

	.mail-icon {
		background-image: var(--mail-icon);
	}

	.drop-icon {
		width: 31px;
		height: 31px;
	}

	.apple-icon {
		background-image: var(--apple-drop);
	}

	.google-icon {
		background-image: var(--google-drop);
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

	.drop-link {
		text-decoration: none;
		color: black;
	}

	.menu-item {
		display: flex;
		padding: 10px;
		height: 40px;
		justify-content: space-between;
		align-items: center;

		font-family: 'Inter';
		cursor: pointer;

		--apple-drop: url('/icons/apple-drop.svg');
		--google-drop: url('/icons/google-drop.svg');

		&:hover {
			color: $color-primary;

			--apple-drop: url('/icons/apple-drop_hover.svg');
			--google-drop: url('/icons/google-drop_hover.svg');
		}
	}
</style>
