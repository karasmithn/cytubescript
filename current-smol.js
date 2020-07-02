var banner_url = '';
var href_url = "";
var background_img = "https://cdn.discordapp.com/attachments/306302708418084866/728130391562649671/2070f812d6a581d5782c2df2f13165e8.gif";
var autostart_msg = "start!";
var countdown_utc = {
	year: 2020,
	month: 7,
	day: 1,
	hour: 23,
	minute: 0,
	second: 0,
};
var countdown_utc2 = {
	year2: 2020,
	month2: 6,
	day2: 28,
	hour2: 19,
	minute2: 0,
	second2: 0
};
var background_img_auto1 = "https://cdn.discordapp.com/attachments/306302708418084866/728130391562649671/2070f812d6a581d5782c2df2f13165e8.gif";
var background_img_auto2 = "https://cdn.discordapp.com/attachments/306302708418084866/728130391562649671/2070f812d6a581d5782c2df2f13165e8.gif";
var chatMute = "false";
var background_img_auto3 = "https://cdn.discordapp.com/attachments/306302708418084866/728130391562649671/2070f812d6a581d5782c2df2f13165e8.gif";
var noiseActive = 'true';
var background_img_auto4 = "https://cdn.discordapp.com/attachments/306302708418084866/728130391562649671/2070f812d6a581d5782c2df2f13165e8.gif";
var countdown_utc3 = {
	year3: 2020,
	month3: 7,
	day3: 4,
	hour3: 21,
	minute3: 0,
	second3: 0
};
var penguinImg = '';
var penguinUrl = '';
var penguinBg = '';
var updateCmd = "false";
var discoGif = '';
var imgBubble = "";
var imgBubble2 = "";
var chatImg = "false";
var img1show = "true";
var img1fixedshow = "false";
var chatLimit = 'false';
var chatDelay = '1';
var chatImgOp = ".7";
var delmessage = "false";
var countdown_utc4 = {
	year4: 2020,
	month4: 7,
	day4: 3,
	hour4: 23,
	minute4: 0,
	second4: 0
};
var countdown_utc5 = {
	year5: 2019,
	month5: 12,
	day5: 29,
	hour5: 20,
	minute5: 0,
	second5: 0
};
var playbgmCondition = "true";
var bgmoff = "true";
var background_img_auto5 = "";
var background_img_auto6 = "";
var background_img_auto7 = '';
var bgm1url = "";
var bgm2url = "";
var bgm3url = "";
var bgm4url = "";
var bgm5url = "";
var bgmSelect = "3";
var achievementList = "";
var countdownText1 = "A";
var countdownText2 = "B";
var countdownText3 = "C";
var countdownText4 = "D";
var countdownText5 = "E";
var nicoEffectOnControl = "true";
var loginTime = "false";
var loginTimeKey = "false";
var loginExport = "false";
//-----------------------------------------------------------------------------------------------------------------------------------
var loadSetComplete;
var loadConfigUrl = "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/config.js";
var sendMsgUrl = "";
var achievementUrl = "";
var imageAddUrl = "";
var soundAddUrl = "";
var statList = ['47', '48', '49', '50', '52', '58', '57'];
var nicoTop = false;
var delmessage = "false";
/*!
 **|   XaeMae Sequenced Module Loader
 **|   
 **@preserve
 */
// -- Channel Namespace --
if (!this[CHANNEL.name])
	this[CHANNEL.name] = {};
// -- The Module Library
window[CHANNEL.name].sequenceList = {
	'moment.js': {
		active: 1,
		rank: -1,
		url: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
		callback: true
	},
	'bootstrap-datepicker': {
		active: 1,
		rank: -1,
		url: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.17.47/js/bootstrap-datetimepicker.min.js",
		callback: true
	},
	'tablesorter': {
		active: 1,
		rank: -1,
		url: "https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.2/js/jquery.tablesorter.min.js",
		callback: true
	},
	'tablesorter-widget': {
		active: 1,
		rank: -1,
		url: "https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.31.2/js/jquery.tablesorter.widgets.min.js",
		callback: true
	},
	'event-ext': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/current-ext.js",
		callback: true
	},
	'layout': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/channelbase-mod.js",
		callback: true
	},
	'settings': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/settings.js",
		callback: true
	},
	'overlay': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/overlay.js",
		callback: true
	},
	'channels': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/channels.js",
		callback: true
	},
	'xaekai': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/XaeKaiModules.js",
		callback: true
	},
	'channel': {
		active: 1,
		rank: -1,
		url: "https://cdn.jsdelivr.net/gh/karasmithn/cytubescript@master/module/enhancer-mod.js",
		callback: true
	}
};

$.getScript(loadConfigUrl, window[CHANNEL.name].sequencerLoader);
window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "";
window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0;
window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList);
window[CHANNEL.name].sequencerLoader = function() {
	rankMod = (window.CLIENT.rank >= 2);
	rankAdmin = (window.CLIENT.rank >= 3);
	// After first run we curry the previous modules callback
	// This is mainly used to reassign variables in modules/scripts that don't use module options
	if (window[CHANNEL.name].sequencePrev) {
		setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0)
		window[CHANNEL.name].sequencePrev = "";
	}

	if (window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length) {
		return (function() {
			window.loadInitializer();
		})();
	}

	var currKey = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
	if (window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length) {
		if (window[CHANNEL.name].sequenceList[currKey].active &&
			window[CHANNEL.name].sequenceList[currKey].rank <= CLIENT.rank
		) {
			console.log("Xaekai's Script Sequencer: Loading " + currKey);
			window[CHANNEL.name].sequencePrev = currKey;
			window[CHANNEL.name].sequenceState++;
			$.getScript(window[CHANNEL.name].sequenceList[currKey].url, window[CHANNEL.name].sequencerLoader)
		} else {
			window[CHANNEL.name].sequenceState++;
			window[CHANNEL.name].sequencerLoader()
		}
	}
};
window[CHANNEL.name].sequencerLoader();
if (updateCmd == "true") {
	$.getScript(window[CHANNEL.name].sequenceList['event-ext'].url);
}
$(".navbar-brand").text("Comfy Central");
