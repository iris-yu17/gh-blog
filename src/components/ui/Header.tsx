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
    <Navbar
      fluid
      rounded
      className="fixed w-full top-0 left-0 z-50 h-16 shadow"
    >
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">文章列表</NavbarLink>
        <NavbarLink href="/post">新增文章</NavbarLink>
      </NavbarCollapse>
      {session ? (
        <>
          <Button
            onClick={() => {
              signOut();
            }}
          >
            登出：{session.user.name}
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            signIn('github');
          }}
        >
          Github 登入
        </Button>
      )}
    </Navbar>
  );
}

export default Header;
