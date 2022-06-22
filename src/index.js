import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divを追加
  const div = document.createElement("div");
  div.className = "list-row";

  //liを追加
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ作成
  const compleButton = document.createElement("button");
  compleButton.innerText = "完了";
  compleButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    delteFromIncomeliteList(compleButton.parentNode);

    //完了リストに追加する要素
    const addTarget = compleButton.parentNode;

    //TODO内容テキストを取得
    const addText = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = addText;

    //戻すボタンを追加
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    delteFromIncomeliteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compleButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の用差を削除
const delteFromIncomeliteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
