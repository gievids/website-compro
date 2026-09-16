import { Globe, Network, Workflow, Headset, PhoneCall, Server } from "lucide-react";

export const SOLUTIONS = [
  {
    slug: "internet-ip-core",
    icon: Globe,
    title: "Internet Service & IP Core Networks",
    short: "High-availability internet service with a 99.5% SLA, multiple fiber optic links, and multiple upstream providers.",
    overview:
      "High-availability internet service with a 99.5% Service Level Agreement (SLA), supported by multiple fiber optic links and multiple upstream providers to ensure optimal performance, reliability, and service continuity.",
    features: [
      "99.5% Service Level Agreement",
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
    title: "Network Infrastructure Service",
    short: "End-to-end design, deployment, configuration, and maintenance of reliable, scalable network systems.",
    overview:
      "End-to-end network infrastructure services covering design, deployment, configuration, and maintenance of reliable and scalable network systems.",
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
    title: "SD-WAN Service",
    short: "Secure, efficient, and centralized connectivity across multiple business locations.",
    overview:
      "Providing SD-WAN solutions that enable secure, efficient, and centralized connectivity across multiple business locations, enhancing application performance and network reliability.",
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
    title: "Maintenance & Managed Service",
    short: "End-to-end maintenance and managed services with 24/7 monitoring, fault management, and technical support.",
    overview:
      "Integrated internet and managed services are delivered as a complete solution, offering end-to-end maintenance and managed services, including 24/7 network monitoring, fault management, and technical support to ensure continuous and optimal network operations.",
    features: [
      "24/7 Monitoring",
      "Fault Management",
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
    title: "VoIP Infrastructure Service",
    short: "Cost-effective, scalable IP-based voice infrastructure for enterprise communication.",
    overview:
      "Delivering IP-based voice communication infrastructure solutions that are cost-effective, scalable, and designed to support enterprise communication needs.",
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
    title: "Virtual Private Server Service",
    short: "Scalable and secure VPS solutions for business applications with high performance and reliability.",
    overview:
      "Scalable and secure Virtual Private Server (VPS) solutions designed to support business applications with high performance, flexibility, and reliability.",
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
