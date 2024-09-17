const quotes = [
    {qoute: "Vaziuojam Dzesika", author: "Rotar"},
    {qoute: "Dasvidanya", author: "Somebody"},
    {qoute: "I am not creative", author: "Mariusika"},
    {qoute: "I am cringe", author: "Marius"}
];

function QuoteGenerator({ setQoute }) {
    const getQoute = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomqoute = quotes[randomIndex];
        setQoute(randomqoute);
    }}

// export a qoute here, use it the other isntances,  you need to.

