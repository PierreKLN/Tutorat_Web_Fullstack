# Todo list

Ce projet présente une liste de choses a faire, et la présente sur une page web. Il se base sur 2 modules:

- front-end
- back-end

## front-end

Le module front end se base sur React, et utilise les endpoints (API) fournis par le module back-end pour afficher du contenu.

## back-end

Le module back-end se base sur Express, et fournis plusieurs APIs utilisées par le module front-end.

3 API:

- ```GET /``` permet de récupérer les différents items de la liste [IMPLEMENTÉ]
- ```POST /``` permet de rajouter un élement dans la liste [NON IMPLEMENTÉ]
- ```POST /update/:id``` permet de mettre à jour l'élement 'id' [NON IMPLEMENTÉ]