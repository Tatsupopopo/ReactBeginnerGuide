let dom = document.querySelector("#root"); // id に該当する要素を取得.

// let element = React.createElement("p", {}, "Hello React Application!"); // タグ, 属性, 組み込まれるテキストを引数にして, 要素を生成.
let element = React.createElement("div", {}, [
  React.createElement("h2", {}, "Hello!"),
  React.createElement(
    "h4",
    { className: "alert alert-primary" },
    "React Sample page"
  ),
  React.createElement("ul", { className: "list-group" }, [
    React.createElement("li", { className: "list-group-item" }, "First item"),
    React.createElement("li", { className: "list-group-item" }, "Second item"),
    React.createElement("li", { className: "list-group-item" }, "Third item"),
  ]),
]);

ReactDOM.render(element, dom); // DOM を引数（仮想DOM）に書き換える.
