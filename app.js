const STORAGE_KEY = "basiswerkstukken_werkvoorbereider_v3";
const CUSTOM_WORKPIECES_KEY = "basiswerkstukken_custom_workpieces_v1";

let workpieces = {
  noniusoefening: {
    workpieceName: "Noniusoefening",
    machine: "Draaibank",
    material: "Brass, Soft Yellow",
    drawingNumber: "01_noniusoefening",
    drawingScale: "A4 / 2:1 / pagina 1 van 6",
    dimensions: "Lengte 43 +/- 0,5; diameters 18, 14, 10 en 6; 1 x 45 graden (8x)",
    setups: "2",
    operations:
      "Opspannen, kopse kant vlakken, nonius nullen, diameters afdraaien, werkstuk omdraaien, totale lengte op maat draaien, afschuinen",
    workholding: "Draaibank, drieklauw",
    cuttingTools: "DCGT beitelplaat",
    measuringTools: "Schuifmaat",
    notes: "Laat ruwmateriaal 31 mm uitsteken, meet totale lengte tussendoor en vul meetrapport in.",
    steps: [
      { setup: 1, description: "Laat ruwmateriaal 31 mm buiten de klauwen uitsteken." },
      { setup: 1, description: "Vlak de kopse kant af en zet de noniusring van de langsslede op nul." },
      { setup: 1, description: "Draai een klein stukje van de diameter af en zet de dwarsslede op nul." },
      { setup: 1, description: "Draai diameter 18 over lengte 30 mm." },
      { setup: 1, description: "Draai diameter 14 over lengte 14 mm." },
      { setup: 1, description: "Draai diameter 10 over lengte 10 mm." },
      { setup: 1, description: "Draai diameter 6 over lengte 6 mm." },
      { setup: 1, description: "Zet beitelslede op 45 graden en maak 1 x 45 graden aan de kanten." },
      { setup: 2, description: "Draai werkstuk om en span op diameter 14." },
      { setup: 2, description: "Vlak de kopse kant af en laat de beitelslede op 45 graden staan." },
      { setup: 2, description: "Meet de totale lengte en bereken hoeveel materiaal er nog af moet." },
      { setup: 2, description: "Draai de totale lengte naar 43 mm." },
      { setup: 2, description: "Herhaal de diameters 18, 14, 10 en 6 en werk af met afschuiningen." },
      { setup: 2, description: "Span uit en vul het meetrapport in." },
    ],
  },
  oefentol: {
    workpieceName: "Oefentol",
    machine: "Draaibank",
    material: "Brass, Soft Yellow",
    drawingNumber: "02_Oefentol",
    drawingScale: "A4 / 3:1 / pagina 2 van 6",
    dimensions: "Diameters 24, 20, 15, 10, 8 en 4; boor 3 x 10 diep; punt met 45 graden",
    setups: "2",
    operations:
      "Opspannen, kopse kant nullen, diameters afdraaien, centeren, boren, verzinken, omspannen, punt draaien en ontbramen",
    workholding: "Draaibank, drieklauw, boorkop in pinole",
    cuttingTools: "DCGT, centerboor, boor 3, verzinkboor",
    measuringTools: "Schuifmaat, blote vinger",
    notes: "Werkstuk omspannen op diameter 8, lengte narekenen en scherpe kanten breken.",
    steps: [
      { setup: 1, description: "Laat ruwmateriaal 18 mm buiten de drieklauw steken." },
      { setup: 1, description: "Nullen op de kopse kant en op de diameter." },
      { setup: 1, description: "Draai diameter 24 x 17." },
      { setup: 1, description: "Draai diameter 8 x 12." },
      { setup: 1, description: "Zet de beitelslede op 45 graden, maak afschuiningen en zet weer op nul." },
      { setup: 1, description: "Plaats boorkop in de pinole, center en boor 3 mm x 10 diep." },
      { setup: 1, description: "Verzink het geboorde gat met de hand." },
      { setup: 2, description: "Span het werkstuk om op diameter 8." },
      { setup: 2, description: "Vlak de kopse kant af en meet de totale lengte." },
      { setup: 2, description: "Draai de lengte op 24 mm." },
      { setup: 2, description: "Draai achtereenvolgens 20 x 8, 15 x 6, 10 x 4 en 4 x 2." },
      { setup: 2, description: "Maak het puntje met de beitelslede onder 45 graden en ontbraam." },
    ],
  },
  diabolo1: {
    workpieceName: "Diabolo Positie 1 (CuZn deel)",
    machine: "Draaibank",
    material: "Messing",
    drawingNumber: "03_Diabolo pos. 1",
    drawingScale: "A4 / 2:1 / pagina 3 van 6",
    dimensions: "Diameter 28 en 12; lengte 20; boring 5,2 x 16; M6 tappen",
    setups: "2",
    operations:
      "Opspannen, vlakken, diameter draaien, afschuinen, omspannen, op lengte draaien, centeren, boren, verzinken, tappen",
    workholding: "Draaibank, drieklauw, eventueel buitenbekken",
    cuttingTools: "DCGT, centerboor, boor 5,2, verzinkboor, M6 pottap",
    measuringTools: "Schuifmaat",
    notes: "Beitelslede op 45 graden zetten en tapkruk ondersteunen met center.",
    steps: [
      { setup: 1, description: "Opspannen in drieklauw, 12 mm laten uitsteken." },
      { setup: 1, description: "Beitelslede onder 45 graden zetten en kopse kant vlakken." },
      { setup: 1, description: "Draai diameter 28 x 11." },
      { setup: 1, description: "Maak 2 mm x 45 graden." },
      { setup: 2, description: "Werkstuk omdraaien en opnieuw opspannen." },
      { setup: 2, description: "Vlak de kopse kant en meet de lengte." },
      { setup: 2, description: "Span opnieuw op met 12 mm uitsteek." },
      { setup: 2, description: "Draai op lengte 20 mm." },
      { setup: 2, description: "Draai diameter 13 x 2 en vervolgens de 45 graden overgang." },
      { setup: 2, description: "Draai diameter 12 x 2 met strakke overgang." },
      { setup: 2, description: "Breek scherpe kant, center, boor 5,2 x 16, verzink en tap M6." },
    ],
  },
  diabolo2: {
    workpieceName: "Diabolo Positie 2 (AL deel)",
    machine: "Draaibank",
    material: "Aluminium",
    drawingNumber: "03_Diabolo pos. 2",
    drawingScale: "A4 / 2:1 / pagina 3 van 6",
    dimensions: "Lengte 30; diameters 28, 13, 12 en 6; M6 buitendraad",
    setups: "2",
    operations:
      "Opspannen, vlakken, diameters draaien, 45 graden draaien, omspannen, lengte op maat maken, buitendraad snijden",
    workholding: "Draaibank, drieklauw, snijraam ondersteuning met pinole",
    cuttingTools: "DCGT, snijplaat M6, snijraam",
    measuringTools: "Schuifmaat",
    notes: "Nonius opnieuw instellen, eindig met 45 graden inloop voor de draad.",
    steps: [
      { setup: 1, description: "Opspannen in drieklauw, 12 mm laten uitsteken." },
      { setup: 1, description: "Beitelslede onder 45 graden zetten en kopse kant vlakken." },
      { setup: 1, description: "Draai diameter 28 x 11 en maak 2 mm x 45 graden." },
      { setup: 2, description: "Werkstuk omdraaien, kopse kant vlakken en lengte meten." },
      { setup: 2, description: "Span opnieuw op met 22 mm uitsteek." },
      { setup: 2, description: "Draai op lengte 30 mm." },
      { setup: 2, description: "Draai diameter 13 x 12 en maak de schuine overgang." },
      { setup: 2, description: "Draai diameter 12 x 12 en direct de overgang door." },
      { setup: 2, description: "Draai diameter 6 x 10 en steek in tot diameter 4,5." },
      { setup: 2, description: "Breek scherpe kanten, maak een 45 graden inloop en snij M6." },
    ],
  },
  centerpons: {
    workpieceName: "Centerpons",
    machine: "Draaibank",
    material: "Zilverstaal",
    drawingNumber: "04_Centerpons",
    drawingScale: "A4 / 2:1 / pagina 4 van 6",
    dimensions: "Lengte 100; diameter 8 naar 6; 60 graden punt en 20 graden punt",
    setups: "2",
    operations:
      "Ontbramen, opspannen in spantang, diameters draaien, afschuinen, omspannen, lengte draaien, punt draaien, harden en ontlaten",
    workholding: "Draaibank, spantang, trekstang",
    cuttingTools: "Blokvijl, DCGT",
    measuringTools: "Schuifmaat",
    notes: "Punt produceren volgens volgorde op tekening en alleen het puntje harden/ontlaten.",
    steps: [
      { setup: 1, description: "Ontbraam ruwmateriaal en maak de conus in de hoofdas schoon." },
      { setup: 1, description: "Plaats spantang 8 en laat 10 mm uitsteken." },
      { setup: 1, description: "Zet de beitelslede op 45 graden." },
      { setup: 1, description: "Draai diameter 6 x 6 met directe overgang en maak 0,5 x 45 graden." },
      { setup: 2, description: "Draai werkstuk om en laat 10 mm uitsteken." },
      { setup: 2, description: "Vlak de kopse kant af en meet de totale lengte." },
      { setup: 2, description: "Plaats terug in spantang met 33 mm uitsteek en draai lengte 100 mm." },
      { setup: 2, description: "Draai de 60 graden punt." },
      { setup: 2, description: "Draai diameter 6 x 29 met 45 graden uitloop." },
      { setup: 2, description: "Draai vanaf diameter 3 de 20 graden punt." },
      { setup: 2, description: "Hard en ontlaat alleen het puntje volgens instructie." },
    ],
  },
  schietlood: {
    workpieceName: "Schietlood",
    machine: "Draaibank",
    material: "Messing",
    drawingNumber: "05_Schietlood",
    drawingScale: "A4 / 1,5:1 / pagina 5 van 6",
    dimensions: "Positie 1 en 2; M10; boor 10,5 en 8,6; punt 60 graden; zagen na bewerken",
    setups: "5",
    operations:
      "Opspannen, vlakken, centeren, boren, tappen, profiel draaien, omspannen, gat boren, zagen, punt draaien, draad snijden",
    workholding: "Draaibank, drieklauw of spantang, bankschroef",
    cuttingTools: "DCGT, centerboor, boor 10,5, boor 8,6, pottap M10, profielbeitel, snijplaat M10, handzaag",
    measuringTools: "Schuifmaat, verzinkboor",
    notes: "Positie 2 eerst maken, werkstuk doorzagen zonder te kort te worden en daarna punt afdraaien.",
    steps: [
      { setup: 1, description: "Monteer ruwmateriaal 45 mm buiten de drieklauw." },
      { setup: 1, description: "Vlak de kopse kant, center en boor 10,5 x 3 en 8,6 x 25." },
      { setup: 1, description: "Tap M10 x 21." },
      { setup: 1, description: "Draai diameter 16 x 40 en maak 45 graden op de kopse kant." },
      { setup: 1, description: "Maak de 90 graden groeven met profielbeitel." },
      { setup: 2, description: "Draai werkstuk om en span opnieuw in spantang of drieklauw." },
      { setup: 2, description: "Vlak de kopse kant en draai diameter 16 x 23 en 9,8 x 15." },
      { setup: 2, description: "Maak 45 graden afschuiningen en snij M10." },
      { setup: 2, description: "Boor gat 3 x 26 en ontbraam." },
      { setup: 3, description: "Zaag het werkstuk doormidden zonder dat een deel te kort wordt." },
      { setup: 4, description: "Monteer positie 2 opnieuw en draai totale lengte 50." },
      { setup: 4, description: "Draai de 60 graden punt in meerdere gangen." },
      { setup: 5, description: "Klem positie 1 subtiel op de draad, draai lengte 25 en maak de 30 graden kant." },
      { setup: 5, description: "Ontbraam het gat en controleer het complete schietlood." },
    ],
  },
  kraspen: {
    workpieceName: "Kraspen",
    machine: "Draaibank",
    material: "Messing en zilverstaal",
    drawingNumber: "06_Kraspen",
    drawingScale: "A4 / 1:1 / pagina 6 van 6",
    dimensions: "Tweedelig werkstuk; M4; lengtes 40 en 100; zeskant 6",
    setups: "3",
    operations:
      "Zelf werkvoorbereiding invullen op basis van vorige voorbeelden, draaien, boren, tappen, punt draaien, harden en ontlaten",
    workholding: "Draaibank, drieklauw of spantang",
    cuttingTools: "DCGT, centerboor, boor, tap M4, snijgereedschap",
    measuringTools: "Schuifmaat",
    notes: "Gebruik vorige werkvoorbereidingen als spiekbrief en neem harden/ontlaten mee.",
    steps: [
      { setup: 1, description: "Neem de werktekening over en bepaal zelf de logische werkvolgorde." },
      { setup: 1, description: "Plan eerst alle draaibewerkingen van het messing deel." },
      { setup: 2, description: "Plan daarna het zilverstalen deel inclusief puntvorm en draad." },
      { setup: 3, description: "Neem harden, ontlaten, ontbramen en eindcontrole op in de voorbereiding." },
    ],
  },
  frees1: {
    workpieceName: "Freesoefening 1",
    machine: "Freesbank",
    material: "Aluminum 6061",
    drawingNumber: "Freesoefening 1",
    drawingScale: "A4 / 1:1 / pagina 1 van 4",
    dimensions: "Ruwmateriaal 62x62x25; buitenmaat 58; treden 50 en 40; hoogtes 18 en 25",
    setups: "2",
    operations:
      "Opspannen in machineklem, bovenvlak schoonfrezen, zijkanten op maat frezen, nulpunt verplaatsen, treden frezen, omspannen, hoogte frezen, ontbramen",
    workholding: "Freesbank, machineklem, onderlegplaten",
    cuttingTools: "Frees 12 mm",
    measuringTools: "Schuifmaat, digitale uitlezing, blokvijl",
    notes: "Tegenlopend voorfrezen, meelopend nafrezen en meetrapport invullen.",
    steps: [
      { setup: 1, description: "Span ruwmateriaal minimaal 20 mm boven de machineklem in." },
      { setup: 1, description: "Frees bovenvlak schoon en zet Z op nul." },
      { setup: 1, description: "Frees linkerzijde schoon en zet X op nul." },
      { setup: 1, description: "Frees rechterzijde op maat 58 mm." },
      { setup: 1, description: "Frees achterzijde schoon en zet Y op nul." },
      { setup: 1, description: "Frees voorzijde op maat 58 mm." },
      { setup: 1, description: "Verplaats het nulpunt naar het midden van het werkstuk." },
      { setup: 1, description: "Frees de bovenste trap voor en na op Z -5,8 / -6,0 en X/Y 26,2 / 26,0." },
      { setup: 1, description: "Frees de middelste trap voor en na op Z -11,8 / -12 en X/Y 31,2 / 31,0." },
      { setup: 1, description: "Haal uit de klem en ontbraam." },
      { setup: 2, description: "Klem op de kop in op onderlegplaten." },
      { setup: 2, description: "Frees een streep schoon, meet de hoogte en zet Z." },
      { setup: 2, description: "Frees naar hoogte 18,2 en daarna na op 18,0." },
      { setup: 2, description: "Ontbraam en vul het meetrapport in." },
    ],
  },
  frees2: {
    workpieceName: "Freesoefening 2",
    machine: "Freesbank",
    material: "Aluminum 6061",
    drawingNumber: "OWBF210201 / BF0002",
    drawingScale: "A4 / 1:1 / pagina 1-2 van 2",
    dimensions: "Kamers 40x25x4 en 30x20x8; boor 5; M5 draadgat; R6",
    setups: "1",
    operations:
      "Werkstuk uitklokken, kamers frezen, centeren, boren, verzinken, M5 tappen, ontbramen",
    workholding: "Freesbank, machineklem, centerfix",
    cuttingTools: "Frees 12 mm, centerboor, boor 5, boor 4,2, verzinkboor, doortap M5",
    measuringTools: "Digitale uitlezing, schuifmaat",
    notes: "Coordinaten uitrekenen vanuit het midden en voldoende snijolie gebruiken bij het tappen.",
    steps: [
      { setup: 1, description: "Span Freesoefening 1 in op de middelste trap." },
      { setup: 1, description: "Klok X en Y uit met centerfix of kantentaster." },
      { setup: 1, description: "Zet de frees in het midden van de eerste kamer en nul Z." },
      { setup: 1, description: "Bereken coordinaten voor kamer 40 x 25 x 4 en frees voor en na." },
      { setup: 1, description: "Bereken coordinaten voor kamer 30 x 20 x 8 en frees voor en na." },
      { setup: 1, description: "Verplaats kop naar het te boren gat 5 mm en center." },
      { setup: 1, description: "Center ook meteen het M5 draadgat." },
      { setup: 1, description: "Boor 5 mm gat en ontbraam met verzinkboor." },
      { setup: 1, description: "Boor voor met 4,2 mm, verzink en tap M5 met de hand." },
      { setup: 1, description: "Ontbraam alle gemaakte bewerkingen en vul het meetrapport in." },
    ],
  },
  frees3: {
    workpieceName: "Freesoefening 3",
    machine: "Freesbank",
    material: "Generic",
    drawingNumber: "Freesoefening 03",
    drawingScale: "A4 / 1:1 / pagina 1 van 1",
    dimensions: "Kamers 26x10x3; wenkbrauwen frezen; radius R3 aan onderzijde",
    setups: "2",
    operations:
      "Werkstuk uitklokken, kamer frezen, coordinaten berekenen, wenkbrauwen frezen, omspannen, radiusfrezen, ontbramen",
    workholding: "Freesbank, machineklem",
    cuttingTools: "Frees 6 mm, frees 4 mm, radiusfrees 3",
    measuringTools: "Digitale uitlezing, schuifmaat",
    notes: "Gebruik schetsen om coordinaten te bepalen en laat eindcontrole aftekenen.",
    steps: [
      { setup: 1, description: "Span Freesoefening 2 in en klok X en Y uit op het bovenste vierkant." },
      { setup: 1, description: "Zet de frees in het midden van de kamer 26 x 10 x 3 en nul Z." },
      { setup: 1, description: "Bereken coordinaten en frees de kamer voor en na." },
      { setup: 1, description: "Bereken en frees de linker wenkbrauw." },
      { setup: 1, description: "Bereken en frees de rechter wenkbrauw." },
      { setup: 2, description: "Draai het werkstuk om en klem op het kleinste vierkant." },
      { setup: 2, description: "Monteer radiusfrees 3 en nul op een rand." },
      { setup: 2, description: "Frees de radius aan een zijde voor en na op -2,7 en -2,9." },
      { setup: 2, description: "Herhaal dit voor de overige drie zijden." },
      { setup: 2, description: "Ontbraam zorgvuldig, vul meetrapport in en laat aftekenen." },
    ],
  },
  gradenstuk: {
    workpieceName: "45 Gradenstuk V2",
    machine: "Freesbank",
    material: "Automatenstaal",
    drawingNumber: "45 Gradenstuk V2 / 01",
    drawingScale: "A4 / 1,5:1",
    dimensions: "Ruwmaat 16x16x17; kamers met R3 en R5; 45 graden vlakken; gleuf 5",
    setups: "5",
    operations:
      "Opspannen, uitklokken, kamers frezen, werkstuk omspannen, lengte frezen, schuine kanten aftekenen, onder 45 graden opspannen, schuine kanten frezen, gleuf frezen, ontbramen",
    workholding: "Freesbank, machineklem, gradenboog",
    cuttingTools: "Frees 6 mm, frees 10 mm, frees 4 mm",
    measuringTools: "Digitale uitlezing, schuifmaat, hoogteschuifmaat, blokvijl",
    notes: "Voor- en nafrezen subtiel uitvoeren en hoeken eerst goed controleren.",
    steps: [
      { setup: 1, description: "Span ruwmateriaal in met een zijde iets buiten de klem." },
      { setup: 1, description: "Klok Y uit, frees de zijkant schoon en nul X en Z." },
      { setup: 1, description: "Bereken coordinaten voor de eerste kamer en frees voor en na." },
      { setup: 2, description: "Draai het werkstuk om voor de tweede kamer met R5." },
      { setup: 2, description: "Frees de onbewerkte zijde schoon en maak de lengte 16." },
      { setup: 2, description: "Bereken coordinaten en frees de tweede kamer voor en na." },
      { setup: 2, description: "Teken de 1 mm begrenzingen af met de hoogteschuifmaat." },
      { setup: 3, description: "Span het werkstuk onder 45 graden met de grote schuine kant boven." },
      { setup: 3, description: "Frees subtiel het overtollige staal weg." },
      { setup: 4, description: "Span het werkstuk recht in en frees het gleufje van 5." },
      { setup: 5, description: "Span het werkstuk onder 45 graden met de kleine schuine kant boven." },
      { setup: 5, description: "Frees ook hier subtiel het overtollige staal weg en ontbraam." },
    ],
  },
  joypad: {
    workpieceName: "Joypad 2025",
    machine: "Freesbank",
    material: "Aluminium",
    drawingNumber: "Joypad 2025 / 01",
    drawingScale: "A4 / 1,5:1",
    dimensions: "Ruwmaat 40x40x15; radii R3; gaten 6 en 7; afschuining 1,5 x 45 graden",
    setups: "2",
    operations:
      "Zelf werkvoorbereiding maken, contouren bepalen, in maximaal 2 opspanningen frezen, gaten maken en afwerken",
    workholding: "Freesbank, machineklem",
    cuttingTools: "Freesgereedschap en boorgereedschap volgens gekozen aanpak",
    measuringTools: "Schuifmaat, digitale uitlezing",
    notes: "Werkvoorbereiding vooraf bespreken met praktijkbegeleider en maximaal 2 opspanningen gebruiken.",
    steps: [
      { setup: 1, description: "Neem de werktekening over en bepaal een slimme werkvolgorde in maximaal 2 opspanningen." },
      { setup: 1, description: "Plan eerst de buitencontour, kamers en radii." },
      { setup: 2, description: "Plan daarna de gaten, afschuiningen, ontbramen en eindcontrole." },
      { setup: 2, description: "Bespreek de volledige werkvoorbereiding met de praktijkbegeleider voor de start." },
    ],
  },
};

