---
id: funzioni-f052-f059-flussi-lavoro-wfm
title: "Funzioni F052–F059 – Flussi Lavoro (WFM)"
sidebar_label: "F052–F059 – Flussi Lavoro"
description: "Manuale utente delle funzioni WFM (Workflow Management) per gestione attività, archivio documentale, monitoraggio e configurazione dei flussi di lavoro: F052–F059."
---

## Panoramica

Le funzioni **F052–F059 – Flussi Lavoro (WFM)** consentono di governare il ciclo di vita operativo dei flussi documentali e delle attività correlate (creazione, approvazione, condivisione, archiviazione), assicurando tracciabilità, responsabilità e controllo dei tempi.

Il modulo è articolato in:
- **Operatività utente** (attività assegnate, consultazione ed esecuzione step)
- **Repository e archivio documentale**
- **Monitoraggio centralizzato dei processi**
- **Configurazione** (aree tematiche, documenti, processi, tipi processo, ruoli e utenti)

---

## Schermata di navigazione WFM

![](/img/wfmconfigurazioni-alberodinavigazione.png)

Nel menu WFM sono disponibili le sezioni:
- Configurazione aree tematiche
- Configurazione documenti
- Configurazione processi
- Configurazione tipi processo
- Configurazione ruoli utenti  
Oltre alle aree operative:
- Le mie attività
- Monitoraggio processi
- Archivio documentale

---

# F052 – Le mie Attività

## Scopo della funzione

La funzione **F052 – Le mie Attività** consente all’utente di consultare e gestire gli **step di processo** a lui assegnati, con filtri di ricerca e una vista tabellare che riassume stato, scadenze e avanzamento.

## Schermate di riferimento

![](/img/wfmlemieattivita-consultazionedati.png)
![](/img/wfmlemieattivita-elaborazioneattivita.png)

## Descrizione dettagliata

La pagina presenta:
- un’area **Ricerca** con filtri (es. *Descrizione step*, *Stato step*) e pulsante **Cerca**;
- una tabella **Processi** con le informazioni principali:
  - *Nome processo*
  - *Descrizione step*
  - *Nr step*
  - *Stato*
  - *Data inizio pian* / *Data inizio eff*
  - *Data fine pian* / *Data fine eff*
  - indicatori visuali (icone “semaforo” / stato) per evidenziare la condizione dello step.

Nella sezione di elaborazione (card “Elaborazione Processi”), l’utente vede i dati di sintesi dello step selezionato (Nome processo, Nr step, Descrizione, Stato step) e dispone di azioni operative come:
- **Prossimo step** (avanzamento del flusso)
- **Aggiungi documento** (collegamento/produzione documento nello step)
- **Elabora Documenti** (gestione/produzione documentale legata allo step)

## Istruzioni d’uso

1. Apri **WFM → Le mie attività**
2. Imposta i filtri (es. *Descrizione step*, *Stato step*)
3. Premi **Cerca**
4. Seleziona una riga della tabella per aprire i dettagli dello step
5. Esegui l’azione prevista:
   - **Aggiungi documento** se devi caricare/collegare un documento
   - **Elabora Documenti** se devi completare l’elaborazione documentale
   - **Prossimo step** per avanzare al passo successivo quando hai concluso

---

# F053 – Archivio Documentale

## Scopo della funzione

La funzione **F053 – Archivio Documentale** permette di ricercare i documenti archiviati, filtrandoli per **Area tematica** e **Tipo documento**, e di gestire le **associazioni utenti** che determinano visibilità e accesso ai contenuti.

## Schermata di riferimento

![](/img/wfmarchiviodocumentale-associazioenutentiallavisibilitàdocumento.png)

## Descrizione dettagliata

La schermata include:
- un pannello di **ricerca documenti** con filtri principali (*Area tematica*, *Tipo documento*) e pulsante **Cerca**;
- un elenco risultati (documenti) su cui è possibile intervenire con azioni (es. gestione associazioni).

