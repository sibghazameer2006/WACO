export type Download = {
  title: string;
  description: string;
  fileType: string;
  href: string;
};

// Placeholder toolkit entries — drop real files into /public/downloads
// and point each href at the matching file, e.g. "/downloads/fbr-checklist.pdf".
export const downloads: Download[] = [
  {
    title: "FBR Registration Checklist",
    description: "A step-by-step checklist for getting a new business registered with FBR.",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "ATL Status Verification Guide",
    description: "How to check, maintain, and troubleshoot your Active Taxpayer List status.",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "Business Setup Checklist — UK / USA / Canada",
    description: "Key steps and documents needed to incorporate across our three core regions.",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "Odoo Implementation Roadmap",
    description: "A high-level view of what to expect when rolling out Odoo for your business.",
    fileType: "PDF",
    href: "#",
  },
  {
    title: "Annual Tax Filing Calendar",
    description: "Key filing dates across our served regions, laid out one year at a glance.",
    fileType: "PDF",
    href: "#",
  },
];
