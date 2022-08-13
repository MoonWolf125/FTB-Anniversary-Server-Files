// priority: 99
onEvent("recipes", (event) => {
	const plates = [
		{
			input: "#forge:gems/diamond",
			output: "emendatusenigmatica:diamond_plate",
		},
		{
			input: "#forge:gems/emerald",
			output: "emendatusenigmatica:emerald_plate",
		},
		{
			input: "#forge:ingots/signalum",
			output: "emendatusenigmatica:signalum_plate",
		},
		{
			input: "#forge:ingots/lumium",
			output: "emendatusenigmatica:lumium_plate",
		},
	];

	plates.forEach((i) => {
		event.recipes.immersiveengineering.metal_press(i.output, i.input, "immersiveengineering:mold_plate");
	});

	event.recipes.immersiveengineering.metal_press(
			"2x emendatusenigmatica:enderium_rod",
			"#forge:ingots/enderium",
			"immersiveengineering:mold_rod"
	);

	event.recipes.immersiveengineering.metal_press(
			"thermal:sapphire_gear",
			"4x #forge:gems/sapphire",
			"immersiveengineering:mold_gear"
	);

	event.recipes.immersiveengineering.metal_press(
			"thermal:ruby_gear",
			"4x #forge:gems/ruby",
			"immersiveengineering:mold_gear"
	);

	event.recipes.immersiveengineering.metal_press(
			"emendatusenigmatica:diamond_gear",
			"4x #forge:gems/diamond",
			"immersiveengineering:mold_gear"
	);

	event.recipes.immersiveengineering.metal_press(
			"emendatusenigmatica:emerald_gear",
			"4x #forge:gems/emerald",
			"immersiveengineering:mold_gear"
	);

	event.recipes.immersiveengineering.metal_press(
			"emendatusenigmatica:signalum_gear",
			"4x #forge:ingots/signalum",
			"immersiveengineering:mold_gear"
	);

	event.recipes.immersiveengineering.metal_press(
			"emendatusenigmatica:lumium_gear",
			"4x #forge:ingots/lumium",
			"immersiveengineering:mold_gear"
	);
});