È presente la gestione degli utenti collegati:
- finestra **Elenco utenti** con pulsante **Aggiungi** per associare un utente al documento;
- finestra **Elenco utenti associati** con icone azione (es. invio/notifica via email e rimozione).

Questa funzione è cruciale per governare:
- **riservatezza** (chi può vedere cosa)
- **collaborazione** (coinvolgimento dei corretti attori nel flusso)
- **tracciabilità** (audit delle assegnazioni)

## Istruzioni d’uso

1. Apri **WFM → Archivio documentale**
2. Imposta i filtri (*Area tematica*, *Tipo documento*) e premi **Cerca**
3. Seleziona il documento di interesse
4. Per associare utenti:
   - apri **Elenco utenti**
   - premi **Aggiungi** sul nominativo desiderato
5. Per gestire gli utenti associati:
   - verifica l’elenco “utenti associati”
   - usa le icone per eventuale notifica o rimozione

---

# F054 – Monitoraggio Processi

## Scopo della funzione

La funzione **F054 – Monitoraggio Processi** consente una vista centrale di controllo sull’avanzamento dei processi WFM, filtrando per processo/utente/stato e verificando scostamenti tra pianificato ed effettivo.

## Schermata di riferimento

![](/img/wfmmonitoraggioprocessi-consultazionedati.png)

## Descrizione dettagliata

La pagina contiene:
- filtri di ricerca (es. *Nome processo*, *Descrizione*, *Nome utente*, *Stato step*) e pulsante **Cerca**
- tabella risultati con campi tipici:
  - *Nome processo*
  - *Utente*
  - *Descrizione step*
  - *Nr step*
  - *Stato step*
  - date pianificate/effettive (*inizio* / *fine*)

Questa vista supporta:
- monitoraggio operativo e manageriale
- evidenza di eventuali ritardi
- controllo qualità del workflow (step bloccati, assegnazioni, tempi)

## Istruzioni d’uso

1. Apri **WFM → Monitoraggio processi**
2. Imposta i filtri utili (processo, utente, stato, descrizione)
3. Premi **Cerca**
4. Analizza i risultati, con particolare attenzione a:
   - step “attivi” da troppo tempo
   - differenze tra *data fine pian* e *data fine eff*
   - utenti con carichi o ritardi ricorrenti

---

# F055 – Configurazione – Aree Tematiche

## Scopo della funzione

La funzione **F055 – Configurazione – Aree Tematiche** consente di creare e mantenere le aree tematiche utilizzate per classificare documenti e flussi (es. Performance Operativa, Rischi e Sicurezza, Compliance e Governance).

## Schermata di riferimento

![](/img/wfmconfigurazioneareetematiche-editing.png)

## Descrizione dettagliata

La schermata presenta:
- elenco aree a sinistra con campo **Cerca area tematica**
- dettaglio a destra con:
  - **Nome area tematica**
  - azioni (icone) per gestione: **elimina**, **modifica**, **aggiungi**

Le aree tematiche sono un elemento chiave perché:
- determinano la classificazione dei documenti
- facilitano la ricerca e la governance del repository
- abilitano report/filtri coerenti nei processi WFM

## Istruzioni d’uso

1. Apri **WFM → Configurazione aree tematiche**
2. Cerca un’area esistente o selezionala dall’elenco
3. Usa:
   - **+** per aggiungere una nuova area
   - **matita** per modificare
   - **cestino** per eliminare (se consentito dalle regole interne)

---

# F056 – Configurazione – Documenti di WFM

## Scopo della funzione

La funzione **F056 – Configurazione – Documenti di WFM** consente di definire e gestire i documenti trattati nei flussi: tipo, area tematica, nome e contenuto caricato.

## Schermata di riferimento

![](/img/wfmconfigurazionedocumenti-editing.png)

## Descrizione dettagliata

A sinistra:
- lista documenti con **Cerca documento** e selezione documento.

A destra:
- dettagli del documento selezionato:
  - **Tipo documento** (es. Report)
  - **Area tematica**
  - **Nome documento**
  - area **Carica documento** (upload/aggancio file)
  - azioni: **elimina**, **modifica**, **aggiungi**

