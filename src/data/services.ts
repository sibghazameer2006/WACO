export type Region = {
  name: string;
  description: string;
};

export const regions: Region[] = [
  {
    name: "United Kingdom",
    description:
      "HMRC compliance, UK company tax filings, and self-assessment support for founders and SMEs.",
  },
  {
    name: "United States",
    description:
      "Federal and state tax advisory, IRS filings, and structuring guidance for US-facing entities.",
  },
  {
    name: "Canada",
    description:
      "CRA compliance, cross-border tax planning, and incorporation support for Canadian ventures.",
  },
  {
    name: "Middle East",
    description:
      "VAT advisory, free-zone company services, and regional compliance across the GCC.",
  },
];

export type SubService = {
  title: string;
  slug: string;
  description: string;
  details: string;
  highlights: string[];
  icon: "shield" | "document" | "globe" | "chart" | "briefcase" | "users";
};

export const taxAdvisorySubServices: SubService[] = [
  {
    title: "Audit and Assurance",
    slug: "audit-and-assurance",
    description:
      "Comprehensive audit and assurance services to improve financial accuracy, transparency, and regulatory compliance.",
    details:
      "We conduct statutory and voluntary audits that go beyond a compliance checkbox — examining financial statements, internal controls, and reporting processes to give stakeholders confidence in the numbers. Every engagement is scoped around your industry and regulatory environment, from local statutory requirements to investor and donor reporting standards.",
    highlights: [
      "Statutory and voluntary financial statement audits",
      "Internal control and risk assessment reviews",
      "Assurance reporting for stakeholders, lenders, and investors",
      "Findings delivered with practical, actionable recommendations",
    ],
    icon: "shield",
  },
  {
    title: "Tax Advisory",
    slug: "tax-advisory",
    description:
      "Strategic tax planning and advisory to minimize tax liabilities and ensure compliance with applicable tax laws.",
    details:
      "Our tax advisory practice is built around planning ahead of deadlines rather than reacting to them. We work with founders and finance teams to structure operations tax-efficiently, manage FBR and cross-border filing obligations, and stay ahead of regulatory changes before they become compliance risks.",
    highlights: [
      "FBR registration, filing, and compliance calendars",
      "Cross-border and withholding tax structuring",
      "Tax planning aligned to your business lifecycle",
      "Representation during assessments and audits",
    ],
    icon: "document",
  },
  {
    title: "Internal Audit",
    slug: "internal-audit",
    description:
      "Independent internal audit services to identify risks, strengthen controls, and improve business processes.",
    details:
      "We act as an independent second set of eyes on your operations — testing controls, tracing processes end to end, and flagging weaknesses before they turn into losses or compliance gaps. Reports are written for decision-makers, not just auditors.",
    highlights: [
      "Process and controls walkthroughs across key business cycles",
      "Risk-based internal audit planning",
      "Fraud risk and control-gap identification",
      "Board- and management-ready reporting",
    ],
    icon: "globe",
  },
  {
    title: "Offshore Book-keeping",
    slug: "offshore-bookkeeping",
    description:
      "Reliable offshore bookkeeping services ensuring accurate financial records, timely reporting, and organized accounts.",
    details:
      "We manage day-to-day books for clients abroad as an extension of their finance team — reconciled accounts, organized records, and reporting you can hand straight to your accountant, auditor, or tax authority. Built for businesses that want reliable offshore support without managing an in-house bookkeeper.",
    highlights: [
      "Daily and weekly transaction recording and reconciliation",
      "Accounts payable and receivable management",
      "Monthly management accounts and reporting",
      "Cloud-based access so you always see current numbers",
    ],
    icon: "chart",
  },
  {
    title: "Offshore Audit Support to CPA/CA Firms",
    slug: "offshore-audit-support",
    description:
      "Professional offshore audit support to help CPA and CA firms manage audit procedures, documentation, and reporting efficiently.",
    details:
      "We partner with CPA and CA firms overseas as an offshore extension of their audit teams — handling documentation, testing, and working papers to agreed standards and deadlines, so partners can focus on review and client relationships instead of capacity constraints.",
    highlights: [
      "Audit fieldwork and working paper preparation",
      "Compliance with firm methodology and international standards",
      "Scalable capacity during peak audit season",
      "Direct coordination with engagement teams",
    ],
    icon: "briefcase",
  },
  {
    title: "ERP Services",
    slug: "erp-services",
    description:
      "ERP solutions that streamline financial operations, automate processes, and provide better control over business data.",
    details:
      "Beyond implementation, we help businesses configure and run ERP systems so financial data flows accurately from operations straight into reporting — reducing manual reconciliation and giving management real-time visibility into the numbers that matter.",
    highlights: [
      "ERP setup and configuration for finance workflows",
      "Process automation and custom reporting",
      "Data migration and system integration",
      "Ongoing support and user training",
    ],
    icon: "users",
  },
];

export const coreServices: SubService[] = [
];

export function serviceTitleBySlug(slug: string): string | undefined {
  return taxAdvisorySubServices.find((service) => service.slug === slug)?.title;
}
