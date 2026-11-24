# Contribuir para WokCloud Utils

Este projeto está em preparação. Começa por uma issue que descreva a necessidade, o resultado esperado e a ligação à API ou ao comportamento real da WokCloud. Identifica propostas como propostas e confirma os exemplos antes de os apresentar como suportados.

## Trabalhar no repositório

Cria um ramo a partir de `main`, faz uma alteração com um objetivo claro e abre uma pull request com o modelo disponível. Usa português de Portugal nos textos do projeto e nos commits. Preserva a licença e os créditos existentes.

Nesta fase, a verificação da documentação usa Node.js 24:

```bash
node scripts/check-repository.mjs
```

A verificação não exige uma API key nem ligações à infraestrutura dos clientes. Testa novos exemplos com dados fictícios e um servidor simulado sempre que possível.

## Implementação e testes

O código de JavaScript/TypeScript e os respetivos manifests serão publicados com instruções de instalação, versões suportadas e testes próprios. Ao acrescentar código, inclui também os comandos de build, teste e análise adequados na CI. Mantém os testes independentes de credenciais e dados de produção.

Documenta autenticação, permissões, erros e alterações incompatíveis. Uma funcionalidade só deve ser descrita como disponível depois de existir no repositório e ter sido verificada.

## Segurança

Consulta [SECURITY.md](SECURITY.md) para comunicar uma vulnerabilidade de forma privada. Não coloques segredos nem dados de clientes no código, nos exemplos, nas issues ou nas pull requests.
