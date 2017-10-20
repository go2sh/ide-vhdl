const {AutoLanguageClient} = require('atom-languageclient')
const cp = require('child_process')

class VHDLLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.vhdl' ] }
  getLanguageName () { return 'VHDL' }
  getServerName () { return 'vhdl-ls' }

  startServerProcess () {
    const childProcess = cp.spawn("C:\\Projekte\\af\\vhdl-ls\\build\\src\\Debug\\vhdl-ls.exe")
    return childProcess
  }
}

module.exports = new VHDLLanguageClient()
