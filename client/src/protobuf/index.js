const protobuf = require('protobufjs')
const protoJSON = require('../compiled_protobufs.json')
const root = protobuf.Root.fromJSON(protoJSON)

module.exports =
  Object.keys(root)
    .filter((key) => /^[A-Z]/.test(key))
    .reduce((acc, key) => {
      acc[key] = root[key]
      return acc
    }, {})
