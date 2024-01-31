import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { InputAdornment, TextField } from '@mui/material'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

export default function CalculatorForm() {

    const now = new Date();
    const [cartValue, setCartValue] = useState("");
    const [distance, setDistance] = useState("");
    const [items, setItems] = useState("");
    const [time, setTime] = useState<Date | null>(null);


    const calculateDeliveryFee = () => {
        alert("HHH")
    }
    // const calculateDeliveryFee = (cartValue, deliveryDistance, numberOfItems) {
    //     // Rule 1: Small order surcharge
    //     let smallOrderSurcharge = Math.max(0, 10 - cartValue);

    //     // Rule 2: Base delivery fee
    //     let baseFee = 2;

    //     // Calculate additional distance fee
    //     let additionalDistanceFee = Math.ceil((deliveryDistance - 1000) / 500) * 1;
    //     additionalDistanceFee = Math.max(additionalDistanceFee, 1); // Minimum fee is 1€

    //     // Rule 3: Total distance fee
    //     let totalDistanceFee = baseFee + additionalDistanceFee;

    //     // Rule 4: Item surcharge
    //     let itemSurcharge = numberOfItems >= 5 ? (numberOfItems - 4) * 0.5 : 0;
    //     let bulkFee = numberOfItems > 12 ? 1.2 : 0;

    //     // Rule 5: Total surcharge
    //     let totalSurcharge = Math.min(15 - totalDistanceFee, itemSurcharge + bulkFee);

    //     // Rule 6: Free delivery for cart value >= 200€
    //     let deliveryFee = cartValue >= 200 ? 0 : totalDistanceFee + totalSurcharge + smallOrderSurcharge;

    //     // Rule 7: Friday rush multiplier
    //     let currentDate = new Date();
    //     let isFridayRush = currentDate.getDay() === 5 && currentDate.getHours() >= 15 && currentDate.getHours() < 19;

    //     if (isFridayRush) {
    //         deliveryFee *= 1.2;
    //         deliveryFee = Math.min(deliveryFee, 15); // Cannot exceed 15€
    //     }

    //     return deliveryFee.toFixed(2);
    // }

    return (
        <div className="cForm">
            <p className='cForm__heading'>Enter Values to<br /> calculate delivery fees</p>
            <form>
                <TextField
                    id="cartValue" data-testId="cartValue" label="Cart Value"
                    variant="outlined" autoComplete='off'
                    value={cartValue}
                    onChange={(e) => { setCartValue(e.target.value) }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">€</InputAdornment>,
                    }}>
                </TextField>
                <TextField
                    id="deliveryDistance" data-testId="deliveryDistance" label="Delivery Distance"
                    variant="outlined" autoComplete='off'
                    value={distance}
                    onChange={(e) => { setDistance(e.target.value) }}
                    InputProps={{
                        endAdornment: <InputAdornment position="start">m</InputAdornment>,
                    }} />
                <TextField
                    id="numberOfItems" data-testId="numberOfItems" label="Number of items"
                    variant="outlined" autoComplete='off'
                    value={items}
                    onChange={(e) => { setItems(e.target.value) }} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker label="Order Time"
                        views={['year', 'month', 'day', 'hours', 'minutes']}
                        value={time}
                        onChange={(date) => { setTime(date) }}
                    />
                </LocalizationProvider>
            </form>
            <Button text="Calculate" handleOnClick={calculateDeliveryFee} />
        </div>
    )
}
