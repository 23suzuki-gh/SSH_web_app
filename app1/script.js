const reactionContainer = document.getElementById("reaction-container");
const controls = document.getElementById("controls");

const symbols = {
    "happy": "❤️",
    "sad": "💦",
    "angry": "🔥",
    "surprise": "❗",
    "neutral": "😎"
};

function displayEmotion() {
    const emotion = document.getElementById("emotion-selector").value;
    const symbol = symbols[emotion];

    // リアクション中はコントロールを非表示
    controls.style.display = "none";

    // 反応を表示
    for (let i = 0; i < 10; i++) {  // 10個の絵文字を出す
        createSymbol(symbol);
    }

    // 5秒後にコントロールを再表示
    setTimeout(() => {
        controls.style.display = "block";
    }, 5000);  // 5秒後
}

// 絵文字を生成する関数
function createSymbol(symbol) {
    const emoji = document.createElement("div");
    emoji.classList.add("symbol");
    emoji.innerText = symbol;
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
    reactionContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}
