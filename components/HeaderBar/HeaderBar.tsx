import Link from "next/link";

interface HeaderBarProps {
  title: string;
  subtitle?: string;
}

export default function HeaderBar({ title, subtitle }: HeaderBarProps) {
  return (
    <div>
      {/* TODO Consider making this a breadcrumb trail */}
      <h1>
        <Link href="/">{title}</Link>
      </h1>
      {subtitle && <h2>{subtitle}</h2>}

      {/* Dropdown settings */}
      <nav>
        <ul>
          {/* TODO Only show if current path is not / already */}
          <li>
            <Link href="/">See Catalog</Link>
          </li>
          <li>
            <button onClick={() => "use firebase and oauth!!"}>
              Login/Logout
            </button>
          </li>
          <li>
            <Link href={`/users/[user-id-here]`}>User Profile</Link>
          </li>
          <li>
            <Link href="/me">My settings</Link>
          </li>
          <li>
            <Link href="/admin">Admin Board</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
