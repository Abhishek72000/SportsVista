import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Button, ButtonGroup, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { decrement, increment } from "./counterSlice";



export default function  ContactPage(){
    const dispatch=useDispatch();
    const{data,title}=useAppSelector(state=>state.counter);
    return (
        <>
            <Typography variant="h2" align="center">
                {title}
            </Typography>
               
            <Typography variant="h5" align="center">
                <Facebook sx={{ fontSize: 30, marginRight: 10 }} />
                <Instagram sx={{ fontSize: 30, marginRight: 10 }} />
                <Twitter sx={{ fontSize: 30 }} />
            </Typography>
            
            {/* <ButtonGroup>
                <Button onClick={()=>dispatch(decrement(1))} variant='contained' color='error'>Decrement</Button>
                <Button onClick={()=>dispatch(increment(1))} variant='contained' color='primary'>Increment</Button>
                <Button onClick={()=>dispatch(increment(5))} variant='contained' color='secondary'>Increment by 5</Button>

            </ButtonGroup> */}
        </>
    )
}