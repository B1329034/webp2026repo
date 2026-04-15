var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"; [cite: 968, 970]
var xhr = new XMLHttpRequest(); [cite: 971]
var dataset = []; // 用來存放抓回來的全部資料
var currentIndex = 0; // 記錄目前讀取到第幾筆 [cite: 646]

// 1. 初始化時先抓取資料
xhr.open('GET', openUrl, true); [cite: 972]
xhr.send(); [cite: 973]

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { [cite: 975]
        // 抓到資料後先存起來，但不立刻顯示 [cite: 977]
        dataset = JSON.parse(this.responseText); 
        console.log("資料載入成功，總共 " + dataset.length + " 筆");
    }
};

/**
 * 每按一次按鍵，就增加一行資料 [cite: 611, 626]
 */
function addNewData() {
    if (dataset.length === 0) {
        alert("資料還在載入中或載入失敗！");
        return;
    }

    if (currentIndex >= dataset.length) {
        alert("已經沒有更多資料了！");
        return;
    }

    var myTable = document.getElementById("csie"); [cite: 991]
    var data = dataset[currentIndex]; // 取得目前該索引的資料 [cite: 649]
    
    // 插入新列 (-1 代表插在最後面) [cite: 992]
    var row = myTable.insertRow(-1); 
    
    // 插入第一欄：名稱 [cite: 994]
    row.insertCell(0).innerHTML = data['title']; 
    
    // 插入第二欄與第三欄：地點與票價 (需檢查 showInfo 是否存在) [cite: 995, 996]
    if (data['showInfo'] && data['showInfo'].length > 0) {
        row.insertCell(1).innerHTML = data['showInfo'][0]['location'];
        row.insertCell(2).innerHTML = data['showInfo'][0]['price'];
    } else {
        row.insertCell(1).innerHTML = "無資訊";
        row.insertCell(2).innerHTML = "無資訊";
    }

    currentIndex++; // 索引值加 1，下次按會抓下一筆 [cite: 651]
}

/**
 * 刪除最後一列的資料 [cite: 436, 438]
 */
function delOldData() {
    var myTable = document.getElementById("csie"); [cite: 434]
    var rowCount = myTable.rows.length; [cite: 435]
    if (rowCount > 1) { // 保留標題列
        myTable.deleteRow(rowCount - 1); [cite: 438]
        currentIndex = Math.max(0, currentIndex - 1); // 刪除時計數器也要回扣
    }
}
