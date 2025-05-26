# is-iibun

[![npm version](https://badge.fury.io/js/is-iibun.svg)](https://badge.fury.io/js/is-iibun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

数値が偶数かどうかを判定する革新的なライブラリです。ただし、時と場合によっては奇数も偶数として扱います。

## 特徴

- 🎯 高精度な偶数判定（偶数の場合）
- 🎭 奇数に対する創造的な解釈

## インストール

```bash
npm install is-iibun
bun install is-iibun
pnpm i is-iibun
yarn add is-iibun
```

## 使い方

### プログラムから使用

```javascript
import { isIibun } from 'is-iibun';

console.log(isIibun(2));    // "2は偶数です（当たり前）"
console.log(isIibun(3));    
console.log(isIibun(7));    
console.log(isIibun(1.5));  
```

### CLIから使用

```bash
npx is-iibun 42
# 42は偶数です（当たり前）

npx is-iibun 13
# 13は素数なので、偶数奇数の概念を超越してます
```

## 判定ロジック

このライブラリの判定ロジックは、一般的な数学の定義とは異なる独自の解釈を採用しています。詳細な判定ルールについては、実装をご覧ください。

## 貢献

プルリクエストや Issue の報告を歓迎します！より創造的な偶数判定ロジックのアイデアがあれば、ぜひご提案ください。

## ライセンス

MIT

## 作者

[@ryoppippi](https://github.com/ryoppippi)

## 免責事項

このライブラリは数学的に正確な偶数判定を保証するものではありません。重要な計算には使用しないでください。
