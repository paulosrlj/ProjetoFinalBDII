module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          nome: 'Ingrid Paloma da Costa Porto',
          matricula: '20151001018',
          situacao: 'Concluído',
          cota: null,
          curso_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Aline de Almeida Campos',
          matricula: '20151001001',
          situacao: 'Concluído',
          cota: 'Não se aplica',
          curso_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'ISAIAS FERREIRA DE LIMA',
          matricula: '20151001020',
          situacao: 'Concluído',
          cota: 'Oriundo de escola pública, declarado PPI',
          curso_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Heloisa Santos Araujo',
          matricula: '20151001017',
          situacao: 'Concluído',
          cota: 'Não se aplica',
          curso_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gustavo de Amorim Barbosa Cabral',
          matricula: '20151001015',
          situacao: 'Concluído',
          cota: 'Não se aplica',
          curso_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Danilo Henrique da Silva',
          matricula: '20151001011',
          situacao: 'Transferido Externo',
          cota: null,
          curso_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gabriella Macedo Paiva',
          matricula: '20151001014',
          situacao: 'Matriculado',
          cota: null,
          curso_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Ana Carolina Vasconcelos Barreto',
          matricula: '20151001002',
          situacao: 'Transferido Externo',
          cota: null,
          curso_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Aristóteles da Silva Lima',
          matricula: '20151001007',
          situacao: 'Matriculado',
          cota: null,
          curso_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Jackeline Albuquerque dos Santos',
          matricula: '20151001021',
          situacao: 'Transferido Externo',
          cota: null,
          curso_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Paulo Sérgio Rodrigues Leite Junior',
          matricula: '201912010008',
          situacao: 'Matriculado',
          cota: null,
          curso_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Luciana Ferreira',
          matricula: '2019100201',
          situacao: 'Matriculado',
          cota: null,
          curso_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Alex de Sousa',
          matricula: '20190129124',
          situacao: 'Concluído',
          cota: null,
          curso_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};
