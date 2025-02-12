import { faker } from '@faker-js/faker';
import { useMemo } from 'react';

export default function Faker({count = 10, section = "About me"}) {
    const data = useMemo(() => Array.from({ length: count }).fill(1).map(() => ({
        id: faker.number.int(),
        section,
        subtitle: faker.company.name(),
        start: faker.date.past().getFullYear(),
        end: faker.date.future().getFullYear(),
        title: faker.person.jobTitle() + " " + faker.person.jobArea(),
        summary: faker.lorem.paragraph(5),
        badges: Array.from({ length: 5 }).fill(1).map(() => faker.hacker.noun())
    })), [count]);

    return data.map(d => (
        <div key={d.id} className="card bg-white m-5">
            <div className="card-body">
                <h2 className="card-title">{d.title}</h2>
                <h4 className="text-primary">{d.subtitle}</h4>
                <p>{d.summary}</p>
                <div className="card-actions justify-start">
                    {d.badges.map(b => (<div className="badge badge-outline">{b}</div>))}
                </div>
            </div>
        </div>
    ))
}