# appunite-news-task

## Instalacja
Projekt został utworzony poprzez Vue-cli 3 w przypadku posiadania starszej wersji może być niezbędna deinstalacja jej i zastąpienie nową.
```
# delete old vue-cli
npm uninstall vue-cli -g
# install vue-cli3
npm install -g @vue/cli
```
Aby aplikacja działała poprawnie należy utworzyć plik .env w którym umieszczona zostanie wartość klucza.
```
VUE_APP_API_KEY= wartość_klucza
```
Aby uruchomić projekt należy wykonać poniżej przedstawiony krok 1) i 2).
### 1)Project setup
```
npm install
```

### 2)Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Solution description
Zdarzają się zdublowane newsy występujące w bliskiej odległości zazwyczaj prawdopodobą przyczyną jest to że:
-w ten sposób są zbudowana jest baza danych (szczególnie w przypadku sortowania po popularności)
-są odpublikowane więcej niż raz na oryginalnych stronach (odnośniki do oryginalnej strony róźnią się)



