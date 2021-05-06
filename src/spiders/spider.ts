import { Request } from '../http/request'

export class Spider {
  private name: string = null
  private startUrls: string[] = []

  constructor(name, args) {
    if (name) {
      this.name = name
    }
  }

  static fromCrawler() {
  }

  // 开始请求
  * startRequests() {
    if (this.startUrls.length < 1) {
      return []
    }

    for (const url of this.startUrls) {
      yield new Request(url)
    }
  }
}
