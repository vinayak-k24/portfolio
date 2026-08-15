'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Azure AI Engineer Associate (AI-102)',
    org: 'Microsoft Certified',
    date: '2025',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    title: 'Azure Fundamentals (AZ-900)',
    org: 'Microsoft Certified',
    date: '2025',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
  },
  {
    title: 'Google Cloud Generative AI Leader',
    org: 'Google Cloud',
    date: '2025',
    link: 'https://www.cloudskillsboost.google/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
  },
  {
    title: 'GitHub Campus/Developer Recognition',
    org: 'GitHub',
    date: '2024',
    link: 'https://github.com/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
  },
  {
    title: 'NVIDIA Deep Learning Specialization',
    org: 'NVIDIA',
    date: '2024',
    link: 'https://www.nvidia.com/en-us/training/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Nvidia_logo.svg',
  },
  {
    title: 'Credly Verification',
    org: 'Credly',
    date: '2025',
    link: 'https://credly.com/',
    iconUrl: 'https://images.credly.com/images/36c72f4d-3a6e-4298-9c4b-2b6317016f3f/blob.png',
  },
  {
    title: 'Anthropic Claude Practitioner',
    org: 'Anthropic / Claude',
    date: '2025',
    link: 'https://www.anthropic.com/',
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Anthropic_logo.svg',
  },
];

// --- Helper Components --- 

function ProviderIcon({ url, alt, initials }: { url?: string; alt: string; initials: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset load/error when URL changes (helps client-side navigation)
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [url]);

  if (!url || error) {
    return <span className="text-white/70 font-medium text-sm select-none">{initials}</span>;
  }

  return (
    <>
      {/* Placeholder initials are visible until image loads */}
      {!loaded && <span className="text-white/70 font-medium text-sm select-none">{initials}</span>}

      <img
        key={url}
        src={url}
        alt={alt}
        loading="eager"
        decoding="async"
        crossOrigin="anonymous"
        className={`w-10 h-10 object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </>
  );
}

function CertificationCard({ 
  provider, 
  certs, 
  iconUrl, 
  isExpanded, 
  onToggle 
}: { 
  provider: string; 
  certs: typeof certifications; 
  iconUrl?: string; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) {
  const initials = provider.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const sortedCerts = [...certs].sort((a, b) => parseInt(b.date || '0') - parseInt(a.date || '0'));

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-secondary/20 border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-between transition-colors hover:bg-secondary/25 group">
        <div>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 overflow-hidden box-border shrink-0 relative">
              <ProviderIcon url={iconUrl} alt={`${provider} logo`} initials={initials} />
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">{provider}</h3>
          </div>

          <div className="space-y-3">
            {sortedCerts.map((c, i) => (
              <div key={`${c.title}-full-${i}`} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <div>
                  <h4 className="text-lg text-white font-light font-serif leading-snug">{c.title}</h4>
                  <p className="text-text-secondary text-sm mt-0.5">{c.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end pt-6 mt-6 border-t border-white/5">
          <a
            href={sortedCerts[0]?.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-sm inline-flex items-center gap-2 hover:text-white transition-colors z-10"
            onClick={(e) => e.stopPropagation()}
          >
            See provider <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  // Group certifications by provider
  const groupedCerts = React.useMemo(() => {
    // Keep a provider-level default map (prefer these over per-cert URLs)
    const providerIconDefaults: Record<string, string> = {
      Microsoft: 'https://www.freepnglogos.com/uploads/microsoft-window-logo-emblem-0.png',
      'Google Cloud': 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      GitHub: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      NVIDIA: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Nvidia_logo.svg',
      Credly: 'https://images.credly.com/images/36c72f4d-3a6e-4298-9c4b-2b6317016f3f/blob.png',
      Anthropic: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Anthropic_logo.svg',
    };

    type GroupShape = { iconCandidates: string[]; certs: typeof certifications };
    const groups: Record<string, GroupShape> = {};

    certifications.forEach((c) => {
      let key = 'Other';
      const org = (c.org || '').toLowerCase();
      if (org.includes('microsoft')) key = 'Microsoft';
      else if (org.includes('google')) key = 'Google Cloud';
      else if (org.includes('anthropic') || org.includes('claude')) key = 'Anthropic';
      else if (org.includes('github')) key = 'GitHub';
      else if (org.includes('nvidia')) key = 'NVIDIA';
      else if (org.includes('credly')) key = 'Credly';

      groups[key] = groups[key] || { iconCandidates: [], certs: [] };
      if (c.iconUrl) groups[key].iconCandidates.push(c.iconUrl);
      groups[key].certs.push(c);
    });

    // Convert groups to the public shape: prefer explicit provider defaults,
    // otherwise pick the first unique candidate from certs.
    const publicGroups: Record<string, { iconUrl?: string; certs: typeof certifications }> = {};
    for (const [k, v] of Object.entries(groups)) {
      const firstCandidate = v.iconCandidates.find(Boolean);
      publicGroups[k] = { iconUrl: providerIconDefaults[k] || firstCandidate, certs: v.certs };
    }

    const priority = ['Microsoft', 'Anthropic', 'Google Cloud', 'GitHub', 'NVIDIA', 'Credly', 'Other'];
    return Object.entries(publicGroups).sort(([a], [b]) => {
      const diff = publicGroups[b].certs.length - publicGroups[a].certs.length;
      if (diff !== 0) return diff;
      const ia = priority.indexOf(a);
      const ib = priority.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }, []);

  return (
    <section id="certifications" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-accent text-sm tracking-widest uppercase mb-2 block">Credentials</span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Certifications &amp; Badges</h2>
        </motion.div>
      </div>

      <div className="relative px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {groupedCerts.map(([provider, data]) => (
            <CertificationCard
              key={provider}
              provider={provider}
              certs={data.certs}
              iconUrl={data.iconUrl}
              isExpanded={expandedProvider === provider}
              onToggle={() => setExpandedProvider(prev => prev === provider ? null : provider)}
            />
          ))}
        </div>

        {/* Glass Faded Edges - only visible on smaller screens where horizontal scroll might occur */}
        <div className="absolute left-0 top-0 bottom-0 w-[8vw] bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10 md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-[8vw] bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10 md:hidden" />
      </div>
    </section>
  );
}