import React, { useState } from "react";
import "./App.css"; // 引入 CSS

function App() {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [gold, setGold] = useState(0);

    const redPrice = 12;
    const bluePrice = 15;
    const goldPrice = 20;

    // 計算總淨金額
    const netTotal = red * redPrice + blue * bluePrice + gold * goldPrice;
    // 服務費 = 總淨金額的 10%
    const serviceFee = (netTotal * 0.1).toFixed(2);
    // 總金額 = 總淨金額 + 服務費
    const grossTotal = (netTotal + parseFloat(serviceFee)).toFixed(2);

    const totalPlates = red + blue + gold;

    const resetAll = () => {
        setRed(0);
        setBlue(0);
        setGold(0);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Microsoft JhengHei, Arial" }}>
            {/* 左上角固定 Logo */}
            <img src="/logo.png" alt="Logo" className="logo" />

            {/* 標題 */}
            <h1 style={{ marginLeft: "70px" }}>壽司郎碟計算器</h1>

            <div>
                <p>紅碟: {red} (金額: HK$ {red * redPrice})</p>
                <button onClick={() => setRed(red + 1)}>加一碟 (+HK$ {redPrice})</button>
                <button onClick={() => setRed(red > 0 ? red - 1 : 0)}>減一碟</button>
            </div>

            <div>
                <p>藍碟: {blue} (金額: HK$ {blue * bluePrice})</p>
                <button onClick={() => setBlue(blue + 1)}>加一碟 (+HK$ {bluePrice})</button>
                <button onClick={() => setBlue(blue > 0 ? blue - 1 : 0)}>減一碟</button>
            </div>

            <div>
                <p>金碟: {gold} (金額: HK$ {gold * goldPrice})</p>
                <button onClick={() => setGold(gold + 1)}>加一碟 (+HK$ {goldPrice})</button>
                <button onClick={() => setGold(gold > 0 ? gold - 1 : 0)}>減一碟</button>
            </div>

            <hr />

            <h2>總碟數: {totalPlates}</h2>
            <h2>總淨金額: HK$ {netTotal}</h2>
            <h2>服務費 (10%): HK$ {serviceFee}</h2>
            <h2>總金額 (含服務費): HK$ {grossTotal}</h2>

            <button onClick={resetAll} style={{ marginTop: "20px" }}>
                重置
            </button>
        </div>
    );
}

export default App;