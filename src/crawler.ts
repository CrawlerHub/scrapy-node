export class Crawler {
  // 是否采集中
  private crawling: boolean = false

  constructor() {
    if (this.crawling) {
      throw Error('Crawling already taking place')
    }
    this.crawling = true

    try {
    } catch (e) {}
  }

  // 开始采集
  crawl() {}
}
