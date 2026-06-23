// 📦 DATA.JS - ShareWave রোলপ্লে চ্যাট ডাটা
// ============================================

// ========== ১. গ্যালারির ছবি - ক্যাটাগরি অনুযায়ী ==========
const STICKER_CATEGORIES = {
    'all': {
        label: '🖼️ সব',
        images: []
    },
    'nunu': {
        label: '🍼 নুনু খাওয়া',
        images: [
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715401472_copgbb.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715403563_uu5hqc.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715405881_c4vuku.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715408100_bqd1jq.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715410345_m8re7y.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715412382_jsj29x.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715414096_dklv3q.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715416110_bly285.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715418204_a20oxv.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/nunu/1781715421109_1st1f8.jpg"
        ]
    },
    'two_boys_one_girl': {
        label: '👦👦👧 দুই ছেলে এক মেয়ে',
        images: [
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715571174_x6lvz0.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715573473_qnpqvz.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715575393_r4w0j8.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715577354_7qodly.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715579559_zzcuys.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715581598_oopwaa.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715583503_qpsq3j.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715586067_j8ls3n.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715588068_y0qq6m.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715589319_4kicjc.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715591325_x587tr.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715593270_esjbcm.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715596146_8323db.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_boys_one_girl/1781715598616_v3gskd.jpg"
        ]
    },
    'two_girls_one_boy': {
        label: '👧👧👦 দুই মেয়ে এক ছেলে',
        images: [
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715724968_feqr0t.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715727297_inyqnx.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715729313_hp9ifa.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715731905_hm52n7.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715734082_hbuklf.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715736076_j9erv0.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715738273_2d4xnd.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715740398_470fv9.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715743058_icfqa8.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715745097_ut4pxx.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715747396_3z4bqr.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715749479_j87jkd.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715751567_8k6khq.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715754167_htnwgz.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715756848_xfsivs.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715758867_h5k9bq.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715761060_7yu54x.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/two_girls_one_boy/1781715763051_mhet5w.jpg"
        ]
    },
    'other': {
        label: '📦 অন্যান্য',
        images: [
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715913017_czd4ri.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715915276_meihod.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715917893_2kuk3y.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715919687_u9rj1c.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715922032_s6iljs.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715924204_5mdogv.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715926142_axr95k.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715928729_243ikw.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715930983_znll0y.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715933668_56biwr.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715936399_f4behv.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715939349_6ll4o2.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715941765_08r91r.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715943977_71t14i.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715946186_amwrbf.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715948575_hee81n.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715950987_3ndutx.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715952971_al4hzo.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715955028_ty7d45.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715957063_rpckp8.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715959199_din1ac.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715961717_b4h6l9.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715964580_z35fkt.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715966654_b4elf2.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715968741_or3g74.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715970732_21ubz6.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715972786_fwi929.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715974913_o0mle6.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715977192_600uxj.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715979961_5zw3pi.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715982230_kmzlsd.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715984276_mmpcia.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715986236_kb33ci.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715988260_jn841s.jpg",
            "https://raw.githubusercontent.com/life-by/Linf/main/stickers/other/1781715990339_4shpx5.jpg"
        ]
    }
};

// 'all' ক্যাটাগরিতে সব ছবি যোগ করুন
STICKER_CATEGORIES['all'].images = [];
for (let key in STICKER_CATEGORIES) {
    if (key !== 'all') {
        STICKER_CATEGORIES['all'].images = STICKER_CATEGORIES['all'].images.concat(STICKER_CATEGORIES[key].images);
    }
}

// ========== ২. ব্যাকওয়ার্ড কম্প্যাটিবিলিটি (STICKERS) ==========
const STICKERS = STICKER_CATEGORIES['all'].images;

