import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};
export default function Footer(props) {
  return (
    <AppBar position="static" color="primary">
      <Container style={styles.container} maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            {props.footerText}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
