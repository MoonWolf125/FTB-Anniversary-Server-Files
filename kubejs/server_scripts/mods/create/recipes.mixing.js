onEvent("recipes", (event) => {
	event.recipes.createMixing('2x create:crushed_brass', ['create:crushed_copper_ore', 'create:crushed_zinc_ore']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:bronze_crushed', ['create:crushed_copper_ore', 'create:crushed_tin_ore']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:constantan_crushed', ['create:crushed_copper_ore', 'create:crushed_nickel_ore']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:electrum_crushed', ['create:crushed_iron_ore', 'create:crushed_gold_ore']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:signalum_crushed', ['create:crushed_copper_ore', 'create:crushed_silver_ore', '#forge:dusts/redstone']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:lumium_crushed', ['create:crushed_tin_ore', 'create:crushed_silver_ore', '#forge:dusts/glowstone']).heated()
	event.recipes.createMixing('2x emendatusenigmatica:enderium_crushed', ['create:crushed_lead_ore', ['emendatusenigmatica:ender_dust', '#forge:ender_pearls'], ['#forge:gems/diamond', '#forge:dusts/diamond']]).heated()
	event.recipes.createMixing('emendatusenigmatica:steel_crushed', ['create:crushed_iron_ore', '#forge:dusts/coal']).heated()
});
