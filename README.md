## takeout_functions
*架空*飲食物持ち帰りサービスのFirebase Cloud Functions部分

## 環境構築

1. Firebaseにおいてプロジェクトを作成する. (プロジェクトIDを覚えておく)<br>
※料金プランはBlazeにしておく.
1. コマンドを入力
```bash
# packageのインストール
$ npm install

# Firebase CLI をインストール
$ npm install -g firebase-tools

# Firebase にログイン
$ firebase login

# プロジェクトを設定
$ firebase use <プロジェクトID>

# Functions をデプロイ
$ firebase deploy
```

## takeout_functions
Code of Firebase Cloud Functions in *imaginary* food takeout service.

## Build Setup
1. Create your project in Firebase. (Remember its project_ID)<br>
Note that the pricing plan in your project have to be *Blaze Plan*.
2. Run the following commands.
```bash
# Install dependencies
$ npm install

# Install Firebase CLI
$ npm install -g firebase-tools

# Log in to Firebase
$ firebase login

# Set your project_ID
$ firebase use <project_ID>

# Deploy Firebase Cloud Functions
$ firebase deploy
```
