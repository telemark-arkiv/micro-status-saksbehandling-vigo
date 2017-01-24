'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'Queue', status: data.queue || 0})
  status.push({name: 'Error', status: data.error || 0})
  status.push({name: 'Done', status: data.done || 0})
  status.push({name: 'Archive', status: data.archive || 0})

  return status
}
