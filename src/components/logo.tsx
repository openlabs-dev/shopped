import { Link } from 'wouter'

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="logo official for shopped"
        className="w-32 lg:w-44"
      />
    </Link>
  )
}