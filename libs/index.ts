export type NumberType = 'percentage' | 'number'
export class LTVCalculator {
  // パーセントか実数かのデフォルト設定
  private readonly defaultNumberType: NumberType = 'percentage'

  // 平均継続期間
  private averageDuration: number = 0

  // ARPU (Average Revenue Per User)
  private arpu: number = 0

  // LTV
  private ltv: number = 0
  
  // Churn rate
  private churnRate: number = 0

  /**
   * ARPUを計算する
   * @param {number} arpu 
   */
  public setARPU(arpu: number): this {
    this.arpu = arpu
    return this
  }

  /**
   * ARPUを計算する
   * 値を取得したい場合はgetARPU()を使用する
   * 
   * @param {number} sales 売り上げ
   * @param {number} user ユーザー数
   */
  public calcARPU(sales: number, user: number): this {
    const arpu = sales / user
    this.setARPU(arpu)
    return this
  }

  /**
   * ARPUを取得する
   * 引数を渡せば計算した結果を渡す
   * 
   * @param [number] sales 売り上げ
   * @param [number] user ユーザー数
   */
  public getARPU(sales?: number, user?: number) {
    if (sales && user) this.calcARPU(sales, user)
    return this.arpu
  }

  /**
   * 解約率をセットする
   * @param {number} rate 
   */
  public setChurnRate(rate: number): this {
    this.churnRate = rate
    return this
  }

  /**
   * 解約率を取得する
   */
  public getChurnRate(): number {
    return this.churnRate
  }

  /**
   * 解約率から平均継続期間を計算する
   * 
   * @param {number} churnRate 
   */
  public calcAverageDurationByChurnRate(churnRate?: number, type: NumberType = this.defaultNumberType): this {
    const rate = churnRate || this.churnRate
    this.averageDuration = type === 'percentage' ? 1 / (rate / 100) : 1 / rate
    return this
  }

  /**
   * 平均継続期間を取得する
   * 1 / (churn rate(%) * 100)
   */
  public getAverageDurationByChurnRate(churnRate?: number, type?: NumberType): number {
    if (churnRate) this.calcAverageDurationByChurnRate(churnRate, type)
    return this.averageDuration
  }

  /**
   * 平均継続期間をセットする
   * @param {number} duration 
   */
  public setAverageDuration(duration: number): this {
    this.averageDuration = duration
    return this
  }

  /**
   * LTVを計算する
   */
  public calcLTV(averageDuration?: number, arpu?: number): this {
    this.ltv = (averageDuration || this.averageDuration) * (arpu || this.arpu)
    return this
  }

  /**
   * LTVを取得する
   * Average duration * ARPU = LTV
   */
  public getLTV(averageDuration?: number, arpu?: number): number {
    this.calcLTV(averageDuration, arpu)
    return this.ltv
  }
}