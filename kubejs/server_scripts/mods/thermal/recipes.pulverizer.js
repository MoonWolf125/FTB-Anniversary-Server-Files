// priority: 99
onEvent("recipes", (event) => {
	event.recipes.thermal.pulverizer("emendatusenigmatica:coal_dust", "#minecraft:coals");
	event.recipes.thermal.pulverizer("emendatusenigmatica:aluminum_dust", "#forge:ingots/aluminum");
	event.recipes.thermal.pulverizer("emendatusenigmatica:uranium_dust", "#forge:ingots/uranium");
	event.recipes.thermal.pulverizer("emendatusenigmatica:coke_dust", "#forge:coal_coke");
	event.recipes.thermal.pulverizer("emendatusenigmatica:steel_dust", "#forge:ingots/steel");
});
