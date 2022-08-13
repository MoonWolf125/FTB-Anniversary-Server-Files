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
			input: "#forge:ingots/aluminum",
			output: "emendatusenigmatica:aluminum_plate",
		},
		{
			input: "#forge:ingots/steel",
			output: "emendatusenigmatica:steel_plate",
		},
	];
	plates.forEach((i) => {
		event.recipes.thermal.press(i.output, i.input);
	});

	event.recipes.thermal.press("thermal:sapphire_gear", ["4x #forge:gems/sapphire", "thermal:press_gear_die"]);
	event.recipes.thermal.press("thermal:ruby_gear", ["4x #forge:gems/ruby", "thermal:press_gear_die"]);
	event.recipes.thermal.press("emendatusenigmatica:diamond_gear", [
		"4x #forge:gems/diamond",
		"thermal:press_gear_die",
	]);
	event.recipes.thermal.press("emendatusenigmatica:emerald_gear", [
		"4x #forge:gems/emerald",
		"thermal:press_gear_die",
	]);
	event.recipes.thermal.press("emendatusenigmatica:aluminum_gear", [
		"4x #forge:ingots/aluminum",
		"thermal:press_gear_die",
	]);
	event.recipes.thermal.press("emendatusenigmatica:steel_gear", ["4x #forge:ingots/steel", "thermal:press_gear_die"]);
});
