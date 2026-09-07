# Revitalização do Lavajato do Paulinho

## Direção e escopo

Evoluir os componentes existentes, no projeto atual. Hero com carro ilustrativo em estúdio, composição assimétrica, perspectiva sutil e preço/contato sem depender de animação. Grafite #101619, preto #080b0d, branco #f2f5f5, cinza #aab7bd, azul água #72dcf4 e azul profundo #123747. Manter Oswald para títulos e Inter para leitura. Logo existente preservada.

## Auditoria inicial em 7 de setembro de 2026

- Site publicado e código local conferidos. Preservar preços, endereço, mapa, mensagens por serviço e comparação interativa.
- Hero não exibe preços; serviços usam a mesma composição e textos informais. Refazer hierarquia e navegação.
- Comparador chama duas fotos de carros diferentes de antes/depois e aplica filtros à primeira. Remover essa representação. Preservar o controle em modo de demonstração explícito, sem filtros, até existirem fotos reais do mesmo veículo.
- Não há fonte para avaliações, produtos premium, ranking de popularidade, garantia de ausência de filas, horário e coordenadas precisas. Não publicar essas alegações.
- Telefone 5562994488816 coincide com o site publicado; comentário local questiona sua origem. Preservar, mas confirmar com o proprietário antes de publicar.
- Respeitar alterações preexistentes: favicon removido e arquivos AGENTS.md, CLAUDE.md e README.md não rastreados.

## Implementação

- [ ] Centralizar dados, mensagens e referências de mídia; testar codificação e fallback do WhatsApp.
- [ ] Otimizar mídia local WebP para exportação estática; manter textos e CTAs renderizados sem JavaScript.
- [ ] Refazer Hero, Navbar e WhatsAppButton, com menu modal acessível e barra inferior mobile.
- [ ] Refazer Services em duas fichas fotográficas e dois serviços complementares de composições distintas.
- [ ] Corrigir BeforeAfter; range nativo com teclado, toque e botões de posição; fotos reais configuráveis.
- [ ] Refazer Benefits, Process, Location, CTA e Footer; processo com etapas ativadas pelo scroll e escolha direta.
- [ ] Profundidade por CSS 3D e camadas. Sem WebGL: o brief aceita 2D com efeitos 3D; evitar download/loop de GPU sem ganho comercial. Desativar movimento com reduced motion, ponteiro grosseiro, economia de dados ou poucos núcleos.
- [ ] Preparar galeria e avaliações condicionais a dados reais aprovados, sem seção vazia publicada.
- [ ] Revisar SEO local sem inventar horário, coordenadas, avaliações ou superlativos.
- [ ] Executar lint, testes, build e revisão em navegador em 360×800, 390×844, 430×932, 768×1024, 1366×768, 1440×900 e 1920×1080.
- [ ] Validar menu/Escape/foco, slider, CTAs, âncoras, imagens, reduced motion, tamanho de recursos e versão sem JS. Documentar limites.

## Critérios de teste

O WhatsApp deve preservar mensagens com acentos, símbolos e quebras de linha sem criar parâmetros extras. Mensagens vazias devem voltar ao convite de agendamento. Menu deve isolar o foco e devolver ao acionador; slider deve funcionar por teclado e toque. Conteúdo não pode depender de efeitos para ficar visível. Nenhuma largura solicitada deve ter rolagem horizontal.

Revisão de interface baseada também nas [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), com idioma e copy seguindo o brief e Humanizer.
