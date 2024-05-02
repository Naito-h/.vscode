let isScrolled: boolean; // ✍🏼 型注釈を追加してください

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    // ✅ 想定通りのコード。エラーにならないようにしてください
    isScrolled = true;
  } else {
    // ❌ エラーにしてください
    //isScrolled = "NO";
    isScrolled = false;
  }

  if (isScrolled) {
    console.log("スクロールされました");
  }
});




const checkSuccess = (input: string): boolean /* ✍🏼 返り値の型を設定してください */ => {
    if (input === "error") {
      //return; // ❌ false を返すのを忘れているのでエラーにしてください
      return false;
    }
    return true; // ✅ 想定通りのコード。エラーにならないようにしてください
  };




  const getDayMessage = (
    day: "MON"| "TUE"| "WED"| "THU"| "FRI"| "SAT"| "SUN" // ✍🏼 この型を修正してください
  ) => {
    switch (day) {
      case "MON":
      case "TUE":
      case "WED":
      case "THU":
      case "FRI": {
        return "平日です";
      }
      case "SAT":
      case "SUN": {
        return "休日です";
      }
      default: {
        return;
      }
    }
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  console.log(getDayMessage("MON")); // "平日です"
  console.log(getDayMessage("SUN")); // "休日です"
  
  // ❌ 以下はエラーにしてください
  console.log(getDayMessage("ABC"));
  console.log(getDayMessage("mon"));
  console.log(getDayMessage("Friday"));
  console.log(getDayMessage("SATURDAY"));




  const addItem = (array: readonly number[] /* ✍🏼 この型を修正してください */) => {
    // ❌ 元の配列を変更してしまうため、エラーにしたい
    //array.push(4);
    return [...array, 4];
  };
  
  const original = [1, 2, 3];
  const newArray = addItem(original);
  console.log(newArray); // [1, 2, 3, 4]
  console.log(original); // （変更するつもりがなかったにも関わらず） [1 ,2, 3, 4] になってしまいます




  const dateList: `${number}/${number}/${number}`[] /* ✍🏼 この型を修正してください */ = [
    // ✅ 以下は想定通りの形式。エラーにならないようにしてください
    "2001/8/24",
    "2006/11/30",
    "2009/9/1",
  
    // ❌ 以下はエラーにしたいです
    "2012-8-16", // 区切り文字が違うのでエラーにしたい
    "20150729", // 区切り文字がないのでエラーにしたい
    "2021/10", // 日の部分がないのでエラーにしたい
  ];





  type NavItem = {
    label: string;
    href: `/${string}`| `${"http" | "https"}://${string}`; // ✍🏼 この型を修正してください
  };
  
  const items2: NavItem[] = [
    // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "AbeHiroshi", href: "http://abehiroshi.la.coocan.jp/" },
    { label: "Google", href: "https://www.google.com" },
    { label: "Twitter (Currently X)", href: "https://twitter.com" },
  
    // ❌ 以下はエラーにしてください
    { label: "Contact", href: "contact" },
    { label: "Contact", href: "./contact" },
    { label: "Example", href: "www.example.com" },
  ];




  type Pokemon = {
    name: string;
    type: [string] | [string, string]; // ✍🏼 この型を修正してください
  };
  
  // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
  const pikachu: Pokemon = {
    name: "ピカチュウ",
    type: ["でんき"],
  };
  const charizard: Pokemon = {
    name: "リザードン",
    type: ["ほのお", "ひこう"],
  };
  
  // ❌ 以下はエラーにしたいです
  const typeNull: Pokemon = {
    name: "タイプ：ヌル",
    // 要素数が0なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
    type: [],
  };
  const lugia: Pokemon = {
    name: "ルギア",
    // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はエスパー・ひこうタイプです）
    type: ["エスパー", "ひこう", "みず"],
  };
  const terapagos: Pokemon = {
    name: "テラパゴス",
    // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
    type: ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"],
  };




  const headOfHead = (array: [string, ...string[]]/* ✍🏼 この型を修正してください */) => {
    return array[0].charAt(0);
  };
  
  // ✅ 想定通りのコード
  console.log(headOfHead(["test"])); // t が出力されます
  console.log(headOfHead(["hello", "world"])); // h が出力されます
  console.log(headOfHead(["Alpha", "Bravo", "Charlie", "Delta"])); // A が出力されます
  
  // ❌ 以下がエラーになれば正解です
  console.log(headOfHead([])); // 実行時にエラーになります




type Shape = | {type: "circle"; radius: number} | {type: "square"; side: number};  // ✍🏼 この型を修正してください
  
  const getArea = (shape: Shape) => {
    switch (shape.type) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.side ** 2;
    }
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  console.log(getArea({ type: "circle", radius: 3 }));
  console.log(getArea({ type: "square", side: 4 }));
  
  // ❌ 以下はエラーにしてください
  console.log(getArea({ type: "circle" })); // radius がないのでエラーにしたい
  console.log(getArea({ type: "square" })); // side がないのでエラーにしたい
  console.log(getArea({ type: "circle", radius: 2, side: 4 })); // 余計なプロパティがあるのでエラーにしたい
  console.log(getArea({ type: "triangle" })); // 存在しない type なのでエラーにしたい




  // ✍🏼 この型を修正してください
type Result =  | { error: false; value: number } | { error: true; message: string };
  
  const sqrt = (input: number): Result => {
    if (input < 0) {
      // ✅ 想定通りのコード
      return { error: true, message: "負の数は受け付けません" };
    } else if (input === 0) {
      // ❌ valueを含めていないためエラーにしてください
      return { error: false };
    } else if (input === 1) {
      // ❌ 不要なプロパティを含めているためエラーにしてください
      return { error: false, value: 1, message: "√1 はちょうど1です" };
    } else {
      // ✅ 想定通りのコード
      return { error: false, value: Math.sqrt(input) };
    }
  };