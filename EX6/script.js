var container = document.getElementById('container');

// 1. window.onload：頁面載入時亂數產生 0 到 2 個字元 [cite: 761]
window.onload = function() {
    var initialCount = Math.floor(Math.random() * 3); // 0, 1, 2
    for (var i = 0; i < initialCount; i++) {
        container.textContent += getRandomChar();
    }
    container.focus(); // 自動聚焦，方便直接打字
};

// 2. 監聽 keyup 事件
window.addEventListener("keyup", function(e) {
    console.log("按下按鍵:", e.key); // 講義要求印出 e.key 

    // 如果按下 Escape，清空內容 [cite: 734, 736]
    if (e.key === 'Escape') {
        container.textContent = "";
    } else {
        var str = container.textContent;
        // 3. 檢查第一個字元是否和 e.key 一樣 [cite: 787]
        if (str.length > 0 && e.key === str[0]) {
            // 一樣的話把第一個字元消除 [cite: 792]
            container.textContent = str.substring(1);
        }
    }

    // 4. 每次按鍵後，亂數增加 1 到 3 個字元接在後面 
    add_new_chars();
});

// 亂數增加字元的函式 [cite: 799]
function add_new_chars() {
    var count = Math.floor(Math.random() * 3) + 1; // 產生 1, 2, 3 [cite: 800]
    for (var i = 0; i < count; i++) {
        container.textContent += getRandomChar();
    }
}

// 輔助函式：產生 a-z 的隨機字元
function getRandomChar() {
    var chars = "abcdefghijklmnopqrstuvwxyz";
    return chars.charAt(Math.floor(Math.random() * chars.length));
}                     
