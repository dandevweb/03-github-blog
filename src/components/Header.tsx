import logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="bg-header-cover w-full h-[296px] bg-no-repeat bg-cover py-16 flex justify-center items-start">
      <img className='w-36' src={logo} alt="" />
    </header>
  )
}
