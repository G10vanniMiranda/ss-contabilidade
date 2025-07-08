/*

preciso de uma tabela com nome de contas.
eu uso o supabase com solução de banco de dados e backend.

essa tabela precisa ter os campos,
id, auto increment,
data,
tipo: 'entrada', 'saida',
valor: numeric,
nome: text
*/

create table contas (
  id bigint primary key generated always as identity,
  data timestamp with time zone default now(),
  tipo text check (tipo in ('entrada', 'saida')) not null,
  valor numeric not null,
  nome text not null
);

/* 

A tabela contas foi criada com sucesso. Ela possui os seguintes campos:

id: Identificador único, auto-incrementado.
data: Data e hora, com fuso horário, padrão para o momento atual.
tipo: Tipo da conta, que pode ser 'entrada' ou 'saida'.
valor: Valor numérico da conta.
nome: Nome associado à conta.

*/

/* 
preciso de uma view com nome de historico

preciso que crie acumuladores de acordo com a data e tipo, 

me retorne, total_entrada_dia, total_saida_dia, data
*/

create view historico as
select
  data::date as data,
  sum(
    case
      when tipo = 'entrada' then valor
      else 0
    end
  ) as total_entrada_dia,
  sum(
    case
      when tipo = 'saida' then valor
      else 0
    end
  ) as total_saida_dia
from
  contas
group by
  data::date
order by
  data::date;



/*
A view chamada historico foi criada com sucesso. Ela fornece os acumuladores diários de acordo com a data e tipo, retornando os seguintes campos:

data: A data do registro.
total_entrada_dia: O total de entradas para o dia.
total_saida_dia: O total de saídas para o dia.