const builtinWorkpieces = structuredClone(workpieces);

const form = document.getElementById("prep-form");
const resetBtn = document.getElementById("reset-btn");
const presetList = document.getElementById("preset-list");
const saveWorkpieceBtn = document.getElementById("save-workpiece-btn");
const deleteWorkpieceBtn = document.getElementById("delete-workpiece-btn");
const customWorkpieceStatus = document.getElementById("custom-workpiece-status");
const drawingFileInput = document.getElementById("drawing-file");
const drawingUploadStatus = document.getElementById("drawing-upload-status");

const fields = {
  studentName: document.getElementById("student-name"),
  studentClass: document.getElementById("student-class"),
  teacherSignoff: document.getElementById("teacher-signoff"),
  workpieceName: document.getElementById("workpiece-name"),
  machine: document.getElementById("machine"),
  material: document.getElementById("material"),
  drawingNumber: document.getElementById("drawing-number"),
  drawingScale: document.getElementById("drawing-scale"),
  dimensions: document.getElementById("dimensions"),
  setups: document.getElementById("setups"),
  operations: document.getElementById("operations"),
  workholding: document.getElementById("workholding"),
  cuttingTools: document.getElementById("cutting-tools"),
  measuringTools: document.getElementById("measuring-tools"),
  notes: document.getElementById("notes"),
};

