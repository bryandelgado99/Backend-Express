const cloudinary = require('cloudinary').v2

cloudinary.config({ 
    cloud_name: 'dizvftsqa',
    api_key: 265365855322266,
    api_secret: 'g8QMf8UAQ81UdhMQRZW7mcx7kPY',
    secure: true
});

module.exports.deleteImage = async (publicId)=>{
    return await cloudinary.uploader.destroy(publicId)
}

module.exports.uploadImage = async(filePath) => {
    return await cloudinary.uploader.upload(filePath,{folder:'portafolio'})
}