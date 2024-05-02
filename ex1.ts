import { PublicKeyInput } from "crypto";

const getLength = (text: string /* ✍🏼 ここに型注釈を書きます */) => {
    return text.length;
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  getLength("hello");
  getLength("very long text");
  getLength("");
  
  // ❌ 以下はエラーにしてください
  getLength(10);
  getLength({});
  getLength(null);





  const double = (array: number[] /* ✍🏼 ここに型注釈を書きます */) => {
    return array.map((num) => num * 2);
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  double([1, 2, 3]);
  double([10, 20, 30]);
  double([]);
  
  // ❌ 以下はエラーにしてください
  double(["1", "2", "3"]);
  double([1, "2", null]);
  double(1);
  double({});





  const message = (user: { name: string; age: number } /* ✍🏼ここに型注釈を書きます */) => {
    console.log(
      `${user.name}さん、${user.age}歳です。来年は${user.age + 1}歳ですね。`
    );
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  message({ name: "太郎", age: 30 });
  message({ name: "花子", age: 25 });
  message({ name: "JavaScript", age: 29 });
  message({ name: "TypeScript", age: 11 });
  
  // ❌ 以下はエラーにしてください
  message({ name: "一郎", age: "30" }); // 年齢を文字列で渡しているのでエラーにしたい
  message({ namae: "二郎", age: 30 }); // キーを間違えているのでエラーにしたい
  message({ name: "三郎" }); // 必須のキーが抜けているのでエラーにしたい
  message({ name: "四郎", age: 30, mail: "shiro@example.com" }); // 不要なキーがあるのでエラーにしたい





  const happyBirthday = (birthday: { year?: number; month: number; day: number } /* ✍🏼 ここに型注釈を書きます */) => {
    const today = { year: 2024, month: 1, day: 1 };
    if (today.month === birthday.month && today.day === birthday.day) {
      console.log(
        `ハッピーバースデー！${
          birthday.year
            ? ` ${today.year - birthday.year}歳のお誕生日ですね！`
            : ""
        }`
      );
    } else {
      console.log("お誕生日ではありません。");
    }
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  happyBirthday({ year: 2000, month: 1, day: 1 });
  happyBirthday({ year: 1995, month: 5, day: 9 });
  happyBirthday({ month: 1, day: 1 });
  happyBirthday({ month: 10, day: 10 });
  
  // ❌ 以下はエラーにしてください
  happyBirthday({ year: 2000, month: 1 }); // day がないのでエラーにしたい
  happyBirthday({ year: 1995, day: 31 }); // month がないのでエラーにしたい





  const call = (func: (num :number) => void /* ✍🏼 ここに型注釈を書きます */) => {
    const rand = Math.random() * 10;
    func(rand);
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  call((num) => {
    if (num > 5) {
      console.log(num);
    }
  });
  call(() => {
    // 引数を使わなくてもOK
    console.log("called");
  });
  
  // ❌ 以下はエラーにしてください
  call({}); // 関数以外を渡そうとしているのでエラーにしたい
  call((str) => {
    // 引数を文字列として使おうとしているのでエラーにしたい
    if (str.includes("abc")) {
      console.log(str);
    }
  });
  call((num, num2) => {
    // 存在しない引数を使おうとしているのでエラーにしたい
    console.log("called");
  });





  const isHoliday = (date: Date /* ✍🏼 ここに型注釈を書きます */) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  isHoliday(new Date());
  isHoliday(new Date("2024-02-10"));
  isHoliday(new Date("2017-10-12"));
  
  // ❌ 以下はエラーにしてください
  isHoliday("2024-01-01"); // Date 以外を渡そうとしているのでエラーにしたい
  isHoliday(20381010); // Date 以外を渡そうとしているのでエラーにしたい




  
  const handleKeyDown = (e: KeyboardEvent /* ✍🏼 ここに型注釈を書きます */) => {
    // ✅ 想定通りのコード。エラーにならないようにしてください
    if (e.key === "Enter") {
      console.log("Enter キーが押されました");
    }
  };
  
  document.body.addEventListener("keydown", handleKeyDown);