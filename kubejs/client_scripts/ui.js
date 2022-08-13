events.listen("ui.main_menu", (event) => {
	event.replace((ui) => {
		ui.background("menu:textures/bg.png");
		ui.widgetTexture = "menu:textures/widgets.png";

		//If MT is loaded
		if (Platform.mods.minetogether) {
			//MineTogether friends list
			ui.button((b) => {
				b.name = "Friends list";
				b.width = 70;
				b.x = ui.width - b.width - 5;
				b.y = 5;
				b.color = 0x576374;
				b.hoverColor = 0x0a274b;
				b.action = "minetogether:friends_list";
				b.shadow = false;
			});

			//MineTogether chat
			ui.imageButton((b) => {
				b.width = 20;
				b.x = ui.width - b.width - 80;
				b.y = 5;
				b.action = "minetogether:chat";
				b.texture = "menu:textures/chat.png";
			});

			//MineTogether order server
			ui.imageButton((b) => {
				b.width = 20;
				b.x = ui.width - b.width - 105;
				b.y = 5;
				b.action = "minetogether:order";
				b.texture = "menu:textures/creeper.png";
			});
		}

		//Singleplayer
		ui.button((b) => {
			b.name = text.translate("menu.singleplayer");
			b.width = 150;
			b.x = ui.width - 180;
			b.y = ui.height / 2 - 55;
			b.action = "minecraft:singleplayer";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//multiplayer
		ui.button((b) => {
			b.name = text.translate("menu.multiplayer");
			b.width = 150;
			b.x = ui.width - 180;
			b.y = ui.height / 2 - 29;
			b.action = "minecraft:multiplayer";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//Mods
		ui.button((b) => {
			b.name = text.translate("fml.menu.mods");
			b.width = 73;
			b.x = ui.width - 180;
			b.y = ui.height / 2 - 3;
			b.action = "forge:mod_list";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//Issue tracker
		ui.button((b) => {
			b.name = text.of("Support");
			b.width = 73;
			b.x = ui.width - 180 + b.width + 5;
			b.y = ui.height / 2 - 3;
			b.action = "https://www.feed-the-beast.com/support";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//Options
		ui.button((b) => {
			b.name = text.translate("menu.options");
			b.width = 73;
			b.x = ui.width - 180;
			b.y = ui.height / 2 + 39;
			b.action = "minecraft:options";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//Quit
		ui.button((b) => {
			b.name = text.of("Quit");
			b.width = 73;
			b.x = ui.width - 180 + b.width + 5;
			b.y = ui.height / 2 + 39;
			b.action = "minecraft:quit";
			b.shadow = false;
			b.color = 0x576374;
			b.hoverColor = 0x0a274b;
		});

		//Aux
		ui.imageButton((b) => {
			b.width = 20;
			b.x = 5;
			b.y = 5;
			b.action = "ftbauxilium:opt_out";
			b.texture = "menu:textures/auxilium.png";
		});

		//Logo
		ui.image((i) => {
			i.height = 1024 * 0.19;
			i.width = 1024 * 0.19;
			i.x = ui.width * 0.06;
			i.y = ui.height / 2 - i.height / 2;
			i.texture = "menu:textures/logo.png";
		});

		//Forge version
		ui.label((l) => {
			l.height = 10;
			l.name = "Forge Version: " + Platform.mods.forge.version;
			l.x = ui.width - l.width - 2;
			l.y = ui.height - 31;
		});

		//Mods loaded
		ui.label((l) => {
			l.height = 10;
			l.name = Platform.mods.size() + " Mods Loaded";
			l.x = ui.width - l.width - 2;
			l.y = ui.height - 21;
		});

		//Mojang
		ui.label((l) => {
			l.height = 10;
			l.name = "Copyright Mojang AB";
			l.x = ui.width - l.width - 2;
			l.y = ui.height - 11;
		});
	});
});
