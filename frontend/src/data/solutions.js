import { Globe, Network, Workflow, Headset, PhoneCall, Server } from "lucide-react";

export const SOLUTIONS = [
  {
    slug: "internet-ip-core",
    icon: Globe,
    title: "Internet Service & IP Core Network",
    short: "Reliable internet connectivity supported by high-availability network architecture.",
    overview:
      "Dedicated, enterprise-grade internet connectivity built on a resilient IP core network. Designed for organisations where connectivity is business-critical, not a commodity.",
    features: [
      "Dedicated Internet",
      "Enterprise Connectivity",
      "High Availability",
      "Multiple Upstream Providers",
      "Redundant Routing",
      "Fiber Connectivity",
      "Network Monitoring",
    ],
    benefits: [
      "Predictable performance for business-critical applications",
      "Architecture designed to reduce single points of failure",
      "Capacity that scales as your organisation grows",
    ],
  },
  {
    slug: "network-infrastructure",
    icon: Network,
    title: "Network Infrastructure",
    short: "Network design, deployment, configuration, optimization, and maintenance.",
    overview:
      "End-to-end network infrastructure services — from initial design through deployment and ongoing optimization — delivered by experienced network engineers.",
    features: [
      "Network Design",
      "Network Deployment",
      "Network Configuration",
      "Network Optimization",
      "Maintenance",
      "Troubleshooting",
    ],
    benefits: [
      "Infrastructure engineered around your actual requirements",
      "A single accountable partner from design to operations",
      "Documentation and handover your internal team can build on",
    ],
  },
  {
    slug: "sd-wan",
    icon: Workflow,
    title: "SD-WAN",
    short: "Flexible WAN connectivity designed for multi-location businesses.",
    overview:
      "Software-defined WAN that connects branches, offices, data centers, and cloud environments under one centrally managed architecture.",
    features: [
      "Multi-location Connectivity",
      "Centralized Management",
      "Application-aware Networking",
      "Network Visibility",
      "Flexible WAN Architecture",
    ],
    benefits: [
      "Consistent policy and performance across every site",
      "Visibility into how applications use the network",
      "Freedom to mix transport types per location",
    ],
  },
  {
    slug: "managed-services",
    icon: Headset,
    title: "Managed Services",
    short: "24/7 monitoring, technical support, and proactive network maintenance.",
    overview:
      "Continuous monitoring and management of your network environment, so issues are identified and handled before they become disruptions.",
    features: [
      "24/7 Monitoring",
      "Incident Management",
      "Technical Support",
      "Network Maintenance",
      "Performance Monitoring",
    ],
    benefits: [
      "Your team focuses on the business, not the network",
      "Proactive handling instead of reactive firefighting",
      "Clear escalation paths when incidents occur",
    ],
  },
  {
    slug: "voip",
    icon: PhoneCall,
    title: "VoIP",
    short: "IP-based voice infrastructure for business communication and contact center environments.",
    overview:
      "Business voice connectivity over IP infrastructure — built for clarity, reliability, and integration with modern communication workflows, including contact center environments.",
    features: [
      "IP-based Voice Infrastructure",
      "Business Communication",
      "Contact Center Support",
      "Scalable Extensions",
    ],
    benefits: [
      "Voice quality engineered alongside your data network",
      "One partner for both connectivity and communication",
      "Scales from a single office to distributed teams",
    ],
  },
  {
    slug: "vps",
    icon: Server,
    title: "VPS",
    short: "Flexible virtual private server infrastructure for applications and workloads.",
    overview:
      "Virtual private server infrastructure for business applications and workloads, connected directly to a network built for low-latency, reliable access.",
    features: [
      "Virtual Private Servers",
      "Flexible Configurations",
      "Application Hosting",
      "Workload Isolation",
    ],
    benefits: [
      "Infrastructure sized to your workload, not a fixed bundle",
      "Hosted on connectivity we operate end to end",
      "Room to grow without re-platforming",
    ],
  },
];
