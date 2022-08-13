function resourceHoneyRecipes(event, resource, centrifugeOptions, honeyOptions) {
	const fragment = Ingredient.of(`#bloodmagic:fragments/${resource}`).first;

	const comb = centrifugeOptions.combItem || `resourcefulbees:${centrifugeOptions.comb || resource}_honeycomb`;
	const combBlock = `${comb}_block`;

	const defaultFluid = `resourcefulbees:${honeyOptions.name || centrifugeOptions.comb || resource}_honey`;
	const honey = honeyOptions.custom || {
		fluid: defaultFluid,
		bottle: `${defaultFluid}_bottle`,
		block: `${defaultFluid}_block`,
	};

	let f = centrifugeOptions.fragment;
	let centrifugeResults = [
		fragment.withChance(f[0] || 1).withCount(f[1] || 1),
		Item.of(centrifugeOptions.extraOut || Item.of("resourcefulbees:wax").withChance(0.25)),
	];

	const fluid = {
		fluid: honey.fluid,
		amount: 250,
		chance: honeyOptions.honeyChance || 1,
	};

	// first without bottles
	rbMultiCentrifuge(event, comb, combBlock, centrifugeResults.concat([fluid]), {
		time: centrifugeOptions.time,
		noBottleInput: true,
		id: `ftbees:autogen/honeycombs/${resource}_no_bottle`,
	});

	centrifugeResults.push(Item.of(honey.bottle).withChance(fluid.chance));

	// then with bottles
	rbMultiCentrifuge(event, comb, combBlock, centrifugeResults, {
		time: centrifugeOptions.time,
		noBottleInput: false,
		id: `ftbees:resources/combs/${resource}`,
	});

	// separating the resourceful honey may yield extra fragments
	if (honeyOptions.extra) {
		event.recipes
				.ftbicSeparating(
						Utils.listOrSelf(honeyOptions.extra).map((x) => fragment.withChance(x[0] || 1).withCount(x[1] || 1)),
						Ingredient.of(honey.block)
				)
				.id(`ftbees:resources/honey/${resource}`);
	}
}

function rbMultiCentrifuge(event, comb, combBlock, results, options) {
	// first the recipe for a single comb
	let json = {
		ingredient: Ingredient.of(comb).toJson(),
		results: results.map((r) => Utils.mapOf(wrapItemJson(r))),
		time: options.time ? options.time : 200,
		noBottleInput: options.noBottleInput,
	};

	const r1 = event.recipes.resourcefulbeesCentrifuge(json);

	const id = options.id || r1.getOrCreateId();
	r1.id(options.id || r1.getOrCreateId());

	//console.info(r1.getOrCreateId());
	//console.info(r1.json);

	// now the recipe for the comb block
	json.ingredient = Ingredient.of(combBlock).toJson();
	json.multiblock = true;
	json.time *= 8; // a little faster than x9 since it's multiblock only
	json.results = json.results.map((r) => {
		if (r.count) r.count *= 9;
		if (r.amount) r.amount *= 9;
		return r;
	});

	const r2 = event.recipes.resourcefulbeesCentrifuge(json);
	r2.id(`${options.id || r2.getOrCreateId()}_compressed`);

	//console.info(r2.getOrCreateId());
	//console.info(r2.json);

	function wrapItemJson(r) {
		if (typeof r.toResultJson === "function") return r.toResultJson();
		return r;
	}
}
