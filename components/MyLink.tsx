import Link from "next/link";

interface MyLinkProps {
  categories: string[];
  id?: string;
  label: string;
}

export default function MyLink({ categories, id, label }: MyLinkProps) {
  const categoriesPath = categories.join("-");
  const href = id ? `/${categoriesPath}/${id}` : `/${categoriesPath}`;

  return <Link href={href}>{label}</Link>;
}

function getCategoryPath({ categories }) {
  const categoriesPath = categories.join("-");
  return categoriesPath;
}
