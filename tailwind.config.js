module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    colors: {
      // Colors
      // Primary
      Paleblue: "hsl(225, 100%, 94%)",
      Brightblue: "hsl(245, 75%, 52%)",
      // Neutral
      Verypaleblue: "hsl(225, 100%, 98%)",
      Desaturatedblue: "hsl(224, 23%, 55%)",
      Darkblue: "hsl(223, 47%, 23%)",
      White: "hsl(0, 0%, 100%)",
      Attribution: "hsl(228, 45%, 44%)",
    },
    backgroundPosition: {
      "bottom-4": "left bottom 18rem",
    },
    fontFamily: {
      // Weights: 500, 700, 900
      redHatDisplay: "Red Hat Display",
    },
    boxShadow: {
      custom: "0px 11px 14px 4px hsl(245, 75%, 52%,.48)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
};
