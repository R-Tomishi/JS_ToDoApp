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

  // ulタグの子要素に各要素を設定
  ul.appendChild(li);

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(ul);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
