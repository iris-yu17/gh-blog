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
    <Navbar fluid rounded>
      <NavbarToggle />
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

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href={`https://github.com/login/oauth/authorize?scope=user:email&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          Log in
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
