type Hand = "gu" | "choki" | "pa";// ✍🏼 エラーが出ないように修正してください
const win: Record<Hand, Hand> = {
    gu: "pa",
    choki: "gu",
    pa: "choki",
  };
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  console.log(`グーに勝つ手は${win["gu"]}`);
  console.log(`グーに勝つ手に勝つ手は${win[win["gu"]]}`);
  console.log(`グーに勝つ手に勝つ手に勝つ手は${win[win[win["gu"]]]}`);
  
  // ❌ 以下はエラーにしてください
  console.log(`グーに勝つ手は${win["👌"]}`); // 存在しないキーを参照するとエラーにしたい





// ✍🏼 エラーが出ないように修正してください
const win2 = {
    gu: "pa",
    choki: "gu",
    pa: "choki",
  }as const;
  
  // ✅ 想定通りのコード。エラーにならないようにしてください
  console.log(`グーに勝つ手は${win2["gu"]}`);
  console.log(`グーに勝つ手に勝つ手は${win2[win2["gu"]]}`);
  console.log(`グーに勝つ手に勝つ手に勝つ手は${win2[win2[win2["gu"]]]}`);
  
  // ❌ 以下はエラーにしてください
  console.log(`グーに勝つ手は${win2["👌"]}`); // 存在しないキーを参照するとエラーにしたい





  // ✍🏼 エラーにならないように処理を修正してください
document.querySelectorAll(".special-button").forEach((button) => {
    if ("disabled" in button){
    button.disabled = true;
    }
  });





  try {
    if (new Date().getFullYear() > 2050) {
      throw new Error("未定義です。");
    }
    console.log("Success");
  } catch (e) {
    if(e instanceof Error){// ✍🏼 エラーにならないように処理を修正してください
    console.log(e.message);
    }
  }