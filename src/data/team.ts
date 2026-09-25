export type TeamMember = {
  name: string;
  title: string;
  linkedin: string;
  avatarSeed: string;
  image: string;
};

// TODO: swap avatarSeed-based placeholders for real headshots in /public/team,
// and replace each "linkedin" value with the person's real profile URL.
export const team: TeamMember[] = [
  {
    name: "Waqas Afzal",
    title: "Founder of the firm",
    linkedin: "https://www.linkedin.com/in/waqasafzalaca/",
    avatarSeed: "Waqas Afzal",
    image: "/team/waqas-afzal.png",
  },
  {
    name: "M. Idrees Khattak",
    title: "Director, Legal Advisory Services",
    linkedin: "https://www.linkedin.com/in/idrees-khattak/",
    avatarSeed: "M Idrees Khattak",
    image: "/team/idrees-khattak.png",
  },
  {
    name: "Waqas Khan",
    title: "Advocate & Director, Legal Advisory Services",
    linkedin: "https://www.linkedin.com/in/waqas-khan/",
    avatarSeed: "Waqas Khan",
    image: "/team/waqas-khan.png",
  },
  {
    name: "Arfa Sadia",
    title: "Director, Offshore Services",
    linkedin: "https://www.linkedin.com/in/arfa-sadia/",
    avatarSeed: "Arfa Sadia",
    image: "/team/arfa-sadia.png",
  },
];
