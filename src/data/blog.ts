export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  linkedinUrl: string;
};

// Sample placeholder posts — replace with real reposts from the firm's
// LinkedIn page, ideally kept in sync manually or via the LinkedIn API.
export const blogPosts: BlogPost[] = [
  {
    title: "FBR Extends Tax Filing Deadline: What It Means for You",
    excerpt:
      "A quick breakdown of the extended deadline and how businesses should use the extra time to get their filings in order.",
    date: "2026-07-18",
    linkedinUrl: "#",
  },
  {
    title: "Understanding ATL Registration and Why It Matters",
    excerpt:
      "Being on the Active Taxpayer List affects more than compliance — here's how it impacts your bottom line.",
    date: "2026-06-30",
    linkedinUrl: "#",
  },
  {
    title: "Cross-Border Tax Planning Tips for Growing SMEs",
    excerpt:
      "Expanding into the UK, USA, or the Gulf? A few planning steps that save headaches down the line.",
    date: "2026-06-09",
    linkedinUrl: "#",
  },
  {
    title: "Why Every Business Needs Timely, Accurate Bookkeeping",
    excerpt:
      "Late books cost more than time — they cost decisions. Here's what a disciplined bookkeeping cadence buys you.",
    date: "2026-05-22",
    linkedinUrl: "#",
  },
];
