import Link from 'next/link'
import ProfileDd from './ProfileDd'
import SignIn from './SignIn'

export default function Header() {
  // const [user, loading, error] = useAuthState(auth)
  //uncomment it ^ when Firebase is set up
  
  return (
    <nav className="bg-grey-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-grey-100 hover:text-primary p-4">CodeClan</span>
        </Link>
        <div className="items-center justify-between flex" id="navbar-user">
          <ul className="flex font-medium p-4 rounded-lg space-x-8">
            <li>
              <Link href={'/'} className='hover:text-primary border-b-2 border-b-transparent hover:border-b-primary py-5 transition'>Home</Link>
            </li>
            <li>
              <Link href={'/katas'} className='hover:text-primary border-b-2 border-b-transparent hover:border-b-primary py-5 transition'>Katas</Link>
            </li>
          </ul>
        </div>
        {/* { user ? <ProfileDd /> : <SignIn /> } */}
        {/* uncomment it ^ when Firebase is set up */}
      </div>
    </nav>
  )
}