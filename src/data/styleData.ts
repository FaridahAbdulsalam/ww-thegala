import brother1 from "../assets/images/style-inspo/Brother-style-1.png";
import sister1 from "../assets/images/style-inspo/Sister-style-1.png";
import brother2 from "../assets/images/style-inspo/Brother-style-2.png";
import sister2 from "../assets/images/style-inspo/Sister-style-2.png";
import brother3 from "../assets/images/style-inspo/Brother-style-3.png";
import sister3 from "../assets/images/style-inspo/Sister-style-3.png";
import brother4 from "../assets/images/style-inspo/Brother-style-4.png";
import sister4 from "../assets/images/style-inspo/Sister-style-4.png";
import sister5 from "../assets/images/style-inspo/Sister-style-5.png";

export type StyleInspo ={
    id: number;
    imageUrl: string;
    altText: string;
};

export const styleInpirations: StyleInspo[] = 
[
    {
        id: 1,
        imageUrl: sister1,
        altText: "Formal Attire 1"
    },
    {
        id: 2,
        imageUrl: brother1,
        altText: "Formal Attire 2"
    },
    {
        id: 3,
        imageUrl: sister2,
        altText: "Formal Attire 3"
    },
    {
        id: 4,
        imageUrl: brother2,
        altText: "Formal Attire 4"
    },
    {
        id: 5,
        imageUrl: sister3,
        altText: "Formal Attire 5"
    },
    {  
        id: 6,
        imageUrl: brother3,
        altText: "Formal Attire 6"
    },
    {
        id: 7,
        imageUrl: sister4,
        altText: "Formal Attire 7"
    },
    {
        id: 8,
        imageUrl: brother4,
        altText: "Formal Attire 8"
    },
    {
        id: 9,
        imageUrl: sister5,
        altText: "Formal Attire 9"
    }
];