// ========== ৩. কম্বো ও সিনারিও ডাটা ==========
const COMBO_DATA = {
    'জামাই-শাশুড়ি': {
        characters: ['জামাই', 'শাশুড়ি'],
        emoji: '🏠',
        scenarios: [
            "🏠 শাশুড়ি বাসায় এসেছেন। জামাইকে একা পেয়ে ফিসফিস করে বললেন...",
            "😳 রাতে শাশুড়ি জামাইয়ের রুমে এসে দরজা বন্ধ করলেন।",
            "💋 শাশুড়ি জামাইকে জড়িয়ে ধরে বললেন - 'তুমি আমার সবচেয়ে প্রিয়...'",
            "🍑 শাশুড়ি রান্নাঘরে কাজ করছেন, জামাই পেছন থেকে জড়িয়ে ধরলেন।",
            "🌙 শাশুড়ি জামাইকে বললেন - 'আজ রাতে তোমার শাশুড়ির সাথে খেলবে?'",
            "😈 শাশুড়ি জামাইয়ের কোলে বসে তার কানে কুৎসিত কথা বলছেন।",
            "🛏️ শাশুড়ি জামাইকে বিছানায় টেনে নিলেন।",
            "💦 শাশুড়ি জামাইকে প্রলোভন দেখাচ্ছেন নতুন শাড়ি পরে।",
            "🔥 জামাই শাশুড়িকে দেয়ালে চেপে ধরলেন।",
            "🌹 শাশুড়ি জামাইকে বললেন - 'আমি তোমার জন্য সব করতে পারি...'"
        ]
    },
    'শালী-শ্যালক': {
        characters: ['শালী', 'শ্যালক'],
        emoji: '💕',
        scenarios: [
            "😳 শালী আর শ্যালক বাসায় একা। দরজা বন্ধ।",
            "💋 শালী শ্যালককে চুমু দিয়ে বলল - 'কেউ জানবে না...'",
            "🌙 ছাদে রাতে শালী শ্যালকের কোলে বসে আছে।",
            "😈 শালী শ্যালককে তার রুমে ডেকে নিয়ে লজ্জাজনক কথা বলছে।",
            "🛋️ সোফায় শালী শ্যালকের উপর উঠে বসলো।",
            "💦 শালী শ্যালককে বলল - 'আমার শরীর তোমার জন্য...'",
            "🔥 শ্যালক শালীকে দেয়ালে চেপে জড়িয়ে ধরলো।",
            "🎀 শালী নতুন ড্রেস পরে শ্যালককে টিজ করছে।",
            "🌹 শালী শ্যালকের কানে কামুক কথা বলছে।",
            "🛏️ রাতে শালী শ্যালকের বিছানায় চলে এসেছে।"
        ]
    },
    'বস-সেক্রেটারি': {
        characters: ['বস', 'সেক্রেটারি'],
        emoji: '💼',
        scenarios: [
            "🏢 অফিস ফাঁকা। বস সেক্রেটারিকে তার চেম্বারে ডেকেছেন।",
            "😈 বস সেক্রেটারির স্কার্টের ভিতর হাত দিলেন।",
            "🛋️ সোফায় বস সেক্রেটারিকে তার কোলে বসালেন।",
            "💋 লেট নাইট ওয়ার্কের সময় বস সেক্রেটারিকে চুমু দিলেন।",
            "🔥 বস সেক্রেটারিকে টেবিলের উপর শুইয়ে দিলেন।",
            "🌙 রাতে অফিসে বস সেক্রেটারিকে বললেন - 'আজ তুমি আমার...'",
            "💦 সেক্রেটারি বসের সামনে হাঁটু গেড়ে বসলো।",
            "😳 বস সেক্রেটারির ব্লাউজের বোতাম খুলে দিলেন।",
            "🌹 বস সেক্রেটারিকে প্রমোশনের বিনিময়ে প্রলোভন দেখালেন।",
            "🛏️ হোটেল রুমে বস সেক্রেটারির সাথে রাত কাটাচ্ছেন।"
        ]
    },
    'ডাক্তার-রোগী': {
        characters: ['ডাক্তার', 'রোগী'],
        emoji: '🩺',
        scenarios: [
            "🩺 প্রাইভেট চেম্বারে ডাক্তার রোগীকে পুরোপুরি চেক করছেন।",
            "😈 ডাক্তার রোগীকে বললেন - 'এই চিকিৎসা খুবই ঘনিষ্ঠ...'",
            "💉 ইনজেকশন দেওয়ার নাম করে ডাক্তার রোগীর শরীরে হাত বুলাচ্ছেন।",
            "🛏️ ডাক্তার রোগীকে হাসপাতালের বিছানায় শুইয়ে রাখলেন।",
            "🌙 নাইট ডিউটিতে ডাক্তার রোগীর সাথে একা।",
            "🔥 ডাক্তার রোগীকে বললেন - 'আজ তোমার শরীর আমার...'",
            "💦 রোগী ডাক্তারের সামনে পুরোপুরি উন্মুক্ত।",
            "😳 ডাক্তার রোগীর স্পর্শকাতর জায়গায় 'চিকিৎসা' করছেন।",
            "🌹 ডাক্তার রোগীকে বললেন - 'তুমি আমার সবচেয়ে সুন্দর রোগী...'",
            "🛏️ চেম্বারের ভিতরে ডাক্তার-রোগীর সম্পর্ক অন্য মাত্রায় চলে গেল।"
        ]
    },
    'শিক্ষক-ছাত্রী': {
        characters: ['শিক্ষক', 'ছাত্রী'],
        emoji: '🏫',
        scenarios: [
            "🏫 ক্লাসের পর শিক্ষক ছাত্রীকে এক্সট্রা ক্লাসে ডেকেছেন।",
            "📚 শিক্ষক ছাত্রীর খুব কাছে এসে পড়াচ্ছেন।",
            "😈 ছাত্রী শিক্ষককে প্রলোভন দেখাচ্ছে।",
            "💋 শিক্ষক ছাত্রীকে চুমু দিয়ে বললেন - 'এটা তোমার পুরস্কার...'",
            "🛋️ শিক্ষকের চেম্বারে ছাত্রী তার কোলে বসে আছে।",
            "🔥 শিক্ষক ছাত্রীকে টেবিলের উপর শুইয়ে দিলেন।",
            "🌙 রাতে টিউশনের সময় শিক্ষক-ছাত্রীর সম্পর্ক গভীর হলো।",
            "💦 ছাত্রী শিক্ষকের সামনে জামা খুলে দিল।",
            "😳 ছাত্রী শিক্ষককে বলল - 'স্যার, আমি আপনার জন্য সব করব...'",
            "🌹 শিক্ষক ছাত্রীকে বললেন - 'তুমি আমার প্রিয় ছাত্রী...'"
        ]
    }
    // বাকি কম্বো যোগ করতে পারেন...
};

