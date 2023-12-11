import imagen from "../assets/error404.jpg"

const Error404 = () => {

    

    return(
        <>
        <div className="flex justify-center w-[100%]">
            <img src={imagen} alt="" className="w-[20%] mt-[15%]" />
        </div>
        </>
    )
}

export default Error404