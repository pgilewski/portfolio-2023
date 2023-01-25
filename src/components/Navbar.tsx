import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    // <div style={{ color: match ? '#577AB2' : '#d6d6d6' }} >
    <div
      className={
        match
          ? 'text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 to-sky-600 transition-colors'
          : ''
      }
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
    // </div>
  );
}

const Navbar = () => {
  return (
    <div className="w-full bg-navyDark px-8 py-6 shadow-strong text-lg2">
      <div className="w-full md:px-32  flex flex-row  justify-center m-auto font-semibold md:text-lg">
        <div className="flex flex-row grow-0 whitespace-nowrap   ">
          <CustomLink to="/" className="mx-2 ">
            about me
          </CustomLink>
          <CustomLink to="projects" className="mx-2 ">
            my projects
          </CustomLink>
        </div>
        <div className="flex grow justify-center">
          <CustomLink
            to="contact"
            className="flex flex-row items-center align-middle"
          >
            <div className="mx-2">contact</div>
          </CustomLink>
        </div>
        <div className="flex grow-0">
          <CustomLink
            to="calculator"
            className="flex flex-row items-center align-middle"
          >
            <div className="mx-2">my services</div>
          </CustomLink>
          <CustomLink
            to="resources"
            className="flex flex-row items-center align-middle"
          >
            <div className="mx-2">resources</div>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
