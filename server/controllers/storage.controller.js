import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + '.jpg')
    }
})

let upload = multer({storage: storage})

upload = upload.single('myFile');

export {upload}

// exports.uploadFile = (req,res) =>{
    
// }
        