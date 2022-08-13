// priority: 99
onEvent("recipes", (event) => {
	event.shapeless("4x minecraft:clay_ball", ["#forge:storage_blocks/clay"]);

	event.remove({id: "minecraft:bread"});
	event.shapeless("minecraft:bread", ["#forge:crops/wheat", "#forge:crops/wheat", "#forge:crops/wheat"]);

	event.shapeless("minecraft:flint", ["#forge:gravel", "#forge:gravel", "#forge:gravel"]);

	event.shapeless("minecraft:wheat_seeds", ["#forge:crops/wheat"]);

	event.shapeless("4x emendatusenigmatica:brass_dust", ["#forge:dusts/copper", "#forge:dusts/copper", "#forge:dusts/copper", "#forge:dusts/zinc"]);
	event.shapeless("9x emendatusenigmatica:brass_ingot", ["#forge:storage_blocks/brass"]);
	event.shapeless("9x emendatusenigmatica:brass_nugget", ["#forge:ingots/brass"]);

	event.shapeless('thermal:tomato', ['farmersdelight:tomato']);
	event.shapeless('farmersdelight:tomato', ['thermal:tomato']);
});
