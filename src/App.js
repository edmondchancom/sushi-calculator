import React, { useState } from "react";
import "./App.css";

function App() {
    // 壽司碟
    const [red, setRed] = useState(0);
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [black, setBlack] = useState(0);
    const [white, setWhite] = useState(0);

    // 小食清單
    const snackItems = [
        { key: "fries", name: "黃金脆薯", price: 13 },
        { key: "pumpkinTempura", name: "南瓜天婦羅", price: 13 },
        { key: "shrimpTempuraSet", name: "炸蝦天婦羅拼盤(半份)", price: 18 },
        { key: "shrimpTempura", name: "炸蝦天婦羅", price: 18 },
        { key: "chickenCartilage", name: "炸雞軟骨", price: 19 },
        { key: "steamedEgg", name: "茶碗蒸", price: 19 },
        { key: "friedChicken", name: "脆脆炸雞塊", price: 22 },
    ];

    // 甜品清單
    const dessertItems = [
        { key: "melonSorbet", name: "蜜瓜味雪葩", price: 13 },
        { key: "frozenMango", name: "冷凍芒果", price: 13 },
        { key: "milkIceCookie", name: "牛奶味軟雪糕(有曲奇)", price: 18 },
        { key: "milkIce", name: "牛奶味軟雪糕", price: 18 },
        { key: "pudding", name: "壽司郎經典布甸", price: 22 },
        { key: "catalana", name: "卡達拉娜", price: 22 },
        { key: "milleCrepe", name: "千層蛋糕", price: 22 },
        { key: "peachMontBlanc", name: "白桃蒙布朗蛋糕", price: 22 },
        { key: "matchaParfait", name: "抹茶蕨餅芭菲", price: 27 },
        { key: "chocoBerryParfait", name: "朱古力香莓芭菲", price: 27 },
    ];

    // 狀態：為每個品項建立一個 useState
    const [counts, setCounts] = useState(
        [...snackItems, ...dessertItems].reduce((acc, item) => {
            acc[item.key] = 0;
            return acc;
        }, {})
    );

    // 價格表
    const prices = {
        red: 12,
        silver: 17,
        gold: 22,
        black: 27,
        white: 10,
    };

    // Accordion 狀態
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // 總計
    const netTotal =
        red * prices.red +
        gold * prices.gold +
        silver * prices.silver +
        black * prices.black +
        white * prices.white +
        [...snackItems, ...dessertItems].reduce(
            (sum, item) => sum + counts[item.key] * item.price,
            0
        );

    const serviceFee = (netTotal * 0.1).toFixed(2);
    const grossTotal = (netTotal + parseFloat(serviceFee)).toFixed(2);
    const totalItems =
        red +
        gold +
        silver +
        black +
        white +
        [...snackItems, ...dessertItems].reduce(
            (sum, item) => sum + counts[item.key],
            0
        );

    const resetAll = () => {
        setRed(0);
        setGold(0);
        setSilver(0);
        setBlack(0);
        setWhite(0);
        setCounts(
            [...snackItems, ...dessertItems].reduce((acc, item) => {
                acc[item.key] = 0;
                return acc;
            }, {})
        );
    };

    return (
        <div
            className="app-container"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`,
                backgroundRepeat: "repeat",
                backgroundSize: "cover",
                minHeight: "100vh",
            }}
        >
            <img src="/logo.png" alt="Logo" className="logo" />
            <h1 style={{ marginLeft: "70px" }}>壽司郎碟計算器</h1>

            {/* 壽司碟 */}
            <div className="plate-row">
                <img src={`${process.env.PUBLIC_URL}/Red.JPEG`} alt="紅碟" className="plate-icon" />
                <p>紅碟: {red} (HK$ {red * prices.red})</p>
                <button onClick={() => setRed(red + 1)}>+1</button>
                <button onClick={() => setRed(red > 0 ? red - 1 : 0)}>-1</button>
            </div>

            <div className="plate-row">
                <img src={`${process.env.PUBLIC_URL}/Silver.JPEG`} alt="銀碟" className="plate-icon" />
                <p>銀碟: {silver} (HK$ {silver * prices.silver})</p>
                <button onClick={() => setSilver(silver + 1)}>+1</button>
                <button onClick={() => setSilver(silver > 0 ? silver - 1 : 0)}>-1</button>
            </div>

            <div className="plate-row">
                <img src={`${process.env.PUBLIC_URL}/Gold.JPEG`} alt="金碟" className="plate-icon" />
                <p>金碟: {gold} (HK$ {gold * prices.gold})</p>
                <button onClick={() => setGold(gold + 1)}>+1</button>
                <button onClick={() => setGold(gold > 0 ? gold - 1 : 0)}>-1</button>
            </div>

            <div className="plate-row">
                <img src={`${process.env.PUBLIC_URL}/Black.JPEG`} alt="黑碟" className="plate-icon" />
                <p>黑碟: {black} (HK$ {black * prices.black})</p>
                <button onClick={() => setBlack(black + 1)}>+1</button>
                <button onClick={() => setBlack(black > 0 ? black - 1 : 0)}>-1</button>
            </div>

            <div className="plate-row">
                <img src={`${process.env.PUBLIC_URL}/White.JPEG`} alt="白碟" className="plate-icon" />
                <p>白碟: {white} (HK$ {white * prices.white})</p>
                <button onClick={() => setWhite(white + 1)}>+1</button>
                <button onClick={() => setWhite(white > 0 ? white - 1 : 0)}>-1</button>
            </div>

            {/* Accordion - 小食 */}
            <h2 onClick={() => toggleSection("snacks")}>
                {openSection === "snacks" ? "▼" : "▶"} 小食
            </h2>
            {openSection === "snacks" && (
                <div>
                    {snackItems.map((item) => (
                        <div key={item.key} className="plate-row">
                            <p>
                                {item.name}: {counts[item.key]} (HK$ {counts[item.key] * item.price})
                            </p>
                            <button
                                onClick={() =>
                                    setCounts({ ...counts, [item.key]: counts[item.key] + 1 })
                                }
                            >
                                +1
                            </button>
                            <button
                                onClick={() =>
                                    setCounts({
                                        ...counts,
                                        [item.key]: counts[item.key] > 0 ? counts[item.key] - 1 : 0,
                                    })
                                }
                            >
                                -1
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Accordion - 甜品 */}
            <h2 onClick={() => toggleSection("desserts")}>
                {openSection === "desserts" ? "▼" : "▶"} 甜品
            </h2>
            {openSection === "desserts" && (
                <div>
                    {dessertItems.map((item) => (
                        <div key={item.key} className="plate-row">
                            <p>
                                {item.name}: {counts[item.key]} (HK$ {counts[item.key] * item.price})
                            </p>
                            <button
                                onClick={() =>
                                    setCounts({ ...counts, [item.key]: counts[item.key] + 1 })
                                }
                            >
                                +1
                            </button>
                            <button
                                onClick={() =>
                                    setCounts({
                                        ...counts,
                                        [item.key]: counts[item.key] > 0 ? counts[item.key] - 1 : 0,
                                    })
                                }
                            >
                                -1
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <hr />
            <h2>總項目數: {totalItems}</h2>
            <h2>總淨金額: HK$ {netTotal}</h2>
            <h2>服務費 (10%): HK$ {serviceFee}</h2>
            <h2>總金額 (含服務費): <span style={{ color: "red" }}> HK$ {grossTotal}</span></h2>
            <h2>可用印花卡: <span style={{ color: "red" }}>{Math.floor(grossTotal / 80)} 張</span></h2>



            <button onClick={resetAll} style={{ marginTop: "20px" }}>
                重置
            </button>
        </div>
    );
}

export default App;