const outputTitle = document.getElementById("output-title");
const outputSummary = document.getElementById("output-summary");
const heroStats = document.getElementById("hero-stats");
const titleBlock = document.getElementById("title-block");
const tableBody = document.getElementById("prep-table-body");
const phaseList = document.getElementById("phase-list");
const qualityList = document.getElementById("quality-list");

let currentWorkpiece = "noniusoefening";

const workpieceAliases = {
  noniusoefening: ["noniusoefening", "01_noniusoefening"],
  oefentol: ["oefentol", "02_oefentol"],
  diabolo1: ["diabolo positie 1", "diabolo pos. 1", "03_diabolo", "cuzn deel"],
  diabolo2: ["diabolo positie 2", "diabolo pos. 2", "al deel"],
  centerpons: ["centerpons", "04_centerpons"],
  schietlood: ["schietlood", "05_schietlood"],
  kraspen: ["kraspen", "06_kraspen"],
  frees1: ["freesoefening 1"],
  frees2: ["freesoefening 2", "owbf210201", "bf0002"],
  frees3: ["freesoefening 03", "freesoefening 3"],
  gradenstuk: ["45 gradenstuk v2", "45 gradenstuk"],
  joypad: ["joypad 2025", "joypad"],
};

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40);
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadCustomWorkpieces() {
  const raw = localStorage.getItem(CUSTOM_WORKPIECES_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveCustomWorkpieces(customWorkpieces) {
  localStorage.setItem(CUSTOM_WORKPIECES_KEY, JSON.stringify(customWorkpieces));
}

function isBuiltinWorkpiece(workpieceKey) {
  return Object.hasOwn(builtinWorkpieces, workpieceKey);
}

function getCustomWorkpieces() {
  const customWorkpieces = loadCustomWorkpieces();
  return Object.fromEntries(
    Object.entries(customWorkpieces).map(([key, value]) => [
      key,
      {
        ...value,
        isCustom: true,
      },
    ]),
  );
}

function refreshWorkpieces() {
  workpieces = {
    ...builtinWorkpieces,
    ...getCustomWorkpieces(),
  };
}

function renderWorkpieceButtons() {
  presetList.innerHTML = "";

  const builtinEntries = Object.entries(workpieces).filter(([, value]) => !value.isCustom);
  const customEntries = Object.entries(workpieces).filter(([, value]) => value.isCustom);

  for (const [key, value] of [...builtinEntries, ...customEntries]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "preset-btn";
    button.dataset.workpiece = key;
    button.textContent = value.workpieceName;

    if (value.isCustom) {
      button.classList.add("custom-workpiece-btn");
      button.textContent = `${value.workpieceName} (eigen)`;
    }

    button.classList.toggle("active", key === currentWorkpiece);
    presetList.appendChild(button);
  }
}

function setStatus(message, isError = false) {
  customWorkpieceStatus.textContent = message;
  customWorkpieceStatus.dataset.state = isError ? "error" : "ok";
}

function setDrawingStatus(message, isError = false) {
  drawingUploadStatus.textContent = message;
  drawingUploadStatus.dataset.state = isError ? "error" : "ok";
}

function parseCsv(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function saveState(values) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...values, selectedWorkpiece: currentWorkpiece }));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      studentName: "",
      studentClass: "",
      teacherSignoff: "",
      ...workpieces[currentWorkpiece],
      selectedWorkpiece: currentWorkpiece,
    };
  }

  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object"
      ? parsed
      : {
          studentName: "",
          studentClass: "",
          teacherSignoff: "",
          ...workpieces[currentWorkpiece],
          selectedWorkpiece: currentWorkpiece,
        };
  } catch {
    return {
      studentName: "",
      studentClass: "",
      teacherSignoff: "",
      ...workpieces[currentWorkpiece],
      selectedWorkpiece: currentWorkpiece,
    };
  }
}

