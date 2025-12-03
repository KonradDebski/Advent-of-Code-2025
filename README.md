# 🎄 Advent of Code 2025 - TypeScript Setup

Szybkie środowisko do rozwiązywania zadań Advent of Code w TypeScript z hot-reload!

## 🚀 Szybki start

### Uruchamianie rozwiązań

```bash
# Uruchom z hot-reload (automatycznie przeładowuje po zapisie)
pnpm watch src/Day-1/day1-script.ts

# Uruchom bez hot-reload (pojedyncze uruchomienie)
pnpm tsx src/Day-1/day1-script.ts
```

### Tworzenie nowego dnia

**Szybka metoda (z pomocą skryptu):**

```bash
./new-day.sh 2
```

Skrypt automatycznie:

- Stworzy folder `src/Day-2/` z podfolder `input/`
- Skopiuje szablon jako `day2-script.ts` z odpowiednim numerem dnia
- Stworzy puste pliki `example.txt` i `input.txt`

**Ręczna metoda:**

```bash
# Stwórz folder dla nowego dnia
mkdir -p src/Day-2/input

# Skopiuj szablon
cp src/template.ts src/Day-2/day2-script.ts

# Stwórz pliki input
touch src/Day-2/input/example.txt
touch src/Day-2/input/input.txt

# Zmień w pliku: const DAY = 0 na const DAY = 2
```

**Następnie:**

1. Wklej przykładowy input do `src/Day-2/input/example.txt`
2. Wklej prawdziwy input do `src/Day-2/input/input.txt`
3. Uruchom z hot-reload:

```bash
pnpm run watch src/Day-2/day2-script.ts
```

## 📁 Struktura projektu

```
src/
├── Day-1/
│   ├── day1-script.ts      # Twoje rozwiązanie
│   └── input/
│       ├── example.txt     # Przykładowy input
│       └── input.txt       # Prawdziwy input
├── utils/
│   ├── readInput.ts        # Pomocnicze funkcje do czytania plików
│   └── index.ts
└── template.ts             # Szablon dla nowych dni
```

## 🛠️ Pomocnicze funkcje

W folderze `utils/` znajdziesz funkcje do wczytywania inputów:

```typescript
import {
  readInput,
  readInputLines,
  readInputGroups,
  readInputNumbers,
} from "../utils/index.js"

// Czytaj cały plik jako string
const input = readInput(1) // Day-1/input/input.txt
const example = readInput(1, "example.txt") // Day-1/input/example.txt

// Czytaj i podziel na linie
const lines = readInputLines(1)

// Czytaj i podziel na grupy (oddzielone pustą linią)
const groups = readInputGroups(1)

// Czytaj i parsuj jako liczby
const numbers = readInputNumbers(1)
```

## 💡 Tips

- **Hot-reload**: Używaj `pnpm day <plik>` podczas developmentu - plik będzie automatycznie uruchamiany po każdym zapisie
- **Przykładowe dane**: Zawsze testuj najpierw na `example.txt` przed użyciem prawdziwego inputu
- **Console.log**: Używaj `console.log()` do debugowania - wszystko pojawi się w terminalu
- **TypeScript**: Pełne wsparcie dla TS - masz autocomplete i type checking!

## 📝 Przykład

Zobacz `src/Day-1/day1-script.ts` dla przykładu jak struktura działa.

Happy coding! 🎅
