import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  // 儲存從 API 撈回來的原始總資料
  const [allRows, setAllRows] = useState([]);
  // 儲存經過關鍵字過濾後，真正要顯示在 DataGrid 的資料
  const [filteredRows, setFilteredRows] = useState([]);
  // 搜尋關鍵字的狀態
  const [searchText, setSearchText] = useState('');

  // 1. 定義 DataGrid 的欄位 (名稱、地點、票價)
  const columns = [
    { field: 'title', headerName: '活動名稱', width: 350 },
    { field: 'location', headerName: '地點', width: 400 },
    { field: 'price', headerName: '票價', width: 200 },
  ];

  // 2. 使用 useEffect 在網頁載入時呼叫文化部 API
  useEffect(() => {
    // 這裡使用文化部獨立音樂的 API 網址 (也就是你 Console 截圖中的資料來源)
    const apiUrl = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // 🌟 巡覽文化部資料，將 showInfo[0] 裡面的地點和票價挖出來整理乾淨
        const dataWithId = data.map((item, index) => {
          // 安全檢查：確認 showInfo 存在且裡面有欄位資料
          const info = item.showInfo && item.showInfo.length > 0 ? item.showInfo[0] : {};
          
          return {
            id: index,                                // DataGrid 必備的唯一識別碼 (Index)
            title: item.title || '未提供名稱', 
            location: info.location || '未提供地點',   // 挖出 showInfo 裡面的地點
            price: info.price || '免費/未提供票價'     // 挖出 showInfo 裡面的票價
          };
        });

        setAllRows(dataWithId);
        setFilteredRows(dataWithId); // 初始狀態下，顯示的資料等於總資料
      })
      .catch((error) => console.error('API 抓取發生錯誤:', error));
  }, []); // 空陣列確保只在網頁第一次載入時執行一次

  // 3. 處理關鍵字搜尋 (對應你 HW4 的 searchData 搜尋名稱邏輯)
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchText(value);

    // 篩選出「活動名稱」包含輸入關鍵字的資料
    const filtered = allRows.filter((row) =>
      row.title.toLowerCase().includes(value)
    );
    setFilteredRows(filtered);
  };

  return (
    <Box sx={{ width: '92%', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '10px', fontWeight: 'bold', color: '#1976d2' }}>
        景點觀光展覽資訊
      </h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        HW#5 改寫版本 (React + Material-UI DataGrid)
      </p>

      {/* 搜尋輸入框 - 使用 MUI 的 TextField */}
      <TextField
        label="搜尋名稱..."
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleSearch}
        sx={{ marginBottom: '25px', backgroundColor: '#fff' }}
      />

      {/* DataGrid 元件 - 自動內建精美分頁與排序，不需要再寫上一頁/下一頁 */}
      <Box sx={{ height: 650, width: '100%', backgroundColor: '#fff', boxShadow: 3, borderRadius: 2 }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 }, // 預設一頁顯示 10 筆資料
            },
          }}
          pageSizeOptions={[5, 10, 20, 50]} // 讓助教或你可以自由切換每頁看幾筆
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default App;
