import {CardType} from "../@types/card.ts";

// TODO: Implement real API calls


const DATA = [] as CardType[];
for (let i = 0; i < 1000; i++) {
    DATA.push({
        id: i,
        text: `Card ${i}`,
        deckId: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date(),
    } as CardType)
}

export const fetchDeckCardList = async (deckId: number, params: { page: number, limit: number }): Promise<{ total: number, data: CardType[] }> => {
    console.log('fetchDeckCardList', params)
    const {page, limit} = params;
    const list = DATA.filter((item) => item.deckId === deckId)
    return {
        total: list.length,
        data: list
            .slice((page - 1) * limit, (page) * limit)
    }
}