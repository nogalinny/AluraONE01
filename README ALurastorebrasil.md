RELATÓRIO ANALÍTICO COMPLETO + INSIGHTS DE NEGÓCIO

1. Importação e Estrutura dos Dados

Importação de quatro bases (loja_1, loja_2, loja_3, loja_4) contendo:

Produto
Categoria
Preço
Frete
Data da Compra
Vendedor
Local da Compra
Avaliação do Cliente
Tipo de Pagamento
Parcelas
Latitude / Longitude

Depois consolidação de tudo em um DataFrame único.

Resumo da Análise
A base possui diversidade de produtos, variedade geográfica e dados completos de transações, permitindo análises profundas de vendas, logística e comportamento do cliente.

Análise
O conjunto das quatro lojas gerou R$ 6,18 milhões em vendas somando preço + frete.
Esse total indica um volume consistente e permite comparar com categorias, meses e lojas.

Resumo dos Resultados
Variação mensal entre R$ 130 mil e R$ 200 mil
Picos em:
Dezembro (Natal)
Janeiro (renovações pós-ano novo)
Abril e Julho em alguns anos

Os meses de ponta coincidem com períodos sazonais de maior consumo.
Meses mais fracos como junho e outubro têm vendas mais baixas.

Tomada de Decisão
→ Criar campanhas promocionais para meses fracos (junho/outubro)
→ Reforçar estoque e logística nos meses de pico (novembro, dezembro e janeiro)

Categoria	Faturamento
Eletrônicos	R$ 2.33M
Eletrodomésticos	R$ 1.86M
Móveis	R$ 1.06M
Instrumentos musicais	R$ 489k
Esporte e lazer	R$ 200k
Brinquedos	R$ 103k
Utilidades domésticas	R$ 80k
Livros	R$ 53k

Análise
Eletrônicos são o carro-chefe, com maior receita.
Eletrodomésticos e móveis também possuem alta demanda.
Brinquedos, utilidades e livros contribuem muito menos—são categorias de menor ticket e menor prioridade no estoque.

Tomada de Decisão
→ Aumentar investimento em eletrônicos e eletrodomésticos (melhor retorno).
→ Reduzir variedade ou negociar fornecedores de livros e utilidades domésticas, pois têm baixa contribuição.
→ Campanhas específicas podem impulsionar categorias menores como brinquedos.

5. Faturamento por Loja
Resultado
Loja	Faturamento
loja_1	1.616.347
loja_2	1.567.773
loja_3	1.542.048
loja_4	1.458.253

Análise

As lojas têm faturamentos muito semelhantes, o que indica:
distribuição equilibrada de vendas
estratégia similar entre lojas
ausência de uma loja significativamente fraca
A loja_1 é a líder, mas por pouca diferença.

Tomada de Decisão
→ Investir um pouco mais em marketing e logística da loja_4, pois é a que menos fatura.
→ Analisar se a loja_1 possui produtos ou logística diferenciada que podem ser replicados nas demais.

6. Vendas por Categoria (quantidade de itens)
Resultado
Categoria	Vendas
Móveis	1886
Eletrônicos	1772
Brinquedos	1290
Eletrodomésticos	1149
Esporte e lazer	1113

Análise
A categoria móveis tem o maior volume de vendas, mas não é a que tem maior faturamento, pois tem ticket médio menor.
Eletrônicos têm ticket alto → por isso lideram o faturamento total.

Tomada de Decisão
→ Criar combos promocionais em móveis para aumentar ticket médio.
→ Eletrônicos e eletrodomésticos devem receber campanhas fortes nas datas especiais (Black Friday, Natal).

Média de Avaliação das Lojas
Resultado
Loja	Avaliação Média
loja_1	3.98
loja_2	4.04
loja_3	4.05
loja_4	4.00

Análise
Todas as lojas possuem avaliação média acima de 4, o que indica:
boa experiência do cliente
consistência entre unidades
A loja_3 tem o melhor desempenho.

Tomada de Decisão
→ Entender as práticas da loja_3 (prazos, atendimento) e replicar nas demais.
→ Monitorar reclamações específicas da loja_1 e loja_4 (as mais baixas).

Produtos Mais Vendidos (Top 10)
Mais vendidos:
Cômoda (210)
Carrinho controle remoto (206)
Micro-ondas (206)
Bateria (203)
Cama king (201)
Secadora de roupas (200)
Modelagem preditiva (200)
Jogo de panelas (200)
Cama box (199)
Blocos de montar (199)

Análise

Há uma mescla entre:
móveis
eletrodomésticos
eletrônicos
brinquedos

Isso mostra diversidade de demanda.

Tomada de Decisão
→ Manter estoque alto desses itens.
→ Criar kits (ex: cama king + cama box; micro-ondas + jogo de panelas).

Produtos Menos Vendidos (Bottom 10)
Menos vendidos:
Celular ABXY (157)
Headset (158)
Mochila (163)
Guitarra (165)
Ciência de dados com Python (166)
e outros com baixo giro

Análise
Produtos com ciclo de compra longo ou pouco interesse.

Tomada de Decisão
→ Realizar ações de clearance (liquidação) nos itens com pouco giro.
→ Verificar se preços estão competitivos.

Frete Médio por Loja

Resultado
Loja	Frete Médio
loja_1	34.69
loja_2	33.62
loja_3	33.07
loja_4	31.28

Análise
A loja_1 tem o frete mais caro → pode afetar conversão.
A loja_4 tem frete mais barato → vantagem competitiva.

  Tomada de Decisão
→ Revisar rotas e transportadoras da loja_1.
→ A loja_4 pode explorar frete mais barato como benefício em campanhas.

RESUMO GERAL DAS LOJAS

Faturamento por loja
Loja	Faturamento
loja_1	1.616.347
loja_2	1.567.773
loja_3	1.542.048
loja_4	1.458.253

Melhor em faturamento: loja_1
Pior em faturamento: loja_4

Avaliação média das lojas
Loja	Nota
loja_1	3.98
loja_2	4.04
loja_3	4.05 ✔ melhor avaliação
loja_4	4.00

Melhor em satisfação do cliente: loja_3
Pior em satisfação: loja_1 (nota mais baixa, mesmo faturando mais)

Frete Médio por Loja
Loja	Frete médio
loja_1	34.69
loja_2	33.62
loja_3	33.07
loja_4	31.28 ✔ mais barato

Loja com melhor frete: loja_4
Loja com pior frete: loja_1

RESUMO FINAL

Melhor loja (considerando conjunto de indicadores):
Loja_3
Melhor avaliação dos clientes
Frete competitivo
Faturamento alto e estável

Pior loja (considerando conjunto de indicadores):
Loja_4
Menor faturamento
Média de avaliação ok, mas não se destaca
Mesmo com frete mais barato, não vende tanto
