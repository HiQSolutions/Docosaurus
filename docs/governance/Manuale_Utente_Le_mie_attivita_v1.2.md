---
id: le-mie-attivita
title: Le mie attività
sidebar_label: Le mie attività
---

# Manuale Utente -- Le mie attività

## Nome della Funzione

Le mie attività

## Area GRC di riferimento

Admin -- Flussi di lavoro (Workflow Management)

## Versione Funzione

v1.1

## Introduzione alla Funzione

La funzione "Le mie attività" consente di visualizzare e gestire le
attività assegnate all'utente nell'ambito dei flussi di lavoro della
piattaforma SinergIA ICT. La schermata raccoglie in un'unica vista gli
step (passi) operativi previsti dai processi, mostrando stato di
avanzamento, date pianificate/effettive e indicatori di scadenza, così
da permettere all'utente di prioritizzare le lavorazioni e completare
gli adempimenti richiesti.\
\
La funzione supporta l'operatività GRC ICT (Governance, Risk e
Compliance) facilitando l'esecuzione ordinata delle attività e la
tracciabilità delle evidenze (es. documenti da
creare/approvare/condividere/archiviare), riducendo il rischio di
ritardi e migliorando la trasparenza verso audit e ispezioni.

## Schermate di riferimento

Consultazione dati -- elenco attività e filtri (esempio).

![](media/image1.png){width="6.5in" height="3.5656561679790024in"}

Elaborazione processi -- dettaglio step e azioni disponibili (esempio).

![](media/image2.png){width="6.5in" height="1.2121216097987753in"}

Menu Flussi di Lavoro -- accesso alle sezioni (esempio).

![](media/image3.png){width="6.5in" height="3.5853379265091863in"}

## Attributi Chiave

Di seguito sono descritti i principali campi/colonne e gli elementi di
interazione presenti nelle schermate della funzione.

### 1) Header e controlli comuni di piattaforma

In alto, la schermata presenta elementi standardizzati:\
- Nome Ente (in alto a sinistra);\
- Icone di navigazione: Menu (hamburger) e Home (casa) a sinistra;\
- Titolo pagina/funzione al centro (es. "WFM - Le mie attività" /
"Flussi di Lavoro");\
- Informazioni utente a destra: Email e Ruolo, con icona profilo.

### 2) Sezione "Ricerca" (Consultazione dati)

La parte superiore della schermata contiene un box "Ricerca" che
permette di filtrare l'elenco delle attività.\
\
Campi/filtri disponibili:\
- Descrizione step (menu a tendina): filtra per tipologia di
attività/step (es. "Documento da creare", "Documento da approvare",
ecc.).\
- Stato Step (menu a tendina): filtra per stato dello step (es.
"Attivo", "Concluso").\
- Cerca (campo di testo): consente di inserire una parola chiave per
restringere ulteriormente i risultati.

### 3) Tabella "Processi" (elenco attività)

La sezione "Processi" mostra l'elenco delle attività assegnate
all'utente. Le colonne visibili sono:\
- Nome processo: nome del processo/workflow di riferimento (es.
"Gestione della Governance e della Sicurezza ICT").\
- Descrizione Step: descrive l'attività da svolgere nello step (es.
"Documento da creare", "Documento da approvare", "Documento in
condivisione", "Documento da archiviare").\
- Nr Step: numero progressivo dello step all'interno del processo.\
- Stato: stato sintetico dello step (es. "Attivo", "Concluso").\
- Data inizio pian: data di avvio pianificata.\
- Data inizio eff: data di avvio effettiva (quando lo step è iniziato
realmente).\
- Data fine pian: data di chiusura pianificata.\
- Data fine eff: data di chiusura effettiva (quando lo step è stato
completato).\
\
Colonne/indicatori laterali (a destra della tabella):\
- Selettore riga (cerchio): indica la riga selezionata e permette di
scegliere l'attività su cui operare.\
- Indicatore scadenza (icona calendario colorata): sintetizza
visivamente l'urgenza/ritardo rispetto alla scadenza.\
\* Verde: lo step è nei tempi (scadenza non imminente).\
\* Giallo: scadenza prossima (pochi giorni alla data prevista).\
\* Rosso: scadenza superata / ritardo.\
\
Nota: la soglia che determina il passaggio Verde→Giallo→Rosso può
dipendere da regole di configurazione del workflow.

### 4) Sezione "Elaborazione Processi" (dettaglio attività selezionata)

