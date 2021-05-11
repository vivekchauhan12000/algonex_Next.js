import Link from 'next/link'

const Navbar=()=>{
  return(
    <nav>
      <div className="logo">
        <h2>Algonex</h2>
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>about</a></Link>
        <Link href="/question"><a>questions</a></Link>

    </nav>
  );
}
export default Navbar;