Questa funzione garantisce che il workflow lavori su documenti:
- coerenti per classificazione
- rintracciabili
- gestibili in modo controllato (ciclo di vita e aggiornamenti)

## Istruzioni d’uso

1. Apri **WFM → Configurazione documenti**
2. Seleziona un documento dall’elenco o cercalo
3. Compila/aggiorna:
   - tipo documento
   - area tematica
   - nome documento
4. Carica il file nell’area **Carica documento**
5. Salva tramite l’azione prevista (icona/controllo di conferma)

---

# F057 – Configurazione – Processi di WFM

## Scopo della funzione

La funzione **F057 – Configurazione – Processi di WFM** permette di definire i processi e i relativi step, includendo assegnazioni, livelli di accesso, date pianificate ed effettive e stato dello step.

## Schermata di riferimento

![](/img/wfmconfigurazioneprocessi-editing.png)

## Descrizione dettagliata

La sezione “Crea” consente di impostare:
- **Nome processo**
- **Descrizione step**
- **Nr step**
- **Data inizio pianificata** / **Data fine pianificata**
- **Step eseguito da** (utente)
- **Livello di accesso** (es. Modifica / Revisione / Lettura)
- **Stato step** (es. Concluso)

Sotto è presente la tabella di riepilogo degli step, utile per verificare la struttura del flusso e lo stato complessivo.

## Istruzioni d’uso

1. Apri **WFM → Configurazione processi**
2. Inserisci nome processo e definisci lo step (descrizione, nr step)
3. Imposta assegnatario e livello di accesso
4. Definisci le date pianificate e lo stato
5. Salva e verifica la corretta comparsa nella tabella sottostante

---

# F058 – Configurazione – Tipi di Processo

## Scopo della funzione

La funzione **F058 – Configurazione – Tipi di Processo** consente di definire “template” riutilizzabili di step (flusso, ruolo, descrizione e progressivo), per standardizzare i processi WFM.

## Schermata di riferimento

![](/img/wfmtipidiprocesso-editing.png)

## Descrizione dettagliata

A sinistra:
- lista dei flussi/tipi processo con ricerca.

A destra:
- dettaglio con campi:
  - **Nome flusso**
  - **Ruolo**
  - **Descrizione step**
  - **Progressivo step**
- azioni: **elimina**, **modifica**, **aggiungi**

Questo consente di:
- riutilizzare strutture di workflow
- ridurre errori di configurazione
- mantenere coerenza tra processi simili

## Istruzioni d’uso

1. Apri **WFM → Configurazione tipo processi**
2. Seleziona un tipo esistente o premi **+**
3. Compila nome flusso, ruolo, descrizione step e progressivo
4. Salva e verifica la presenza nella lista

---

# F059 – Configurazione – Ruoli e Utenti

## Scopo della funzione

La funzione **F059 – Configurazione – Ruoli e Utenti** permette di gestire anagrafiche e ruoli, associando ciascun utente a un ruolo/UU e abilitando il corretto instradamento degli step nei processi WFM.

## Schermata di riferimento

![](/img/wfmconfigurazioneruoliutenti-editing.png)

## Descrizione dettagliata

A sinistra:
- elenco utenti con ricerca.

A destra:
- scheda utente con:
  - **Nome utente**
  - **Email**
  - **Ruolo**
  - **UO**
- azioni: **elimina**, **modifica**, **aggiungi**

Questa configurazione è fondamentale per:
- garantire responsabilità (chi fa cosa)
- applicare segregazione operativa (lettura/revisione/modifica)
- abilitare monitoraggio e audit delle attività

## Istruzioni d’uso

1. Apri **WFM → Configurazione ruoli utenti**
2. Cerca e seleziona un utente
3. Verifica o modifica ruolo e UO
4. Salva la variazione (o aggiungi un nuovo utente con **+**)

---

## Note operative sulle immagini (Docusaurus)

Tutti i riferimenti sono assoluti:

![](/img/nomefile.png)

Assicurati che i file siano presenti in:

static/img/nomefile.png

e che i nomi siano in lowercase senza spazi e senza accenti.
