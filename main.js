const TAGS_DATA = {
  "背景ロケーション|背景ロケーション": [
    { label: "神殿", value: "temple" },
    { label: "森", value: "forest" },
    { label: "海辺", value: "seaside" }
  ],
  "アングル（構図）|アングル（構図）": [
    { label: "俯瞰", value: "bird's eye" },
    { label: "ローアングル", value: "low angle" },
    { label: "正面", value: "frontal" }
  ],
  "カメラ効果|カメラ効果": [
    { label: "ぼかし", value: "blur" },
    { label: "レンズフレア", value: "lens flare" }
  ],
  "演技・表情|演技・表情": [
    { label: "微笑み", value: "smile" },
    { label: "泣き顔", value: "teary face" }
  ],
  "体液・状態変化|体液・状態変化": [
    { label: "汗", value: "sweat" },
    { label: "涙", value: "tears" }
  ],
  "エフェクト|エフェクト": [
    { label: "魔法の光", value: "magical light" },
    { label: "闇のオーラ", value: "dark aura" }
  ],

  // ▼キャラクタープロファイル系
  "千歳りお / アルベラ|現実世界｜小柄な女医": [
    { label: "白衣", value: "lab coat" },
    { label: "医師バッジ", value: "doctor badge" }
  ],
  "千歳りお / アルベラ|異世界侵略後｜毒牙の魔医": [
    { label: "黒いローブ", value: "black robe" },
    { label: "魔毒の手袋", value: "venom gloves" }
  ],
  "フィーネ・オルフェリア|表｜神界の雷巫女": [
    { label: "雷の杖", value: "lightning staff" }
  ],
  "フィーネ・オルフェリア|中間｜封印の綻び": [
    { label: "封印の腕輪", value: "seal bracelet" }
  ],
  "フィーネ・オルフェリア|闇堕ち｜堕雷の審判巫女": [
    { label: "漆黒の冠", value: "black crown" }
  ],
  "フリュー・ネメシア|無職｜収容奴隷": [
    { label: "鎖", value: "chains" }
  ],
  "フリュー・ネメシア|奉仕｜聖歌隊奴隷": [
    { label: "聖歌隊の衣", value: "choir robe" }
  ],
  "フリュー・ネメシア|出会い｜揺れる心": [
    { label: "淡いワンピース", value: "pale dress" }
  ],
  "フリュー・ネメシア|覚醒｜炎の反響歌姫": [
    { label: "炎のマイク", value: "flame mic" }
  ],
  "水無瀬ひより / ノワール＝ルナリス|転生前｜性格・雰囲気": [
    { label: "内気", value: "shy" }
  ],
  "水無瀬ひより / ノワール＝ルナリス|転生前｜外見・服装": [
    { label: "セーラー服", value: "sailor uniform" }
  ],
  "水無瀬ひより / ノワール＝ルナリス|転生後｜性格・雰囲気": [
    { label: "クール", value: "cool" }
  ],
  "水無瀬ひより / ノワール＝ルナリス|転生後｜外見・装備": [
    { label: "ルナロッド", value: "luna rod" }
  ],
  "桐島ひかる / ヒュミナ|現実世界｜高校教師": [
    { label: "教師用スーツ", value: "teacher suit" }
  ],
  "桐島ひかる / ヒュミナ|異世界侵略後｜知の母神官": [
    { label: "神官ローブ", value: "priest robe" }
  ],
  "白石ことは / リリス＝ヴェルティア|転生前｜性格・雰囲気": [
    { label: "おとなしい", value: "quiet" }
  ],
  "白石ことは / リリス＝ヴェルティア|転生前｜外見・服装": [
    { label: "学生服", value: "school uniform" }
  ],
  "白石ことは / リリス＝ヴェルティア|転生後｜性格・雰囲気": [
    { label: "妖艶", value: "bewitching" }
  ],
  "白石ことは / リリス＝ヴェルティア|転生後｜外見・装備": [
    { label: "サキュバス衣装", value: "succubus outfit" }
  ],
  "ミナ・ロッカ|モブ｜性格・雰囲気": [
    { label: "真面目", value: "serious" }
  ],
  "ミナ・ロッカ|モブ｜外見・装備": [
    { label: "エプロン", value: "apron" }
  ],
  "ノア・ベルネ|無職｜封印奴隷": [
    { label: "首輪", value: "collar" }
  ],
  "ノア・ベルネ|奉仕｜従属封印者": [
    { label: "腕輪", value: "bracelet" }
  ],
  "ノア・ベルネ|出会い｜光なき目覚め": [
    { label: "黒衣", value: "black robe" }
  ],
  "ノア・ベルネ|覚醒｜封印解放の呪印魔導士": [
    { label: "魔導書", value: "grimoire" }
  ],

  // 追加キャラクター
  "セリーヌ・ブラヘイル|通常｜癒しの聖女": [
    { label: "聖女の杖", value: "saint staff" }
  ],
  "セリーヌ・ブラヘイル|覚醒｜理の解放者": [
    { label: "解放の羽衣", value: "liberation robe" }
  ],
  "ツバサ・カグヤ|通常｜寡黙な守護者": [
    { label: "盾", value: "shield" }
  ],
  "ツバサ・カグヤ|覚醒｜天翔ける影": [
    { label: "翼", value: "wings" }
  ],
  "ヴァルミア・ノヴァ|通常｜星降る賢者": [
    { label: "星の杖", value: "star staff" }
  ],
  "ヴァルミア・ノヴァ|覚醒｜流星の支配者": [
    { label: "流星マント", value: "meteor cape" }
  ],
  "ユイ・カルディナ|通常｜銀翼の歌姫": [
    { label: "銀のマイク", value: "silver mic" }
  ],
  "ユイ・カルディナ|覚醒｜光明のアルカナ": [
    { label: "光の羽", value: "feather of light" }
  ]
};
// ===== CATEGORY_LISTは別ファイル or 先頭で定義済み想定 =====
// 例: const CATEGORY_LIST = [ { group: ..., label: ... }, ... ];

