# NMC Ethical Advertising Audit: bestivfcentreinkolkata.com

**Date:** 11 Oct 2026
**Basis:** NMC Public Notice R-13014/01/2024-Ethics, dated 06/10/2026, read in full from nmc.org.in. See `nmc-2026-reference.md` for the provision map.
**Status:** Code changes are complete. This is not a legal opinion. The website is **not** certified as compliant; the items in section C still need sign-off by an authorised clinic representative or a qualified compliance adviser.

---

## A. Audit summary

| Item | Result |
|---|---|
| Source files inspected | 52 files under `src/` (all pages, components, data and schema), plus `public/images` and `scripts/` |
| Rendered routes checked | 94 static pages built. All 60 sitemap URLs and 82 internal links were crawled, and the rendered HTML was rescanned. |
| Files changed | 32 (about 720 lines added and 820 removed) |
| Issues corrected | About 450 individual wording, schema or image changes: superlatives (about 150), clinic success rates and patient counts (about 60), testimonials and star ratings (9 blocks), guarantees and "painless" (about 40), fear, urgency and "free" inducements (about 30), unverifiable achievements (about 15), misleading images (5) |
| Items needing human review | 30 (section C) |
| Not accessible | Live site and CMS (none exists; content is in the repo), Google Business Profile, Google Ads and Meta ad copy, social media accounts, Practo listing, the sister sites drankitamandal.com and maatritvaivffertility.com, and the Supabase lead table |

## B. Changes made (representative; the full detail is in `git diff`)

| Location | Original | Updated | Provision |
|---|---|---|---|
| `components/HeroSection.tsx` | "Kolkata's #1 Fertility Specialist" | "IVF & Fertility Care in Kolkata" | 8.1(iii), 8.1(ix) |
| `components/HeroSection.tsx` | Badge "Clinic Success Guaranteed" | "Fertility · IVF · Clinic" | 8.1(iii), 8.3(ii) |
| `components/HeroSection.tsx` | 5 stars plus "2,000+ Success Stories"; "High Success Rates" | "New Town, Kolkata"; "IVF, IUI & ICSI" | 3.2 Expl. V, 8.1(iii) |
| `components/TrustBar.tsx` | 15,000+ Happy Families, 95% Satisfaction, 5,000+ Cycles | Years of experience only (2 items; grid narrowed) | 8.1(iii) |
| `components/Footer.tsx` | "Kolkata's leading fertility clinic", "NMC Certified Specialists", "© Best IVF Centre in Kolkata" | Factual description, "Registered Medical Practitioners", clinic name; the disclaimer is now visible on mobile and expanded | 8.1(ix), 8.3 |
| `components/CTA.tsx` | "Book Your Free Consultation Today … leading fertility experts" | "Contact the Clinic … enquire about appointment availability" | 8.1(x), 8.1(ix) |
| `app/layout.tsx`, `lib/schema-helpers.ts` | Title "Best IVF Centre in Kolkata"; "most trusted … consistently high success rates"; "15,000+ happy families"; title suffix "- Best IVF Centre" on every page | "IVF and Fertility Care in Kolkata"; factual description; suffix "- Maatritva IVF" | 8.1(iii), 8.1(ix) |
| `lib/schema-helpers.ts` (JSON-LD) | Physician `award`: "Best Gynecologist … 15,000+ patients", "Top 5"; `knowsAbout`: "Best IVF Specialist"; clinic credential "NMC Registered Medical Establishment" | Removed (the NMC registers practitioners, not establishments) | 8.1(iii), 8.1(ix) |
| `app/page.tsx` | Two named patient testimonials with 5 stars; "NMC Compliant – All guidelines followed" badge | Clinic address and appointment cards; "Registered Medical Practitioners" | 3.2 Expl. V, 6.2, 8.1(v) |
| `app/page.tsx` | "World-Class Facilities … state-of-the-art … highest possible success rates"; "ISO-certified clean room" | Factual facility list; certification claim removed | 3.2 Expl. II, 8.1(ix) |
| `app/page.tsx` images | AI-generated "lab" photo showing the signage of a different clinic ("Kolkata Fertility & Research Centre, Lab Director Dr. S. Mukherjee"); AI "consultation room" showing "ARTIS FERTILITY" and "Dr. Anjali Rao"; graphics watermarked aspirefertility.in and Prashanth Fertility Research Centre | Replaced with neutral medical illustrations already in the repo | 3.2 Expl. II, 7.2(a) |
| `app/services/[slug]/page.tsx` | "Success Rate*" box showing clinic figures (e.g. 65–75%) | "Treatment Outcomes: vary by individual … No outcome is guaranteed" | 8.1(iii), 8.1(vi) |
| `app/locations/[slug]/page.tsx` | Per-location 5-star patient testimonial | Note that outcomes vary and risks are discussed | 3.2 Expl. V, 8.1(v) |
| `app/blog/[slug]/page.tsx` | Author label "Fertility Specialist" | Author's qualifications from `doctors-data` | 3.2 Expl. III/IV |
| Doctor pages and `doctors-data.ts` | "best gynecologist", "Top 5", "15,000+ patients", "pioneer in Eastern India", "most decorated", "Former HoD at a leading hospital", "mentored 50+", "thousands of successful cycles" | Removed; sections renamed "Qualifications & Memberships/Experience" | 8.1(iii), 8.1(ix), 8.3(ii) |
| `contact/page.tsx` | "Call Us (24/7 Helpline)" (contradicts the Mon–Sat 09:00–20:00 hours in the schema) | "Call Us" | 8.3(i) accuracy |
| `ContactForm.tsx` | "100% confidential" | "kept confidential and used only to respond to your enquiry" | accuracy |
| 6 landing pages | "Best/Top-Rated/Leading/Most Trusted …", clinic pregnancy rates, "painless", testimonial grids, "multi-cycle packages at reduced rates", comparisons with other cities and clinics | Neutral headings, "Outcomes and Risks" sections, risk lists (OHSS, multiple and ectopic pregnancy) | 8.1(i)–(x) |
| `data/services.json`, `conditions.json` | "Best IVF Treatment … High Success Rates", "65–75% success", "helped thousands", "Book free consultation", "Before It's Too Late", "virtually painless", "no increased risk of birth defects" | Factual titles; balanced outcome, risk and evidence wording | 8.1(i), (iii), (vi), (x) |
| `data/blogs.json` | "near 100% survival", "Proven", fear and urgency copy, "free consultation", regret quotes, 29 "Best IVF Treatment" link labels | Balanced wording; statistics tables labelled "indicative published data, not this clinic's results" | 8.1(i), (iii), (vi), (x) |
| `lib/locations-data.ts` | "best IVF centre near …", "best-equipped lab", "complimentary airport pickup", "comparable or better success rates than Dhaka" | Factual location copy; pickup "can be arranged on request" | 8.1(ix), 8.1(x) |
| Functional fixes | `tel:+91XXXXXXXXXX` and `wa.me/91XXXXXXXXXX` placeholders (IVF specialist and fertility clinic pages) | Clinic number +91 8100343839 used elsewhere on the site | — |

