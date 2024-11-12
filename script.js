const dataList = document.getElementById("data-list");
const heartContainer = document.getElementById("heart-container");

// ランダムな温度と湿度データを生成する関数
function generateDummyData() {
    return {
        timestamp: new Date().toLocaleTimeString(),
        temperature: (20 + Math.random() * 10).toFixed(1), // 20〜30度
        humidity: (40 + Math.random() * 20).toFixed(1)     // 40〜60%
    };
}

// データを表示し、更新のたびにハートを出す関数
function displayData() {
    // 新しいデータを生成
    const data = generateDummyData();

    // リストアイテムを作成し表示
    const listItem = document.createElement("li");
    listItem.textContent = `時間: ${data.timestamp}, 温度: ${data.temperature}°C, 湿度: ${data.humidity}%`;
    dataList.prepend(listItem);

    // 最大5件のデータのみ表示
    if (dataList.childElementCount > 5) {
        dataList.removeChild(dataList.lastChild);
    }

    // ハートをたくさん出現させる
    for (let i = 0; i < 10; i++) { // ハートを10個出す
        createHeart();
    }
}

// ハートを生成する関数
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw"; // ランダムな水平位置
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // ランダムな上昇速度
    heartContainer.appendChild(heart);

    // アニメーションが終わったら削除
    setTimeout(() => {
        heart.remove();
    }, 5000); // 5秒後に削除
}

// 5秒ごとにデータを更新
setInterval(displayData, 5000);

// 初回データ表示
displayData();
