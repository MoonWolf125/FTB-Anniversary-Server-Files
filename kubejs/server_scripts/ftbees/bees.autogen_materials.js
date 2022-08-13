onEvent("recipes", (event) => {
	// TODO: balance these recipes more thoroughly!
	let materials = {
		apatite: {},
		cinnabar: {},
		sulfur: {
			comb: "sulphurous",
		},
		coal: {
			comb: "carbon",
		},
		aluminum: {},
		copper: {},
		iron: {},
		nickel: {},
		tin: {},
		gold: {
			comb: "golden",
			honey: "luxurious",
		},
		silver: {
			honey: "blessed",
		},
		lead: {
			honey: "poisonous",
		},
		uranium: {
			honey: "radioactive",
		},
		diamond: {},
		emerald: {},
		lapis: {},
		ruby: {},
		sapphire: {},
		peridot: {},
	};

	for (let mat in materials) {
		let options = materials[mat];
		autogenResource(mat, options);
	}

	function autogenResource(mat, options) {
		console.log(`--- Creating Recipes for Material: ${mat}`);

		resourceHoneyRecipes(
				event,
				mat,
				{
					comb: options.comb,
					fragment: options.fragment || [0.7, 1],
					time: options.time || 200,
				},
				{
					name: options.honey,
					honeyChance: 0.4,
					extra: options.extra || [
						[0.5, 3],
						[0.25, 2],
					],
				}
		);

		const c = 7;
		const pt = options.time / 2 || 100;

		event.recipes
				.ftbicCompressing(`#forge:chunks/${mat}`, `${c}x #bloodmagic:fragments/${mat}`)
				.processingTime(pt / 100.0)
				.id(`ftbees:autogen/compress/${mat}_ic`);

		event.recipes
				.thermalPress(`#forge:chunks/${mat}`, `${c}x #bloodmagic:fragments/${mat}`)
				.energy(pt * 80)
				.id(`ftbees:autogen/compress/${mat}_te`);
	}
});
