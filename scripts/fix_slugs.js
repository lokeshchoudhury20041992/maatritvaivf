const fs = require('fs');

const filesToUpdate = [
    "src/lib/schema-helpers.ts",
    "src/app/page.tsx",
    "src/lib/conditions-data.ts",
    "src/app/best-infertility-specialist-in-kolkata/page.tsx",
    "src/app/ivf-centre-in-kolkata/page.tsx",
    "src/lib/services-data.ts",
    "src/app/fertility-clinic-kolkata/page.tsx",
    "src/components/Footer.tsx",
    "src/app/doctors/dr-ankita-mandal/page.tsx"
];

let replacedCount = 0;

filesToUpdate.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        if (content.includes("'/services/laparoscopic-surgery'")) {
            content = content.replace(/'\/services\/laparoscopic-surgery'/g, "'/services/laparoscopic-surgery-infertility'");
            fs.writeFileSync(file, content, 'utf8');
            replacedCount++;
            console.log(`Updated slugs in ${file}`);
        }
    } catch (e) {
        console.error(`Skipping ${file}: ${e.message}`);
    }
});

console.log(`Finished updating ${replacedCount} files.`);
