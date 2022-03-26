import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // ul生成
  const ul = document.createElement("ul");
  ul.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(ul)を未完了から削除
    deleteFromImcompleteList(completeButton.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // ul以下を初期化
    addTarget.textContent = null;

    // liタグを作成
    const li = document.createElement("li");
    li.innerText = text;

    // buttunタグを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(ul)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);
    });

    // divタグの子要素に各要素を作成
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(ul)を未完了から削除
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  // 未完了リストから指定の要素を削除
  const deleteFromImcompleteList = (target) => {
    // 押された削除ボタンの親タグ(ul)を未完了から削除
    document.getElementById("incomplete-list").removeChild(target);
  };

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);
  ul.appendChild(completeButton);
  ul.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};

// 未完了リストに追加する関数

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
