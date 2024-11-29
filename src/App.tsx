import "./index.css";
import { useState } from "react";

interface Product{
  name:string;
  price:number;
}

// 商品データ
const beer:Product[] = [
  { name: "中ジョッキ", price: 700 },
  { name: "小ジョッキ", price: 500 },
  { name: "瓶ビール中瓶", price: 700 },
  { name: "ノンアルコールビール", price: 500 },
];

const shochu:Product[] = [{ name: "雲海", price: 850 }];

const wine:Product[] = [{ name: "ワイン", price: 1500 }];

const softDrink:Product[] = [
  { name: "ウーロン茶", price: 300 },
  { name: "オレンジジュース", price: 300 },
  { name: "三ツ矢サイダー", price: 300 },
];

const local:Product[] = [
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


const App = () =>{
  const [total,setTotal] = useState<number>(0);

  const addPrice = (price:number)=>{
    setTotal(total + price);
  };

  const resetTotal = ()=>{
    setTotal(0);
  }

  return (
    <div className="container">
      {/* ヘッダー */}
      <header className="bg-blue-600 text-white py-4 shadow-md text-center">
        <h1 className="text-3xl">注文管理システム</h1>
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

      {/* 商品一覧 */}
      <section className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">飲み物リスト</h2>
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
    </div>
  );
};

export default App;