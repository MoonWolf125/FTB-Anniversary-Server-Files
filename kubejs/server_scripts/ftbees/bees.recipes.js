onEvent("recipes", (event) => {
	let shapes = [
		["PPP"], //                     -- the line
		["P", "P", "P"], //             -- the vertical line
		["P P", " P "], //              -- the down arrow
		[" P ", "P P"], //              -- the up arrow
		["P ", " P", "P "], //          -- the right arrow
		[" P", "P ", " P"], //          -- the left arrow
		["P  ", " P ", "  P"], //       -- the falling stairs
		["  P", " P ", "P  "], //       -- the rising stairs
		["P  ", "  P", "P  "], //       -- the long right arrow
		["  P", "P  ", "  P"], //       -- the long left arrow
		["PP", "P "], //                -- the top-left corner
		["PP", " P"], //                -- the top-right corner
		[" P", "PP"], //                -- the bottom-right corner
		["P ", "PP"], //                -- the bottom-left corner
		["P  ", "  P", "  P"], //       -- across to the right
		["  P", "  P", "P  "], //       -- across to the left
	];

	["oak", "spruce", "birch", "jungle", "acacia", "dark_oak"].forEach((wood, index) => {
		event
				.shaped(`8x minecraft:${wood}_log`, shapes[index], {
					P: "kubejs:tree_pollen",
				})
				.noMirror()
				.id(`ftbees:tree_pollen_to_wood/${wood}`);
	});

	Color.DYE.values().forEach((color) => {
		event
				.shaped(`8x #forge:dyes/${color}`, shapes[color.ordinal()], {
					P: "resourcefulbees:creative_honeycomb",
				})
				.noMirror()
				.id(`ftbees:creative_honeycomb_to_dye/${color}`);
	});

	// redstone, glowstone, electrotine
	["redstone", "glowstone", "electrotine"].forEach((dust) => {
		let comb = `resourcefulbees:${dust}_honeycomb`;
		event.recipes.ftbic
				.macerating(`16x #forge:dusts/${dust}`, comb)
				.id(`ftbees:dust_honeycomb/crushing/${dust}_ic`);
		event.recipes.thermal
				.pulverizer(`16x #forge:dusts/${dust}`, comb)
				.id(`ftbees:dust_honeycomb/crushing/${dust}_te`);
		event.recipes.immersiveengineering
				.crusher(`16x #forge:dusts/${dust}`, comb)
				.id(`ftbees:dust_honeycomb/crushing/${dust}_ie`);
	});

	event
			.shaped("4x prismarine_crystals", [" P ", "PPP", " P "], {
				P: "kubejs:crystal_shard",
			})
			.id(`ftbees:crystal_shards/prismarine_crystals`);

	event
			.shaped("8x prismarine_shard", ["P P", "   ", "P P"], {
				P: "kubejs:crystal_shard",
			})
			.id(`ftbees:crystal_shards/prismarine_shard`);

	event.shapeless("3x minecraft:string", "kubejs:ball_of_yarn").id(`ftbees:yarn_to_string/crafting`);
	event.recipes.ftbic
			.macerating("5x minecraft:string", "kubejs:ball_of_yarn")
			.id(`ftbees:yarn_to_string/crushing_ic`);
	event.recipes.thermal
			.pulverizer("5x minecraft:string", "kubejs:ball_of_yarn")
			.id(`ftbees:yarn_to_string/crushing_te`);
	event.recipes.immersiveengineering
			.crusher("5x minecraft:string", "kubejs:ball_of_yarn")
			.id(`ftbees:yarn_to_string/crushing_ie`);
});
