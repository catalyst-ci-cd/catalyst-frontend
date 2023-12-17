import { useState } from 'react';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Editor', path: '/dashboard/editor' },
  { name: 'Workflows', path: '/dashboard/workflows' },
  { name: 'Workflows Runs', path: '/dashboard/' },
  { name: 'Jobs', path: '/dashboard/jobs/' },
];

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState<string>('Workflows');
  return (
    <div className="p-5 w-[300px] bg-secondary text-white">
      <h3>Catalyst</h3>
      <ul className="p-4">
        {pages.map(page => (
          <li
            key={page.name}
            className={`p-2 my-3 rounded-lg ${
              selectedPage === page.name ? 'bg-gray-600' : 'hover:bg-gray-700'
            }`}
          >
            <Link
              to={page.path}
              className="cursor-pointer w-full block"
              onClick={() => setSelectedPage(page.name)}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
