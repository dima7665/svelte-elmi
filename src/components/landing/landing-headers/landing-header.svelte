<script>
	import { _ } from '../../../services/i18n';
	import Logo from '../../shared/components/logo.svelte';
	import ButtonsGroup from '../../shared/buttons/buttons-group.svelte';
</script>

<div class="body">
	<Logo />

	<ButtonsGroup>
		<button>{$_('landing-header.overview')}</button>
		<button>{$_('landing-header.download')}</button>
		<button>{$_('landing-header.feedback')}</button>
	</ButtonsGroup>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.body {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

		padding: 20px 25px;

		background-color: rgba(32, 35, 37, 0.9);
		border-radius: 25px;
	}
</style>
