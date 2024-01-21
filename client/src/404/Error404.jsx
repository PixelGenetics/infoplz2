import imagen from "../assets/error404.jpg"

const Error404 = () => {
console.log('.')

    return(
        <>
        <div className="">
            <h2>Te has encontrado con un error</h2>
            <img src={imagen} alt="" className="" />
        </div>
        </>
    )
}

export default Error404