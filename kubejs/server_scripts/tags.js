// priority: 100
onEvent("item.tags", (event) => {
	event.add("forge:rubber", "thermal:rubber");

	event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

	event.add("chisel:sandstone", [
		"minecraft:sandstone",
		"minecraft:chiseled_sandstone",
		"minecraft:cut_sandstone",
		"minecraft:smooth_sandstone",
	]);
	event.add("chisel:metals/aluminum", ["emendatusenigmatica:aluminum_block"]);
	event.add("chisel:metals/bronze", ["emendatusenigmatica:bronze_block"]);
	event.add("chisel:emerald", ["minecraft:emerald_block"]);
	event.add("chisel:redstone", ["minecraft:redstone_block"]);
	event.add("chisel:charcoal", ["thermal:charcoal_block"]);

	event.add("chisel:marble", ["projectred-exploration:marble"]);
	event.add("chisel:basalt", ["projectred-exploration:basalt"]);

	event.add("forge:dusts/ender", ["thermal:ender_pearl_dust"]);

	event.add("ftbic:no_auto_recipe", [
		"emendatusenigmatica:emerald_rod",
		"emendatusenigmatica:lapis_gear",
		"emendatusenigmatica:enderium_gear",
		"emendatusenigmatica:quartz_gear",
		"emendatusenigmatica:lapis_plate",
		"emendatusenigmatica:enderium_plate",
		"emendatusenigmatica:uranium_plate",
		"emendatusenigmatica:uranium_gear",
		"emendatusenigmatica:lapis_rod",
		"emendatusenigmatica:silver_rod",
		"emendatusenigmatica:nickel_rod",
		"emendatusenigmatica:uranium_rod",
		"emendatusenigmatica:tin_rod",
		"emendatusenigmatica:bronze_rod",
		"emendatusenigmatica:constantan_rod",
		"emendatusenigmatica:electrum_rod",
		"emendatusenigmatica:lumium_rod",
		"emendatusenigmatica:copper_rod",
		"emendatusenigmatica:lead_rod",
		"emendatusenigmatica:signalum_rod",
		"emendatusenigmatica:invar_rod",
		"emendatusenigmatica:gold_rod",
		"emendatusenigmatica:diamond_rod",
	]);

	event.add("forge:storage_blocks/mana", "emendatusenigmatica:arcane_block");

	event.add("ftbees:nether_flowers", [
		"minecraft:crimson_fungus",
		"minecraft:warped_fungus",
		"minecraft:nether_wart",
		"minecraft:crimson_roots",
		"minecraft:warped_roots",
		"minecraft:nether_sprouts",
		"minecraft:weeping_vines",
		"minecraft:twisting_vines",
	]);

	event.add('forge:gems/xen', 'xencraft:xen_gem');
	event.add('forge:gems', '#forge:gems/xen');

	event.add('forge:ores/xen', 'xencraft:xen_ore');
	event.add('forge:ores', '#forge:ores/xen');

	event.remove('forge:gems/ruby', 'thermal:ruby')
	event.remove('forge:gems', 'thermal:ruby')
	event.remove('forge:gems/sapphire', 'thermal:sapphire')
	event.remove('forge:gems', 'thermal:sapphire')
});

onEvent("block.tags", (event) => {
	event.add("ftbultimine:excluded_blocks", ["cb_multipart:multipart"]);
	event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

	event.add("chisel:sandstone", [
		"minecraft:sandstone",
		"minecraft:chiseled_sandstone",
		"minecraft:cut_sandstone",
		"minecraft:smooth_sandstone",
	]);
	event.add("chisel:metals/aluminum", ["emendatusenigmatica:aluminum_block"]);
	event.add("chisel:metals/bronze", ["emendatusenigmatica:bronze_block"]);
	event.add("chisel:emerald", ["minecraft:emerald_block"]);
	event.add("chisel:redstone", ["minecraft:redstone_block"]);
	event.add("chisel:charcoal", ["thermal:charcoal_block"]);
	event.add("chisel:marble", ["projectred-exploration:marble"]);
	event.add("chisel:basalt", ["projectred-exploration:basalt"]);

	event.add("ftbees:nether_flowers", [
		"minecraft:crimson_fungus",
		"minecraft:warped_fungus",
		"minecraft:nether_wart",
		"minecraft:crimson_roots",
		"minecraft:warped_roots",
		"minecraft:nether_sprouts",
		"minecraft:weeping_vines",
		"minecraft:twisting_vines",
	]);

	event.add('forge:ores/xen', 'xencraft:xen_ore');
	event.add('forge:ores', '#forge:ores/xen');
});
