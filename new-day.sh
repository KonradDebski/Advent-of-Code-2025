#!/bin/bash

# Skrypt do szybkiego tworzenia nowego dnia Advent of Code
# Użycie: ./new-day.sh 2

if [ -z "$1" ]; then
  echo "❌ Podaj numer dnia!"
  echo "Użycie: ./new-day.sh <numer_dnia>"
  echo "Przykład: ./new-day.sh 2"
  exit 1
fi

DAY=$1
DAY_DIR="src/Day-$DAY"
SCRIPT_FILE="$DAY_DIR/day$DAY-script.ts"

# Sprawdź czy dzień już istnieje
if [ -d "$DAY_DIR" ]; then
  echo "⚠️  Folder $DAY_DIR już istnieje!"
  read -p "Czy chcesz kontynuować? (t/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Tt]$ ]]; then
    exit 0
  fi
fi

# Stwórz strukturę folderów
echo "📁 Tworzę strukturę dla Day $DAY..."
mkdir -p "$DAY_DIR/input"

# Skopiuj szablon
echo "📝 Kopiuję szablon..."
cp ./template.ts "$SCRIPT_FILE"

# Zastąp numer dnia w szablonie
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' "s/const DAY = 0/const DAY = $DAY/" "$SCRIPT_FILE"
else
  # Linux
  sed -i "s/const DAY = 0/const DAY = $DAY/" "$SCRIPT_FILE"
fi

# Stwórz pliki input
touch "$DAY_DIR/input/example.txt"
touch "$DAY_DIR/input/input.txt"

echo "✅ Day $DAY został utworzony!"
echo ""
echo "📋 Następne kroki:"
echo "1. Wklej przykładowy input do: $DAY_DIR/input/example.txt"
echo "2. Wklej prawdziwy input do: $DAY_DIR/input/input.txt"
echo "3. Edytuj: $SCRIPT_FILE"
echo "4. Uruchom: pnpm day $SCRIPT_FILE"
echo ""
echo "🚀 Możesz też od razu uruchomić z hot-reload:"
echo "   pnpm day $SCRIPT_FILE"
