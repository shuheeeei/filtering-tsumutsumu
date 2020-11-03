## 概要
このReact APPは製作者が一時期ハマっていた[ツムツム](https://www.disney.co.jp/fc/tsum.html)(LINE, Disney)において、自分が欲しいと思っていた、キャラクターの検索機能をフロントエンドのみで作成したものです。<br />
自分の力のみで最低限何かアプリを作成しようと思い作成しました。

もしもcloneしてお試ししたい場合には`npm start`を実行し、[http://localhost:3000](http://localhost:3000)を開いてください。


## 機能
ドラッグアンドドロップによるキャラクターの検索機能（2020/11/1現在時点までのキャラクターのみ）


## 使用技術
```
React 16.13
typescript: 3.7
react-beautiful-dnd: 13.0
material-ui: 4.11
```

## 作成時間
[react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)の[チュートリアル](https://github.com/eggheadio-projects/Beautiful-and-Accessible-Drag-and-Drop-with-react-beautiful-dnd-notes)と学習含めて25時間ほど。


## その他
### デプロイおよび初期データの補足
initialData.tsにあるキャラクター情報は、firestoreにデータを置く予定でしたが現在やめています。<br />
この機能はまだ存在していないのでは？という仮説をドヤ顔で立てたものの、すでに存在していたためリリースまでしなくてよい、という判断です。<br />
仮説検証のプロセスに反省と学びを得ました。
キャラクターの画像データは個人のgoogle driveから読み込むように代用しています。

### キャラクターデータはどう集めたのか？
python(3.8.5)とbs4(4.9.3)を使用して、攻略サイトからデータをスクレイピングしました。
あくまで補助機能ため、こちらのブランチには当該コードはあげていません。
