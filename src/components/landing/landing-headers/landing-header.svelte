<script lang="ts">
	import { _ } from '../../../services/i18n';
	import Logo from '../../shared/components/logo.svelte';
	import Dropdown from '../../shared/buttons/dropdown/dropdown.svelte';

	const linkClick = (event: any) => {
		console.log(event);
	};
</script>

<div class="body">
	<Logo />

	<div class='button-group'>
		<button class="link-btn" on:click={linkClick}>
			<i class="icon heart-icon" />{$_('landing-header.overview')}
		</button>
		<Dropdown>
			<button slot='trigger' class="dropdown-btn">
				<i class="icon download-icon" />{$_('landing-header.download')}
			</button>

			<div slot='menu'>
				<p>123</p>
				<p>qwe</p>
			</div>
		</Dropdown>
		
		<!-- TODO: fix contact icon -->
		<button class="link-btn" on:click={linkClick}>
			<i class="icon contact2-icon" />{$_('landing-header.feedback')}
		</button>
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';
	@import '../../../styles/icons.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

		padding: 20px 25px;

		background-color: rgba(32, 35, 37, 0.9);
		border-radius: 25px;
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
	}
</style>
