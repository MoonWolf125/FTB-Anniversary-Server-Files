// priority: 99
onEvent("recipes", (event) => {
	event.recipes.thermal.pyrolyzer({
		ingredient: {
			item: "minecraft:coal",
		},
		result: [
			{
				item: "thermal:coal_coke",
			},
			{
				item: "thermal:tar",
				chance: 0.25,
			},
			{
				fluid: "immersiveengineering:creosote",
				amount: 250,
			},
		],
		experience: 0.15,
	});

	event.recipes.thermal.pyrolyzer({
		ingredient: {
			tag: "minecraft:logs",
		},
		result: [
			{
				item: "minecraft:charcoal",
			},
			{
				fluid: "immersiveengineering:creosote",
				amount: 125,
			},
		],
		experience: 0.15,
	});
});
