import { Box, AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Vast_Shadow } from 'next/font/google'

const vastShadow = Vast_Shadow({
	weight: '400',
	subsets: ['latin'],
});

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: "#3d465b" }}>
				<Toolbar>
					<Grid container>
						<Grid item xs={2}>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
							>
								<MenuIcon />
							</IconButton>
						</Grid>
						<Grid item xs={8}>
							<Grid container justifyContent={'center'}>
								<Grid item>
									<Typography fontFamily={vastShadow.style.fontFamily} fontSize={28}>
										The Books Project
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={2} alignItems={'center'} display={'flex'}>
							<Grid container justifyContent={'flex-end'} spacing={2}>
								<Grid item>
									<Button color="inherit">Log in</Button>
								</Grid>
								<Grid item>
									<Button color="inherit">Sign in</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar;