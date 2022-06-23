import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { Home as HomeIcon } from '../icons/home';
import { CheckeredFlag as CheckeredFlagIcon } from '../icons/checkered-flag'
import { Stopwatch as StopwatchIcon } from '../icons/stopwatch'
import { Wrench as WrenchIcon } from '../icons/wrench'
import F1LogoFull from '../logos/f1_logo.png';
import { NavItem } from './Nav-Item';
import Image from "next/image";

const items = [
  {
    href: '/',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Home'
  },
  {
    href: '/race-history',
    icon: (<CheckeredFlagIcon fontSize="small" />),
    title: 'Race History'
  },
  {
    href: '/fastest-laps',
    icon: (<StopwatchIcon fontSize="small" />),
    title: 'Fastest Laps'
  },
  {
    href: '/setups',
    icon: (<WrenchIcon fontSize="small" />),
    title: 'Setups'
  }
];

export const Sidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 2 }}>
            <NextLink
              href="/"
              passHref
            >
              <a>
               <Image
                   title="F1 icons created by Freepik - Flaticon"
                   src={F1LogoFull}
                   alt="F1"
               />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
