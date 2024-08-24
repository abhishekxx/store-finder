import logo from './../../assets/logo.png'

const AppHeader = () => {
  return (
        <div className="flex ">
            <div>
                <img className='w-full h-auto' src={logo} alt="logo"/>
            </div>
            
            <span className='text-2xl py-3.5'>STOREFINDER</span>
        </div>
  )
}

export default AppHeader