function fillForm(values) {
  Object.entries(fields).forEach(([key, element]) => {
    element.value = values[key] || "";
  });
}

function setActiveWorkpiece(workpieceKey) {
  currentWorkpiece = workpieceKey;
  const workpieceButtons = presetList.querySelectorAll(".preset-btn");
  workpieceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.workpiece === workpieceKey);
  });
  deleteWorkpieceBtn.disabled = isBuiltinWorkpiece(workpieceKey);
}

function getFormValues() {
  return Object.fromEntries(
    Object.entries(fields).map(([key, element]) => [key, element.value.trim()]),
  );
}

function createStat(label, value) {
  const stat = document.createElement("div");
  stat.className = "stat-chip";
  stat.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
  return stat;
}

function listToHtml(list, target) {
  target.innerHTML = "";
  for (const item of list) {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  }
}

function estimateTime(index, operationText, machine) {
  if (operationText.toLowerCase().includes("meten") || operationText.toLowerCase().includes("ontbram")) {
    return "2 min";
  }
  if (operationText.toLowerCase().includes("tappen") || operationText.toLowerCase().includes("snij")) {
    return "4 min";
  }
  if (machine.toLowerCase().includes("frees")) {
    return `${4 + index} min`;
  }
  return `${3 + index} min`;
}

