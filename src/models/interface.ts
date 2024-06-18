interface IProduct {
    id: number;
    name: string;
    quantity?:string;
    type?:string;
    description?:string;
    power_source?:string;
    safety_instructions?:string;
    planting_instructions?: string;
    price: number;
    image_url: string;
}


interface ILoginData {
    email:string;
    password:string;
}

interface IRegiterData{
    firstName: string;
    lastName:string;
    email:string;
    password: string;
}

interface IErrorMessage {
    RequaredMessage:string;
    EmailErrorMessage:string;
    PasswordErrorMessage:string;
    MinLengthMessage:string;
    MaxLengthMessage:string;
    PhoneErrorMessage:string;
}

interface IProductStateSeed {
    prodSeed:IProduct[],
    isLoading:boolean;
    error:string|undefined;
}

interface IProductStateHand{
    prodHand:IProduct[],
    isLoading:boolean;
    error:string|undefined;
}

interface IProductStatePower{
    prodPower:IProduct[],
    isLoading:boolean;
    error:string|undefined;
}

interface IFormDataCard {
    firstName: string;
    lastName: string;
    card: string;
    date: string;
    cvv: string;
}

interface ICardRegEx {
    [key:string]:RegExp
}

export type {ICardRegEx, IFormDataCard, IProduct, ILoginData, IRegiterData, IErrorMessage, IProductStateSeed, IProductStateHand, IProductStatePower}