// 1. 先宣告變數，但不給值
var container;
var counter = 0; // 用來記錄「連續」打錯的次數

// 產生亂數英文字母的函數
function add_new_chars(x) {
    let str = "";
    for (let i = 0; i < x; i++) {
        // 隨機產生 a-z (ASCII 97-122)
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}

// 2. 使用 window.onload 確保 HTML 載入完成才執行
window.onload = function() {
    // 現在抓 container 就不會是 null 了
    container = document.getElementById('container');
    
    // 初始化：先放 3 個字在畫面上
    container.textContent = add_new_chars(3);
};

// 3. 監聽按鍵事件
window.addEventListener("keyup", function(e) {
    // 檢查 container 是否已經抓到（防呆）
    if (!container) return;

    // 取得畫面上第一個字
    var firstChar = container.textContent.substring(0, 1);

    // 判斷使用者按下的鍵 (e.key)
    if (e.key === disappearanceFirstChar()) {
        // --- 情況 A：打對了 ---
        // 刪除第一個字
        container.textContent = container.textContent.substring(1);
        // 連續錯誤計數器歸零
        counter = 0; 
    } else {
        // --- 情況 B：打錯了 ---
        // 把打錯那個字加到畫面上
        container.textContent += e.key;
        // 連續錯誤計數加 1
        counter++;

        // 檢查是否連續錯了三次
        if (counter >= 3) {
            // 處罰：額外多給 3 個亂數英文
            container.textContent += add_new_chars(3);
            // 處罰後計數器歸零（重新計算下一輪連續三次）
            counter = 0;
        }
    }
    
    // (可選) 每次按鍵不論對錯都增加 1 個字，增加難度
    // container.textContent += add_new_chars(1);
});

// 輔助函數：處理特殊鍵或大小寫（視需求調整）
function disappearanceFirstChar() {
    return container.textContent.substring(0, 1);
}
