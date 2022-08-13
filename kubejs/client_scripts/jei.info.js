onEvent("jei.information", event => {
	event.add([
		'myrtrees:latex',
		'myrtrees:rubberwood_log',
		'myrtrees:wooden_bucket',
		'myrtrees:treetap',
	], [
		'To get Latex, you must find a Rubberwood tree, attach a Wooden Bucket to the bottom block and a Tree Tap on the block above it.',
		'It will slowly drain Latex into the bucket, which you can right-click to get the Latex item out once you have 1000 mB of it.',
		'You can also use the logs, leaves and saplings in a Centrifuge to get Latex from leftovers after the tree has been completely drained.',
	])

	event.add([
		'ftbic:quarry',
		'ftbic:landmark',
	], [
		'You can increase Quarry\'s mining area by using Landmarks.',
		'Place one on the left of the Quarry, one on the right, and one directly behind it up to 60 blocks away.',
		'Right-click on a landmark to update Quarry\'s size.',
	])

	event.add([
		'ftbic:pump',
		'ftbic:landmark',
	], [
		'You can increase Pump\'s mining area by using Landmarks.',
		'Place one on the left of the Pump, one on the right, and one directly behind it up to 60 blocks away.',
		'Right-click on a landmark to update Pump\'s size.',
	])

	event.add([
		'ftbic:antimatter',
		'ftbic:scrap',
		'ftbic:scrap_box',
	], [
		'You can create Antimatter in an Antimatter Constructor.',
		'You can increase the speed and decrease energy cost with Scrap and Scrap Boxes.',
	])

	event.add([
		'@tanky',
	], [
		'To construct a tank, place a Tank Controller in middle and then build a symmetrical cuboid out of Tank Wall or Tank Glass (you can use both in any combination) with air in the middle.',
		'Max height for tanks is 24, max radius is 9 (19 blocks wide).',
		'You can\'t mix multiple materials and if the tank isn\'t formed properly it will have red blocks.',
		'If you want to expand the tank you can break any block other than the controller.',
		'If you break the controller, you will lose fluid stored inside of it!',
	])

	event.add('ftbic:basic_generator', 'Uses Coal as fuel.')
	event.add('ftbic:geothermal_generator', 'Uses Lava as fuel. You can use pipes to fill the tank.')
	event.add('ftbic:wind_mill', 'Uses wind as power. The higher you place it, the more energy it will generate. The more blocks you have around the windmill the less efficient it will be. Has to be at least above sea level!')
	event.add([
		'ftbic:lv_solar_panel',
		'ftbic:mv_solar_panel',
		'ftbic:hv_solar_panel',
		'ftbic:ev_solar_panel',
	], 'Uses sunlight as power. Will not work in mining dimension!')

	event.add('retroexchange:transmutation_shard', '4% chance drop from any hostile entity killed by player. Is not affected by looting.')
});