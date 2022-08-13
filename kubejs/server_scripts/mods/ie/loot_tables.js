onEvent("chest.loot_tables", (event) => {
	event.addChest("immersiveengineering:engineers_house", (table) => {
		table.addPool((pool) => {
			pool.rolls = 4;
			pool.addItem("immersiveengineering:stick_treated", 20, [2, 8]);
			pool.addItem("emendatusenigmatica:iron_rod", 10, [1, 4]);
			pool.addItem("emendatusenigmatica:steel_rod", 6, [1, 4]);
			pool.addItem("emendatusenigmatica:aluminum_rod", 10, [1, 4]);
			pool.addItem("immersiveengineering:hemp_fabric", 10, [1, 3]);
			pool.addItem("emendatusenigmatica:coke_gem", 10, [1, 3]);
			pool.addItem("immersiveengineering:component_iron", 8, [1, 2]);
			pool.addItem("immersiveengineering:component_steel", 5);
			pool.addItem("minecraft:iron_ingot", 10, [1, 4]);
			pool.addItem("emendatusenigmatica:copper_ingot", 10, [1, 4]);
			pool.addItem("emendatusenigmatica:aluminum_ingot", 10, [1, 4]);
			pool.addItem("emendatusenigmatica:lead_nugget", 9, [1, 4]);
			pool.addItem("emendatusenigmatica:silver_nugget", 7, [1, 2]);
			pool.addItem("emendatusenigmatica:nickel_nugget", 7, [1, 2]);
			pool.addItem(Item.of("immersiveengineering:blueprint", '{blueprint:"bullet"}'), 4).addConditionalFunction(
					(cf) => {
						cf.randomChance(0.125);
						cf.addFunction({function: "immersiveengineering:secret_bluprintz"});
					}
			);
			pool.addItem(
					Item.of("immersiveengineering:blueprint", '{blueprint:"specialBullet"}'),
					4
			).addConditionalFunction((cf) => {
				cf.randomChance(0.125);
				cf.addFunction({function: "immersiveengineering:secret_bluprintz"});
			});
			pool.addItem(
					Item.of("immersiveengineering:blueprint", '{blueprint:"electrode"}'),
					4
			).addConditionalFunction((cf) => {
				cf.randomChance(0.125);
				cf.addFunction({function: "immersiveengineering:secret_bluprintz"});
			});
		});
	});
});
