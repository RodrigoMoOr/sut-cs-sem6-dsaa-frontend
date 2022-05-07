import { Button, Card, CardContent, TextField } from "@mui/material"
import { useState } from "react";
import Popup from "reactjs-popup";

export default function Payments(props : any) {

    const [tempCard, setTempCard] = useState(
        {
        userId: props.user.userId,
        cardNumber: "",
        cardHolder: "",
        cardExpiration: "",
        cardSecurityCode: "",
        cardBrand: ""
        } );

    function deletePayment(event : any, id : number) {
        props.setData((prevData: { payments: any; }) => ({...prevData, payments: prevData.payments.filter((payment: { id: number; }) => payment.id !== id)}));
    }

    function addPayment(event : any) {
        props.setData((prevData: { payments: any; }) => 
        ({...prevData, payments: [...prevData.payments, {...tempCard, }]}));
    }

    function handleChange(event : any) {
        const {name, value} = event.target
        setTempCard(prevData => ({...prevData, [name]: value}))
    }
    
    let payList = props.paymentMethods.map((payment: any) => {
        return (
            <p>
                {payment.cardBrand} **** **** **** {payment.cardNumber.substring(12, 16)}<Button variant="outlined" color="primary" onClick={(event)=>deletePayment(event, payment.id)}>Delete</Button>
            </p>
        )
    })

    return (
    <>
    {payList}
    <br/>
    <Popup trigger={<Button variant="outlined" color="primary">Add payment method</Button>} modal>
        <Card>
            <CardContent>
                <TextField
                onChange={handleChange}
                name="cardNumber"
                type="number"
                variant="standard"
                label="Card number"
                />
                <TextField
                onChange={handleChange}
                name="cardHolder"
                type="text"
                variant="standard"
                label="Card Holder"
                />
                <TextField
                onChange={handleChange}
                name="cardExpiration"
                type="date"
                variant="standard"
                label="Card Expiration Date"
                />
                <TextField
                onChange={handleChange}
                name="cardSecurityCode"
                type="number"
                variant="standard"
                label="Card Security Code"
                />
                <TextField
                onChange={handleChange}
                name="cardBrand"
                type="text"
                variant="standard"
                label="Card Brand"
                />
                <Button variant="outlined" color="primary" onClick={addPayment}>Add</Button>            
            </CardContent>
        </Card>
    </Popup>
    </>
    
    )
}