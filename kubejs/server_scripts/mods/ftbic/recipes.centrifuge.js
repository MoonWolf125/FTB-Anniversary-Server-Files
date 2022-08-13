onEvent("recipes", (event) => {
	event.recipes.ftbic.separating(['minecraft:redstone', Item.of('minecraft:quartz').withChance(0.1)], '#forge:dusts/electrotine')
});
