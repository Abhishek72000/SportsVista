import { Add, Delete, Remove } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { useStoreContext } from '../../app/context/StoreContext';
import LoadingComponents from '../../app/layout/LoadingComponents';
import { Basket } from '../../app/models/basket';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import {  addBasketItemAsync, removeBasketItemAsync, setBasket } from './basketSlice';
import BasketSummary from './BasketSummary';
import BasketTable from './BasketTable';

export default function BasketPage() {
    const { basket } = useAppSelector(state => state.basket);

    
    
    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>


    return (
        <>
            <BasketTable items={basket.items} />
            <Grid container>
                <Grid item xs={6}/>
                <Grid item xs={6}>
                    <BasketSummary/>
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

