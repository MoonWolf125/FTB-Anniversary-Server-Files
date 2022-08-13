onEvent("recipes", (event) => {
	let add = (out, pattern) => {
		event.shaped(out, pattern, {A: "ftbic:antimatter"}).noMirror();
	};

	add("20x emendatusenigmatica:coal_chunk", ["  A", "A  ", "  A"]);
	add("5x emendatusenigmatica:copper_chunk", ["  A", "A A"]);
	add("5x emendatusenigmatica:tin_chunk", ["A A", "  A"]);
	add("2x emendatusenigmatica:iron_chunk", ["A A", " A ", "A A"]);
	add("2x emendatusenigmatica:gold_chunk", [" A ", "AAA", " A "]);
	add("9x emendatusenigmatica:lapis_chunk", ["A ", "A ", "AA"]);
	add("24x emendatusenigmatica:redstone_chunk", [" A ", "AAA"]);
	add("1x emendatusenigmatica:diamond_chunk", ["AAA", "AAA", "AAA"]);
	add("1x emendatusenigmatica:emerald_chunk", ["AAA", "A A", "AAA"]);
	add("1x emendatusenigmatica:iridium_chunk", ["AAA", " A ", "AAA"]);
	add("48x minecraft:clay_ball", ["AA", "A ", "AA"]);
	add("8x minecraft:glowstone", [" A ", "A A", "AAA"]);
	add("16x minecraft:grass_block", ["A", "A"]);
	add("24x minecraft:mycelium", ["A A", "AAA"]);
	add("16x minecraft:netherrack", ["  A", " A ", "A  "]);
	add("12x minecraft:obsidian", ["A A", "A A"]);
	add("12x minecraft:white_wool", ["A A", "   ", " A "]);
	add("21x myrtrees:latex", ["A A", "   ", "A A"]);
});
