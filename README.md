# Section02　仕様書
## ファイル構成

| ファイル名 | 説明 |
|----------|------|
| Section02.js | コンポーネントのメインファイル |
| Section02.module.css | コンポーネントのスタイルシート |
| global.css | グローバルなスタイルを定義するファイル |

## グローバル変数
| 変数名 | 説明 |
|--------|------|
| --container-max-width | コンテナの最大幅 (1140px) |
| --container-padding | コンテナのパディング (30px 15px) |
| --grid-columns | グリッドのカラム数 (12列) |
| --grid-gap | グリッドのギャップ (30px) |
| --grid-auto-rows | グリッドの自動行の高さ (65px) |
| --mobile-grid-columns | モバイル画面でのグリッドのカラム数 (4列) |
| --mobile-grid-gap | モバイル画面でのグリッドのギャップ (10px, 20px) |
| --mobile-container-padding | モバイル画面でのコンテナのパディング (30px 36px) |
| --font-family-gothic | ゴシック体のフォントファミリー |
| --font-family-mincho | 明朝体のフォントファミリー |

## ローカル変数
### セクション全体
| 変数名 | 説明 |
|--------|------|
| --_section-box-background-color | セクションのボックスの背景色 (rgb(20, 20, 24)) |
| --_section-box-border | セクションのボックスのボーダー (1px solid rgb(20, 20, 24)) |
| --_section-background-color | セクションの背景色 (rgb(20, 20, 24)) |
| --_section-text-color | セクションのテキスト色 (white) |
| --_section-font-size | セクションのフォントサイズ (32px) |

### ボックス共通
| 変数名 | 説明 |
|--------|------|
| --_box-display | ボックスのdisplayプロパティ (grid) |
| --_box-justify-content | ボックスのjustify-contentプロパティ (center) |
| --_box-align-items | ボックスのalign-itemsプロパティ (center) |
| --_box-font-weight | ボックスのフォントウェイト (bold) |

### タイトルボックス
| 変数名 | 説明 |
|--------|------|
| --_title-grid-template-rows | タイトルボックスのグリッドの行のテンプレート (1fr 2fr) |
| --_title-grid-template-columns | タイトルボックスのグリッドの列のテンプレート (1fr) |
| --_title-height | タイトルボックスの高さ (100%) |
| --_title-font-family | タイトルボックスのフォントファミリー (明朝体) |
| --_title-row-top-font-size | タイトルボックスの上段のフォントサイズ (28px) |
| --_title-row-bottom-font-size | タイトルボックスの下段のフォントサイズ (48px) |
| --_title-row-bottom-mobile-line-height | モバイル画面でのタイトルボックスの下段の行の高さ (1.8) |
| --_title-row-top-mobile-font-size | モバイル画面でのタイトルボックスの上段のフォントサイズ (16px) |
| --_title-row-bottom-mobile-font-size | モバイル画面でのタイトルボックスの下段のフォントサイズ (26px) |
| --_title-text-align | タイトルボックスのテキストの配置 (left) |
| --_title-justify-content | タイトルボックスのjustify-contentプロパティ (left) |
| --_title-align-items | タイトルボックスのalign-itemsプロパティ (center) |


### テキストボックス
| 変数名 | 説明 |
|--------|------|
| --_text-grid-template-rows | テキストボックスのグリッドの行のテンプレート (3fr 3fr 1fr) |
| --_text-grid-template-columns | テキストボックスのグリッドの列のテンプレート (1fr) |
| --_text-font-family | テキストボックスのフォントファミリー (明朝体) |
| --_text-font-size | テキストボックスのフォントサイズ (21px) |
| --_text-mobile-font-size | モバイル画面でのテキストボックスのフォントサイズ (14px) |
| --_text-position | テキストボックスのpositionプロパティ (relative) |
| --_text-line-height | テキストボックスの行の高さ (2.5) |
| --_text-mobile-line-height | モバイル画面でのテキストボックスの行の高さ (2.5) |
| --_text-text-align | テキストボックスのテキストの配置 (left) |
| --_text-justify-content | テキストボックスのjustify-contentプロパティ (left) |
| --_text-row3-text-decoration | テキストボックスの3行目のテキストの装飾 (solid underline) |
| --_text-row3-text-underline-offset | テキストボックスの3行目のテキストのアンダーラインのオフセット (8px) |
| --_text-row3-cursor | テキストボックスの3行目のカーソルスタイル (pointer) |
| --_text-row3-hover-color | テキストボックスの3行目のホバー時の色 (gray) |


## グリッドレイアウト
- デスクトップ: 12列, ギャップ30px, 自動行の高さ65px
- モバイル: 4列, ギャップ10px または 20px

## 画像
| ファイル名 | 説明 |
|------------|------|
| section02PictureRight.webp | 右側の画像 |
| section02PictureLeft.webp | 左側の画像 |
| section02PictureBottom.webp | 下部の画像（デスクトップ用） |
| section02_mobile_Picuture.webp | 下部の画像（モバイル用） |

## レスポンシブデザイン
- モバイル画面（幅が480px以下）でレイアウトが最適化される
- グリッド, フォントサイズ, 行の高さ, パディング, 画像の表示が調整される

## 未実装
- 481px~1080pxでのレイアウトが未実装
