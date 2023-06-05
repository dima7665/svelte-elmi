<script lang="ts">
	export let tooltipTop = 0;
	export let tooltipLeft = 0;
	export let direction: 'top' | 'bottom' = 'bottom';
</script>

<div style:top="{tooltipTop}px" style:left="{tooltipLeft}px" class="tooltip {direction}">
	<slot />
</div>

<style lang="scss">
	@import '../../../styles/colors';

	.tooltip {
		position: absolute;
		max-width: 225px;
		min-width: 100px;
		padding: 4px 8px;
		font-size: 14px;
		line-height: 20px;
		overflow: visible;

		color: white;
		background-color: $color-primary;
		border-radius: 8px;
	}

	.tooltip:after {
		content: '';
		position: absolute;

		transform: rotate(45deg);

		border-width: 12px;
		border-style: solid;
	}

	.tooltip.bottom:after {
		left: 10px;
		bottom: -9px;

		border-color: transparent $color-primary transparent transparent;
	}

	.tooltip.top:after {
		top: -10px;
		right: 5px;

		border-color: transparent transparent transparent $color-primary;
	}
</style>
