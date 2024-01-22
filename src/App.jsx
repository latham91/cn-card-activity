import "./App.css";

import Card from "./components/Card";

const cardData = [
    {
        id: 1,
        image: "/1.png",
        title: "BREAKING | Boy died after being pushed into river in 'prank'",
        description: "A 13-year old boy died after being deliberately pushed into a river, an inquest has ruled.",
        time: "1m",
        location: "Wales",
    },
    {
        id: 2,
        image: "/2.jpg",
        title: "Navy Seals presumed dead after anti-Houthi mission",
        description: "The commandos were part of an operation to seize Iranian-made missile parts bound for Yemen.",
        time: "4h",
        location: "US & Canada",
    },
    {
        id: 3,
        image: "/3.jpg",
        title: "Indian PM opens grand temple on razed mosque site",
        description:
            "The rituals were led by PM Narendra Modi, while opposition leaders and some Hindu seers stayed away.",
        time: "1m",
        location: "Wales",
    },
    {
        id: 4,
        image: "/4.jpg",
        title: "Saturday post should stay, government says",
        description: "Royal mail wants to drop Saturday deliveries but the prime minister says they are 'important'",
        time: "16m",
        location: "Business",
    },
];

export default function App() {
    return (
        <div className="card-container">
            {cardData.map((card) => (
                <Card key={card.id} {...card} />
            ))}
        </div>
    );
}
