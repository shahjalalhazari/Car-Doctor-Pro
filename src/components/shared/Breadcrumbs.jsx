import Link from "next/link";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="absolute bottom-0 left-1/2 flex items-center space-x-2 text-white bg-primary -translate-x-1/2 px-7 py-3 rounded-t-lg">
      <Link href="/" className="hover:underline transition-colors duration-200">
        Home
      </Link>
      <span className="text-white">/</span>
      <span className="text-white font-medium text-sm opacity-70">{title}</span>
    </div>
  );
};

export default Breadcrumbs;
