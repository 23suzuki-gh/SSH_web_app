const dataList = document.getElementById("data-list");
const heartContainer = document.getElementById("heart-container");

const emotions = ["happy", "sad", "angry", "surprise", "disgust"];
const symbols = {
    "happy": "❤️",
    "sad": "💦",
    "angry": "🔥",
    "surprise": "❗",
    "disgust": "⚠️"
};
let emotionIndex = 0;  // 感情のインデックス

// 感情を順に表示し、対応する絵文字を表示する関数
function displayEmotion() {
    const emotion = emotions[emotionIndex];
    const symbol = symbols[emotion];

    // リストアイテムを作成し表示
    const listItem = document.createElement("li");
    listItem.textContent = `if a baby feels: ${emotion}`;
    dataList.prepend(listItem);

    // 最大5件のデータのみ表示
    if (dataList.childElementCount > 5) {
        dataList.removeChild(dataList.lastChild);
    }

    // 現在の感情に応じた絵文字をたくさん出現させる
    for (let i = 0; i < 10; i++) { // 10個の絵文字を出す
        createSymbol(symbol);
    }

    // 次の感情に移動
    emotionIndex = (emotionIndex + 1) % emotions.length;  // インデックスを循環させる
}

// 絵文字を生成する関数
function createSymbol(symbol) {
    const emoji = document.createElement("div");
    emoji.classList.add("symbol");
    emoji.innerText = symbol;
    emoji.style.left = Math.random() * 100 + "vw"; // ランダムな水平位置
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // ランダムな上昇速度
    heartContainer.appendChild(emoji);

    // アニメーションが終わったら削除
    setTimeout(() => {
        emoji.remove();
    }, 5000); // 5秒後に削除
}

// 5秒ごとに感情を更新
setInterval(displayEmotion, 5000);

// 初回表示
displayEmotion();
