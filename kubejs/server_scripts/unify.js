// priority: 100

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

onEvent("recipes", (event) => {
	const {smelting, blasting} = event.recipes.minecraft;

	let replaceIO = (i, o) => {
		event.replaceInput(i, o);
		event.replaceOutput(i, o);
	}

	let unifyMetal = function (
			name,
			hasOre,
			nuggetItem,
			ingotItem,
			blockItem,
			dustItem,
			gearItem,
			plateItem,
			rodsItem,
			crushedItem
	) {
		if (ingotItem !== "") event.replaceOutput(`#forge:ingots/${name}`, ingotItem);
		if (dustItem !== "") event.replaceOutput(`#forge:dusts/${name}`, dustItem);
		if (nuggetItem !== "") event.replaceOutput(`#forge:nuggets/${name}`, nuggetItem);
		if (blockItem !== "") event.replaceOutput(`#forge:storage_blocks/${name}`, blockItem);

		if (gearItem !== "") {
			event.remove({output: `#forge:gears/${name}`})

			event.shaped(gearItem, [' I ', 'INI', ' I '], {
				'I': `#forge:ingots/${name}`,
				'N': '#forge:nuggets/iron'
			})

			event.recipes.thermalPress(gearItem, [`4x #forge:ingots/${name}`, 'thermal:press_gear_die'])
			event.recipes.immersiveengineeringMetalPress(gearItem, `4x #forge:ingots/${name}`, 'immersiveengineering:mold_gear')
		}

		if (plateItem !== "") {
			event.remove({output: `#forge:plates/${name}`})

			event.shapeless(plateItem, [`#forge:ingots/${name}`, Item.of('emendatusenigmatica:enigmatic_hammer').ignoreNBT()])

			event.recipes.thermalPress(plateItem, [`#forge:ingots/${name}`])
			event.recipes.immersiveengineeringMetalPress(plateItem, `#forge:ingots/${name}`, 'immersiveengineering:mold_plate')
			event.recipes.createPressing(plateItem, [`#forge:ingots/${name}`])
		}

		if (rodsItem !== "") {
			event.remove({output: `#forge:rods/${name}`})

			event.shaped(Item.of(rodsItem, 2), ['I', 'I'], {
				'I': `#forge:ingots/${name}`
			})

			event.recipes.immersiveengineeringMetalPress(Item.of(rodsItem, 2), `#forge:ingots/${name}`, 'immersiveengineering:mold_rod')
		}

		event.remove({output: `#forge:ingots/${name}`, type: "minecraft:smelting"});
		event.remove({output: `#forge:ingots/${name}`, type: "minecraft:blasting"});

		if (ingotItem !== "") {
			let smeltInput = []

			if (dustItem !== "") {
				smeltInput.push(`#forge:dusts/${name}`)
			}

			if (hasOre) {
				smeltInput.push(`#forge:ores/${name}`)
			}

			if (crushedItem !== "") {
				smeltInput.push(crushedItem)
			}

			if (smeltInput.length > 0) {
				smelting(ingotItem, smeltInput).xp(0.7);
				blasting(ingotItem, smeltInput).xp(0.7);
			}
		}

		if (crushedItem !== "" && nuggetItem !== "") {
			event.remove({type: 'create:splashing', output: `#forge:nuggets/${name}`})
			event.recipes.createSplashing([Item.of(nuggetItem, 10), Item.of(nuggetItem, 5).withChance(0.5)], crushedItem)
		}

		if (hasOre && crushedItem !== "") {
			event.recipes.createCrushing([crushedItem, Item.of(crushedItem).withChance(0.75)], `#forge:ores/${name}`)
		}
	};

	unifyMetal(
			"iron",
			true,
			"minecraft:iron_nugget",
			"minecraft:iron_ingot",
			"minecraft:iron_block",
			"emendatusenigmatica:iron_dust",
			"emendatusenigmatica:iron_gear",
			"emendatusenigmatica:iron_plate",
			"emendatusenigmatica:iron_rod",
			"create:crushed_iron_ore"
	);

	event.remove({id: "immersiveengineering:crafting/stick_iron"});

	unifyMetal(
			"gold",
			true,
			"minecraft:gold_nugget",
			"minecraft:gold_ingot",
			"minecraft:gold_block",
			"emendatusenigmatica:gold_dust",
			"emendatusenigmatica:gold_gear",
			"emendatusenigmatica:gold_plate",
			"emendatusenigmatica:gold_rod",
			"create:crushed_gold_ore"
	);

	unifyMetal(
			"aluminum",
			true,
			"emendatusenigmatica:aluminum_nugget",
			"emendatusenigmatica:aluminum_ingot",
			"emendatusenigmatica:aluminum_block",
			"emendatusenigmatica:aluminum_dust",
			"emendatusenigmatica:aluminum_gear",
			"emendatusenigmatica:aluminum_plate",
			"emendatusenigmatica:aluminum_rod",
			"create:crushed_aluminum_ore"
	);

	event.replaceInput("zycraft:aluminium", "#forge:ingots/aluminum");
	event.remove({id: "immersiveengineering:crafting/stick_aluminum"});

	unifyMetal(
			"copper",
			true,
			"emendatusenigmatica:copper_nugget",
			"emendatusenigmatica:copper_ingot",
			"emendatusenigmatica:copper_block",
			"emendatusenigmatica:copper_dust",
			"emendatusenigmatica:copper_gear",
			"emendatusenigmatica:copper_plate",
			"emendatusenigmatica:copper_rod",
			"create:crushed_copper_ore"
	);

	event.remove({id: "immersiveengineering:crafting/storage_copper_to_slab"});

	unifyMetal(
			"tin",
			true,
			"emendatusenigmatica:tin_nugget",
			"emendatusenigmatica:tin_ingot",
			"emendatusenigmatica:tin_block",
			"emendatusenigmatica:tin_dust",
			"emendatusenigmatica:tin_gear",
			"emendatusenigmatica:tin_plate",
			"emendatusenigmatica:tin_rod",
			"create:crushed_tin_ore"
	);

	unifyMetal(
			"silver",
			true,
			"emendatusenigmatica:silver_nugget",
			"emendatusenigmatica:silver_ingot",
			"emendatusenigmatica:silver_block",
			"emendatusenigmatica:silver_dust",
			"emendatusenigmatica:silver_gear",
			"emendatusenigmatica:silver_plate",
			"emendatusenigmatica:silver_rod",
			"create:crushed_silver_ore"
	);

	event.remove({id: "immersiveengineering:crafting/storage_silver_to_slab"});

	unifyMetal(
			"lead",
			true,
			"emendatusenigmatica:lead_nugget",
			"emendatusenigmatica:lead_ingot",
			"emendatusenigmatica:lead_block",
			"emendatusenigmatica:lead_dust",
			"emendatusenigmatica:lead_gear",
			"emendatusenigmatica:lead_plate",
			"emendatusenigmatica:lead_rod",
			"create:crushed_lead_ore"
	);

	event.remove({id: "immersiveengineering:crafting/storage_lead_to_slab"});

	unifyMetal(
			"nickel",
			true,
			"emendatusenigmatica:nickel_nugget",
			"emendatusenigmatica:nickel_ingot",
			"emendatusenigmatica:nickel_block",
			"emendatusenigmatica:nickel_dust",
			"emendatusenigmatica:nickel_gear",
			"emendatusenigmatica:nickel_plate",
			"emendatusenigmatica:nickel_rod",
			"create:crushed_nickel_ore"
	);

	event.remove({id: "immersiveengineering:crafting/storage_nickel_to_slab"});

	unifyMetal(
			"uranium",
			true,
			"emendatusenigmatica:uranium_nugget",
			"emendatusenigmatica:uranium_ingot",
			"emendatusenigmatica:uranium_block",
			"emendatusenigmatica:uranium_dust",
			"emendatusenigmatica:uranium_gear",
			"emendatusenigmatica:uranium_plate",
			"emendatusenigmatica:uranium_rod",
			"create:crushed_uranium_ore"
	);

	event.remove({id: "immersiveengineering:crafting/storage_uranium_to_slab"});

	unifyMetal(
			"bronze",
			false,
			"emendatusenigmatica:bronze_nugget",
			"emendatusenigmatica:bronze_ingot",
			"emendatusenigmatica:bronze_block",
			"emendatusenigmatica:bronze_dust",
			"emendatusenigmatica:bronze_gear",
			"emendatusenigmatica:bronze_plate",
			"emendatusenigmatica:bronze_rod",
			"emendatusenigmatica:bronze_crushed"
	);

	unifyMetal(
			"constantan",
			false,
			"emendatusenigmatica:constantan_nugget",
			"emendatusenigmatica:constantan_ingot",
			"emendatusenigmatica:constantan_block",
			"emendatusenigmatica:constantan_dust",
			"emendatusenigmatica:constantan_gear",
			"emendatusenigmatica:constantan_plate",
			"emendatusenigmatica:constantan_rod",
			"emendatusenigmatica:constantan_crushed"
	);

	event.remove({id: "immersiveengineering:crafting/storage_constantan_to_slab"});

	unifyMetal(
			"electrum",
			false,
			"emendatusenigmatica:electrum_nugget",
			"emendatusenigmatica:electrum_ingot",
			"emendatusenigmatica:electrum_block",
			"emendatusenigmatica:electrum_dust",
			"emendatusenigmatica:electrum_gear",
			"emendatusenigmatica:electrum_plate",
			"emendatusenigmatica:electrum_rod",
			"emendatusenigmatica:electrum_crushed"
	);

	event.remove({id: "immersiveengineering:crafting/storage_electrum_to_slab"});

	unifyMetal(
			"steel",
			false,
			"emendatusenigmatica:steel_nugget",
			"emendatusenigmatica:steel_ingot",
			"emendatusenigmatica:steel_block",
			"emendatusenigmatica:steel_dust",
			"emendatusenigmatica:steel_gear",
			"emendatusenigmatica:steel_plate",
			"emendatusenigmatica:steel_rod",
			"emendatusenigmatica:steel_crushed"
	);

	event.remove({id: "immersiveengineering:crafting/storage_steel_to_slab"});
	event.remove({id: "immersiveengineering:crafting/stick_steel"});

	unifyMetal(
			"invar",
			false,
			"emendatusenigmatica:invar_nugget",
			"emendatusenigmatica:invar_ingot",
			"emendatusenigmatica:invar_block",
			"emendatusenigmatica:invar_dust",
			"emendatusenigmatica:invar_gear",
			"emendatusenigmatica:invar_plate",
			"emendatusenigmatica:invar_rod",
			"emendatusenigmatica:invar_crushed"
	);

	unifyMetal(
			"signalum",
			false,
			"emendatusenigmatica:signalum_nugget",
			"emendatusenigmatica:signalum_ingot",
			"emendatusenigmatica:signalum_block",
			"emendatusenigmatica:signalum_dust",
			"emendatusenigmatica:signalum_gear",
			"emendatusenigmatica:signalum_plate",
			"emendatusenigmatica:signalum_rod",
			"emendatusenigmatica:signalum_crushed"
	);

	unifyMetal(
			"lumium",
			false,
			"emendatusenigmatica:lumium_nugget",
			"emendatusenigmatica:lumium_ingot",
			"emendatusenigmatica:lumium_block",
			"emendatusenigmatica:lumium_dust",
			"emendatusenigmatica:lumium_gear",
			"emendatusenigmatica:lumium_plate",
			"emendatusenigmatica:lumium_rod",
			"emendatusenigmatica:lumium_crushed"
	);

	unifyMetal(
			"enderium",
			false,
			"emendatusenigmatica:enderium_nugget",
			"emendatusenigmatica:enderium_ingot",
			"emendatusenigmatica:enderium_block",
			"emendatusenigmatica:enderium_dust",
			"emendatusenigmatica:enderium_gear",
			"emendatusenigmatica:enderium_plate",
			"emendatusenigmatica:enderium_rod",
			'emendatusenigmatica:enderium_crushed'
	);

	unifyMetal(
			"zinc",
			true,
			"emendatusenigmatica:zinc_nugget",
			"emendatusenigmatica:zinc_ingot",
			"emendatusenigmatica:zinc_block",
			"emendatusenigmatica:zinc_dust",
			"emendatusenigmatica:zinc_gear",
			"emendatusenigmatica:zinc_plate",
			"emendatusenigmatica:zinc_rod",
			"create:crushed_zinc_ore"
	);

	unifyMetal(
			"brass",
			false,
			"emendatusenigmatica:brass_nugget",
			"emendatusenigmatica:brass_ingot",
			"emendatusenigmatica:brass_block",
			"emendatusenigmatica:brass_dust",
			"emendatusenigmatica:brass_gear",
			"emendatusenigmatica:brass_plate",
			"emendatusenigmatica:brass_rod",
			"create:crushed_brass"
	);

	unifyMetal(
			"iridium",
			true,
			"emendatusenigmatica:iridium_nugget",
			"emendatusenigmatica:iridium_ingot",
			"emendatusenigmatica:iridium_block",
			"emendatusenigmatica:iridium_dust",
			"emendatusenigmatica:iridium_gear",
			"emendatusenigmatica:iridium_plate",
			"emendatusenigmatica:iridium_rod",
			"emendatusenigmatica:iridium_crushed"
	);

	event.replaceInput("#forge:storage_blocks/apatite", "#forge:storage_blocks/apatite");
	event.replaceInput("#forge:gems/apatite", "#forge:gems/apatite");
	event.replaceInput("#forge:dusts/apatite", "#forge:dusts/apatite");

	event.replaceOutput("#forge:storage_blocks/apatite", "emendatusenigmatica:apatite_block");
	event.replaceOutput("#forge:gems/apatite", "emendatusenigmatica:apatite_gem");
	event.replaceOutput("#forge:dusts/apatite", "emendatusenigmatica:apatite_dust");

	event.replaceInput("#forge:storage_blocks/sulfur", "#forge:storage_blocks/sulfur");
	event.replaceInput("#forge:gems/sulfur", "#forge:gems/sulfur");
	event.replaceInput("#forge:dusts/sulfur", "#forge:dusts/sulfur");

	event.replaceOutput("#forge:storage_blocks/sulfur", "emendatusenigmatica:sulfur_block");
	event.replaceOutput("#forge:gems/sulfur", "emendatusenigmatica:sulfur_gem");
	event.replaceOutput("#forge:dusts/sulfur", "emendatusenigmatica:sulfur_dust");

	event.replaceInput("#forge:storage_blocks/cinnabar", "#forge:storage_blocks/cinnabar");
	event.replaceInput("#forge:gems/cinnabar", "#forge:gems/cinnabar");
	event.replaceInput("#forge:dusts/cinnabar", "#forge:dusts/cinnabar");

	event.replaceOutput("#forge:storage_blocks/cinnabar", "emendatusenigmatica:cinnabar_block");
	event.replaceOutput("#forge:gems/cinnabar", "emendatusenigmatica:cinnabar_gem");
	event.replaceOutput("#forge:dusts/cinnabar", "emendatusenigmatica:cinnabar_dust");

	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/apatite",
			"emendatusenigmatica:apatite_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/aluminum",
			"emendatusenigmatica:aluminum_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/copper",
			"emendatusenigmatica:copper_ore"
	);
	event.replaceOutput({not: {type: "minecraft:stonecutting"}}, "#forge:ores/tin", "emendatusenigmatica:tin_ore");
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/silver",
			"emendatusenigmatica:silver_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/lead",
			"emendatusenigmatica:lead_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/uranium",
			"emendatusenigmatica:uranium_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/sulfur",
			"emendatusenigmatica:sulfur_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/nickel",
			"emendatusenigmatica:nickel_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/cinnabar",
			"emendatusenigmatica:cinnabar_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/iron",
			"emendatusenigmatica:iron_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/gold",
			"emendatusenigmatica:gold_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/coal",
			"emendatusenigmatica:coal_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/lapis",
			"emendatusenigmatica:lapis_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/redstone",
			"emendatusenigmatica:redstone_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/diamond",
			"emendatusenigmatica:diamond_ore"
	);
	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/emerald",
			"emendatusenigmatica:emerald_ore"
	);

	event.replaceOutput(
			{not: {type: "minecraft:stonecutting"}},
			"#forge:ores/quartz",
			"emendatusenigmatica:quartz_netherrack_ore"
	);

	event.replaceInput("minecraft:iron_ore", "#forge:ores/iron");
	event.replaceInput("minecraft:gold_ore", "#forge:ores/gold");
	event.replaceInput("minecraft:coal_ore", "#forge:ores/coal");
	event.replaceInput("minecraft:lapis_ore", "#forge:ores/lapis");
	event.replaceInput("minecraft:redstone_ore", "#forge:ores/redstone");
	event.replaceInput("minecraft:diamond_ore", "#forge:ores/diamond");
	event.replaceInput("minecraft:emerald_ore", "#forge:ores/emerald");
	event.replaceInput("thermal:sulfur_ore", "#forge:ores/sulfur");

	event.replaceInput("#forge:dusts/lapis", "#forge:dusts/lapis");
	event.replaceInput("#forge:gears/lapis", "#forge:gears/lapis");

	event.replaceOutput("#forge:dusts/lapis", "emendatusenigmatica:lapis_dust");
	event.replaceOutput("#forge:gears/lapis", "emendatusenigmatica:lapis_gear");

	event.replaceInput("#forge:dusts/diamond", "#forge:dusts/diamond");
	event.replaceInput("#forge:gears/diamond", "#forge:gears/diamond");

	event.replaceOutput("#forge:dusts/diamond", "emendatusenigmatica:diamond_dust");
	event.replaceOutput("#forge:gears/diamond", "emendatusenigmatica:diamond_gear");

	event.replaceInput("#forge:dusts/emerald", "#forge:dusts/emerald");
	event.replaceInput("#forge:gears/emerald", "#forge:gears/emerald");

	event.replaceOutput("#forge:dusts/emerald", "emendatusenigmatica:emerald_dust");
	event.replaceOutput("#forge:gears/emerald", "emendatusenigmatica:emerald_gear");

	event.replaceInput("#forge:dusts/quartz", "#forge:dusts/quartz");
	event.replaceInput("#forge:gears/quartz", "#forge:gears/quartz");

	event.replaceOutput("#forge:dusts/quartz", "emendatusenigmatica:quartz_dust");
	event.replaceOutput("#forge:gears/quartz", "emendatusenigmatica:quartz_gear");

	event.replaceInput("#refinedstorage:silicon", "#forge:silicon");
	event.replaceInput("#forge:silicon", "#forge:silicon");
	event.replaceOutput("#forge:silicon", "emendatusenigmatica:silicon_gem");

	event.replaceInput("#forge:dusts/coal_coke", "#forge:dusts/coal_coke");
	event.replaceInput("#forge:coal_coke", "#forge:coal_coke");
	event.replaceInput("#forge:storage_blocks/coal_coke", "#forge:storage_blocks/coal_coke");

	event.replaceOutput("#forge:dusts/coal_coke", "emendatusenigmatica:coke_dust");
	event.replaceOutput("#forge:coal_coke", "emendatusenigmatica:coke_gem");
	event.replaceOutput("#forge:storage_blocks/coal_coke", "emendatusenigmatica:coke_block");
	event.remove({id: "immersiveengineering:crafting/storage_coke_to_slab"});

	event.replaceInput("#forge:dusts/ender", "#forge:dusts/ender");
	event.replaceInput("thermal:ender_pearl_dust", "#forge:dusts/ender");
	event.replaceOutput("#forge:dusts/ender", "emendatusenigmatica:ender_dust");

	event.replaceInput("#forge:dusts/wood", "#forge:dusts/wood");
	event.replaceOutput("#forge:dusts/wood", "emendatusenigmatica:wood_dust");

	event.replaceInput("#forge:dusts/sapphire", "#forge:dusts/sapphire");
	event.replaceOutput("#forge:dusts/sapphire", "emendatusenigmatica:sapphire_dust");
	event.replaceInput("#forge:storage_blocks/sapphire", "#forge:storage_blocks/sapphire");
	event.replaceOutput("#forge:storage_blocks/sapphire", "emendatusenigmatica:sapphire_block");
	event.replaceInput("#forge:gems/sapphire", "#forge:gems/sapphire");
	event.replaceOutput("#forge:gems/sapphire", "emendatusenigmatica:sapphire_gem");
	event.replaceOutput("thermal:sapphire", "emendatusenigmatica:sapphire_gem");
	event.replaceInput("#forge:ores/sapphire", "#forge:ores/sapphire");
	event.replaceOutput("#forge:ores/sapphire", "emendatusenigmatica:sapphire_ore");

	event.replaceInput("#forge:dusts/ruby", "#forge:dusts/ruby");
	event.replaceOutput("#forge:dusts/ruby", "emendatusenigmatica:ruby_dust");
	event.replaceInput("#forge:storage_blocks/ruby", "#forge:storage_blocks/ruby");
	event.replaceOutput("#forge:storage_blocks/ruby", "emendatusenigmatica:ruby_block");
	event.replaceInput("#forge:gems/ruby", "#forge:gems/ruby");
	event.replaceOutput("#forge:gems/ruby", "emendatusenigmatica:ruby_gem");
	event.replaceOutput("thermal:ruby", "emendatusenigmatica:ruby_gem");
	event.replaceInput("#forge:ores/ruby", "#forge:ores/ruby");
	event.replaceOutput("#forge:ores/ruby", "emendatusenigmatica:ruby_ore");

	event.replaceInput("#forge:dusts/peridot", "#forge:dusts/peridot");
	event.replaceOutput("#forge:dusts/peridot", "emendatusenigmatica:peridot_dust");
	event.replaceInput("#forge:storage_blocks/peridot", "#forge:storage_blocks/peridot");
	event.replaceOutput("#forge:storage_blocks/peridot", "emendatusenigmatica:peridot_block");
	event.replaceInput("#forge:gems/peridot", "#forge:gems/peridot");
	event.replaceOutput("#forge:gems/peridot", "emendatusenigmatica:peridot_gem");
	event.replaceInput("#forge:ores/peridot", "#forge:ores/peridot");
	event.replaceOutput("#forge:ores/peridot", "emendatusenigmatica:peridot_ore");

	event.replaceInput("#forge:storage_blocks/mana", "#forge:storage_blocks/arcane");
	event.replaceOutput("#forge:storage_blocks/mana", "emendatusenigmatica:arcane_block");
	event.replaceOutput("#forge:gems/mana", "emendatusenigmatica:arcane_gem");
	event.replaceInput("#forge:ores/mana", "#forge:ores/arcane");
	event.replaceOutput("#forge:ores/mana", "emendatusenigmatica:arcane_ore");

	replaceIO("create:crushed_iron_ore", "emendatusenigmatica:iron_dust");
	replaceIO("create:crushed_gold_ore", "emendatusenigmatica:gold_dust");
	replaceIO("create:crushed_copper_ore", "emendatusenigmatica:copper_dust");
	replaceIO("create:crushed_zinc_ore", "emendatusenigmatica:zinc_dust");
	replaceIO("create:crushed_brass", "emendatusenigmatica:brass_dust");
	replaceIO("create:crushed_osmium_ore", "emendatusenigmatica:osmium_dust");
	replaceIO("create:crushed_silver_ore", "emendatusenigmatica:silver_dust");
	replaceIO("create:crushed_tin_ore", "emendatusenigmatica:tin_dust");
	replaceIO("create:crushed_lead_ore", "emendatusenigmatica:lead_dust");
	replaceIO("create:crushed_aluminum_ore", "emendatusenigmatica:aluminum_dust");
	replaceIO("create:crushed_uranium_ore", "emendatusenigmatica:uranium_dust");
	replaceIO("create:crushed_nickel_ore", "emendatusenigmatica:nickel_dust");

	event.remove({output: /emendatusenigmatica:.+_ore/})

	replaceIO('thermal:rubber', 'myrtrees:latex')
	replaceIO('thermal:cured_rubber', 'ftbic:rubber')

	event.remove({id: 'thermal:smelting/cured_rubber_from_smelting'})

	event.recipes.thermal.pulverizer('emendatusenigmatica:zinc_dust', '#forge:ingots/zinc')
});
