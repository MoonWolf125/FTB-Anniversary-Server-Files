onEvent("item.registry", (event) => {
	["iron", "gold"].forEach((ore) => {
		event.create(`${ore}_fragment`).tag(`bloodmagic:fragments/${ore}`);
	});

	event.create("crystal_shard").displayName("Crystal Shard");
	event.create("ball_of_yarn").displayName("Ball of Yarn");
	event.create("tree_pollen").displayName("Tree Pollen");
	event
			.create("mushroom_stew_bottle")
			.displayName("Mushroom Stew in a Bottle")
			.tooltip(Text.of("The all-time classic in convenient bottle form!").color(0xcc9978))
			.maxStackSize(16)
			.food((food) =>
					food
							.hunger(6)
							.saturation(0.6)
							.alwaysEdible()
							.eaten((event) => event.player.give(`glass_bottle`))
			);

	const siabEvents = [
		(player) => player.setOnFire(5),
		(player) => {
			player.setStatusMessage(Text.of("You find a ball of yarn in your pocket!"));
			player.give("kubejs:ball_of_yarn");
		},
		(player) => {
			const effects = player.potionEffects;
			player.setStatusMessage(Text.of("Don't jump!"));
			effects.add("minecraft:speed", 400, 40);
			effects.add("minecraft:jump_boost", 400, 20);
			effects.add("minecraft:slow_falling", 200, 1);
		},
		(player) => {
			player.setStatusMessage(Text.of("How would you feel about §llosing your head§r..."));
			player.runCommandSilent(
					`/summon minecraft:item ~ ~1 ~ {Item:{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:"${player}"}}}`
			);
		},
		// FIXME: addMotion seems to be broken somehow?
		(player) => player.addMotion(Math.random() * 4 - 2, Math.random(), Math.random() * 4 - 2),
		(player) => {
			const block = player.block;
			if (block == "minecraft:air") {
				player.setStatusMessage(Text.of("Hope you know how to swim!"));
				block.set("minecraft:water");
			}
		},
		(player) => {
			const block = player.block;
			if (block == "minecraft:air") {
				player.setStatusMessage(Text.of("The floor is lava!"));
				block.set("minecraft:lava");
			}
		},
		(player) => player.setRotation(Math.random() * 360 - 180, Math.random() * 360 - 180),
		(player) => {
			player.addMotion(0, 2, 0);
			player.world
					.createExplosion(player.x, player.y, player.z)
					.causesFire(true)
					.exploder(player)
					.damagesTerrain(true)
					.strength(3)
					.explode();
		},
		(player) => {
			const effects = player.potionEffects;
			effects.add("minecraft:blindness", 200, 1);
			effects.add("minecraft:nausea", 200, 1);
		},
		(player) => {
			player.setStatusMessage(Text.of("You feel... §8magnetic§r!"));
			player.world
					.getEntitiesWithin(
							AABB.of(player.x - 10, player.y - 5, player.z - 10, player.x + 10, player.y + 5, player.z + 10)
					)
					.forEach((entity) => {
						entity.x = player.x + (Math.random() - 0.5);
						entity.y = player.y + Math.random() * 2;
						entity.z = player.z + (Math.random() - 0.5);
						entity.addMotion(Math.random() - 0.5, 0, Math.random() - 0.5);
					});
		},
		(player) => player.world.spawnLightning(player.x, player.y, player.z, Math.random() > 0.5, player),
		(player) => {
			player.setMotion(0, 4, 0);
			player.potionEffects.add("minecraft:resistance", 100, 10);
		},
		(player) => {
			player.setStatusMessage(Text.of("You feel... §eenlightened§r!"));
			player.world
					.getEntitiesWithin(
							AABB.of(player.x - 10, player.y - 5, player.z - 10, player.x + 10, player.y + 5, player.z + 10)
					)
					.forEach((entity) => {
						if (entity.isLiving) {
							entity.potionEffects.add("minecraft:glowing", 400, 1);
						}
					});
		},
	];

	event
			.create("source_in_a_bottle")
			.displayName("Source in a Bottle")
			.tooltip(Text.of("Mmm, tastes like source berry...").color(0xdd7ee0))
			.maxStackSize(16)
			.food((food) =>
					food
							.hunger(4)
							.saturation(0.8)
							.alwaysEdible()
							.eaten((event) => {
								if (!event.player.data.siabHint) {
									event.player.tell(
											Text.of(
													"(This item is currently WIP! Have any wacky effects or things this should do to the player? Tell us on Discord!)"
											).color(0xdd7ee0)
									);
									event.player.data.siabHint = true;
								}
								event.player.give(`glass_bottle`);
								const e = Utils.randomOf(Utils.random, siabEvents);
								console.log("EVENT " + siabEvents.indexOf(e));
								e(event.player);
							})
			);
});
