import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// One unique title (< 60 chars) and description (150-160 chars) per route.
const META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Pool Cleaning in Riverview & Brandon, FL | NEW Pool Service',
    description:
      'Weekly pool cleaning and maintenance in Riverview, Fishhawk, Brandon and Lithia, FL. Friendly, reliable local service. Call (813) 733-2829 for a free quote.',
  },
  '/gallery': {
    title: 'Before & After Pool Cleaning Gallery | NEW Pool Service',
    description:
      'See before and after photos of pools we clean and maintain in Riverview, Fishhawk, Brandon and Lithia, FL. Real results from NEW Pool Service customers.',
  },
  '/services': {
    title: 'Pool Cleaning & Maintenance Services | NEW Pool Service',
    description:
      'Weekly pool cleaning, chemical balancing, equipment checks and repairs from NEW Pool Service in Riverview, Fishhawk, Brandon and Lithia. Get a free quote.',
  },
  '/reviews': {
    title: 'Customer Reviews | NEW Pool Service, Riverview FL',
    description:
      'Read what pool owners in Riverview, Fishhawk, Brandon and Lithia, FL say about NEW Pool Service, their weekly cleaning, and the care we put into every visit.',
  },
  '/areas': {
    title: 'Pool Service Areas Near Riverview, FL | NEW Pool Service',
    description:
      'NEW Pool Service cleans and maintains pools in Riverview, Fishhawk, Brandon, Lithia and nearby Tampa Bay communities. See if your home is in our service area.',
  },
  '/faq': {
    title: 'Pool Cleaning FAQ | NEW Pool Service, Riverview FL',
    description:
      'Answers to common questions about weekly pool cleaning, chemical care, equipment, scheduling and service areas from NEW Pool Service in Riverview and Brandon, FL.',
  },
  '/contact': {
    title: 'Contact NEW Pool Service | Free Pool Cleaning Quote',
    description:
      'Contact NEW Pool Service for a free pool cleaning quote in Riverview, Fishhawk, Brandon or Lithia, FL. Call (813) 733-2829 or send us a message online today.',
  },
};

export function PageMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = META[pathname.replace(/(.)\/$/, '$1')];
    if (!meta) return;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [pathname]);
  return null;
}
