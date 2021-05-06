import pkginfo from 'pkginfo'
import { program } from 'commander'

const pkgInfo = pkginfo(module)

program
  .version(pkgInfo.version)
  .command('bench', 'Run quick benchmark test')
  .command('commands', ' ')
  .command('fetch', 'Fetch a URL using the Scrapy downloader')
  .command('genspider', 'Generate new spider using pre-defined templates')
  .command(
    'runspider',
    'Run a self-contained spider (without creating a project)',
  )
  .command('settings', 'Get settings values')
  .command('shell', 'Interactive scraping console')
  .command('startproject', 'Create new project')
  .command('version', 'Print Scrapy version')
  .command('view', 'Open URL in browser, as seen by Scrapy')
  .parse()