**Unchanged by design:** all URLs and slugs, navigation structure, forms and Supabase logic, GTM and Google Ads tags, conversion tracking, layout and styling (apart from the 2-column TrustBar and the footer disclaimer now showing on mobile).

## C. Items requiring approval or action by the clinic

### High priority
1. **Domain and slugs:** the domain `bestivfcentreinkolkata.com` and the routes `/best-ivf-specialist-in-kolkata`, `/best-gynecologist-in-kolkata`, `/best-infertility-specialist-in-kolkata` and `/services/best-ivf-treatment` contain the superlative "best" (8.1(ix)). This needs a business decision on a domain migration and 301 redirects. The YouTube handle `@BestFertilityIVFclinicKolkata` has the same problem.
2. **Hero image** `public/images/img/hero_image_1.png` appears AI-generated: a couple with a baby and staff applauding in front of the Maatritva logo. It depicts an implied success story (7.2(b), 8.1(v)). Replace it with a genuine, non-patient clinic photograph. It is unchanged because it defines the site's design.
3. **SMR/NMR registration numbers** for every doctor (Dr. Ankita Mandal, Dr. Chhabi Ghosh, Dr. Prattay Ghosh, and blog authors) must be supplied and published (3.2 Expl. III/IV). None were invented.
4. **Conflicting qualifications for Dr. Ankita Mandal:** `/doctors` says "MBBS, MD, Diploma in Reproductive Medicine, FIMAS"; everywhere else says "MBBS, MS (OBG), Fellowship in Infertility, Advanced Diploma (KIEL)". Confirm which is correct.
5. **Authorship and AI (7.2):** `scripts/generate-content.js` shows that the content was template-generated. Confirm that each named doctor actually wrote or reviewed the posts and pages attributed to them. If AI assisted, add the required source marking. The unused `MedicallyReviewed` component claims "Sources referenced: WHO, ICMR, PubMed"; do not render it unless that is true.
6. **Credentials to verify with documents:** ACOG and ISOG memberships, the FIAOG fellowship, the KIEL diploma, FRCOG (Dr. Chhabi Ghosh), "15+ / 35+ / 14+ years", and the "ICMR Registered ART Clinic" schema credential (registration is now under the ART (Regulation) Act 2021 National Registry).
7. **Facility claims to verify:** EmbryoScope/time-lapse, HEPA clean room, vitrification and cryopreservation, in-house embryology lab, in-house ultrasound and bloodwork, private recovery suites.

