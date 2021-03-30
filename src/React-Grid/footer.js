import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
export default function Footer(props) {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                {props.footerText}
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}