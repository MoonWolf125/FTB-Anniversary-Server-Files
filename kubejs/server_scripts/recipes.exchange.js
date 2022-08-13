// priority: 99
onEvent("recipes", (event) => {
	event.remove({output: 'retroexchange:transmutation_stone'})
	event.shaped("retroexchange:transmutation_stone", [
		'SSS',
		'SGS',
		'SSS'
	], {
		S: 'retroexchange:transmutation_shard',
		G: 'ars_nouveau:mythical_clay'
	});

	let transmutationStone = Item.of('retroexchange:transmutation_stone').ignoreNBT()

	// Regular back and forth recipe
	let r = (count, fromI, fromR, toI, toR) => {
		event.shapeless(toR, [transmutationStone, Ingredient.of(fromI, count)]).damageIngredient(transmutationStone);
		event.shapeless(Item.of(fromR, count), [transmutationStone, toI]).damageIngredient(transmutationStone);
	}

	// Chain recipe
	let rc = (chain) => {
		for (let i = 0; i < chain.length - 1; i++) {
			event.shapeless(chain[i + 1][1], [transmutationStone, chain[i][0]]).damageIngredient(transmutationStone);
		}
	}

	r(4, '#forge:cobblestone', 'minecraft:cobblestone', 'minecraft:flint', 'minecraft:flint')
	r(4, 'minecraft:dirt', 'minecraft:dirt', '#forge:gravel', 'minecraft:gravel')
	r(4, '#forge:gravel', 'minecraft:gravel', '#forge:clay', 'minecraft:clay_ball')
	r(2, '#minecraft:logs', 'minecraft:oak_log', '#forge:obsidian', 'minecraft:obsidian')
	r(4, '#forge:obsidian', 'minecraft:obsidian', '#forge:ingots/iron', 'minecraft:iron_ingot')
	r(8, '#forge:ingots/iron', 'minecraft:iron_ingot', '#forge:ingots/gold', 'minecraft:gold_ingot')
	r(8, '#forge:ingots/lead', 'emendatusenigmatica:lead_ingot', '#forge:ingots/silver', 'emendatusenigmatica:silver_ingot')
	r(4, '#forge:ingots/gold', 'minecraft:gold_ingot', '#forge:gems/diamond', 'minecraft:diamond')
	r(2, '#forge:gems/diamond', 'minecraft:diamond', '#forge:gems/emerald', 'minecraft:emerald')
	r(4, '#forge:ingots/iron', 'minecraft:iron_ingot', '#forge:ender_pearls', 'minecraft:ender_pearl')

	rc([
		['minecraft:sand', 'minecraft:sand'],
		['minecraft:dirt', 'minecraft:dirt'],
		['#forge:cobblestone', 'minecraft:cobblestone'],
		['minecraft:grass_block', 'minecraft:grass_block'],
		['minecraft:sand', 'minecraft:sand'],
	])

	rc([
		['#forge:gems/ruby', 'emendatusenigmatica:ruby_gem'],
		['#forge:gems/sapphire', 'emendatusenigmatica:sapphire_gem'],
		['#forge:gems/peridot', 'emendatusenigmatica:peridot_gem'],
		['#forge:gems/ruby', 'emendatusenigmatica:ruby_gem'],
	])

	rc([
		['#forge:ingots/brass', 'emendatusenigmatica:brass_ingot'],
		['#forge:ingots/bronze', 'emendatusenigmatica:bronze_ingot'],
		['#forge:ingots/brass', 'emendatusenigmatica:brass_ingot'],
	])
});
