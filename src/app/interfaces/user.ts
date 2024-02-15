export interface User {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
    _id: string;
    submittedAt: Date;
}

export interface Carousel {
    index: number,
    url: string
}

export interface ServiceSection {
    title: string,
    image: string,
    description: string,
    routerLink: string,
}