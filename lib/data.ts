export type Initiative = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  stat: string;
  statLabel: string;
  image: string;
  tags: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  body: string[];
};

export type FoundationFact = {
  label: string;
  value: string;
  description: string;
};

export const initiatives: Initiative[] = [
  {
    id: "anti-drug",
    title: "Anti-Drug Campaign",
    subtitle: "Naasha Mukti Abhiyaan",
    description:
      "A ground-level campaign spanning 100+ villages across Fatehabad district to combat substance abuse through awareness drives, youth engagement, and rehabilitation support. The Foundation works directly with panchayats, schools, and families to build drug-free communities.",
    icon: "shield",
    stat: "100+",
    statLabel: "Villages Covered",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    tags: ["Health", "Youth", "Community"],
  },
  {
    id: "eye-camps",
    title: "Free Eye Camps",
    subtitle: "Nishulk Nayan Shivir",
    description:
      "Providing free eye examinations, spectacles, and surgical interventions to underprivileged communities in Tohana and surrounding areas. Camps are held at local schools and community centres, bringing specialist ophthalmologists directly to those who cannot afford private care.",
    icon: "eye",
    stat: "5,000+",
    statLabel: "Patients Served",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    tags: ["Healthcare", "Education", "Welfare"],
  },
  {
    id: "gurdwara",
    title: "Gurdwara Sahib",
    subtitle: "Largest in 50km Radius",
    description:
      "The Foundation is constructing a 45,000 sq ft (5,000 sq yard) Gurdwara Sahib on Hisar Road, New Bypass, Tohana — set to be the largest Gurdwara within a 50km radius. The complex will house a langar hall, community library, and meditation centre, all self-funded by Vikram Bhim Singh.",
    icon: "building",
    stat: "45,000",
    statLabel: "Sq Ft Complex",
    image: "https://images.unsplash.com/photo-1588448416543-5803cbc0a5c0?w=800&q=80",
    tags: ["Heritage", "Community", "Architecture"],
  },
  {
    id: "equestrian",
    title: "CHRS Equestrian Championship",
    subtitle: "National Level Competitions",
    description:
      "Organising and sponsoring the CHRS National Equestrian Championship — a premier event that brings together riders from across India to celebrate the proud equestrian traditions of Haryana. The Championship provides a competitive platform for young riders and promotes the sport at the grassroots level.",
    icon: "award",
    stat: "2024",
    statLabel: "National Championship",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    tags: ["Sports", "Heritage", "Youth"],
  },
  {
    id: "education",
    title: "Rural Education Support",
    subtitle: "Vidya Sahayata Programme",
    description:
      "Distributing school supplies, funding scholarships, and supporting infrastructure upgrades at government schools in Fatehabad district. The Foundation believes education is the surest path to rural prosperity, and works to ensure no child is denied learning due to financial hardship.",
    icon: "book",
    stat: "500+",
    statLabel: "Students Supported",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80",
    tags: ["Education", "Youth", "Rural"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "anti-drug-campaign-100-villages",
    title: "Anti-Drug Campaign Reaches 100 Villages",
    excerpt:
      "The Naasha Mukti Abhiyaan has now covered over 100 villages in Fatehabad district, with youth pledges, family counselling sessions, and community marches making a measurable impact on substance abuse rates.",
    date: "2024-11-15",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    body: [
      "The Col. Bhim Singh Foundation's flagship anti-drug initiative, the Naasha Mukti Abhiyaan, reached a landmark milestone this November — 100 villages covered across Fatehabad district.",
      "Over the past eighteen months, Foundation volunteers and community workers have conducted awareness drives in schools, colleges, and panchayat bhawans. Youth pledge ceremonies, attended by thousands of young people, have become a defining feature of the campaign.",
      "Vikram Bhim Singh addressed a gathering at Tohana: 'Col. Bhim Singh fought for this nation on the battlefield. The fight today is here, in our villages, against the poison of drugs. We will win this battle too.'",
      "The campaign has drawn support from local police, government schools, and prominent village elders. Plans are underway to extend the programme to an additional 50 villages in 2025.",
    ],
  },
  {
    slug: "free-eye-camp-tohana-schools",
    title: "Free Eye Camp at Tohana Schools",
    excerpt:
      "Over 400 students and community members received free eye examinations, with 120 pairs of spectacles distributed and three surgical cases referred for treatment — all at no cost.",
    date: "2024-09-08",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    body: [
      "The Col. Bhim Singh Foundation organised a free eye camp at Government Senior Secondary School, Tohana, bringing specialist ophthalmologists from Hisar to examine students and community members free of charge.",
      "More than 400 people were examined over two days. Of these, 120 received free spectacles and three were referred for surgical intervention, with the Foundation covering all costs.",
      "Many of the children examined had never visited an eye doctor. Teachers reported that several students who had been struggling in class were found to have significant refractive errors — now corrected thanks to the camp.",
      "The Foundation plans to hold bi-annual eye camps, rotating across multiple schools in the district, ensuring consistent access to vision care for those who need it most.",
    ],
  },
  {
    slug: "gurdwara-sahib-building-largest-in-50km",
    title: "Gurdwara Sahib: Building the Largest in 50km",
    excerpt:
      "Construction is underway on a 45,000 sq ft Gurdwara complex on Hisar Road, Tohana — set to become the largest place of Sikh worship within a 50-kilometre radius, entirely self-funded by Vikram Bhim Singh.",
    date: "2024-07-20",
    category: "Heritage",
    image: "https://images.unsplash.com/photo-1588448416543-5803cbc0a5c0?w=800&q=80",
    body: [
      "Construction is progressing rapidly on the Col. Bhim Singh Foundation's most ambitious project: a 45,000 square foot (5,000 sq yard) Gurdwara Sahib on Hisar Road, New Bypass, Tohana.",
      "When complete, the complex will be the largest Gurdwara within a 50-kilometre radius and will include a grand prayer hall, a langar hall capable of serving thousands daily, a community library, and a meditation garden.",
      "The project is being funded entirely by Vikram Bhim Singh, with no public or corporate funding. 'This is in memory of Col. Bhim Singh, who served this nation selflessly,' he said. 'The least we can do is build a space of peace and service for our community.'",
      "The architecture draws on classical Punjabi Sikh design elements, with marble inlay work commissioned from craftsmen in Amritsar. The Foundation expects the project to be completed by late 2025.",
    ],
  },
  {
    slug: "chrs-national-equestrian-championship-2024",
    title: "CHRS National Equestrian Championship 2024",
    excerpt:
      "The Col. Bhim Singh Foundation proudly sponsored the CHRS National Equestrian Championship 2024, celebrating Haryana's rich equestrian heritage and giving a national platform to talented young riders.",
    date: "2024-03-12",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
    body: [
      "The CHRS National Equestrian Championship 2024, sponsored by the Col. Bhim Singh Foundation, was held in March with participants from across India competing in dressage, show jumping, and tent pegging.",
      "Col. Bhim Singh was himself a proud horseman, and the Foundation's support for equestrian sport is a direct tribute to his legacy. Haryana has produced many of India's finest riders, and events like the CHRS Championship ensure that tradition continues.",
      "Vikram Bhim Singh presented trophies to the champions and announced that the Foundation will continue to sponsor the Championship annually, with increased prize money to attract top-tier national talent.",
      "The event drew enthusiastic crowds and significant media coverage, putting Tohana on the national equestrian map and inspiring the next generation of riders from rural Haryana.",
    ],
  },
];

export const foundationFacts: FoundationFact[] = [
  {
    label: "Founded",
    value: "2023",
    description: "Established in Tohana, Fatehabad, Haryana",
  },
  {
    label: "Villages Reached",
    value: "100+",
    description: "Under the anti-drug Naasha Mukti Abhiyaan",
  },
  {
    label: "Gurdwara Complex",
    value: "45,000 sq ft",
    description: "Largest within a 50km radius",
  },
  {
    label: "Self-Funded",
    value: "100%",
    description: "Entirely funded by Vikram Bhim Singh",
  },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/colbhimsinghfoundation",
  facebook: "https://www.facebook.com/COLBHIMSINGHFOUNDATION",
};

export const contactInfo = {
  address: "Hisar Road, New Bypass, Tohana, Fatehabad, Haryana — 125120",
  email: "contact@colbhimsinghfoundation.org",
  phone: "+91 98765 43210",
};
