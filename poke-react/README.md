## Pokelist-Effect

- En este ejercicio tendréis que hacer una lista de pokemons a través de peticiones a la PokeApi. El desarrollo del mismo se dividirá en 3 fases. Cada una será evolución de la anterior.

### FASE 1

- Esta es la fase más sencilla. Se dividirá en los siguientes pasos:

1. Crea un input.
2. Crea un botón (recordad que puede ser un `div` o un `button`).
3. Crea una lista (`array`).
4. Crea, con `useState`, dos estados; uno para input (`''`) y otro para un pokemon (`{}`).
5. Cada vez que escribamos en el input, su contenido se deberá guardar en el estado del input.
6. Cuando pulsemos el botón que hemos creado antes, se deberá hacer una petición a la PokeApi con el nombre o el número del pokemon correspondiente registrado en el estado del input.
7. Si va bien, la PokeApi devolverá un objeto con el pokemon elegido. El estado del pokemon que hemos creado antes debe actualizarse con el nuevo pokemon.

### FASE 2

1. Vamos a cambiar el estado que habíamos creado antes para almacenar un solo pokemon. Vamos a poner en su lugar una lista (`[]`).
2. Ahora, cada vez que pulsemos el botón para buscar un pokemon, el pokemon encontrado deberá concatenarse a la lista que tenemos almacenada en el estado en lugar de almacenar uno solo.

### FASE 3

- Para esta fase, en lugar de pulsar un botón para hacer la búsqueda vamos a dejar que las búsquedas se hagan solas en función de lo que escriba el usuario.

1. Eliminamos el botón.
2. Cuando escribamos, la petición deberá realizarse según escribimos. De hecho, debería hacerse una petición cada vez que escribimos una tecla.
3. Una vez que consigamos que esas peticiones se hagan con cada pulsación. Cuando obtengamos el pokemon deseado, éste deberá concatenarse a la lista como en la fase anterior.
4. Lógicamente una petición por pulsación es demasiado. Es probable que con ese nivel de peticiones alcancemos el máximo de peticiones permitidos por la Api en poco tiempo. Lo siguiente que haremos será evitar que con cada pulsación se haga una petición. La lógica para hacer esto será que si entre pulsaciones pasa más de un segundo y medio (o el tiempo que queráis) se haga la petición a la Api de lo que haya almacenado en el estado del input en ese momento.
5. Investiga qué es y cómo es la lógica de un Debounce para implementarla y conseguir el paso anterior. Esta función es la que nos permitirá conseguir que solo tras la última pulsación de más de un tiempo determinado se haga la petición.
6. Cuando consigas implementar la función debounce para no colapsar la api a peticiones implementa lo siguiente: si el input está vacío no se hará ninguna petición.
7. Cuando escribamos un pokemon en el input que ya exista en nuestra lista de pokemons tampoco tenemos que hacer esa petición.