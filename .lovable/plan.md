## Objetivo
Usar o mesmo símbolo "P" do rodapé como favicon do site.

## Como será feito
O símbolo atual é um "P" branco em círculo na cor primária (verde), usando a fonte display. Vou recriar isso como um SVG favicon (escalável, nítido em qualquer tamanho, arquivo leve).

## Passos
1. Criar `public/favicon.svg` com um círculo preenchido na cor primária do tema e a letra "P" centralizada em branco, usando uma fonte similar à display do site.
2. Atualizar `index.html` para referenciar o novo `favicon.svg`.
3. Remover o `public/favicon.ico` antigo para não sobrescrever o novo.

## Detalhes técnicos
- Favicon em SVG (suportado por todos os navegadores modernos), com cor primária hardcoded em hex (favicons não leem CSS vars do app).
- Tag: `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`