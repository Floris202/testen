diff --git a/README.md b/README.md
index 9902ecfabb56c8f9a8e693ffbcd96a218ae68e33..ef5421aca950b0ad2ebb3a579c55b8c3e3d8c95a 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,83 @@
-# testen
-test
+# Drive+ prototype
+
+Een snelle, lokale web-app die een “Google Drive maar beter”-gevoel geeft:
+
+- map aanmaken
+- bestanden uploaden
+- zoeken en sorteren
+- favorieten markeren
+- live statistieken (items, mappen, opslag)
+- filter op alles/favorieten/recent
+
+## Starten
+
+Open `index.html` direct in je browser.
+
+Voor een lokale server:
+
+```bash
+python3 -m http.server 4173
+```
+
+Ga daarna naar `http://localhost:4173`.
+
+## Testen
+
+### 1) Snelle technische check
+
+Controleer eerst of de JavaScript-syntax geldig is:
+
+```bash
+node --check app.js
+```
+
+### 2) Check of de app lokaal geserveerd wordt
+
+Start de server:
+
+```bash
+python3 -m http.server 4173
+```
+
+Open daarna in je browser:
+
+- `http://localhost:4173`
+
+Je kan ook in terminal verifiëren dat de pagina bereikbaar is:
+
+```bash
+curl -I http://127.0.0.1:4173/index.html
+```
+
+Je hoort dan een `HTTP/1.0 200 OK` (of `HTTP/1.1 200 OK`) te zien.
+
+### 3) Handmatige functionele test (checklist)
+
+In de browser:
+
+1. **Map maken**
+   - Vul links een mapnaam in en klik op **Nieuwe map**.
+   - Verwacht: nieuwe kaart verschijnt in de lijst.
+2. **Bestanden uploaden**
+   - Klik op **Kies bestanden** en selecteer 1 of meer bestanden.
+   - Verwacht: items verschijnen met naam + grootte.
+3. **Zoeken**
+   - Typ in de zoekbalk een deel van de bestandsnaam.
+   - Verwacht: lijst filtert direct.
+4. **Sorteren**
+   - Wissel tussen “Nieuwste eerst”, “Naam (A-Z)” en “Grootte (hoog-laag)”.
+   - Verwacht: volgorde verandert correct.
+5. **Favorieten**
+   - Klik op `☆` bij een item.
+   - Verwacht: ster wordt `★` en item komt terug onder filter **Favorieten**.
+6. **Recent filter**
+   - Klik op **Recent**.
+   - Verwacht: alleen recent gewijzigde/geüploade items zichtbaar.
+7. **Verwijderen**
+   - Klik op `🗑` bij een item.
+   - Verwacht: item verdwijnt direct.
+
+### 4) Persistency test (localStorage)
+
+- Herlaad de pagina (F5 / Cmd+R).
+- Verwacht: je toegevoegde items en favorieten blijven bewaard in dezelfde browser.