function shouldUsePresetSteps(values, preset) {
  return Boolean(
    preset &&
      Array.isArray(preset.steps) &&
      preset.steps.length &&
      preset.workpieceName === values.workpieceName &&
      preset.machine === values.machine,
  );
}

function buildRows(values) {
  const operations = parseCsv(values.operations);
  const setupCount = Math.max(1, Number(values.setups) || 1);
  const workholding = values.workholding;
  const cuttingTools = parseCsv(values.cuttingTools);
  const measuringTools = parseCsv(values.measuringTools);
  const preset = workpieces[currentWorkpiece];
  const presetSteps = preset?.steps || [];

  if (shouldUsePresetSteps(values, preset)) {
    return presetSteps.map((step, index) => ({
      setup: step.setup,
      description: step.description,
      machine: `${values.machine}, ${workholding}`,
      cuttingTool: cuttingTools[index % Math.max(cuttingTools.length, 1)] || values.cuttingTools,
      measuringTool: measuringTools[index % Math.max(measuringTools.length, 1)] || values.measuringTools,
      time: estimateTime(index, step.description, values.machine),
    }));
  }

  return operations.map((operation, index) => {
    const setupNumber = Math.min(setupCount, Math.floor(index / Math.ceil(operations.length / setupCount)) + 1);
    return {
      setup: setupNumber,
      description: operation,
      machine: `${values.machine}, ${workholding}`,
      cuttingTool: cuttingTools[index % Math.max(cuttingTools.length, 1)] || values.cuttingTools,
      measuringTool: measuringTools[index % Math.max(measuringTools.length, 1)] || values.measuringTools,
      time: estimateTime(index, operation, values.machine),
    };
  });
}

