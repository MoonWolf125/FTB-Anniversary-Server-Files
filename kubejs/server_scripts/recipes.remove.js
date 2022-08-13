// priority: 99
onEvent("recipes", (event) => {
	event.remove({output: /^emendatusenigmatica:(osmium|cobalt|certus_quartz|charged_certus_quartz|fluorite|bitumen|potassium_nitrate|dimensional|brass|fluix|cast_iron)_/});
	event.remove({output: /^emendatusenigmatica:.+_(andesite|granite|diorite|sand|gravel|blackstone|basalt|soul_soil|end_stone|gabbro|c_limestone|scoria|weathered_limestone|jasper|marble|slate|deepslate|mossy_stone|brimstone|subzero_ash|blue_netherrack|nylium_soul_soil|ether_stone|cryptic_stone|flavolite|sulphuric_rock|violecite|raw_marble)_ore$/});
	event.remove({id: /^immersiveengineering:crafting\/hammercrushing_/});
	event.remove({id: /^immersiveengineering:crafting\/plate_.+_hammering$/});
	event.remove({id: /^industrialforegoing:.+_gear$/});
	event.remove({id: /^thermal:parts\/.+_gear$/});
	event.remove({output: 'emendatusenigmatica:lapis_gear'});
	event.remove({output: 'emendatusenigmatica:quartz_gear'});
	event.remove({output: 'emendatusenigmatica:uranium_gear'});
	event.remove({output: 'emendatusenigmatica:enderium_gear'});
	event.remove({id: 'thermal:machine/press/press_enderium_ingot_to_gear'});
	event.remove({id: 'ftbic:rolling/generated/gear_from_ingots/emendatusenigmatica/enderium_gear'});
	event.remove({id: 'chisel:charcoal/raw'});
	event.remove({id: 'chisel:futura/screen_metallic'});
	event.remove({id: 'chisel:futura/screen_cyan'});
	event.remove({id: 'chisel:futura/uber_wavy'});
	event.remove({id: 'chisel:futura/controller'});
	event.remove({id: 'chisel:futura/controller_purple'});
	event.remove({id: 'chisel:futura/wavy'});
	event.remove({output: 'emendatusenigmatica:gold_rod'});
	event.remove({output: 'emendatusenigmatica:diamond_rod'});
	event.remove({output: 'emendatusenigmatica:emerald_rod'});
	event.remove({output: 'emendatusenigmatica:lapis_rod'});
	event.remove({output: 'emendatusenigmatica:copper_rod'});
	event.remove({output: 'emendatusenigmatica:silver_rod'});
	event.remove({output: 'emendatusenigmatica:nickel_rod'});
	event.remove({output: 'emendatusenigmatica:uranium_rod'});
	event.remove({output: 'emendatusenigmatica:tin_rod'});
	event.remove({output: 'emendatusenigmatica:bronze_rod'});
	event.remove({output: 'emendatusenigmatica:constantan_rod'});
	event.remove({output: 'emendatusenigmatica:electrum_rod'});
	event.remove({output: 'emendatusenigmatica:lumium_rod'});
	event.remove({output: 'emendatusenigmatica:lapis_plate'});
	event.remove({output: 'emendatusenigmatica:uranium_plate'});
	event.remove({output: 'emendatusenigmatica:enderium_plate'});
	event.remove({output: 'emendatusenigmatica:lead_rod'});
	event.remove({output: 'emendatusenigmatica:invar_rod'});
	event.remove({output: 'emendatusenigmatica:signalum_rod'});
	event.remove({id: 'immersiveengineering:crafting/treated_wood_horizontal'});
	event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_logs'});
	event.remove({id: 'thermal:machine/pyrolyzer/pyrolyzer_coal'});
	event.remove({id: 'thermal:fuels/compression/compression_creosote'});
	event.remove({input: /^emendatusenigmatica:.+_cluster/});
	event.remove({output: /^emendatusenigmatica:.+_cluster/});
	event.remove({id: 'powersuits:modded/weapon/plasma_cannon'});
	event.remove({output: 'tesseract:tesseract'});
	event.remove({type: 'create:crushing', input: '#forge:ores'})
	event.remove({id: 'thermal:signalum_dust_4'});
	event.remove({id: 'thermal:electrum_dust_2'});
	event.remove({id: 'thermal:bronze_dust_4'});
	event.remove({id: 'thermal:lumium_dust_4'});
	event.remove({id: 'thermal:constantan_dust_2'});
	event.remove({id: 'immersiveengineering:crafting/electrum_mix'});
	event.remove({id: 'immersiveengineering:crafting/constantan_mix'});
	event.remove({id: 'create:smelting/scoria'});

	if (global.disableReactors) {
		event.remove({output: 'ftbic:nuclear_reactor'});
		event.remove({output: 'ftbic:nuke'});
	}
});

onEvent('recipes.after_load', event => {
	// Doesnt appear to be working
	// event.remove({id: /^immersiveengineering:recycling\//})
})