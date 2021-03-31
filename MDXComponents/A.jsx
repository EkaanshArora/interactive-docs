import React from 'react';
import Link from '../components/Link';
import useActiveLink from './useActiveLink';

function NavLink(props) {
  const {link} = useActiveLink();
  const active = link === props.href.toString().slice(1);
  return <Link color={active ? 'primary' : 'inherit'} {...props} naked />;
}

function ContentLink(props) {
  return <Link color={'primary'} {...props} naked />;
}

export default function A(props) {
  return (
    <>
      {props.className && props.className.includes('toc-link') ? (
        <NavLink {...props} />
      ) : (
        <ContentLink {...props} />
      )}
    </>
  );
}
