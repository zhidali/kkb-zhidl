const fs = require('fs');
module.exports.parser = path => {
    // 暗号 二分查找
    const readStream = fs.createReadStream(path)
    let reqData = [];
    let size = 0;
    return new Promise(resolve => {
        readStream.on('data', data => {
            reqData.push(data);
            size += data.length;
        })
        readStream.on('end', () => {
            const data = Buffer.concat(reqData, size);
            resolve(JSON.parse(data.toString()))
        })
    })
}
