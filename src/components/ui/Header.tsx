'use client';

import Link from 'next/link';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { signIn, signOut } from 'next-auth/react';

function Header(props) {
  const { session } = props;
  return (
    <Navbar fluid rounded className="fixed w-full top-0 left-0 z-50 h-16 shadow">
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="/article">Article List</NavbarLink>
        <NavbarLink href="/post">Create New Post</NavbarLink>
      </NavbarCollapse>
      {session ? (
        <>
          <Button
            onClick={() => {
              signOut();
            }}
          >
            Log out: {session.user.name}
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            signIn('github');
          }}
        >
          Log in with github
        </Button>
      )}
    </Navbar>
  );
}

export default Header;
