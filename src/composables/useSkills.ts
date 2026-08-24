import { useQuery } from '@tanstack/vue-query'

type Skill = {
    id: number,
    name: string,
    level: number,
    image: string,
    tags: string[]
}

async function fetchSkills(): Promise<Skill[]> {
    const response = await fetch("http://localhost:5000/skills");
    if (!response.ok) {
        throw new Error('Failed to fetch skills');
    }

    return response.json();
}

export function useSkills() {
    return useQuery({
        queryKey: ['skills'],
        queryFn: fetchSkills,
        staleTime: 1000 * 60 * 5,
    })
}
