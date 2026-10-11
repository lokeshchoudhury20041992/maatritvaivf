import { Metadata } from 'next';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
    getBreadcrumbSchema,
    getIndividualPhysicianSchema,
    SITE_URL,
} from '@/lib/schema-helpers';
import { coreDoctors } from '@/lib/doctors-data';

export const metadata: Metadata = {
    title: 'IVF, IUI and Fertility Specialists in Kolkata | Dr. Ankita Mandal - Maatritva IVF',
    description:
        'Doctors and clinical team at Maatritva Fertility IVF & Healthcare, Kolkata — Dr. Ankita Mandal and the clinic\'s fertility specialists, embryologists, counsellors and empanelled sonologists, with qualifications and specialties.',
    keywords: [
        'IVF doctor Kolkata',
        'fertility specialist Kolkata',
        'gynaecologist Kolkata',
        'IVF specialist near me',
        'infertility doctor Kolkata',
        'IUI specialist Kolkata',
        'ICSI specialist Kolkata',
        'Dr Ankita Mandal IVF',
        'sonologist Kolkata',
        'embryologist Kolkata',
    ],
    alternates: {
        canonical: `${SITE_URL}/doctors`,
    },
};

export default function DoctorsLayout({ children }: { children: React.ReactNode }) {
    const breadcrumbs = getBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Our Doctors', url: `${SITE_URL}/doctors` },
    ]);

    // Generate individual Physician schemas for each core doctor
    const doctorSchemas = coreDoctors.map((doctor) =>
        getIndividualPhysicianSchema({
            name: doctor.name,
            description: doctor.about,
            degrees: doctor.degrees,
            designation: doctor.designation,
            specialisations: doctor.specialisations,
            url: `${SITE_URL}/doctors`,
        }),
    );

    return (
        <>
            <SchemaMarkup schema={breadcrumbs} />
            {doctorSchemas.map((schema, i) => (
                <SchemaMarkup key={i} schema={schema} />
            ))}
            {children}
        </>
    );
}
