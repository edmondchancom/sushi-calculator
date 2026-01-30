import React, { useState } from "react";
import "./App.css";

function App() {
    // 壽司碟
    const [red, setRed] = useState(0);
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [black, setBlack] = useState(0);
    const [white, setWhite] = useState(0);

    // 麵類・湯類清單
    const noodleSoupItems = [
        { key: "clamSeaweedMisoSoup", name: "蜆肉海苔麵豉湯", price: 20, image: "B1.png" },
        { key: "tofuSkinUdon", name: "腐皮烏冬", price: 27, image: "B2.png" },
        { key: "kamatamaUdon", name: "釜玉烏冬", price: 28, image: "B3.png" },
        { key: "shrimpTempuraUdon", name: "炸蝦天婦羅烏冬", price: 28, image: "B4.png" },
        { key: "tonkotsuRamen", name: "豚骨拉麵", price: 32, image: "B5.png" },
        { key: "taiClamRamen", name: "鯛魚湯蜆肉拉麵", price: 33, image: "B6.png" },
        { key: "beefUdon", name: "牛肉烏冬", price: 33, image: "B7.png" },
    ];


    // 副餐類清單
    const sideItems = [
        { key: "pepperSauce", name: "青唐辛子燒椒醬", price: 3, image: "0.png" },
        { key: "fries", name: "黃金脆薯", price: 13, image: "1.png" },
        { key: "pumpkinTempura", name: "南瓜天婦羅", price: 13, image: "2.png" },
        { key: "shrimpTempuraSetHalf", name: "炸蝦天婦羅拼盤(半份)", price: 18, image: "3.png" },
        { key: "shrimpTempura", name: "炸蝦天婦羅", price: 18, image: "4.png" },
        { key: "chickenCartilage", name: "炸雞軟骨", price: 19, image: "5.png" },
        { key: "steamedEgg", name: "茶碗蒸", price: 19, image: "6.png" },
        { key: "friedChicken", name: "脆脆炸雞塊", price: 22, image: "7.png" },
        { key: "shrimpTempuraSetFull", name: "炸蝦天婦羅拼盤", price: 28, image: "8.png" },
        { key: "salmonSashimiSet", name: "生三文魚刺身盛", price: 39, image: "9.png" },
        { key: "redShrimpSashimi", name: "赤蝦刺身", price: 39, image: "10.png" },
        { key: "premiumSashimiSet", name: "極上刺身盛合", price: 75, image: "11.png" },
        { key: "salmonBellySashimi", name: "生三文魚腩刺身", price: 48, image: "12.png" },
        { key: "salmonAmberjackBelly", name: "生三文魚腩刺身・寒鰤魚腩刺身", price: 48, image: "13.png" },
    ];

    // 甜品・飲料清單
    const dessertItems = [
        { key: "melonSorbet", name: "蜜瓜味雪葩", price: 13, image: "A1.png" },
        { key: "frozenMango", name: "冷凍芒果", price: 13, image: "A2.png" },
        { key: "milkSoftCookie", name: "牛奶味軟雪糕(有曲奇)", price: 18, image: "A3.png" },
        { key: "milkSoft", name: "牛奶味軟雪糕", price: 18, image: "A4.png" },
        { key: "classicPudding", name: "壽司郎經典布甸", price: 22, image: "A5.png" },
        { key: "catalana", name: "卡達拉娜", price: 22, image: "A6.png" },
        { key: "milleCrepe", name: "千層蛋糕", price: 22, image: "A7.png" },
        { key: "peachMontBlanc", name: "白桃蒙布朗蛋糕", price: 22, image: "A8.png" },
        { key: "matchaParfait", name: "抹茶蕨餅芭菲", price: 27, image: "A9.png" },
        { key: "chocoBerryParfait", name: "朱古力香莓芭菲", price: 27, image: "A10.png" },
        { key: "pepsiZero", name: "百事可樂(無糖)", price: 8, image: "A11.png" },
        { key: "pepsi", name: "百事可樂", price: 8, image: "A12.jpg" },
        { key: "mirinda", name: "美年達橙汁", price: 8, image: "A13.jpg" },
        { key: "sevenUp", name: "七喜", price: 8, image: "A14.png" },
        { key: "vitaLemonTea", name: "維他氣泡檸檬茶", price: 8, image: "A15.png" },
        { key: "appleJuice", name: "100％蘋果汁", price: 8, image: "A16.png" },
        { key: "slimTea", name: "纖解茶", price: 9, image: "A17.png" },
        { key: "kikuMasamune", name: "菊正宗", price: 17, image: "A18.png" },
        { key: "horoyoiGrape", name: "Horoyoi(葡萄味)", price: 19, image: "A19.png" },
        { key: "horoyoiYuzu", name: "Horoyoi(柚子鹽味)", price: 19, image: "A20.jpg" },
        { key: "suntoryBeer", name: "三得利頂級啤酒", price: 24, image: "A21.png" },
        { key: "umeshu", name: "梅酒(含梅子)", price: 27, image: "A22.png" },
        { key: "whiskySoda", name: "威士忌梳打", price: 27, image: "A23.png" },
        { key: "kikuMasamuneDaiginjo", name: "菊正宗(大吟釀)", price: 59, image: "A24.png" },
    ];



    // 狀態：為每個品項建立一個 useState
    const [counts, setCounts] = useState(
        [...noodleSoupItems, ...sideItems, ...dessertItems].reduce((acc, item) => {
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

    // 其他項目清單，每個項目有 price 和 qty
    const [others, setOthers] = useState([{ price: 0, qty: 0 }]);
    const addOther = () => {
        setOthers([...others, { price: 0, qty: 0 }]);
    };

    const updateOther = (index, field, value) => {
        const newOthers = [...others];
        newOthers[index][field] = Number(value);
        setOthers(newOthers);
    };





    // 總計
    const netTotal =
        red * prices.red +
        gold * prices.gold +
        silver * prices.silver +
        black * prices.black +
        white * prices.white +
        [...noodleSoupItems, ...sideItems, ...dessertItems].reduce(
            (sum, item) => sum + counts[item.key] * item.price,
            0
        ) +
        others.reduce((sum, item) => sum + item.price * item.qty, 0);


    const [recipientEmail, setRecipientEmail] = useState("");



    const serviceFee = (netTotal * 0.1).toFixed(2);
    const grossTotal = (netTotal + parseFloat(serviceFee)).toFixed(2);
    const totalItems =
        red +
        gold +
        silver +
        black +
        white +
        [...noodleSoupItems, ...sideItems, ...dessertItems].reduce(
            (sum, item) => sum + counts[item.key],
            0
        ) +
        others.reduce((sum, item) => sum + item.qty, 0);



    const resetAll = () => {
        setRed(0);
        setGold(0);
        setSilver(0);
        setBlack(0);
        setWhite(0);
        setCounts(
            [...sideItems, ...dessertItems].reduce((acc, item) => {
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
            <div className="header">
                <img src="/logo.png" alt="Logo" className="logo" />
                <h1>壽司郎帳單計算器</h1>
            </div>



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

            {/* Accordion - 麵類・湯類 */}
            <h2 onClick={() => toggleSection("noodles")}>
                {openSection === "noodles" ? "▼" : "▶"} 麵類・湯類
            </h2>
            {openSection === "noodles" && (
                <div>
                    {noodleSoupItems.map((item) => (
                        <div key={item.key} className="plate-row">
                            <img
                                src={`${process.env.PUBLIC_URL}/${item.image}`}
                                alt={item.name}
                                className="thumb-icon"
                            />
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
            {/* Accordion - 副餐類  */}
            <h2 onClick={() => toggleSection("sides")}>
                {openSection === "sides" ? "▼" : "▶"} 副餐類
            </h2>
            {openSection === "sides" && (
                <div>
                    {sideItems.map((item) => (
                        <div key={item.key} className="plate-row">
                            <img
                                src={`${process.env.PUBLIC_URL}/${item.image}`}
                                alt={item.name}
                                className="thumb-icon"
                            />
                            <p>
                                {item.name}: {counts[item.key]} (HK$ {counts[item.key] * item.price})
                            </p>
                            <button onClick={() => setCounts({ ...counts, [item.key]: counts[item.key] + 1 })}>+1</button>
                            <button onClick={() => setCounts({ ...counts, [item.key]: counts[item.key] > 0 ? counts[item.key] - 1 : 0 })}>-1</button>
                        </div>
                    ))}


                </div>
            )}

            {/* Accordion - 甜品・飲料 */}
            <h2 onClick={() => toggleSection("desserts")}>
                {openSection === "desserts" ? "▼" : "▶"} 甜品・飲料
            </h2>
            {openSection === "desserts" && (
                <div>
                    {dessertItems.map((item) => (
                        <div key={item.key} className="plate-row">
                            <img
                                src={`${process.env.PUBLIC_URL}/${item.image}`}
                                alt={item.name}
                                className="thumb-icon"
                            />
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



            {/* Accordion - 其他 */}
            <h2 onClick={() => toggleSection("others")}>
                {openSection === "others" ? "▼" : "▶"} 其他
            </h2>
            {openSection === "others" && (
                <div>
                    {others.map((item, index) => (
                        <div key={index} className="plate-row">
                            <label>
                                單價：
                                <input
                                    type="number"
                                    value={item.price}
                                    onChange={(e) => updateOther(index, "price", e.target.value)}
                                />
                            </label>
                            <label>
                                數量：
                                <input
                                    type="number"
                                    value={item.qty}
                                    onChange={(e) => updateOther(index, "qty", e.target.value)}
                                />
                            </label>
                            <p>
                                總計：<span style={{ color: "red" }}>HK$ {item.price * item.qty}</span>
                            </p>
                        </div>
                    ))}
                    <button onClick={addOther}>新增其他項目</button>
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

            <div style={{ marginTop: "20px" }}>
                <label>
                    收件人電郵：
                    <input
                        type="email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        placeholder="輸入電郵地址"
                    />
                </label>
            </div>


            <button
                onClick={() => {
                    if (!recipientEmail) {
                        alert("請輸入收件人電郵地址");
                        return;
                    }

                    // 取得今天日期
                    const today = new Date();
                    const dateStr = today.toLocaleDateString("zh-HK", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    });
                    // 主旨：當天日期 + 壽司郎帳單
                    const subject = `${dateStr} 壽司郎帳單`;

                    // 詳細列出所有細項
                    const details = [
                        red > 0 ? `紅碟: ${red} × HK$${prices.red} = HK$${red * prices.red}` : null,
                        gold > 0 ? `金碟: ${gold} × HK$${prices.gold} = HK$${gold * prices.gold}` : null,
                        silver > 0 ? `銀碟: ${silver} × HK$${prices.silver} = HK$${silver * prices.silver}` : null,
                        black > 0 ? `黑碟: ${black} × HK$${prices.black} = HK$${black * prices.black}` : null,
                        white > 0 ? `白碟: ${white} × HK$${prices.white} = HK$${white * prices.white}` : null,
                        ...noodleSoupItems
                            .filter(item => counts[item.key] > 0)
                            .map(item => `${item.name}: ${counts[item.key]} × HK$${item.price} = HK$${counts[item.key] * item.price}`),
                        ...sideItems
                            .filter(item => counts[item.key] > 0)
                            .map(item => `${item.name}: ${counts[item.key]} × HK$${item.price} = HK$${counts[item.key] * item.price}`),
                        ...dessertItems
                            .filter(item => counts[item.key] > 0)
                            .map(item => `${item.name}: ${counts[item.key]} × HK$${item.price} = HK$${counts[item.key] * item.price}`),
                        ...others
                            .filter(item => item.qty > 0)
                            .map((item, idx) => `其他${idx + 1}: ${item.qty} × HK$${item.price} = HK$${item.qty * item.price}`),
                    ].filter(Boolean).join("\n");



                    const body = `總項目數: ${totalItems}\n總淨金額: HK$${netTotal}\n服務費 (10%): HK$${serviceFee}\n總金額 (含服務費): HK$${grossTotal}\n印花卡: ${Math.floor(grossTotal / 80)} 張\n\n詳細:\n${details}`;

                    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }}
            >
                發送帳單電郵
            </button>


        </div>
    );
}

export default App;