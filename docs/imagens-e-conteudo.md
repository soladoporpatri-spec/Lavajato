# Imagens e conteúdo real

## Mídia ilustrativa

- `public/images/hero-*.webp`: ilustração criada com Imagegen para este projeto em 07/09/2026. Não é fotografia de um serviço realizado. Três tamanhos: 640, 960 e 1536 pixels. Original preservado na pasta de imagens geradas do Codex.
- `public/images/reference-a.webp`: [foto do Unsplash](https://images.unsplash.com/photo-1542282088-fe8426682b8f), já utilizada no site anterior. Mantida sem filtros de resultado.
- `public/images/reference-b.webp`: [foto do Unsplash](https://images.unsplash.com/photo-1552519507-da3b142c6e3d), já utilizada no site anterior. Mantida sem filtros de resultado.
- `public/images/suv.webp`: [foto do Unsplash](https://images.unsplash.com/photo-1519641471654-76ce0107ad1b), usada como referência de SUV.
- `public/logo.jpg`: identidade fornecida no projeto, preservada.

As fotos do Unsplash são usadas como ilustrações, conforme a [licença do Unsplash](https://unsplash.com/license). Nenhuma imagem de banco é apresentada como atendimento do Paulinho. A otimização altera tamanho/formato, não o resultado visual de uma lavagem.

## Inserir fotos reais

1. Salvar fotos autorizadas em `public/images/`, preferencialmente WebP. Remover metadados privados e verificar autorização de pessoas e identificação do veículo.
2. Alterar caminhos em `src/config/media.ts`. O hero tem versões de 640, 960 e 1536 pixels. Ao substituir a ilustração por uma foto real, revisar as legendas correspondentes.
3. Para comparação, preencher `realComparison` com `before`, `after` e `description`. Usar o mesmo veículo, ângulo e enquadramento, sem filtros que simulem resultado. A interface troca as legendas de referências para antes/depois.
4. Preencher `realWorks` apenas com fotos de serviços realizados, com `src`, `alt` e `service`. Preencher `customerReviews` apenas com comentários autorizados, com `name`, `text` e `sourceUrl` verificável. As seções só aparecem quando há dados.

## Contato e horários

O número 5562994488816 foi preservado e coincide com o site publicado em 07/09/2026. O comentário antigo no código não comprovava sua origem. Confirmar com o proprietário antes da publicação. O site solicita consulta de horários pelo WhatsApp; não publica expediente ou coordenadas não confirmados.
