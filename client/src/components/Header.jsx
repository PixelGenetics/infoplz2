const Header = () =>{
    return(
    <>
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  '>

   <div>
        <ul className='flex flex-row gap-20 justify-center pt-5 pb-5'>
            <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Home</li></button>
            <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Articulos</li></button>
            <button><li className='border-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-1 rounded-md shadow-xl'>Linkedin</li></button>
        </ul>
    </div>

    </div>
    </>
    )
}

export default Header