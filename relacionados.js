fetch('relacionados.html')
            .then(response => response.text()) // Converte a resposta em texto
            .then(data => {
               'related-products-content'
                document.getElementById('related-products-content').innerHTML = data;
            })
            .catch(error => console.error('Erro ao buscar conteúdo relacionado:', error));
   
