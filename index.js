var exportObject = {}
const fs = require('fs')
const path = require('path')
const os = require('os')

const backupFilePath = path.join(os.homedir(), 'Desktop/simplenote-backup.json')
const dbHandle = indexedDB.open('simplenote', 42)

dbHandle.onerror = function (event) {
  console.log('oh noes', event)
}

dbHandle.onsuccess = function (event) {
  const db = event.target.result
  const transaction = db.transaction(db.objectStoreNames, 'readonly')
  transaction.onerror = function (event) {
    console.log('transaction error', event)
  }

  Object.values(db.objectStoreNames).forEach(storeName => {
    var allObjects = []
    transaction.objectStore(storeName).openCursor().onsuccess = function (
      event
    ) {
      var cursor = event.target.result
      if (cursor) {
        allObjects.push(cursor.value)
        cursor.continue()
      } else {
        exportObject[storeName] = allObjects
        if (db.objectStoreNames.length === Object.keys(exportObject).length) {
          fs.writeFileSync(
            backupFilePath,
            JSON.stringify(exportObject, null, 2)
          )
          console.log('wrote backup file', backupFilePath)
        }
      }
    }
  })
}
