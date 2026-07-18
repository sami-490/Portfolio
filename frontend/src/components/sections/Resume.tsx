'use client';
import React, { useState } from 'react';

/* ── Education Tab Data ── */
const educationLeft = {
  heading: "Education History",
  dateRange: "2020 - 2025",
  items: [
    {
      title: "BS Computer Science",
      score: "3.80/4",
      institution: "Superior University (2020 – 2024)",
      description: "",
    },
    {
      title: "Full Stack Web Developer Program",
      score: "Certificate",
      institution: "Global Academy of Technology & Innovation (2025)",
      description: "",
    },
    {
      title: "Introduction to SQL",
      score: "Certificate",
      institution: "Sololearn (2025)",
      description: "",
    },
    {
      title: "Excel for Beginners",
      score: "Certificate",
      institution: "Great Learning Academy (2023)",
      description: "",
    },
  ],
};

const educationRight = {
  heading: "Relevant Courses",
  dateRange: "2023 - 2025",
  items: [
    {
      title: "React & Next.js Masterclass",
      score: "4.50/5",
      institution: "Online Self-Study (2024 – 2025)",
      description: "",
    },
    {
      title: "Node.js Backend Development",
      score: "4.20/5",
      institution: "Online Self-Study (2024 – 2025)",
      description: "",
    },
    {
      title: "Python for Automation",
      score: "4.00/5",
      institution: "Online Self-Study (2023 – 2024)",
      description: "",
    },
  ],
};

/* ── Experience Tab Data ── */
const experienceLeft = {
  heading: "Company Experience",
  dateRange: "2023 - Present",
  items: [
    {
      title: "Freelance Full-Stack Developer",
      score: "Remote",
      institution: "Self-Employed (2023 – Present)",
      description: "",
    },
    {
      title: "Frontend Developer",
      score: "Contract",
      institution: "Various Client Projects (2024 – 2025)",
      description: "",
    },
    {
      title: "WordPress & Shopify Developer",
      score: "Freelance",
      institution: "Fiverr & Direct Clients (2023 – 2024)",
      description: "",
    },
  ],
};

const experienceRight = {
  heading: "Job Experience",
  dateRange: "2023 - Present",
  items: [
    {
      title: "Custom Web Applications",
      score: "Next.js",
      institution: "Built LMS, Banking & Restaurant platforms",
      description: "",
    },
    {
      title: "E-Commerce Solutions",
      score: "Shopify",
      institution: "Store setup, theme customization & migration",
      description: "",
    },
    {
      title: "Backend API Development",
      score: "Node.js",
      institution: "RESTful APIs, auth systems & database design",
      description: "",
    },
  ],
};

/* ── Professional Skills Data ── */
const designSkills = [
  { name: 'Figma', value: 100 },
  { name: 'Canva', value: 100 },
  { name: 'Microsoft Word', value: 100 },
  { name: 'PowerPoint', value: 100 },
  { name: 'Excel', value: 100 },
];

const developmentSkills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'JavaScript', value: 95 },
  { name: 'Bootstrap', value: 90 },
  { name: 'React', value: 100 },
  { name: 'Next.js', value: 100 },
  { name: 'Node.js', value: 85 },
  { name: 'Express.js', value: 90 },
  { name: 'Python', value: 80 },
  { name: 'WordPress', value: 90 },
  { name: 'Shopify', value: 100 },
];

/* ── Interview Tab Data (Two-column layout) ── */
const interviewLeft = {
  heading: "Company Experience",
  dateRange: "2023 - Present",
  items: [
    {
      title: "Discovery & Requirements Gathering",
      score: "2 Hours",
      institution: "Initial Client Consultation",
      description: "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?",
    },
    {
      title: "Concept & Strategy Development",
      score: "1 Week",
      institution: "Planning & Wireframing Phase",
      description: "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype.",
    },
    {
      title: "High-End Web Design",
      score: "1 Week",
      institution: "Design & Prototyping Phase",
      description: "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition.",
    },
  ],
};

const interviewRight = {
  heading: "Job Experience",
  dateRange: "2023 - Present",
  items: [
    {
      title: "Full-Stack Development",
      score: "2 Weeks",
      institution: "Custom Code & CMS Integration",
      description: "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site.",
    },
    {
      title: "Website Onboarding & Training",
      score: "2 Hours",
      institution: "Personal Workshop & Handoff",
      description: "In a personal workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials that you can access at any time.",
    },
    {
      title: "Ongoing Support & Maintenance",
      score: "Flexible",
      institution: "Post-Launch Care & Updates",
      description: "After launch, I provide ongoing support, bug fixes, performance monitoring, and feature additions to ensure your website stays up-to-date, secure, and performing at its best.",
    },
  ],
};

type Tab = 'education' | 'skills' | 'experience' | 'interview';

