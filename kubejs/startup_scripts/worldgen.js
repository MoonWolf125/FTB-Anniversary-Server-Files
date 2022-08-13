// priority: 100
onEvent("worldgen.remove", (event) => {
	// event.printFeatures("");
	// event.printFeatures("underground_ores");

	// if (event.isInBiomes(['minecraft:plains'])) {
	//     event.printFeatures("underground_ores");
	// }

	const removeById = [
		"ars_nouveau:arcane_ore",
		"immersiveengineering:bauxite",
		"immersiveengineering:copper",
		"immersiveengineering:lead",
		// "immersiveengineering:mineral_veins",
		"immersiveengineering:nickel",
		"immersiveengineering:silver",
		"immersiveengineering:uranium",
		"projectred-exploration:ore_copper",
		"projectred-exploration:ore_silver",
		"projectred-exploration:ore_tin",
		"projectred-exploration:ruby_ore",
		"projectred-exploration:sapphire_ore",
		"projectred-exploration:peridot_dore",
		"thermal:ore_apatite",
		"thermal:ore_cinnabar",
		"thermal:ore_copper",
		"thermal:ore_lead",
		"thermal:ore_nickel",
		"thermal:ore_silver",
		"thermal:ore_sulfur",
		"thermal:ore_tin",
		"thermal:ore_sapphire",
		"thermal:ore_ruby",
		"zycraft:ore_aluminium",
		"xencraft:xen_ore",
	];

	event.removeOres((ores) => {
		ores.blocks = [
			"ars_nouveau:arcane_ore",
			"minecraft:coal_ore",
			"minecraft:diamond_ore",
			"minecraft:emerald_ore",
			"minecraft:gold_ore",
			"minecraft:iron_ore",
			"minecraft:lapis_ore",
			"minecraft:nether_gold_ore",
			"minecraft:nether_quartz_ore",
			"minecraft:redstone_ore",
			"projectred-exploration:electrotine_ore",
			'chisel:marble/raw',
			'chisel:limestone/raw',
		];
	});

	removeById.forEach((id) => {
		event.removeFeatureById("underground_ores", id);
	});
});

onEvent("worldgen.add", (event) => {
	event.addOre(ore => {
		ore.block = 'xencraft:xen_ore'
		ore.clusterMaxSize = 4
		ore.clusterCount = 10
		ore.minHeight = 0
		ore.maxHeight = 64
	})

	event.addOre(ore => {
		ore.block = 'projectred-exploration:electrotine_ore'
		ore.clusterMaxSize = 8
		ore.clusterCount = 3
		ore.minHeight = 0
		ore.maxHeight = 16
	})
})