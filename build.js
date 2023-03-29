const fs = require('fs')
const path = require('path')

const config = {
  entry: [
    './node_modules/prop-types/prop-types.min.js',
    './node_modules/react/umd/react.production.min.js',
    './node_modules/react-dom/umd/react-dom.production.min.js',
    './node_modules/redux/dist/redux.min.js',
    './node_modules/react-redux/dist/react-redux.min.js',
    './node_modules/redux-actions/dist/redux-actions.min.js',
    './node_modules/redux-saga/dist/redux-saga.umd.min.js',
    './node_modules/react-router/umd/react-router.min.js',
    './node_modules/history/umd/history.min.js',
    './node_modules/react-router-redux/umd/react-router-redux.min.js',
    './node_modules/react-router-config/umd/react-router-config.min.js',
  ],
  output: {
    filename: (t) => `react-vendor.${t}.js`, //输入的文件名是什么，生成的文件名也是什么，默认配置        // filename:'[name].[chunkhash:8].js',//增加8位的哈希值，生成新的动态文件
    path: path.resolve(__dirname, 'dist'), //指定生成的文件目录
  },
}

;((config) => {
  const {
    entry,
    output: { filename, path },
  } = config;
  // clear old files
  const oldFilePaths = fs.readdirSync(path)
  for (const oldFilePath of oldFilePaths) {
    fs.unlinkSync(`${path}/${oldFilePath}`)
  }
  const now = new Date().valueOf()
  const filePath = `${path}/${filename(now)}`
  fs.writeFileSync(filePath, '')
  for (const vendor of entry) {
    const vendorStr = fs.readFileSync(vendor, {
      encoding: 'utf-8'
    })
    fs.appendFileSync(filePath, vendorStr + '\n', {
      encoding: 'utf-8',
    })
  }
})(config)