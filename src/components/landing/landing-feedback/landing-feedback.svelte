<script>
	import { _ } from '../../../services/i18n';
</script>

<div class="component">
	<h1 class="title">{$_('landing-feedback.title')}</h1>

	<div class="body">
		<h3 class="subtitle">{$_('landing-feedback.subtitle')}</h3>

		<div class="form">
			<input
				type="email"
				class="input email"
				maxlength="80"
				placeholder={$_('landing-feedback.email')}
			/>
			<input
				type="text"
				class="input message"
				maxlength="200"
				placeholder={$_('landing-feedback.message')}
			/>

			<button class="submit-button">Send</button>
		</div>

		<!-- <div class="checkbox">
			<input type="checkbox" id="subscribe" />
			<label for="subscribe">{$_('landing-feedback.subscribe')}</label>
		</div> -->
	</div>
</div>

<style lang="scss">
	@import '../../../styles/colors.scss';

	.component {
		padding: 0 100px;

		color: white;
	}

	.title {
		font-size: 50px;
		min-width: 860px;
	}

	.subtitle {
		font-size: 32px;
		margin: 0;
	}

	.body {
		display: flex;
		flex-direction: column;
		padding: 20px 30px 30px;
		gap: 20px;
		min-width: 850px;

		border: 1px dashed $color-sky-lightest;
		border-radius: 10px;
	}

	.form {
		display: grid;
		grid-template-columns: minmax(200px, 2fr) minmax(400px, 5fr) 1fr;
		gap: 20px;
	}

	.input {
		height: 48px;
		padding: 0 20px;
		font-size: 16px;
		// border: 1px solid $color-sky-lightest;
		border: 1px solid green;
		border-radius: 48px;
	}

	.submit-button {
		height: 48px;
		border-radius: 48px;
		background-color: $color-primary;
		color: white;
		font-size: 16px;
		font-weight: 500;
	}

	.checkbox {
		font-size: 16px;
	}
</style>
