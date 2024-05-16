'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { animateScroll as scroll, Link as ScrollToLink } from 'react-scroll';
import { AppBar, Toolbar, Box, Fab, IconButton, List, ListItem, ListItemButton, ListItemText, Drawer, Tooltip, Container, useMediaQuery, TextField, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Link from 'next/link'; 
import SvgIcon from '@mui/material/SvgIcon';

interface NavbarProps {
    children: React.ReactNode;
    window?: () => Window;
}

function ScrollTop({ children, window }: NavbarProps) {
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: true,
        });
    };

    return (
        <Box onClick={handleClick} role="presentation " sx={{ position: 'fixed', bottom: 20, right: 16, color: 'green' }}>
            {children}
        </Box>
    );
}

function ElevationScroll({ children, window }: NavbarProps) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Links = ({ drawer, setIsOpenDrawer, isOpenDrawer }: any) => {
    const pageLink = [{ id: 0, linkName: 'Home' }, { id: 1, linkName: 'Product' }, { id: 2, linkName: 'About' }];

    return drawer ? (
        <List sx={{ mt: 1.5 }}>
            {pageLink.map((link) => (
                <Link href={link.linkName === 'Home' ? '/' :`/${link.linkName.toLowerCase()}`} key={link.id}>
                    <ListItem sx={{ minWidth: '12rem' }} disablePadding>
                        <ListItemButton onClick={() => setIsOpenDrawer(!isOpenDrawer)} sx={{ ":hover": { bgcolor: '#E0F3D7' } }}>
                            <ListItemText sx={{ marginLeft: '0.4rem' }} primary={link.linkName} />
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
            
        </List>
    ) : (
        <ul className={`flex p-0 sm:space-x-8 space-x-5' text-black`}>
            {pageLink.map((li) => (
                <Link href={li.linkName === 'Home' ? '/' :`/${li.linkName.toLowerCase()}`} key={li.id}>
                <li className='sm:text-base hover:text-gray-800 hover:scale-[0.99] text-sm'>
                        {li.linkName}
                    </li>
                </Link>
            ))}
            
        </ul>
    );
};

const Navbar = (props: NavbarProps) => {
    const [isNavBarElevated, setIsNavbarElevated] = useState(false);
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [totalAmt, setTotalAmt] = useState("185");
    const [productData, setproductData ] = useState(['test,test,test']);

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            setIsNavbarElevated(window.scrollY > 0);
        });
    }
    
    useEffect(() => {
        setIsNavbarElevated(window.pageYOffset > 0);
    }, []);

    const isExtraSmallScreen = useMediaQuery('(max-width: 664px)');
    const isSemiMediumScreen = useMediaQuery('(max-width: 900px)');
    const isLargeScreen = useMediaQuery('(max-width:1280px)');

    return (
        <>
            <nav className='fixed z-50'>
                <ElevationScroll {...props}>
                    <AppBar sx={{ bgcolor: isNavBarElevated ? 'white' : 'transparent', transition: 'all 150ms ease-in-out' }}>
                        <Toolbar>
                            <Container
                                disableGutters={isLargeScreen}
                                sx={{ display: 'flex', px: isLargeScreen ? 0.5 : 0 }} >

                                {isSemiMediumScreen &&
                                    <IconButton
                                        aria-label="open drawer"
                                        onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                                        edge="start"
                                        sx={{ mr: 1 }}
                                    >
                                        <MenuIcon fontSize='inherit' />
                                    </IconButton>}
                                    <div className='flex w-full justify-between items-center'>
                                <div className='flex items-center justify-center gap-2'>
                                    <Link href={'/'}>
                                        <img className='sm:max-h-12 max-h-12 my-auto cursor-pointer hidden md:block'
                                            src='/logo.png'
                                            alt="logo" />
                                    </Link>
                                    <div className='text-black font-bold text-xl hidden md:block'>
                                    QuickCart
                                    </div>
                                </div>
                       

                                    <div className='flex items-center space-x-8'>
                                        {isSemiMediumScreen ?
                                            <Drawer
                                                anchor={'left'}
                                                open={isOpenDrawer}
                                                onClose={() => setIsOpenDrawer(!isOpenDrawer)}
                                            >
                                                       <Link href={'/'} className='flex items-center justify-center mt-5'>
                                        <img className='sm:max-h-10 max-h-10 my-auto cursor-pointer ' 
                                            src='/logo.png'
                                            alt="logo" />
                                    </Link>
                                                <Links
                                                    setIsOpenDrawer={setIsOpenDrawer}
                                                    isOpenDrawer={isOpenDrawer}
                                                    drawer={true} />
                                            </Drawer>

                                            :
                                             <Links
                                                setIsOpenDrawer={setIsOpenDrawer}
                                                isOpenDrawer={isOpenDrawer} />
                                        }
                                        <div className=' flex'>
                                        {isSearchOpen ? (
    <div className="flex-grow mx-5 mt-2 ">
        <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
                startAdornment: (
                    <SearchIcon color="action" sx={{ mr: 1,}} />
                ),
                endAdornment: (
                    <IconButton
                        onClick={() => setIsSearchOpen(false)}
                        edge="end"
                        size="small"
                    >
                        <CloseIcon />
                    </IconButton>
                ),
            }}
       
        />
    </div>
) : (
    <Tooltip title='Search'>
        <span className='mt-2'>
            <IconButton
                onClick={() => setIsSearchOpen(true)}
                sx={{ textTransform: 'capitalize' }}
                color='success'
            >
                <SearchIcon />
            </IconButton>
        </span>
    </Tooltip>
)}  
    <Tooltip title='Cart'>
                                                              <div className=' flex flex-col justify-center items-center gap-0 relative mt-2'>
                        <Link className='' href='/cart'>
                        
                        <SvgIcon className='text-green-700  ' component={ShoppingCartSharpIcon} inheritViewBox sx={{ fontSize: 29 }} />


                        </Link>
                        <p className='w-full h-5 mt-[-6px] text-center text-sm font-semibold text-black rounded-full'>
                            ${totalAmt}
                        </p>
                        <span className='absolute w-4 h-4 mt-[-3px]  bg-yellow-200 text-center text-sm font-bold text-black top-[0px] right-0 rounded-full'>
                            {productData.length > 0 ? productData.length : 0}
                        </span>
                    </div>
                    </Tooltip>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar id="back-to-top-anchor" />
                <ScrollTop {...props}>
                    <Fab color='success' size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </nav>
        </>
    );
};

export default Navbar;

