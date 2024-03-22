import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { toast } from 'react-toastify';
import logo from '../assets/logo.webp';

const pages = [
  { name: 'Add Workflow', path: '/workflows/add-workflow' },
  { name: 'Workflows', path: '/workflows' },
  { name: 'Workflows Runs', path: '/workflows/runs' },
];

const Sidebar = () => {
  const [selectedPage, setSelectedPage] = useState<string>();
  const [openSidebarDrawer, setOpenSidebarDrawer] = useState(false);
  useEffect(() => {
    const path = window.location.pathname;
    const page = pages.find(page => page.path === path);
    if (page) {
      setSelectedPage(page.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname]);
  return (
    <>
      <div className="hidden p-5 w-[300px] bg-secondary text-white lg:flex lg:flex-col">
        <img src={logo} alt="Catalyst" className=" w-40 mx-auto" />
        <ul>
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

        <button
          className="primary-btn"
          onClick={() => {
            localStorage.removeItem('token');
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          Sign Out
        </button>
      </div>
      <div className="lg:hidden fixed right-4 top-4 z-10">
        <button
          onClick={() => setOpenSidebarDrawer(true)}
          className="text-white text-3xl p-2 m-3 border border-solid border-tertiary bg-secondary rounded-lg "
        >
          <IoMenu />
        </button>
      </div>
      <Drawer
        className="[&>.MuiDrawer-paper]:p-5 [&>.MuiDrawer-paper]:bg-secondary [&>.MuiDrawer-paper]:w-[300px] text-white flex flex-col"
        open={openSidebarDrawer}
        onClose={() => setOpenSidebarDrawer(false)}
      >
        <img src={logo} alt="Catalyst" className=" w-40 mx-auto" />
        <ul>
          {pages.map(page => (
            <li
              key={page.name}
              className={`p-2 my-3 rounded-lg text-white ${
                selectedPage === page.name ? 'bg-gray-600' : 'hover:bg-gray-700'
              }`}
            >
              <Link
                to={page.path}
                className="cursor-pointer w-full block"
                onClick={() => {
                  setSelectedPage(page.name);
                  setOpenSidebarDrawer(false);
                }}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="primary-btn"
          onClick={() => {
            localStorage.removeItem('token');
            toast.success('Logged out successfully');
            window.location.href = '/login';
          }}
        >
          Sign Out
        </button>
      </Drawer>
    </>
  );
};

export default Sidebar;