function findMatchingWorkpieceKey(text) {
  const normalized = normalizeText(text);

  for (const [key, aliases] of Object.entries(workpieceAliases)) {
    if (aliases.some((alias) => normalized.includes(normalizeText(alias)))) {
      return key;
    }
  }

  return null;
}

function guessMachineFromText(text) {
  const normalized = normalizeText(text);
  if (normalized.includes("frees")) {
    return "Freesbank";
  }
  if (normalized.includes("draaibank") || normalized.includes("drieklauw") || normalized.includes("spantang")) {
    return "Draaibank";
  }
  return "Draaibank";
}

function guessMaterialFromText(text) {
  const options = [
    "Brass, Soft Yellow",
    "Messing",
    "Aluminum 6061",
    "Aluminium",
    "Automatenstaal",
    "Zilverstaal",
    "Generic",
  ];
  const normalized = normalizeText(text);
  return options.find((option) => normalized.includes(normalizeText(option))) || "";
}

function extractScaleFromText(text) {
  const match = text.match(/A4[\s/]*([0-9.,: ]{2,20})/i);
  return match ? `A4 / ${match[1].trim()}` : "";
}

function extractDrawingNumberFromText(text) {
  const patterns = [
    /0[1-6]_[A-Za-z0-9_]+/i,
    /OWBF\d+/i,
    /BF\d+/i,
    /Joypad 2025\s*\/\s*01/i,
    /45 Gradenstuk V2\s*\/\s*01/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      return match[0].trim();
    }
  }

  return "";
}

function summarizeDimensions(text) {
  const compact = text.replace(/\s+/g, " ");
  const measurements = compact.match(/(?:R\s?\d+(?:[.,]\d+)?|\bM\d+\b|\b\d+(?:[.,]\d+)?\s?(?:x|X)\s?\d+(?:[.,]\d+)?(?:\s?(?:x|X)\s?\d+(?:[.,]\d+)?)?|\b\d+(?:[.,]\d+)?\s?grad(?:en)?|\b\d+(?:[.,]\d+)?\b)/gi) || [];
  const unique = [];

  for (const measurement of measurements) {
    const trimmed = measurement.trim();
    if (!unique.includes(trimmed)) {
      unique.push(trimmed);
    }
    if (unique.length === 8) {
      break;
    }
  }

  return unique.join(", ");
}

