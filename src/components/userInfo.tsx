import {userPageMock} from "../mocks/user";

export default function UserInfo() {
    
    let payText=""

    if(userPageMock.paymentMethods.length === 0)
    {
        payText = "No payment methods added"
    }
    else
    {
        payText+="Payment methods: \n"
        for(let i=0; i<userPageMock.paymentMethods.length; i++)
        {
           // (userPageMock.paymentMethods[i].cardNumber?.length === 16 && userPageMock.paymentMethods[i].cardBrand)?("**** **** **** "+userPageMock.paymentMethods[i].cardNumber?.substring(12,16)+" "+userPageMock.paymentMethods[i].cardBrand):"Uknown payment method"
        }
    }

    return(
        <>
            <h1>Name: {userPageMock.user.name}</h1> 
            <h1>Surname: {userPageMock.user.surname}</h1>
            <h1>Email: {userPageMock.user.email}</h1>
            <h1>Username: {userPageMock.user.username}</h1>
            <h1>Number of purchases: {userPageMock.purchaseHistory.purchases.length}</h1>
            <h1>{payText}</h1>
        </>
    )
}