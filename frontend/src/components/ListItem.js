import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Modal from "@material-ui/core/Modal";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import IconButton from "@material-ui/core/IconButton";
import FullscreenIcon from "@material-ui/icons/Fullscreen";

const useStyles = makeStyles({
  root: {
    width: "250px",
    height: "300px",
    textAlign: "center",
    margin: "10px",
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.6715) 98.67%)",
    borderShadow: "0px 1px 17px rgba(0, 0, 0, 0.13)",
    borderRadius: "25px",
  },

  title: {
    fontSize: 12,
    fontWeight: "Bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "200px",
    color: "#174674",
  },
  pos: {
    marginBottom: 12,
  },
  subtitle: {
    whiteSpace: "nowrap",
  },
  image: {
    width: "100px",
    height: "120px",
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleFullScreenBtn = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader
        avatar={
          <IconButton onClick={handleFullScreenBtn}>
            <FullscreenIcon></FullscreenIcon>
          </IconButton>
        }
        action={
          <IconButton>
            <LocalMallIcon></LocalMallIcon>
          </IconButton>
        }
      />
      <CardContent>
        <img className={classes.image} src={props.image} alt=""></img>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
        >
          {props.discounted_price === props.price ? (
            <span>Not available</span>
          ) : (
            <p className={classes.subtitle}>
              Price:{" "}
              <span style={{ textDecoration: "line-through" }}>
                {props.price}
              </span>{" "}
              {props.discounted_price} BDT
            </p>
          )}
        </Typography>
      </CardContent>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Card>
          <CardHeader
            action={
              <IconButton onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            }
          />
          <CardContent>
            <Grid container justify="center">
              <Grid>
                <Typography>{props.title}</Typography>
                <img src={props.image} width="500" height="700" alt=""></img>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Modal>
    </Card>
  );
}
