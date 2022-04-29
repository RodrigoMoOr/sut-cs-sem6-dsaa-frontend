import { PageProps } from "../components/page";


export const userPageMock: UserPage = {
    user: {
        name: "Jan",
        surname: "Kowalski",
        email: "jan.kowalski@gmail.com",
        imageUrl: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/84841370_1654798057993543_4745748582143885312_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=JCza3Gm0_L8AX9DkN-K&_nc_ht=scontent-waw1-1.xx&oh=00_AT83HGTSnw1KM2P-TZ9vFVNXc4eC5v1byjTcHelckTkCRg&oe=628E97C2",
        userId: 2137,
        username: "jan.kowalski"

    },
    purchaseHistory: {
        id: 1,
        userId: 2137,
        purchases: [
            {
                id: 1,
                date: "2020-01-01",
                book: {
                    id: 1,
                    isbn10: "0547928203",
                    isbn13: "9780547928203",
                    title: "The Two Towers: Being the Second Part of The Lord of the Rings",
                    imageUrl: "https://images.isbndb.com/covers/82/03/9780547928203.jpg",
                    author: "J.R.R. Tolkien",
                    price: 21.37
                }
            },

            {
                id: 2,
                date: "2020-01-02",
                book: {
                    id: 1,
                    isbn10: "0547928203",
                    isbn13: "9780547928203",
                    title: "The Two Towers: Being the Second Part of The Lord of the Rings",
                    imageUrl: "https://images.isbndb.com/covers/82/03/9780547928203.jpg",
                    author: "J.R.R. Tolkien",
                    price: 21.37
                }
            }
            
        ],
        totalValue: 420.69,
        totalPurchases: 5
    },
    paymentMethods: [
        {
            id: 5,
            userId: 2137
        }
    ]
}

export interface User {
    userId: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    imageUrl: string;
    bio?: string;
}

export interface Book {
    id: number;
    isbn10: string;
    isbn13: string;
    title: string;
    subtitle?: string;
    description?: string;
    imageUrl: string;
    author: string;
    price: number;
}

export interface Purchase {
    id: number;
    date: string;
    book: Book;
}

export interface PuchaseHistory {
    id: number;
    userId: number;
    purchases: Purchase[];
    totalValue: number;
    totalPurchases: number;
}

export interface PaymentMethod {
    id: number;
    userId: number;
    cardNumber?: string;
    cardHolder?: string;
    cardExpiration?: string;
    cardSecurityCode?: string;
    cardBrand?: string;
}

export interface UserPage {
    user: User;
    purchaseHistory: PuchaseHistory;
    paymentMethods: PaymentMethod[];
}
