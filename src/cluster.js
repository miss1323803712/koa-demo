const cluster = require('cluster')

const app = require('./index')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log("宿主启动...");
  let i = 0;
  for (i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('listening', function (worker, address) {
    console.log('核心' + i + ' pid:' + worker.process.pid);
  });
  cluster.on('exit', function (worker, code, signal) {
    console.log('核心' + i + ' pid:' + worker.process.pid + ' 重启')
    setTimeout(function () {
      cluster.fork()
    }, 2000)
  })
} else {
  app.listen(3000, function () {
    console.log('   Server running at:\n' +
      '   - Local: \u001b[38;5;6m http://localhost:3000/ \u001b[0m \n' +
      '   - Network: \u001b[38;5;6m http://192.168.8.118:3000/ \u001b[0m')
  })
}