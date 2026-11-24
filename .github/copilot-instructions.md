# Instruções para assistentes de código

- Trabalhar em português de Portugal, com alterações e commits agrupados por melhoria.
- Este é o projeto WokCloud Utils, em preparação. Consultar os ficheiros reais antes de afirmar que existem um pacote instalável, uma versão, um método ou um teste.
- Preservar a licença Apache License 2.0, os créditos, o histórico e alterações alheias.
- A implementação prevista usa JavaScript/TypeScript. Acrescentar manifests, testes e instruções juntamente com o código; não criar implementações simuladas para obter checks verdes.
- Usar a documentação e o contrato efetivamente disponível na WokCloud para definir endpoints, campos, autenticação e erros. Não inventar preços, capacidades, métricas ou garantias.
- Reutilizar código existente antes de criar abstrações ou dependências. Nas integrações, proteger credenciais, limitar pedidos e propagar cancelamento e erros de forma clara.
- Executar `node scripts/check-repository.mjs` nas alterações documentais. Quando existir código, executar também os testes e verificações da linguagem afetada.
- Usar dados fictícios e servidores de teste. Não executar operações de produção para testar documentação ou pull requests.
- Explicar o resultado, as verificações e as limitações. Distinguir commit local, publicação no GitHub, lançamento de uma versão e deploy.
