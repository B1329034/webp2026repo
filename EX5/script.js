// 1. 初始化計數器為 1
var count = 1;

function addfunction() {
    // 建立新按鈕
    var btn = document.createElement("BUTTON");
    
    // 設定按鈕文字與 ID 
    btn.innerHTML = "CLICK ME (" + count + ")";
    btn.setAttribute("id", "btn_" + count++);
    
    // 設定樣式 
    btn.setAttribute("class", "btn btn-outline-danger m-1");
    
    // 直接加入到 body 中 (確保不會因為找不到特定 ID 而報 null 錯誤) 
    document.body.appendChild(btn);
    console.log("新增按鈕:", btn);
}

function delfunction() {
    // 2. 只有當 count > 1 時才執行刪除，避免數字變負的 
    if (count > 1) {
        // 先減回最後一個產生的 ID
        var lastId = "btn_" + (--count); 
        var btn = document.getElementById(lastId);
        
        // 3. 確保抓得到元素才執行移除
        if (btn) {
            document.body.removeChild(btn);
            console.log("已刪除按鈕:", lastId);
        }
    } else {
        console.log("目前沒有可以刪除的按鈕");
    }
};
  
