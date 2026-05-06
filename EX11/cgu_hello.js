const styleArgument = { fontSize: '100px', color: 'red' };

const HelloCGU = () => {
  return <h1 style={styleArgument}> hello CGU!! </h1>;
}

export default HelloCGU; // 這樣別的檔案才抓得到它
