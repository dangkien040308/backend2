const path = require('path');
const uploadSingleFile = async (file) => {
    
    let extName = path.extname(file.name)
    let baseName = path.basename(file.name , extName)
    let finalName = `${baseName}-${Date.now()}.${extName}`
    let uploadPath = path.resolve( __dirname , '../public/images/upload', finalName )
    try {
        await file.mv(uploadPath)
        return {
            status : 'success' ,
            path : 'link-image' ,
            error : 'noError'
        }
    } catch(error) {
        return {
            status : 'failed' ,
            path : 'Nolink-image' ,
            error : error
        }
    }
}

const uploadMultipleFile =  (arrayImage) => {
   
        try {
            let resultArr = []
            let count = 0
            arrayImage.forEach( async (image) => {
               
               // image.name = `${image.name}-${Date.now()}`
               let extName = path.extname(image.name)
               let baseName = path.basename(image.name , extName)
               let finalName = `${baseName}-${Date.now()}.${extName}`
               let uploadPath = path.resolve( __dirname , '../public/images/upload', finalName )
               try {
                 await image.mv(uploadPath)
                 resultArr.push({
                    status : 'success' ,
                    path : 'link-image' ,
                    error : 'noError'
                 })
                 count++
               } catch(err) {
                 resultArr.push({
                    status : 'failed' ,
                    path : 'Nolink-image' ,
                    error : error
                 })
               }
            })
           return {
              resultArr : resultArr ,
              count : count 
           }
        } catch(error) {
            
        }
    }

module.exports = {uploadSingleFile,uploadMultipleFile}