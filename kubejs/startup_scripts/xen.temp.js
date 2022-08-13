onEvent('item.registry', event => {
	event.create("xencraft:xen_gem").displayName('Xen Gem')
});

onEvent('block.registry', event => {
	let ore = event.create('xencraft:xen_ore').displayName('Xen Ore').material('stone').hardness(5).resistance(6).requiresTool(true)

	ore.lootTable = loot => loot.addPool(pool => {
		pool.survivesExplosion();
		pool.addItem('xencraft:xen_gem', 1, [1, 3]);
	});

	event.create('xencraft:xenstone').displayName('Xenstone').material('stone').hardness(3).resistance(4)
})

onEvent('item.tooltip', event => {
	event.add('xencraft:xen_gem', [
		Text.red('WIP!'),
		Text.darkGray('This item will have uses in future pack updates.')
	])
})