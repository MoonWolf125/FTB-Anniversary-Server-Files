onEvent("recipes", (event) => {
	//TODO: Balance chances on these!
	let resources = {
		catnip: {
			outputs: [Item.of("kubejs:ball_of_yarn"), Item.of("tropical_fish").withChance(0.5)],
			fluid: fluidOut("resourcefulbees:catnip_honey"),
			bottle: Item.of("resourcefulbees:catnip_honey_bottle").withChance(0.25),
		},
		aqueous: {
			outputs: [Item.of("prismarine_crystal").withChance(0.05)],
			fluid: fluidOut("minecraft:water", 0.75, 500),
		},
		igneous: {
			outputs: [Item.of("blaze_powder").withChance(0.1)],
			fluid: fluidOut("minecraft:lava", 0.25, 500),
		},
		ender: {
			outputs: [Item.of("ender_pearl"), Item.of("chorus_fruit").withChance(0.25)],
			bottle: Item.of("dragon_breath").chance(0.02),
		},
		earthen: {
			outputs: [Item.of("grass_block")],
			fluid: fluidOut("industrialforegoing:sludge", 0.2, 125),
		},
		rocky: {
			outputs: [Item.of("4x stone"), Item.of("mossy_cobblestone").withChance(0.4)],
			fluid: fluidOut("industrialforegoing:sludge", 0.4, 125),
		},
		wooden: {
			outputs: [
				Item.of("2x farmersdelight:tree_bark").withChance(0.8),
				Item.of("kubejs:tree_pollen").withChance(0.5),
			],
			fluid: fluidOut("thermal:resin", 0.25, 100),
		},
		mossy: {
			outputs: [Item.of("4x mossy_cobblestone")],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		sandy: {
			outputs: [Item.of("4x sand")],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		coarse: {
			outputs: [Item.of("3x flint")],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		beelanced: {
			outputs: [Item.of("4x clay_ball")],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		gravelly: {
			outputs: [Item.of("4x gravel"), Item.of("flint").withChance(0.3)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		primitive: {
			outputs: [Item.of("2x cobblestone").withChance(0.75), Item.of("4x stick").withChance(0.75)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		resourceful: {
			outputs: [Item.of("sugar_cane"), Item.of("resourcefulbees:wax_block").withChance(0.75)],
			fluid: fluidOut("resourcefulbees:honey", 0.5, 500),
			bottle: Item.of("honey_bottle").withChance(0.8),
		},
		obsidian: {
			outputs: [Item.of("obsidian").withChance(0.8), Item.of("crying_obsidian").withChance(0.2)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		rubbery: {
			outputs: [Item.of("ftbic:rubber")],
			fluid: fluidOut("thermal:latex"),
		},
		volcanic: {
			outputs: [Item.of("4x projectred-exploration:basalt")],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		silicon: {
			outputs: [
				Item.of("2x emendatusenigmatica:silicon_gem"),
				Item.of("emendatusenigmatica:silicon_gem").withChance(0.6),
			],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		quartz: {
			outputs: [Item.of("6x quartz").withChance(0.9), Item.of("emendatusenigmatica:silicon_gem").withChance(0.8)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		crystalline: {
			outputs: [
				Item.of("2x kubejs:crystal_shard").withChance(0.6),
				Item.of("kubejs:crystal_shard").withChance(0.4),
			],
			fluid: fluidOut("resourcefulbees:crystal_honey"),
			bottle: Item.of("resourcefulbees:crystal_honey_bottle").withChance(0.25),
		},
		silverfish: {
			outputs: [
				Item.of("4x infested_stone").withChance(0.8),
				Item.of("3x #forge:nuggets/silver").withChance(0.3),
			],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		funghal: {
			outputs: [Item.of("2x brown_mushroom").withChance(0.8), Item.of("2x red_mushroom").withChance(0.8)],
			bottle: Item.of("kubejs:mushroom_stew_bottle").withChance(0.4),
		},
		phantom: {
			outputs: [Item.of("phantom_membrane").withChance(0.55), Item.of("phantom_membrane").withChance(0.25)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		vexed: {
			outputs: [
				Item.of("2x #bloodmagic:fragments/emerald").withChance(0.3),
				Item.of("totem_of_undying").withChance(0.02),
			],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		piglin: {
			outputs: [Item.of("4x rotten_flesh").withChance(0.9), Item.of("3x #forge:nuggets/gold").withChance(0.4)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		ghastly: {
			outputs: [Item.of("4x gunpowder").withChance(0.8), Item.of("ghast_tear").withChance(0.3)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		charred: {
			outputs: [Item.of("4x coal").withChance(0.7), Item.of("wither_skeleton_skull").withChance(0.2)],
			fluid: fluidOut("resourcefulbees:honey"),
			bottle: Item.of("honey_bottle").withChance(0.25),
		},
		curious: {
			outputs: [Item.of("3x paper").withChance(0.75), Item.of("leather").withChance(0.5)],
			bottle: Item.of("experience_bottle").withChance(0.75),
		},
		enchanted: {
			outputs: [
				Item.of("ars_nouveau:experience_gem").withChance(0.6),
				Item.of("ars_nouveau:greater_experience_gem").withChance(0.4),
			],
			bottle: Item.of("experience_bottle").withChance(0.75),
		},
		industrious: {
			outputs: [
				Item.of("ftbic:industrial_grade_metal").withChance(0.3),
				Item.of("ftbic:industrial_grade_metal").withChance(0.15),
			],
			fluid: fluidOut("resourcefulbees:metallic_honey"),
			bottle: Item.of("resourcefulbees:metallic_honey_bottle").withChance(0.25),
		},
		source: {
			outputs: [
				Item.of("emendatusenigmatica:arcane_gem").withChance(0.8),
				Item.of("ars_nouveau:mana_bloom_crop").withChance(0.2),
			],
			bottle: Item.of("kubejs:source_in_a_bottle").withChance(0.4),
		},
	};

	for (let resource in resources) {
		let options = resources[resource];

		let comb = Item.of(`resourcefulbees:${resource}_honeycomb`);
		let combBlock = Item.of(`resourcefulbees:${resource}_honeycomb_block`);

		console.log(`--- Creating Recipes for ${comb}`);

		if (options.fluid) {
			rbMultiCentrifuge(event, comb, combBlock, expand(options.outputs).concat([options.fluid]), {
				time: options.time,
				noBottleInput: true,
				id: `ftbees:resources/combs/${resource}_no_bottle`,
			});
		}

		if (options.bottle) {
			rbMultiCentrifuge(event, comb, combBlock, expand(options.outputs).concat([options.bottle]), {
				time: options.time,
				noBottleInput: false,
				id: `ftbees:resources/combs/${resource}`,
			});
		}
	}

	// this is currently required because RB's JEI plugin breaks with empty input slots
	function expand(list) {
		return [list[0] || Item.of("sugar"), list[1] || Item.of("resourcefulbees:wax").withChance(0.25)];
	}

	function fluidOut(fluid, chance, amount) {
		return {
			fluid: fluid,
			chance: chance || 0.25,
			amount: amount || 250,
		};
	}
});
