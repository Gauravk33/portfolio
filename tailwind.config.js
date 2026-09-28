/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        buttonColor: "#55198b",
        buttonHover: "#8c43ce",
        topButtonHover: "#000000",
        titleColor: "#000000",
        textColor: "#000000",
        subTitle: "#868e96",
        cardSubtitle: "#666666",
        talkCardSubTitle: "#7f8287",
        blogCardTitleColor: "#262626",
        textColorDark: "#ffffff",
        toggleCheck: "#2196f3",
        toggleSwitchSliderBG: "#ccc",
        githubRepoCardLanguageColorBG: "#0000ff",
        githubRepoCardColor: "rgb(88, 96, 105)",
        githubRepoCardRepoCardStatsColor: "rgb(106, 115, 125)",
        githubRepoCardRepoNameColor: "rgb(36, 41, 46)",
        githubProfileCardLocationTS: "#ffebcd",
        githubProfileCardBorder: "#6c63ff",
        lightBackground1: "#fff",
        lightBackground2: "rgb(255, 255, 255)",
        lightBackground3: "#f5f2f4",
        blogCardContainerColor: "#586069",
        darkBackground: "#171c28",
        headerHoverBG: "#f4f4f4",
        contactDetailHoverTS: "#b5b5b5",
        progressBarSpanBG: "#aaa5ff",
        skillsColor: "#645beb",
        appLink: "#09d3ac",
        facebook: "#3b5998",
        linkedin: "#0e76a8",
        github: "#333333",
        gitlab: "#fca326",
        google: "#ea4335",
        twitter: "#1da1f2",
        medium: "#000000",
        stackoverflow: "#f48024",
        instagram: "#c13584",
        kaggle: "#20beff"
      },
      fontFamily: {
        agustina: ['"Agustina Regular"', "cursive"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
        "card-hover": "rgba(0, 0, 0, 0.2) 0px 20px 30px -10px",
        "card-dark": "0px 10px 30px -15px #d9dbdf",
        "card-dark-hover": "0px 20px 30px -10px #d9dbdf",
        "card-dark-glow": "0px 0px 16px #d9dbdf",
        blog: "0 0 36px rgba(0, 0, 0, 0.1)",
        "blog-dark": "1px 0px 20px #ffffff",
        talk: "0px 20px 50px #d9dbdf",
        "talk-hover": "0 20px 40px #ffffff",
        image: "0 0.5rem 1rem rgba(0, 0, 0, 0.3)"
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-10deg)" },
          "20%": { transform: "rotate(12deg)" },
          "30%": { transform: "rotate(-10deg)" },
          "40%": { transform: "rotate(9deg)" },
          "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" }
        }
      },
      animation: {
        wave: "wave 1.8s infinite"
      }
    }
  },
  plugins: []
};
