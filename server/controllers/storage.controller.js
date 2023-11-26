import multer from "multer";
const upload = (req, res) => {
    const storage = multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,'uploads')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname + '-' + Date.now() + '.jpg')
        }
    })

   // storage()

    let upload_file = multer({storage: storage})

    upload_file = upload_file.single('myFile');


    res.status(200).json({message: "message okey"})

// exports.uploadFile = (req,res) =>{
    
// }
        
}

export {upload}