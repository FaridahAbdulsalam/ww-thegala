export type FaqQuestion ={
    id: number;
    question: string;
    answer: string;
    link?: string;
};

export const faqQuestions: FaqQuestion[] = 
[
    {
        id: 1,
        question: "Is this event just for MFAF Youth?",
        answer: "Nope! Anyone who is part of the Muslim community can attend whether you're an MFAF regular or new to us"
    },
    {id: 2,
        question: "Can I bring my family?",
        answer: "Absolutely! It’s a night of celebration, all are welcome no matter your age",
    },
    {id: 3,
        question: "Is the event segregated?",
        answer: "There will be sisters/brothers only tables and dedicated tables for families that have come together. However there are no separate rooms",    
    },
    {id: 4,
        question: "Are tickets refundable?",
        answer: "As much as we would love you to keep your ticket we understand that sometimes things come up beyond our control. Refunds are available up until the day of the event through eventbrite",
    },
    {id: 5,
        question: "Who can I nominate for an award?",
        answer: "We’re not limiting the awards to any community in particular, if you believe you know someone who deserves the award then feel free to free to nominate them. We will however shortlist nominees down into finalists for each category based on how many times they have been nominated.",
    },
    {id: 6,
        question: "How will you pick winners for the awards?",
        answer: "We don’t. You do! As soon as we have shortlisted finalists we will release another round of voting and the winners will be announced on the night of the event.",
    },
    {id: 7,
        question: "Can I know more about the chosen charity for the auction?",
        answer: "Yes. We will provide more information about the charity closer to the event date.",
    },  
    {id: 8,
        question: "Can I buy tickets on the door?",
        answer: "Unfortunately not. We encourage you to buy tickets in advance to avoid disappointment as we expect to sell out quickly and cannot accept people on the door due to the venue's capacity limits.",
    },
    {id: 9,
        question: "I want to donate to MFAF Youth in general, how do I do that?",
        answer: "As we are a charity organisation we appreciate any donations towards our events. You can do so here:",
        link: "https://tr.ee/qtOCtzYIN5"
    },
    {id: 10,
        question: "How do I keep up to date with MFAF Youth?",
        answer: "Follow us on social media! We are on Instagram and TikTok @mfaf.youth and join our whatsapp group chats!", 
        link: "https://www.instagram.com/mfaf.youth?igsh=MXc4NmFmcThpN3o2Ng=="
    }
];