// ===== TAGS_DATA（全カテゴリ分、group|labelをキー）も用意済み想定 =====
// 例: const TAGS_DATA = { "背景ロケーション|背景ロケーション": [...], ... };

// ▼ 選択状態
let selectedCategoryIdx = 0;
let selectedTags = [];

// ▼ カテゴリセレクトUI生成
function renderCategorySelect() {
  const box = document.getElementById('tag-container');
  box.innerHTML = '';

  let select = document.createElement('select');
  select.id = "category-select";
  CATEGORY_LIST.forEach((cat, idx) => {
    let opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${cat.group}｜${cat.label}`;
    select.appendChild(opt);
  });
  select.addEventListener('change', e => {
    selectedCategoryIdx = Number(e.target.value);
    renderTagsUI();
  });
  box.appendChild(document.createTextNode("カテゴリ選択："));
  box.appendChild(select);

  renderTagsUI();
}

// ▼ タグUI生成
function renderTagsUI() {
  // 既存タグUI削除
  let prev = document.getElementById('tags-ui');
  if (prev) prev.remove();

  const cat = CATEGORY_LIST[selectedCategoryIdx];
  const tagKey = `${cat.group}|${cat.label}`;
  const tags = TAGS_DATA[tagKey] || [];

  let tagArea = document.createElement('div');
  tagArea.id = 'tags-ui';
  tagArea.style.marginTop = '1em';

  selectedTags = [];
  tags.forEach((tag, i) => {
    let chk = document.createElement('input');
    chk.type = 'checkbox';
    chk.id = `cat-tag-${i}`;
    chk.value = tag.value;
    chk.addEventListener('change', () => {
      selectedTags = tags
        .filter((t, j) => document.getElementById(`cat-tag-${j}`).checked)
        .map(t => t.value);
      updatePromptOutput();
    });
    let lbl = document.createElement('label');
    lbl.htmlFor = chk.id;
    lbl.textContent = tag.label;
    tagArea.appendChild(chk);
    tagArea.appendChild(lbl);
  });
  document.getElementById('tag-container').appendChild(tagArea);
  updatePromptOutput();
}

// ▼ プロンプト出力（選択タグのみ：正確にカンマ区切りで反映）
function updatePromptOutput() {
  document.getElementById('positive-output').value = selectedTags.join(', ');
}

// ▼ 全消去ボタン対応
function resetAll() {
  selectedTags = [];
  renderCategorySelect();
  updatePromptOutput();
}

// ▼ DOMロード時
window.addEventListener('DOMContentLoaded', () => {
  renderCategorySelect();
  document.getElementById('reset-btn')?.addEventListener('click', resetAll);
  // ...LoRAなど他UI初期化もここに
});
