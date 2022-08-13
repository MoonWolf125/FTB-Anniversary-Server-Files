// priority: 99
onEvent("recipes", (event) => {
	event.stonecutting('create:limestone', 'chisel:limestone/raw');
	event.stonecutting('chisel:limestone/raw', 'create:limestone');

	event.stonecutting('projectred-exploration:marble', 'chisel:marble/raw');
	event.stonecutting('chisel:marble/raw', 'projectred-exploration:marble');

	event.stonecutting('projectred-exploration:basalt', 'chisel:basalt/raw');
	event.stonecutting('chisel:basalt/raw', 'projectred-exploration:basalt');

	event.stonecutting('create:scoria', 'minecraft:soul_sand');
	event.stonecutting('create:gabbro', 'minecraft:granite');
	event.stonecutting('create:dolomite', 'minecraft:diorite');
});
