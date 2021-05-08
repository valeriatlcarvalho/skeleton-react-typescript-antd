export interface AgrodataKanbanCardsApiResponse {
  id: string;
  order: number;
  title: string;
  created_by: string;
}

export interface AgrodataKanbanColumnDataApiResponse {
  id: string;
  columnTitle: string;
  cardsTotal: number;
  cards: AgrodataKanbanCardsApiResponse[];
  order: number;
}

export interface AgrodataKanbanColumnsApiResponse {
  data: AgrodataKanbanColumnDataApiResponse;
  per_page: number;
  current_page: number;
  total: number;
}

export interface AgrodataKanbanApiResponse {
  status?: string;
  message?: string;
  data: AgrodataKanbanColumnsApiResponse[];
}

export const initialData: AgrodataKanbanApiResponse = {
  data: [
    {
      data: {
        id: 'coluna1',
        columnTitle: 'Na fila',
        order: 0,
        cardsTotal: 5,
        cards: [
          {
            id: 'card1',
            title: 'XP0001',
            order: 0,
            created_by: 'Administrador',
          },
          {
            id: 'card2',
            title: 'XP0002',
            order: 1,
            created_by: 'Administrador',
          },
          {
            id: 'card3',
            title: 'XP0003',
            order: 2,
            created_by: 'Gustavo',
          },
          {
            id: 'card4',
            title: 'XP0004',
            order: 3,
            created_by: 'Maurício',
          },
          {
            id: 'card5',
            title: 'XP0005',
            order: 4,
            created_by: 'Administrador',
          },
        ],
      },
      per_page: 5,
      current_page: 1,
      total: 1,
    },
    {
      data: {
        id: 'coluna2',
        columnTitle: 'Processando',
        order: 1,
        cardsTotal: 3,
        cards: [
          {
            id: 'card6',
            title: 'XP0006',
            order: 0,
            created_by: 'Administrador',
          },
          {
            id: 'card7',
            title: 'XP0007',
            order: 1,
            created_by: 'Administrador',
          },
          {
            id: 'card8',
            title: 'XP0008',
            order: 2,
            created_by: 'Gustavo',
          },
        ],
      },
      per_page: 5,
      current_page: 1,
      total: 1,
    },
  ],
};
