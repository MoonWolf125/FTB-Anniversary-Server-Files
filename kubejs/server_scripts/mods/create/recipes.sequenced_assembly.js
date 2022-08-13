onEvent("recipes", (event) => {
	event.recipes.createSequencedAssembly([
		Item.of('create:precision_mechanism').withChance(120),
		Item.of('emendatusenigmatica:gold_plate').withChance(8),
		Item.of('create:andesite_alloy').withChance(8),
		Item.of('create:cogwheel').withChance(5),
		Item.of('create:shaft').withChance(2),
		Item.of('emendatusenigmatica:gold_dust').withChance(2),
		Item.of('minecraft:gold_nugget').withChance(2),
		'minecraft:iron_ingot',
		'minecraft:clock'
	], '#forge:plates/gold', [
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'])
	]).transitionalItem('create:incomplete_precision_mechanism').loops(5)
});
