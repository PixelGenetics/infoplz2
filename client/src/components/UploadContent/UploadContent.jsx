const UploadContent = () =>{
    return(
        <>
            <form action="/profile" method="post" encType="multipart/form-data">
                <input type="file" name="imagen"/>
                <button type="submit">Enviar</button>
            </form>
            <p>Hola mundo</p>
        </>
    )
}

export default UploadContent