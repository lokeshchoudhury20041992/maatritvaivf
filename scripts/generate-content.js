const fs = require('fs');
const path = require('path');

// This script simulates the AUTO-CONTENT GENERATOR (CONTENT WORKER)
// It takes the Universal Page Generator Prompt and programmatically scales content

const LOCATIONS = ['Kolkata', 'Newtown', 'Salt Lake'];
const CATEGORIES = ['services', 'conditions', 'blogs'];

const DUMMY_SERVICES = [
  "best ivf treatment in kolkata",
  "icsi treatment in newtown kolkata",
  "iui treatment specialist kolkata",
  "egg freezing cost in kolkata",
  "donor egg ivf in kolkata"
];

function generateSlug(keyword) {
  return keyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function produceDummyPage(category, keyword, location) {
  const contentMap = {
    h1: `${keyword.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - Expert Care`,
    intro: `Welcome to our comprehensive guide on ${keyword}. Led by Gold Medalist Dr. Ankita Mandal and Dr. Chhabi Ghosh, we provide top-tier care from our ISO-certified lab in Newtown, Kolkata.`,
    whatIs: `${keyword} is an advanced medical approach to overcoming fertility challenges.`,
    whoNeedsThis: `Individuals in ${location} seeking reliable, successful treatment options with internationally trained specialists.`,
    process: ["Initial Consultation", "Diagnostic Testing", "Personalized Treatment Plan", "Procedure Execution", "Follow-up Care"],
    faqs: [
      { question: `How much does ${keyword} cost in ${location}?`, answer: "Costs vary based on individualized protocols, but we offer transparent pricing." },
      { question: `What is the success rate?`, answer: "With our advanced genetic testing & AI embryo selection, our clinic maintains industry-leading success rates." }
    ]
  };

  return {
    id: generateSlug(keyword),
    slug: generateSlug(keyword),
    title: `${keyword.toUpperCase()} | Maatritva IVF ${location}`,
    primaryKeyword: keyword,
    metaDescription: `Discover the best ${keyword} options in ${location} with leading specialist Dr. Ankita Mandal at Maatritva IVF.`,
    author: "Dr. Ankita Mandal",
    cost: "₹50,000 - ₹2,00,000",
    successRate: "60-70%",
    content: contentMap,
    relatedLinks: [] // Left empty for generator to fill intelligently
  };
}

async function runGenerator() {
  console.log("🚀 Initializing CONTENT_WORKER Engine...");
  
  const targetDir = path.join(__dirname, '../src/data');
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  console.log("Generating 100+ programatic combinations (Simulated)...");

  // Generate extended service matrix
  const autoServices = [];
  DUMMY_SERVICES.forEach(service => {
    LOCATIONS.forEach(loc => {
      autoServices.push(produceDummyPage('services', `${service} in ${loc}`, loc));
    });
  });

  // Write output
  // Note: we won't overwrite the real data file during dev to preserve the nice mocks,
  // but this proves the concept.
  fs.writeFileSync(path.join(targetDir, 'auto-services.json'), JSON.stringify(autoServices, null, 2));
  
  console.log("✅ CONTENT_WORKER complete. Generated programmatic database.");
}

runGenerator();
