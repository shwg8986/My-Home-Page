# 個人サイト

サイトのURLはこちら：https://shogo-hp.com/
使用技術：TypeScript, React, Firebase

<br>
<br>

## 個人用メモ - サイトの更新方法

・firebase toolsのインストール(初めての時、もしくはアップデートする時に実行する)

```
npm install -g firebase-tools
```
<br>

・firebaseにログイン

```
firebase login
```
<br>

・進めていく

```
firebase init
```
ここでHostingのところで、Spaceキーを押す。選択されているのを確認できたらEnter。
その後、What do you want to use as your public directory? と聞かれるので、buildと入力し、Enter。
以降表示される質問は、全て "N" と答えていく。

<br>
・最後にビルドしてデプロイ

```
yarn build
firebase deploy
```
