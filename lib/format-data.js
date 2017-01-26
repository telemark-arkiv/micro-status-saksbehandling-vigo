'use strict'

module.exports = (data) => {
  let status = []
  status.push({name: 'queue', status: data.queue || 0})
  status.push({name: 'error', status: data.error || 0})
  status.push({name: 'done', status: data.done || 0})
  status.push({name: 'archive', status: data.archive || 0})

  return status
}
