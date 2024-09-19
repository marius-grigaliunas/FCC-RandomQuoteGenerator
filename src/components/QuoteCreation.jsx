// hardcoded quotes aren't enough.
// in the future intgrate ai to generate quotes.

/*const quotes = [
    {
      quote: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      author: "Anonymous"
    },
    {
      quote: "I threw a boomerang a few years ago. I live in constant fear.",
      author: "Anonymous"
    },
    {
      quote: "Why don't scientists trust atoms? Because they make up everything!",
      author: "Dr. Jokes"
    },
    {
      quote: "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
      author: "Techie Tim"
    },
    {
      quote: "I would avoid the sushi if I was you. It’s a little fishy.",
      author: "Chef Chuckles"
    },
    {
      quote: "I'm reading a book about anti-gravity. It's impossible to put down!",
      author: "Bookworm Betty"
    },
    {
      quote: "Parallel lines have so much in common. It’s a shame they’ll never meet.",
      author: "Mathlete Max"
    },
    {
      quote: "I’m on a seafood diet. I see food and I eat it.",
      author: "Dietary Dan"
    },
    {
      quote: "I used to play piano by ear, but now I use my hands.",
      author: "Melody Maker"
    },
    {
      quote: "I wanted to be a baker, but I couldn't make enough dough.",
      author: "Baker Bill"
    }
  ];

const quoteMaker = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };
*/

const QUOTABLE_API = "https://api.quotable.io/random";

const quoteMaker = async () => {
    try {
        const response = await fetch(QUOTABLE_API);
        const data = await response.json();
        return {quote: data.content, author: data.author};
    }
    catch (error) {
        console.error("Error at fetching a quote:", error);
        return {quote: "Quick mafs make Bad mans", author: "Junior"};
    }
}

export default quoteMaker;