function buildGenericUploadValues(text, fileName) {
  const baseName = fileName.replace(/\.[^.]+$/, "");
  const matchedKey = findMatchingWorkpieceKey(text);
  const matchedPreset = matchedKey ? workpieces[matchedKey] : null;

  if (matchedPreset) {
    return {
      matchedKey,
      values: { ...matchedPreset },
    };
  }

  const machine = guessMachineFromText(text);
  const material = guessMaterialFromText(text);
  const dimensions = summarizeDimensions(text);

  return {
    matchedKey: null,
    values: {
      workpieceName: baseName,
      machine,
      material: material || "Nog te bepalen",
      drawingNumber: extractDrawingNumberFromText(text),
      drawingScale: extractScaleFromText(text),
      dimensions: dimensions || "Neem de hoofdafmetingen over uit de geuploade werktekening.",
      setups: "2",
      operations:
        machine === "Freesbank"
          ? "Tekening controleren, opspannen, uitklokken, voorfrezen, nafrezen, meten, ontbramen"
          : "Tekening controleren, opspannen, vlakken, nullen, afdraaien of boren, meten, ontbramen",
      workholding:
        machine === "Freesbank"
          ? "Freesbank, machineklem"
          : "Draaibank, drieklauw of spantang",
      cuttingTools:
        machine === "Freesbank"
          ? "Freesgereedschap volgens tekening"
          : "Beitel, boor of tap volgens tekening",
      measuringTools: "Schuifmaat",
      notes: "Automatisch gevuld op basis van geuploade werktekening. Controleer maten en volgorde handmatig.",
      steps: [],
      isCustom: true,
    },
  };
}

async function extractTextFromPdf(file) {
  if (!window.pdfjsLib) {
    throw new Error("PDF.js is niet geladen.");
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.js";

  const buffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
  const chunks = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    chunks.push(pageText);
  }

  return chunks.join("\n");
}

function applyUploadValues(nextValues, matchedKey) {
  const studentValues = {
    studentName: fields.studentName.value.trim(),
    studentClass: fields.studentClass.value.trim(),
    teacherSignoff: fields.teacherSignoff.value.trim(),
  };

  const mergedValues = {
    ...studentValues,
    ...nextValues,
  };

  if (matchedKey && workpieces[matchedKey]) {
    currentWorkpiece = matchedKey;
    renderWorkpieceButtons();
    setActiveWorkpiece(matchedKey);
  } else {
    renderWorkpieceButtons();
    setActiveWorkpiece(currentWorkpiece);
  }

  fillForm(mergedValues);
  saveState(mergedValues);
  renderPreparation(mergedValues);
}

async function handleDrawingUpload() {
  const file = drawingFileInput.files?.[0];
  if (!file) {
    return;
  }

  if (file.type.startsWith("image/")) {
    const baseName = file.name.replace(/\.[^.]+$/, "");
    const nextValues = {
      ...getFormValues(),
      workpieceName: baseName,
      dimensions: "Afbeelding geüpload. OCR voor afbeeldingen is nog niet ingebouwd; vul de maten handmatig aan.",
      notes: "Afbeelding geüpload als werktekening. Controleer en vul de gegevens handmatig aan.",
    };
    fillForm(nextValues);
    saveState(nextValues);
    renderPreparation(nextValues);
    setDrawingStatus("Afbeelding geladen. Vul de tekeninggegevens nog handmatig aan.");
    return;
  }

  if (!file.name.toLowerCase().endsWith(".pdf")) {
    setDrawingStatus("Upload bij voorkeur een PDF of afbeelding van de werktekening.", true);
    return;
  }

  try {
    setDrawingStatus("PDF wordt uitgelezen...");
    const text = await extractTextFromPdf(file);
    const { matchedKey, values } = buildGenericUploadValues(text, file.name);
    applyUploadValues(values, matchedKey);

    if (matchedKey) {
      setDrawingStatus(`Werktekening herkend als "${values.workpieceName}". De werkvoorbereiding is ingevuld.`);
    } else {
      setDrawingStatus("PDF uitgelezen. Basisvelden zijn ingevuld; controleer de maten en bewerkingen nog even.");
    }
  } catch (error) {
    setDrawingStatus(`Uploaden mislukt: ${error.message}`, true);
  }
}

function getPreparation(values) {
  const rows = buildRows(values);
  const operationList = parseCsv(values.operations);
  const notes = values.notes ? parseCsv(values.notes) : [];
  const machineFamily = values.machine.toLowerCase().includes("frees") ? "freeswerkstuk" : "draaiwerkstuk";

  const phases = [
    `Controleer de werktekening ${values.drawingNumber || "zonder nummer"} en neem de hoofdafmetingen over: ${values.dimensions}.`,
    `Bepaal ${values.setups} opspanning(en) voor dit ${machineFamily} en zorg dat ${values.workholding} klaarstaat.`,
    `Werk de bewerkingen in logische volgorde af: ${operationList.slice(0, 4).join(", ")}${operationList.length > 4 ? ", ..." : ""}.`,
    "Rond af met meten, ontbramen, meetrapport invullen en laten aftekenen.",
  ];

  const quality = [
    "Neem de kolommen uit het boekje letterlijk over: opspanning, bewerking, machine/opspangereedschap, snijgereedschap, meetgereedschap en tijd.",
    `Controleer materiaal en machine met de werktekening: ${values.material} op ${values.machine}.`,
    "Plan meten tussendoor in plaats van alleen aan het einde, vooral bij lengte- en diametermaten.",
    notes.length
      ? `Extra aandachtspunt: ${notes.join(", ")}.`
      : "Extra aandachtspunt: gebruik de toerentabel en vergeet ontbramen en aftekenen niet.",
  ];

  const titleRows = [
    ["Naam student", values.studentName || "Nog niet ingevuld"],
    ["Klas", values.studentClass || "Nog niet ingevuld"],
    ["Naam werkstuk", values.workpieceName],
    ["Paraaf docent", values.teacherSignoff || "Nog niet afgetekend"],
    ["Machine", values.machine],
    ["Materiaal", values.material],
    ["Tekeningnummer", values.drawingNumber || "Niet ingevuld"],
    ["Formaat / schaal", values.drawingScale || "Niet ingevuld"],
    ["Belangrijkste maten", values.dimensions],
  ];

  const summary = `${values.workpieceName} is ingevuld volgens de opbouw van het boekje: titelblok bovenaan en daaronder een werkvoorbereiding per opspanning. De huidige versie gebruikt ${rows.length} bewerkingsstappen verdeeld over ${values.setups} opspanning(en).`;

  return {
    summary,
    stats: [
      ["Werkstuk", values.workpieceName],
      ["Machine", values.machine],
      ["Opspanningen", `${values.setups}`],
      ["Bewerkingen", `${rows.length}`],
    ],
    titleRows,
    rows,
    phases,
    quality,
  };
}

