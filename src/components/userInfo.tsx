import {userPageMock} from "../mocks/user";
import "../styles/userInfo.css";

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
           payText+=(userPageMock.paymentMethods[i].cardBrand)?(userPageMock.paymentMethods[i].cardBrand+" "+ "**** **** **** "+userPageMock.paymentMethods[i].cardNumber?.substring(12,16)):"Uknown payment method"
        }
    }

    return(
        <>
            <p>User: {userPageMock.user.name} {userPageMock.user.surname}</p>
            <p>Email: {userPageMock.user.email}</p>
            <p>Username: {userPageMock.user.username}</p>
            <p>Number of purchases: {userPageMock.purchaseHistory.purchases.length}</p>
            <p>{payText}</p>
        </>
    )
}