import React, { useState } from "react";
import "./App.css";

function App() {
    // 壽司碟
    const [red, setRed] = useState(0);
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [black, setBlack] = useState(0);
    const [white, setWhite] = useState(0);

    // 小食 & 甜品
    const [fries, setFries] = useState(0);
    const [steamedEgg, setSteamedEgg] = useState(0);
    const [friedChicken, setFriedChicken] = useState(0);
    const [dessert, setDessert] = useState(0);

    // 價格表
    const prices = {
        red: 12,
        silver: 17,
        gold: 22,
        black: 27,
        white: 10,
        fries: 13,
        steamedEgg: 19,
        friedChicken: 22,
        dessert: 22,
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
        fries * prices.fries +
        steamedEgg * prices.steamedEgg +
        friedChicken * prices.friedChicken +
        dessert * prices.dessert;

    const serviceFee = (netTotal * 0.1).toFixed(2);
    const grossTotal = (netTotal + parseFloat(serviceFee)).toFixed(2);
    const totalItems =
        red +
        gold +
        silver +
        black +
        white +
        fries +
        steamedEgg +
        friedChicken +
        dessert;

    const resetAll = () => {
        setRed(0);
        setGold(0);
        setSilver(0);
        setBlack(0);
        setWhite(0);
        setFries(0);
        setSteamedEgg(0);
        setFriedChicken(0);
        setDessert(0);
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
                    <div>
                        <p>脆薯: {fries} (HK$ {fries * prices.fries})</p>
                        <button onClick={() => setFries(fries + 1)}>+1</button>
                        <button onClick={() => setFries(fries > 0 ? fries - 1 : 0)}>-1</button>
                    </div>
                    <div>
                        <p>茶碗蒸: {steamedEgg} (HK$ {steamedEgg * prices.steamedEgg})</p>
                        <button onClick={() => setSteamedEgg(steamedEgg + 1)}>+1</button>
                        <button onClick={() => setSteamedEgg(steamedEgg > 0 ? steamedEgg - 1 : 0)}>-1</button>
                    </div>
                    <div>
                        <p>炸雞塊: {friedChicken} (HK$ {friedChicken * prices.friedChicken})</p>
                        <button onClick={() => setFriedChicken(friedChicken + 1)}>+1</button>
                        <button onClick={() => setFriedChicken(friedChicken > 0 ? friedChicken - 1 : 0)}>-1</button>
                    </div>
                </div>
            )}

            {/* Accordion - 甜品 */}
            <h2 onClick={() => toggleSection("dessert")}>
                {openSection === "dessert" ? "▼" : "▶"} 甜品
            </h2>
            {openSection === "dessert" && (
                <div>
                    <p>甜品: {dessert} (HK$ {dessert * prices.dessert})</p>
                    <button onClick={() => setDessert(dessert + 1)}>+1</button>
                    <button onClick={() => setDessert(dessert > 0 ? dessert - 1 : 0)}>-1</button>
                </div>
            )}

            <hr />
            <h2>總項目數: {totalItems}</h2>
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