function renderTitleBlock(rows) {
  titleBlock.innerHTML = "";
  for (const [label, value] of rows) {
    const line = document.createElement("div");
    line.className = "handover-line";
    line.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
    titleBlock.appendChild(line);
  }
}

function renderTable(rows) {
  tableBody.innerHTML = "";
  for (const row of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.setup}</td>
      <td>${row.description}</td>
      <td>${row.machine}</td>
      <td>${row.cuttingTool}</td>
      <td>${row.measuringTool}</td>
      <td>${row.time}</td>
    `;
    tableBody.appendChild(tr);
  }
}

function renderPreparation(values) {
  const preparation = getPreparation(values);

  outputTitle.textContent = values.workpieceName || "Werkvoorbereiding";
  outputSummary.textContent = preparation.summary;

  heroStats.innerHTML = "";
  for (const [label, value] of preparation.stats) {
    heroStats.appendChild(createStat(label, value));
  }

  renderTitleBlock(preparation.titleRows);
  renderTable(preparation.rows);
  listToHtml(preparation.phases, phaseList);
  listToHtml(preparation.quality, qualityList);
}

function applyWorkpiecePreset(workpieceKey, preserveStudent = true) {
  const studentValues = preserveStudent
    ? {
        studentName: fields.studentName.value.trim(),
        studentClass: fields.studentClass.value.trim(),
        teacherSignoff: fields.teacherSignoff.value.trim(),
      }
    : {
        studentName: "",
        studentClass: "",
        teacherSignoff: "",
      };

  const nextValues = {
    ...studentValues,
    ...workpieces[workpieceKey],
  };

  setActiveWorkpiece(workpieceKey);
  fillForm(nextValues);
  saveState(nextValues);
  renderPreparation(nextValues);
}

function buildCustomWorkpiece(values) {
  return {
    workpieceName: values.workpieceName,
    machine: values.machine,
    material: values.material,
    drawingNumber: values.drawingNumber,
    drawingScale: values.drawingScale,
    dimensions: values.dimensions,
    setups: values.setups,
    operations: values.operations,
    workholding: values.workholding,
    cuttingTools: values.cuttingTools,
    measuringTools: values.measuringTools,
    notes: values.notes,
    steps: [],
    isCustom: true,
  };
}

function saveCurrentAsCustomWorkpiece() {
  const values = getFormValues();
  const baseSlug = slugify(values.workpieceName || "nieuw-werkstuk");
  if (!baseSlug) {
    setStatus("Vul eerst een naam voor het werkstuk in.", true);
    return;
  }

  const customWorkpieces = loadCustomWorkpieces();
  let nextKey = `custom-${baseSlug}`;
  let suffix = 2;

  while (Object.hasOwn(customWorkpieces, nextKey) || isBuiltinWorkpiece(nextKey)) {
    nextKey = `custom-${baseSlug}-${suffix}`;
    suffix += 1;
  }

  customWorkpieces[nextKey] = buildCustomWorkpiece(values);
  saveCustomWorkpieces(customWorkpieces);
  refreshWorkpieces();
  currentWorkpiece = nextKey;
  renderWorkpieceButtons();
  setActiveWorkpiece(nextKey);
  saveState(values);
  renderPreparation(values);
  setStatus(`Werkvoorbereiding opgeslagen als "${values.workpieceName}".`);
}

function deleteCurrentCustomWorkpiece() {
  if (isBuiltinWorkpiece(currentWorkpiece)) {
    setStatus("Standaard werkstukken kun je niet verwijderen.", true);
    return;
  }

  const customWorkpieces = loadCustomWorkpieces();
  if (!Object.hasOwn(customWorkpieces, currentWorkpiece)) {
    setStatus("Dit eigen werkstuk bestaat niet meer in opslag.", true);
    return;
  }

  delete customWorkpieces[currentWorkpiece];
  saveCustomWorkpieces(customWorkpieces);
  refreshWorkpieces();
  currentWorkpiece = "noniusoefening";
  renderWorkpieceButtons();
  applyWorkpiecePreset(currentWorkpiece, false);
  setStatus("Eigen werkstuk verwijderd.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = getFormValues();
  saveState(values);
  renderPreparation(values);
});

resetBtn.addEventListener("click", () => {
  applyWorkpiecePreset(currentWorkpiece, false);
});

saveWorkpieceBtn.addEventListener("click", () => {
  saveCurrentAsCustomWorkpiece();
});

deleteWorkpieceBtn.addEventListener("click", () => {
  deleteCurrentCustomWorkpiece();
});

presetList.addEventListener("click", (event) => {
  const button = event.target.closest(".preset-btn");
  if (!button) {
    return;
  }

  applyWorkpiecePreset(button.dataset.workpiece);
  setStatus("");
});

drawingFileInput.addEventListener("change", () => {
  handleDrawingUpload();
});

refreshWorkpieces();
const initialState = loadState();
if (initialState.selectedWorkpiece && workpieces[initialState.selectedWorkpiece]) {
  currentWorkpiece = initialState.selectedWorkpiece;
}
renderWorkpieceButtons();
setActiveWorkpiece(currentWorkpiece);
fillForm(initialState);
renderPreparation(initialState);
