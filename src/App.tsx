import "./index.css";
import { useState } from "react";

interface Product {
  name: string;
  price: number;
}

// 商品データ
const beer: Product[] = [
  { name: "中ジョッキ", price: 700 },
  { name: "小ジョッキ", price: 500 },
  { name: "瓶ビール中瓶", price: 700 },
  { name: "ノンアルコールビール", price: 500 },
];

const shochu: Product[] = [{ name: "雲海", price: 850 }];

const wine: Product[] = [{ name: "ワイン", price: 1500 }];

const softDrink: Product[] = [
  { name: "ウーロン茶", price: 300 },
  { name: "オレンジジュース", price: 300 },
  { name: "三ツ矢サイダー", price: 300 },
];

const local: Product[] = [
  { name: "出羽燦々", price: 3400 },
  { name: "出羽の里", price: 3300 },
  { name: "大吟醸", price: 1900 },
  { name: "三法師", price: 1500 },
  { name: "桜花生吟醸", price: 1400 },
  { name: "純米吟醸", price: 1200 },
  { name: "一路", price: 1500 },
  { name: "雪漫々", price: 1500 },
  { name: "雄町", price: 800 },
  { name: "欄酒(大)", price: 900 },
  { name: "欄酒(小)", price: 450 },
];

const App = () => {
  const [showBeer, setShowBeer] = useState<boolean>(false);
  const [showShochu,setShowShochu] = useState<boolean>(false);
  const [showWine,setShowWine] = useState<boolean>(false);
  const [showSoftDrink,setShowSoftDrink] = useState<boolean>(false);
  const [showLocal, setShowLocal] = useState<boolean>(false);

  const [total, setTotal] = useState<number>(() =>{
    const savedTotal = localStorage.getItem("total");
    return savedTotal ? Number(savedTotal) : 0;
  });


  const addPrice = (price: number) => {
    const newTotal = total + price;
    setTotal(newTotal);
    localStorage.setItem("total",newTotal.toString());
  };

  const resetTotal = () => {
    setTotal(0);
    localStorage.removeItem("total");
  };

  return (
    <div className="container text-center">
      {/* ヘッダー */}
      <header className="bg-blue-600 text-white py-4 shadow-md text-center">
        <h1 className="text-3xl">Organizer System</h1>
      </header>

      {/* 現在の金額 */}
      <section className="my-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">現在の金額</h2>
          <p className="text-lg font-bold text-blue-600">￥{total}</p>
          <button
            onClick={resetTotal}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            削除
          </button>
        </div>
      </section>

      <h2 className="text-xl font-semibold mb-4">飲み物リスト</h2>

      {/* 商品一覧 */}
      {/* ビール ----------------------------------------*/}
      <button className="bg-yellow-300 text-black px-3 py-2 rounded font-bold w-1/2 mb-3" onClick={() => setShowBeer(!showBeer)}>
        ビール（KIRIN）
      </button>
      {showBeer &&(
        <section className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {beer.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => addPrice(item.price)}
                  className="bg-yellow-300 text-black px-3 py-2 rounded font-bold w-full"
                >
                  {item.name} ￥{item.price}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <br />
      {/* 焼酎 ---------------------------------------------- */}
      <button className="bg-pink-300 text-black px-3 py-2 rounded font-bold w-1/2 mb-3" onClick={() => setShowShochu(!showShochu)}>
        焼酎
      </button>
      {showShochu &&(
        <section className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {shochu.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => addPrice(item.price)}
                  className="bg-pink-300 text-black px-3 py-2 rounded font-bold w-full"
                >
                  {item.name} ￥{item.price}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      <br />
      {/* ワイン-------------------------------------------------- */}
      <button className="bg-red-500 text-black px-3 py-2 rounded font-bold w-1/2 mb-3" onClick={() => setShowWine(!showWine)}>
        ワイン
      </button>
      {showWine &&(
        <section className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {wine.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => addPrice(item.price)}
                  className="bg-red-500 text-black px-3 py-2 rounded font-bold w-full"
                >
                  {item.name} ￥{item.price}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

<br />

{/* ソフトドリンク-------------------------------------------- */}
<button className="bg-blue-500 text-black px-3 py-2 rounded font-bold w-1/2 mb-3" onClick={() => setShowSoftDrink(!showSoftDrink)}>
        ソフトドリンク
      </button>
      {showSoftDrink &&(
        <section className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {softDrink.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => addPrice(item.price)}
                  className="bg-blue-500 text-black px-3 py-2 rounded font-bold w-full"
                >
                  {item.name} ￥{item.price}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

<br />

      {/* 地酒----------------------------------------- */}
      <button className="bg-stone-400 text-black px-3 py-2 rounded font-bold w-1/2 mb-3" onClick={() => setShowLocal(!showLocal)}>
        地酒
      </button>
      {showLocal &&(
        <section className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {local.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <button
                  onClick={() => addPrice(item.price)}
                  className="bg-stone-400 text-black px-3 py-2 rounded font-bold w-full"
                >
                  {item.name} ￥{item.price}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};

export default App;
