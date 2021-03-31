import * as React from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import NextLink, {LinkProps as NextLinkProps} from 'next/link';
import MuiLink, {LinkProps as MuiLinkProps} from '@material-ui/core/Link';
// import {LinkProps as MuiLinkProps} from '@material-ui/core/Link';
import Button from '@material-ui/core/ButtonBase';


const NextComposed = React.forwardRef(
  (props, ref) => {
    const {
      as,
      href,
      replace,
      scroll,
      passHref,
      shallow,
      prefetch,
      ...other
    } = props;

    return (
      <NextLink
        href={href}
        prefetch={prefetch}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}>
        <a ref={ref} {...other} />
      </NextLink>
    );
  },
);

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    href,
    activeClassName = 'active',
    className: classNameProps,
    innerRef,
    naked,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  if (naked) {
    return (
      <MuiLink
        component={NextComposed}
        className={className}
        ref={innerRef}
        href={href}
        {...other}
      />
    );
  }

  return (
    <Button
      component={NextComposed}
      disableRipple
      disableTouchRipple
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    />
  );
}

export default React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));
