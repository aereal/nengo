const A_YEAR_SECONDS = 60 * 60 * 24 * 365

export class Nengo {
  public readonly startedAt: Date

  constructor(public readonly name: string, startedAt: string) {
    this.startedAt = new Date(Date.parse(startedAt))
  }

  public elapsedYears(from: Date): number {
    const elapsedSecs = from.getTime() / 1000 - this.startedAt.getTime() / 1000
    return Math.floor(elapsedSecs / A_YEAR_SECONDS)
  }
}

export const MEIJI = new Nengo("明治", "1868-01-25")
export const TAISHO = new Nengo("大正", "1912-07-30")
export const SHOWA = new Nengo("昭和", "1926-12-25")
export const HEISEI = new Nengo("平成", "1989-01-07")
export const REIWA = new Nengo("令和", "2019-05-01")

export const nengos = [MEIJI, TAISHO, SHOWA, HEISEI, REIWA]
