import pkginfo from 'pkginfo'
import { program } from 'commander'

const pkgInfo = pkginfo(module)

program
  .version(pkgInfo.version)
  .action(function () {
    console.log(`scrapy-node v${pkgInfo.version}`)
  })
  .parse(process.argv)
