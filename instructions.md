
# Como transformar seu projeto React em um tema WordPress

## Passo a passo

1. **Construa seu projeto React**
   ```
   npm run build
   ```
   Isso criará uma pasta `dist` com os arquivos otimizados para produção.

2. **Prepare a estrutura do tema WordPress**
   - Use os arquivos criados na pasta `wordpress-theme`
   - Crie uma pasta `assets` dentro do tema
   - Copie todos os arquivos da pasta `dist` para a pasta `assets` do tema

3. **Instale o tema no WordPress**
   - Compacte a pasta `wordpress-theme` em um arquivo ZIP
   - No painel do WordPress, vá para Aparência > Temas > Adicionar novo > Enviar tema
   - Faça upload do arquivo ZIP
   - Ative o tema

4. **Configure o WordPress**
   - Crie as páginas necessárias no WordPress que correspondam às rotas do seu aplicativo React
   - Configure os menus e widgets conforme necessário

5. **Integrações adicionais (opcionais)**
   - Para integrar com o conteúdo do WordPress, você pode usar a REST API
   - Modifique seu aplicativo React para buscar dados do WordPress se necessário

## Importante

Este tema cria uma estrutura básica que carrega seu aplicativo React dentro do WordPress. Para uma integração mais profunda, você precisará modificar seu código React para interagir com a REST API do WordPress.
