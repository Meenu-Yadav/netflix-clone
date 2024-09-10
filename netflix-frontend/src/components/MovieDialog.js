import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";

const MovieDialog = () => {
  const { open, movieId } = useSelector((store) => store.movie);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <>
      <Dialog open={open}>
        <DialogContent>
          <VideoBackground movieId={movieId} dialog={true} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default MovieDialog;
