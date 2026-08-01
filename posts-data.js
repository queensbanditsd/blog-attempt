// Add one entry per day. Newest or oldest first — doesn't matter,
// they're sorted by date automatically.
//
// date:  "YYYY-MM-DD"
// title: optional — delete the line entirely if you don't want one
// body:  an array of paragraphs (usually you'll just need one)

const POSTS = [
  {
    date: "2026-08-01",
    title: "First entry",
    body: [
      "This is a placeholder — replace it with your first real post. The idea is small and a little repetitive: something short, most days, no editing required to feel finished.",
      "Aim for somewhere between 100 and 200 words. Doesn't need a thesis. A thought you had on the way somewhere, something you read, a complaint, a question you haven't answered yet. The constraint is the format, not the content.",
      "To add tomorrow's entry, open js/posts-data.js and copy this block, change the date, and write. That's the whole workflow.",
    ],
  },
];
