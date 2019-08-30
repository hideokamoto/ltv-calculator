# LTV calculator

LTV / 平均継続期間 / ARPU(Average Revenue Per User)を計算するライブラリです。

## 計算式参考

ユーザの平均継続期間が「1/解約率」で求められることの数学的証明:https://migi.hatenablog.com/entry/churn-formula

## API Docs
https://hideokamoto.github.io/ltv-calculator/

## ARPUの計算

```typescript
import LTVCalculator from 'ltv-calculator'
const client = new LTVCalculator()

// 売り上げが100単位・ユーザー数が10単位の時、ARPUは10単位
const arpu = client.calcARPU(100, 10).getARPU()
expect(arpu).toEqual(10)

// ショートハンドル
const arpu = client.getARPU(100, 10)
expect(arpu).toEqual(10)
```

## 解約率からの平均継続期間の計算

1 / 解約率で計算。

```typescript
import LTVCalculator from 'ltv-calculator'
const client = new LTVCalculator()

// 解約率10%の時、平均継続期間は10単位 
const averageDuration = client
  .calcAverageDurationByChurnRate(10)
  .getAverageDurationByChurnRate()
expect(averageDuration).toEqual(10)

// ショートハンドル版
const averageDuration = client
  .getAverageDurationByChurnRate(10)
expect(averageDuration).toEqual(10)

// 解約率10%の時、平均継続期間は10単位（単位を明示的に設定する）
const averageDuration = client
  .calcAverageDurationByChurnRate(10, 'percentage')
  .getAverageDurationByChurnRate()
expect(averageDuration).toEqual(10)

// ショートハンドル版
const averageDuration = client
  .getAverageDurationByChurnRate(10, 'percentage')
expect(averageDuration).toEqual(10)

// 解約率0.1(10%)の時、平均継続期間は10単位（パーセントではなく数値でも指定できる）
const averageDuration = client
  .calcAverageDurationByChurnRate(0.1, 'number')
  .getAverageDurationByChurnRate()
expect(averageDuration).toEqual(10)

// ショートハンドル版
const averageDuration = client
  .getAverageDurationByChurnRate(0.1, 'number')
expect(averageDuration).toEqual(10)
```

## LTVの計算

平均継続期間 * ARPUで計算する。

```typescript
// 売り上げが100単位・ユーザー数が10単位の時、ARPUは10単位
// 解約率10%の時、平均継続期間は10単位 
// LTV (平均継続期間 * ARPU)は 10 * 10 = 100単位
const arpu = client.calcARPU(100, 10)
    .calcAverageDurationByChurnRate(10)
    .getLTV()

expect(arpu).toEqual(100)
```

## contribution

```bash
// clone
$ git clone git@github.com:hideokamoto/sequential-promise.git
$ cd sequential-promise

// setup
$ yarn

// Unit test
$ yarn test
or
$ yarn run test:watch

// Lint
$ yarn run lint
or
$ yarn run lint --fix

// Build
$ yarn run build

// Rebuild docs
$ yarn run doc
```