### Medium priority
8. **Doctor photographs** on `/doctors` and in the hero card (9.2): acceptable in a patient-information directory, but not as promotional imagery. Decide on use in the hero.
9. **Doctor-centred landing pages** (`/best-ivf-specialist…`, `/best-gynecologist…`, doctor profiles) may be "promotional portrayal of an individual RMP" (8.3(ii)). Decide whether to keep, merge into the directory, or reduce.
10. **Bangladesh and international patient pages** (`/locations/bangladesh-ivf-support`; visa letters, airport pickup) may amount to solicitation (8.1(ii)).
11. **General medical statistics** kept with "published data" framing but without citations need a clinician's check, with sources added or the figures removed. They appear in about 25 blogs and condition pages; the per-slug list is in the working notes. Examples: IVF success by age, IUI 15–22%, azoospermia retrieval 40–60%, "15–20% of couples in India", "12 million IVF babies".
12. **Clinical wording to sign off:**
    - TSH targets (thyroid pages).
    - Supplement doses (CoQ10, DHEA, melatonin).
    - NK-cell and immunological testing, and the ERA test.
    - Contradictory semen thresholds (15 vs 16 million/mL).
    - Contradictory "biggest cause" statements in the sperm-DNA blog.
    - Newly added risk text (OHSS, ectopic pregnancy, cramping).
13. **Fees:** `/ivf-cost-kolkata` is titled "2024", and the cost ranges in services, blogs and the cost page must be current (8.1(x): factual and not misleading).
14. **Unrendered data still holding old claims** (no public impact today, but they would reappear if re-used):
    - `successRate` fields in `services.json`.
    - Testimonial objects in `locations-data.ts`.
    - Sonologist, embryologist and counsellor bios in `doctors-data.ts` ("one of the top USG consultants", "unparalleled").
    - `lib/blog-data.ts`, `services-data.ts` and `conditions-data.ts` (used only for sitemap slugs).
15. **Privacy and DPDP Act 2023 (7.6):**
    - Forms have no consent notice.
    - The privacy policy does not mention Google Tag Manager or Google Ads, or Supabase storage.
    - The privacy policy refers to a "Fertility Score Calculator" that does not exist.
    - It claims compliance with "NMC guidelines".
    - Needs legal drafting.
16. **Off-site:** Google Business Profile, Google Ads and Meta ad copy, social posts, Practo listing, sister sites, and any review-solicitation practice (3.2 Expl. V, 8.1(xii)). None were accessed.

### Low priority
17. Stock images on service cards: an operating-room photo `sharp_chula_latest.jpg` that appears to be a US hospital, and a stock pregnancy graphic. Check the licences, and do not imply they are the clinic's own facilities.
18. `public/images/img/` publicly serves unrelated personal files ("Internship Report_ Developing Digital Marketing Expertise" .pdf/.pptx, about 28 MB). Remove them.
19. The nested `bestivfcentreinkolkata/` folder is a stale create-next-app copy tracked in git.

## D. Technical test results

| Check | Result |
|---|---|
| `eslint src` | **Passed** (0 errors, 0 warnings). `eslint .` also reports 149 errors in `scripts/*.js` and the stale nested folder; these predate this work and are unrelated. |
| `tsc --noEmit` | **Passed** |
| `next build` | **Passed**: 94 static pages generated |
| Route crawl (60 sitemap URLs) | 44 return 200. **16 return 404**; this predates the changes because `sitemap.ts` reads slugs from `lib/*-data.ts` while pages render from `data/*.json` (e.g. `/services/embryo-freezing`, `/blog/ivf-process-step-by-step-guide`). |
| Internal links (82 unique) | 78 return 200. **4 return 404** (pre-existing links in the IVF specialist page: `/services/blastocyst-transfer`, `/services/ivf-with-pgd-pgs`, `/services/male-infertility-treatment`, `/services/testicular-sperm-extraction`). |
| JSON-LD | 161 blocks in the rendered HTML, all valid JSON (MedicalClinic, Physician, FAQPage, BreadcrumbList, MedicalCondition, MedicalWebPage) |
| Tracking | GTM `GTM-WTXNSDWJ` and Ads `AW-17172169546` are present in the rendered HTML; tracking code is unchanged |
| Rendered-text phrase rescan | The only remaining hits are negations ("no outcome is guaranteed"), URLs/slugs, timing uses ("best age to freeze eggs", "best reached via"), prices, and a neutral FAQ "What is the success rate…?" whose answer gives no clinic figures |
| Visual check of desktop and mobile layouts | **Skipped** (no browser automation in this session). Changes are text-only apart from the TrustBar grid and the footer disclaimer visibility, but a manual check is recommended. |
| Form submission | **Skipped**: it would write to the production Supabase table. Form code is unchanged. Note: both forms show success and fire the Ads conversion even when the insert fails (pre-existing). |

## E. Remaining risks

- Compliance depends on facts the code cannot verify (credentials, facilities, fees, authorship, consent records).
- The domain name and the "best" slugs remain the most visible superiority claims.
- Off-site channels (ads, Google Business Profile, social media, sister sites) are often where enforcement complaints start; they were not reviewed.
- The clinic is regulated under the WB Clinical Establishments Act (4.3, 11.5); state-level rules were not reviewed.
- NMC may issue clarifications under para 12; re-check before relying on this interpretation.