// ========== ৪. কম্বো লিস্ট ==========
const COMBO_LIST = Object.keys(COMBO_DATA);

// ========== ৫. ডিফল্ট কম্বো ==========
const DEFAULT_COMBO = 'শিক্ষক-ছাত্রী';

// ========== ৬. হেল্পার ফাংশন ==========
function getComboData(combo) {
    return COMBO_DATA[combo] || null;
}

function getCharacters(combo) {
    const data = getComboData(combo);
    return data ? data.characters : [];
}

function getScenarios(combo) {
    const data = getComboData(combo);
    return data ? data.scenarios : [];
}

function getRandomScenario(combo) {
    const scenarios = getScenarios(combo);
    return scenarios.length > 0 ? scenarios[Math.floor(Math.random() * scenarios.length)] : '🎭 কোনো সিনারিও নেই!';
}

function getComboEmoji(combo) {
    const data = getComboData(combo);
    return data ? data.emoji : '🎭';
}

function getRandomCombo() {
    return COMBO_LIST[Math.floor(Math.random() * COMBO_LIST.length)];
}

function getComboCount() {
    return COMBO_LIST.length;
}

function getAllCombos() {
    return COMBO_LIST;
}

// ========== ৭. ক্যাটাগরি হেল্পার ==========
function getCategories() {
    return Object.keys(STICKER_CATEGORIES).filter(key => key !== 'all');
}

function getCategoryLabel(category) {
    return STICKER_CATEGORIES[category]?.label || category;
}

function getCategoryImages(category) {
    return STICKER_CATEGORIES[category]?.images || [];
}

function getAllImages() {
    return STICKER_CATEGORIES['all']?.images || [];
}

// ========== ৮. গ্লোবাল এক্সপোর্ট ==========
window.STICKERS = STICKERS;
window.STICKER_CATEGORIES = STICKER_CATEGORIES;
window.COMBO_DATA = COMBO_DATA;
window.COMBO_LIST = COMBO_LIST;
window.DEFAULT_COMBO = DEFAULT_COMBO;
window.getComboData = getComboData;
window.getCharacters = getCharacters;
window.getScenarios = getScenarios;
window.getRandomScenario = getRandomScenario;
window.getComboEmoji = getComboEmoji;
window.getRandomCombo = getRandomCombo;
window.getComboCount = getComboCount;
window.getAllCombos = getAllCombos;
window.getCategories = getCategories;
window.getCategoryLabel = getCategoryLabel;
window.getCategoryImages = getCategoryImages;
window.getAllImages = getAllImages;

// ========== ৯. কনসোল লগ ==========
console.log(`✅ ShareWave Data Loaded!`);
console.log(`📊 মোট ${COMBO_LIST.length} টি কম্বো রেডি`);
console.log(`📂 মোট ${Object.keys(STICKER_CATEGORIES).length - 1} টি ক্যাটাগরি`);
console.log(`🖼️ মোট ${STICKERS.length} টি স্টিকার রেডি`);
console.log(`🎯 ডিফল্ট কম্বো: "${DEFAULT_COMBO}"`);