/* ── Timeline Column Component (with optional description) ── */
function TimelineColumn({
  heading,
  dateRange,
  items,
}: {
  heading: string;
  dateRange: string;
  items: { title: string; score: string; institution: string; description?: string }[];
}) {
  return (
    <div className="flex-1 min-w-0">
      {/* Column Header */}
      <div className="mb-10">
        <p className="text-inbio-pink text-xs font-bold tracking-widest uppercase mb-2">
          {dateRange}
        </p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-inbio-text">
          {heading}
        </h3>
      </div>

      {/* Timeline Items */}
      <div className="relative pl-8 border-l-2 border-[#1e2024]">
        {items.map((item, idx) => (
          <div key={idx} className="relative mb-10 last:mb-0 group">
            {/* Circle marker on the timeline */}
            <div className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#1e2024] bg-inbio-bg group-hover:border-inbio-pink transition-colors duration-300" />

            {/* Card */}
            <div className="shadow-inbio-raised p-6 rounded-2xl border border-[#1a1c1e] hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="text-base font-bold text-inbio-text group-hover:text-inbio-pink transition-colors duration-300 leading-snug">
                  {item.title}
                </h4>
                <span className="shrink-0 text-inbio-pink text-xs font-bold tracking-wide bg-inbio-pink/10 px-3 py-1.5 rounded-md shadow-inbio-sunken">
                  {item.score}
                </span>
              </div>
              <p className="text-inbio-text-muted text-sm font-inter leading-relaxed">
                {item.institution}
              </p>
              {item.description && (
                <p className="text-inbio-text-muted text-sm font-inter leading-relaxed mt-4">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Skill Column Component ── */
function SkillColumn({
  subtitle,
  heading,
  skills,
  collapsible = false,
}: {
  subtitle: string;
  heading: string;
  skills: { name: string; value: number }[];
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleSkills = collapsible && !expanded ? skills.slice(0, 5) : skills;
  const hasMore = collapsible && skills.length > 5;

  return (
    <div className="flex-1 min-w-0">
      <div className="mb-10">
        <p className="text-inbio-pink text-xs font-bold tracking-widest uppercase mb-2">
          {subtitle}
        </p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-inbio-text">
          {heading}
        </h3>
      </div>
      <div className="flex flex-col gap-7">
        {visibleSkills.map((skill, index) => (
          <div key={index} className="flex flex-col text-left">
            <div className="flex justify-between items-center mb-3 text-xs tracking-wider uppercase font-semibold text-inbio-text">
              <span>{skill.name}</span>
              <span className="text-inbio-pink">{skill.value}%</span>
            </div>
            {/* Blue-to-pink gradient bar */}
            <div className="shadow-inbio-sunken h-2.5 bg-[#1e2125] rounded-full overflow-hidden relative border border-[#191b1f] p-[1.5px]">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${skill.value}%`,
                  background: 'linear-gradient(to right, #4a6cf7, #e14d8a)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-[#1c1e22] text-inbio-pink shadow-inbio-raised bg-inbio-bg hover:-translate-y-0.5 hover:text-white hover:bg-linear-to-r hover:from-inbio-pink hover:to-inbio-pink-hover"
        >
          {expanded ? 'Show Less' : `More +${skills.length - 5}`}
        </button>
      )}
    </div>
  );
}

/* ── Main Resume Component ── */
export default function Resume() {
  const [activeTab, setActiveTab] = useState<Tab>('education');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'education', label: 'Education' },
    { key: 'skills', label: 'Professional Skills' },
    { key: 'experience', label: 'Experience' },
    { key: 'interview', label: 'Interview' },
  ];

  return (
    <section id="resume" className="py-24 bg-inbio-bg border-t border-[#1a1c1e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 font-montserrat">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-[13px] tracking-[3px] text-inbio-pink font-semibold uppercase mb-3">
            2+ Years of Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-inbio-text">
            My Resume
          </h2>
        </div>

        {/* Tab Navigation — single neomorphic bar */}
        <div className="flex flex-wrap shadow-inbio-raised rounded-xl p-2 max-w-4xl mx-auto mb-16 border border-[#1a1c1e]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-4 text-center rounded-lg font-bold text-sm tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.key
                  ? 'shadow-inbio-sunken text-inbio-pink'
                  : 'text-inbio-text hover:text-inbio-pink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto font-inter">

          {/* ═══════════════ EDUCATION ═══════════════ */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <TimelineColumn {...educationLeft} />
              <TimelineColumn {...educationRight} />
            </div>
          )}

          {/* ═══════════════ PROFESSIONAL SKILLS ═══════════════ */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <SkillColumn
                subtitle="Features"
                heading="Design Skill"
                skills={designSkills}
              />
              <SkillColumn
                subtitle="Features"
                heading="Development Skill"
                skills={developmentSkills}
                collapsible
              />
            </div>
          )}

          {/* ═══════════════ EXPERIENCE ═══════════════ */}
          {activeTab === 'experience' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <TimelineColumn {...experienceLeft} />
              <TimelineColumn {...experienceRight} />
            </div>
          )}

          {/* ═══════════════ INTERVIEW ═══════════════ */}
          {activeTab === 'interview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <TimelineColumn {...interviewLeft} />
              <TimelineColumn {...interviewRight} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
