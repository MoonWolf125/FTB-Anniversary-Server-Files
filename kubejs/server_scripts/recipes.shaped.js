// priority: 99
onEvent("recipes", (event) => {
	event.shaped("4x minecraft:chest", ["LLL", "L L", "LLL"], {
		L: "#minecraft:logs",
	});

	event.shaped("16x minecraft:stick", ["L", "L"], {
		L: "#minecraft:logs",
	});

	event.remove({output: "farmersdelight:iron_knife"});
	event.shaped("farmersdelight:iron_knife", [" S", "T "], {
		T: "#forge:ingots/iron",
		S: "#forge:rods/wooden",
	});

	event.remove({output: "farmersdelight:golden_knife"});
	event.shaped("farmersdelight:golden_knife", [" S", "T "], {
		T: "#forge:ingots/gold",
		S: "#forge:rods/wooden",
	});

	event.remove({output: "farmersdelight:diamond_knife"});
	event.shaped("farmersdelight:diamond_knife", [" S", "T "], {
		T: "#forge:gems/diamond",
		S: "#forge:rods/wooden",
	});

	event.shaped("thermal:sapphire_gear", [" G ", "GNG", " G "], {
		G: "#forge:gems/sapphire",
		N: "#forge:nuggets/iron",
	});

	event.shaped("thermal:ruby_gear", [" G ", "GNG", " G "], {
		G: "#forge:gems/ruby",
		N: "#forge:nuggets/iron",
	});

	event.shaped("chisel:futura/controller", ["SSS", "SGS", "SSS"], {
		G: "#forge:ingots/gold",
		S: "#forge:stone",
	});

	event.shaped("8x immersiveengineering:treated_wood_horizontal", ["PPP", "POP", "PPP"], {
		O: [
			"immersiveengineering:creosote_bucket",
			"thermal:creosote_bucket",
			Item.of("ftbic:fluid_cell", '{Fluid:"immersiveengineering:creosote"}'),
		],
		P: "#minecraft:planks",
	});

	event.shaped('tesseract:tesseract', ["ORO", "RAR", "ORO"], {
		O: "minecraft:obsidian",
		R: "#forge:rods/enderium",
		A: "minecraft:ender_eye",
	});

	event.shaped("emendatusenigmatica:brass_block", ['III', 'III', 'III'], {
		I: "#forge:ingots/brass",
	});

	event.shaped("emendatusenigmatica:brass_ingot", ['III', 'III', 'III'], {
		I: "#forge:nuggets/brass",
	});
});
