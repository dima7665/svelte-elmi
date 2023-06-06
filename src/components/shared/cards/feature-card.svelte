<div class="feature-card">
	<slot name="image" />
	<slot name="title" />
	<slot name="description" />
</div>

<style lang="scss">
	.feature-card {
		display: grid;
		justify-items: center;
		margin: 0 30px;

		@media (max-width: 400px) {
			margin: 0 10px;
		}
	}
</style>
