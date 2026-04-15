// 第一行：文化部展覽資訊 API 網址
var openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var dataset = []; // 用來存資料
var i = 0;       // 計數器

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        dataset = JSON.parse(this.responseText); // 解析 JSON 
        console.log("資料載入成功，共 " + dataset.length + " 筆");
    }
};

function addNewData() {
    // 抓取表格，建議直接抓 tbody
    var myTable = document.getElementById("csie").getElementsByTagName('tbody')[0]; 
    
    // 檢查資料是否載入完成，且還有剩餘資料可以顯示
    if (dataset.length === 0) {
        alert("資料還在載入中，請稍候...");
        return;
    }

    if (i < dataset.length) {
        var data = dataset[i];
        var row = myTable.insertRow(-1); // 在表格最後新增一行
        
        // 填入資料：名稱、地點、票價
        row.insertCell(0).innerHTML = data['title']; 
        
        // 這裡要注意：有些資料的 showInfo 可能是空的，加個判斷比較保險
        if (data['showInfo'] && data['showInfo'].length > 0) {
            row.insertCell(1).innerHTML = data['showInfo'][0]['location']; 
            row.insertCell(2).innerHTML = data['showInfo'][0]['price'] || "免費/未提供"; 
        } else {
            row.insertCell(1).innerHTML = "未提供地點";
            row.insertCell(2).innerHTML = "未提供票價";
        }
        
        i++; // 增加計數器
    } else {
        alert("已經沒有更多資料了！");
    }
}

// 刪除資料的功能
function delOldData() {
    var myTable = document.getElementById("csie").getElementsByTagName('tbody')[0];
    myTable.innerHTML = ""; // 清空表格內容
    i = 0; // 計數器重置，這樣下次按 Add 又會從第一筆開始
}
