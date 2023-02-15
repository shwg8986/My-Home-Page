# 個人サイト

サイトのURLはこちら：https://shogo-hp.com/
使用技術：TypeScript, React, Firebase

5ヶ月間ほどTypeScript(React)を用いたフロントエンドのエンジニアインターンとして勤務しておりました。
そのインターンでMaterial UIというフレームワークが使用されていたので、勉強も兼ねて作成した個人サイトになります。（そのため、このサイトの大部分をMaterial UIを用いて作成しています。）

## 個人メモ、サイトの更新方法

・firebaseにログイン
```
firebase login
```

・進めていく
```
firebase init
```
ここでHostingのところで、Spaceキーを押して、その後Enter。
そのあとWhat do you want to use as your public directory?と聞かれるので、buildと入力し、Enter。
その後の質問は全て$N$と答えていく。

・最後にビルドしてデプロイ
```
yarn build
firebase deploy
```