Quando l'utente seleziona una riga nella tabella, la sezione
"Elaborazione Processi" mostra i dettagli dell'attività.\
\
Campi informativi:\
- Nome Processo: processo di riferimento.\
- Nr Step: numero step selezionato.\
- Descrizione: descrizione operativa dello step.\
- Stato Step: stato corrente dello step.\
\
Azioni disponibili (pulsanti):\
- Prossimo step: avanza il processo allo step successivo (se consentito
e se lo step corrente è completabile).\
- Aggiungi documento: consente di caricare/associare un documento allo
step (evidenza operativa).\
- Elabora Documenti: avvia una lavorazione sui documenti associati allo
step (es. verifica/consultazione/gestione).

## UXD della Funzione

Posizione nella piattaforma:\
- La funzione è accessibile dall'area "Flussi di Lavoro", tramite il
menu laterale.\
- Voci di menu visibili: "Le mie attività", "Archivio documentale",
"Monitoraggio processi", "Configurazione".\
\
Flusso di utilizzo principale:\
1. L'utente apre "Le mie attività" per vedere gli step assegnati.\
2. Applica filtri (Descrizione step / Stato step) o ricerca testuale per
restringere l'elenco.\
3. Seleziona un'attività dalla tabella "Processi".\
4. Consulta i dettagli nella sezione "Elaborazione Processi".\
5. Esegue l'azione necessaria: avanzamento allo step successivo e/o
gestione documenti (aggiunta/elaborazione).\
\
Comportamenti attesi:\
- Le date e lo stato guidano la priorità.\
- Il calendario colorato aiuta a identificare rapidamente attività in
scadenza o in ritardo.

## Informazioni Associate alla Funzione

Input:\
- Definizione dei processi di workflow (nome processo, sequenza step,
descrizione step).\
- Assegnazioni utente/ruolo (chi deve svolgere cosa).\
- Date pianificate (inizio/fine) e aggiornamenti effettivi.\
- Documenti/evidenze associate allo step (se previsti).\
\
Relazioni:\
- Collega flussi operativi a documentazione e deliverable GRC ICT (es.
policy, evidenze, verbali, report).\
- Può interagire con "Archivio documentale" e con funzioni di
monitoraggio dei processi.\
\
Output:\
- Aggiornamento dello stato degli step (Attivo/Concluso) e delle date
effettive.\
- Tracciabilità delle attività svolte e dei documenti associati
(evidenze).

## Istruzioni sull'Uso della Funzione

1\. Accedere all'area "Flussi di Lavoro" e selezionare "Le mie
attività".\
2. (Opzionale) Applicare i filtri nella sezione "Ricerca":\
- selezionare una Descrizione step;\
- selezionare uno Stato Step;\
- inserire una parola chiave nel campo "Cerca".\
3. Individuare l'attività di interesse nella tabella "Processi",
verificando:\
- Stato (Attivo/Concluso);\
- indicatori di scadenza (calendario colorato).\
4. Selezionare la riga tramite il selettore (cerchio) per caricare il
dettaglio in "Elaborazione Processi".\
5. In "Elaborazione Processi", eseguire l'azione necessaria:\
- Prossimo step per avanzare nel workflow;\
- Aggiungi documento per allegare/caricare evidenze;\
- Elabora Documenti per operare sui documenti collegati.\
6. Verificare che lo stato dello step e le date effettive si aggiornino
coerentemente dopo l'operazione.

## Regole di Calcolo della Funzione

Indicatori di scadenza (calendario colorato):\
- Il colore è determinato confrontando la data corrente con la "Data
fine pian" (o, se presente, con la scadenza definita dallo step).\
- Rosso: data di fine pianificata superata (attività in ritardo).\
- Giallo: attività prossima alla scadenza (entro una soglia di giorni
configurabile).\
- Verde: attività nei tempi (oltre la soglia di attenzione).\
\
Aggiornamento stato:\
- Lo stato dello step riflette l'avanzamento del workflow (es. "Attivo"
quando lo step è in lavorazione, "Concluso" quando completato).\
- Il passaggio allo step successivo avviene tramite il comando "Prossimo
step" e può essere vincolato al completamento delle attività previste
(es. documenti richiesti).

## Note interne (NON PUBBLICATE)

\- Verificare in Data Dictionary / configurazione workflow le soglie che
determinano i colori del calendario (verde/giallo/rosso).\
- Confermare se l'icona calendario rappresenta sempre la scadenza di
"Data fine pian" o una scadenza specifica dello step.
