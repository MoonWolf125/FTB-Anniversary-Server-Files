// priority: 0
events.listen("jei.hide.items", function (event) {
	event.hide(
			/refinedstorage:(white|black|red|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green)/
	);
	event.hide("refinedstorage:creative_wireless_grid");
	event.hide("refinedstorage:creative_wireless_fluid_grid");
	event.hide("refinedstorage:creative_wireless_crafting_monitor");
});

onEvent("item.tooltip", (event) => {
	event.add("refinedstorage:grid", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:(?!.*(wireless)).*_grid/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_controller/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:controller", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_network_receiver/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:network_receiver", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_network_transmitter/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:network_transmitter", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_relay/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:relay", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_detector/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:detector", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_security_manager/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:security_manager", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_wireless_transmitter/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:wireless_transmitter", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_disk_manipulator/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:disk_manipulator", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_crafter/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:crafter", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:.+_crafter_manager/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:crafter_manager", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add(/refinedstorage:(?!.*(wireless)).*_crafting_monitor/, [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
	event.add("refinedstorage:crafting_monitor", [
		Text.yellow("Color can be changed through crafting or by right clicking it with dye."),
	]);
});
