import Link from 'next/link'
import Image from 'next/image'

const Navbar=()=>{
  return(
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={128} height={120}/>
        <h2>Algonoob</h2>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>about</a></Link>
        <Link href="/question"><a>questions</a></Link>

    </nav>
  );
}
export default Navbar;