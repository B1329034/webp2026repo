import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'; // 用來放圖示的按鈕
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; // 購物車
import DeleteIcon from '@mui/icons-material/Delete'; // 垃圾桶
import AlarmIcon from '@mui/icons-material/Alarm'; // 鬧鐘

const changeText = (event) => {
  event.target.innerText = event.target.innerText + "被點了";
};

const MultiButton = (num) => {
  var output = [];
  
  // 1. 先加入 10 個藍色按鈕
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button variant="contained" color="primary" onClick={changeText} style={{ margin: '5px' }}>
        第{i}個按鍵
      </Button>
    );
  }

  // 2. 在下方加入圖片中的三個圖示按鈕
  output.push(
    <div style={{ marginTop: '20px' }}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <IconButton color="primary" aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton color="primary" aria-label="alarm">
        <AlarmIcon />
      </IconButton>
    </div>
  );

  return output;
};

export default MultiButton;
