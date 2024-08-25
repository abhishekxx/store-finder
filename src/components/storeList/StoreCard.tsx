
const StoreCard = () => {
  return (
    <div className='gap-2 md:grid md:grid-cols-3'>
    {["1","2","3","4"].map((el:string) => (
    <div key={el} className="flex flex-col items-center gap-5 p-2 bg-white border border-r-4 border-gray-200 rounded-lg shadow md:mt-2 md:flex-row md:max-w-lg hover:bg-gray-100">
        <div className="">
            <img src="https://images.pexels.com/photos/2260827/pexels-photo-2260827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='store-image' className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"/>
        </div>

        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">Store Name</h5>
            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">Store Address</span>
            <div className="py-">
                <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</button>
            </div>
        </div>
    </div>
    ))}
    </div>
  )
}

export default StoreCard