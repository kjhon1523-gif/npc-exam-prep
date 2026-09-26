// ============================================================
// NPC EXAM PREP — CONTENT FILE
// ============================================================
// HOW TO ADD CONTENT:
// 1. To add a SECTION: copy an object { ... } and change id, title, icon
// 2. To add a CHAPTER: inside chapters: [ ... ], copy and change id, title
// 3. To add a QUESTION: inside questions: [ ... ], use this format:
//    {
//      q: "Question text here?",
//      options: ["Option A", "Option B", "Option C", "Option D"],
//      answer: 0,   // 0=first option, 1=second, 2=third, 3=fourth
//      explanation: "Why this answer is correct."
//    }
// 4. Study notes support HTML: <h3>, <p>, <ul>, <li>, <strong>, <table>
// ============================================================

const SECTIONS = [

  // ==========================================================
  // SECTION 1 — FORENSIC PHARMACY (PHARMACY LAWS & ETHICS)
  // ==========================================================
  {
    id: "forensic",
    title: "Forensic Pharmacy (Laws & Ethics)",
    icon: "⚖️",
    chapters: [
      {
        id: "drug-act-2035",
        title: "Drug Act 2035 & DDA",
        notes: `
          <h3>Nepal Drug Act 2035 (1978 A.D.)</h3>
          <p>The <strong>Drug Act 2035</strong> is the primary legislation governing drug manufacture, import, export, sale, and distribution in Nepal.</p>

          <h4>Key Authorities</h4>
          <ul>
            <li><strong>Department of Drug Administration (DDA)</strong> — established under <strong>Section 5</strong>, headed by the Director General under the Ministry of Health and Population.</li>
            <li><strong>Drug Advisory Committee</strong> — advises the Government on technical matters related to drug quality and standards.</li>
            <li><strong>Drug Consultative Council</strong> — advises on drug policy.</li>
          </ul>

          <h4>Drug Classification (DDA)</h4>
          <table>
            <tr><th>Group</th><th>Category</th><th>Examples</th></tr>
            <tr><td><strong>Ka (क)</strong></td><td>Narcotic, Psychotropic, habit-forming</td><td>Morphine, Diazepam, Codeine</td></tr>
            <tr><td><strong>Kha (ख)</strong></td><td>Prescription-only</td><td>Antibiotics, Hormones, Chemotherapy</td></tr>
            <tr><td><strong>Ga (ग)</strong></td><td>OTC / Household remedies</td><td>Vitamins, Paracetamol (small packs)</td></tr>
          </table>

          <h4>Penalties</h4>
          <ul>
            <li>Manufacturing or selling adulterated/substandard drugs causing death → up to <strong>life imprisonment</strong> + heavy fine.</li>
            <li>Section 17 prohibits manufacture/sale of misbranded, adulterated, or fake medicines.</li>
          </ul>

          <h4>Record Keeping</h4>
          <ul>
            <li>Prescription records for Group "Ka" (narcotic/psychotropic) must be retained for at least <strong>2 years</strong>.</li>
            <li>Retail licenses must be renewed <strong>every year</strong>.</li>
          </ul>
        `,
        questions: [
          {
            q: "Under the Drug Act 2035 of Nepal, which committee advises the Government of Nepal on technical matters related to drugs?",
            options: ["Nepal Pharmacy Council", "Drug Advisory Committee", "Drug Consultative Council", "Department of Drug Administration"],
            answer: 1,
            explanation: "The Drug Advisory Committee advises the Nepal Government on technical matters regarding drug quality and standards, while the Drug Consultative Council advises on drug policy."
          },
          {
            q: "In Nepal's drug classification system, 'Group Ga' (ग) corresponds to which category of medicines?",
            options: ["Narcotic & Psychotropic drugs", "Prescription-only medicines", "Non-prescription / OTC / Household remedies", "Vaccines & Biologicals"],
            answer: 2,
            explanation: "Group Ka (क) = Narcotics/Psychotropics; Group Kha (ख) = Prescription-only; Group Ga (ग) = OTC and general medicines."
          },
          {
            q: "Which authority is responsible for issuing drug manufacturing licenses and retail shop registration certificates in Nepal?",
            options: ["Nepal Pharmacy Council", "Department of Drug Administration (DDA)", "Ministry of Health and Population", "Nepal Medical Council"],
            answer: 1,
            explanation: "The DDA, headed by the Director General under MoHP, is the executive regulatory body responsible for drug registration, licensing manufacturing units, and registering pharmacy retail outlets."
          },
          {
            q: "How long must a registered pharmacy retailer in Nepal preserve prescription records for Group 'Ka' (Narcotic/Psychotropic) drug sales?",
            options: ["6 months", "1 year", "2 years", "5 years"],
            answer: 2,
            explanation: "According to DDA regulatory guidelines, prescription records and registers for controlled substances must be retained for at least 2 years for inspection by Drug Inspectors."
          },
          {
            q: "Under the Nepal Drug Act 2035, which Section mandates the establishment of the Department of Drug Administration?",
            options: ["Section 3", "Section 5", "Section 7", "Section 12"],
            answer: 1,
            explanation: "Section 5 of the Nepal Drug Act 2035 mandates the establishment of the DDA as the primary executive drug regulatory body under the Ministry of Health and Population."
          },
          {
            q: "What color band/label indicator is required on the outer packaging of Group 'Ka' (Narcotic/Psychotropic) drugs in Nepal?",
            options: ["Red line/symbol", "Green symbol", "Blue line", "Yellow box"],
            answer: 0,
            explanation: "Group 'Ka' controlled drugs require prominent labeling including a Red warning mark/line or specific prescription symbol to signify strict controlled access."
          },
          {
            q: "What is the penalty under the Drug Act 2035 for manufacturing or selling substandard/adulterated drugs that cause grave injury or death?",
            options: ["Fine only without imprisonment", "Imprisonment up to life sentence or severe fine depending on severity", "Cancellation of NPC registration only", "Formal warning letter"],
            answer: 1,
            explanation: "The Drug Act 2035 contains stringent penal provisions, including heavy fines and imprisonment (up to life imprisonment depending on the level of harm caused)."
          },
          {
            q: "Which section of the Nepal Drug Act 2035 deals with the prohibition of misbranded, adulterated, or fake medicines?",
            options: ["Section 10", "Section 12", "Section 17", "Section 28"],
            answer: 2,
            explanation: "Section 17 of Drug Act 2035 prohibits the manufacture, sale, distribution, export, or import of adulterated, sub-standard, or misbranded drugs."
          }
        ]
      },
      {
        id: "npc-act",
        title: "Nepal Pharmacy Council Act 2057",
        notes: `
          <h3>Nepal Pharmacy Council (NPC)</h3>
          <p>Established under the <strong>Nepal Pharmacy Council Act 2057 (2000 A.D.)</strong> to regulate the pharmacy profession in Nepal.</p>

          <h4>Functions of NPC</h4>
          <ul>
            <li>Register pharmacy manpower (Pharmacists, Assistant Pharmacists)</li>
            <li>Regulate pharmacy education</li>
            <li>Enforce ethical practice</li>
            <li>Conduct Name Registration Examinations</li>
          </ul>

          <h4>Registration Categories</h4>
          <table>
            <tr><th>Category</th><th>Qualification</th><th>Title</th></tr>
            <tr><td><strong>A</strong></td><td>B.Pharm or higher</td><td>Pharmacist</td></tr>
            <tr><td><strong>B</strong></td><td>D.Pharm (Diploma)</td><td>Assistant Pharmacist</td></tr>
          </table>

          <h4>Executive Committee</h4>
          <p>Nominated members hold office for a tenure of <strong>4 years</strong>.</p>

          <h4>Code of Ethics</h4>
          <blockquote>The primary obligation of a registered pharmacist is to ensure patient safety, health, confidentiality, and professional integrity above self-interest.</blockquote>
        `,
        questions: [
          {
            q: "Which of the following acts established the Nepal Pharmacy Council?",
            options: ["Drug Act 2035", "Nepal Pharmacy Council Act 2057", "Narcotic Drugs Control Act 2033", "Consumer Protection Act 2054"],
            answer: 1,
            explanation: "The Nepal Pharmacy Council (NPC) was established under the Nepal Pharmacy Council Act, 2057 (2000 A.D.) to regulate the pharmacy profession in Nepal."
          },
          {
            q: "As per the Nepal Pharmacy Council Act 2057, what is the minimum academic qualification required for name registration as a 'Pharmacist' (Category A)?",
            options: ["Diploma in Pharmacy", "Bachelor of Pharmacy (B.Pharm) or equivalent", "Doctor of Pharmacy (Pharm.D) only", "Master of Pharmacy (M.Pharm)"],
            answer: 1,
            explanation: "B.Pharm degree or higher qualifies for Category 'A' registration as a Pharmacist, whereas Diploma holders register under Category 'B' as Assistant Pharmacists."
          },
          {
            q: "Under the Nepal Pharmacy Council Act 2057, what is the term duration of the nominated executive committee members?",
            options: ["2 years", "3 years", "4 years", "5 years"],
            answer: 2,
            explanation: "Nominated members of the Nepal Pharmacy Council hold office for a tenure of 4 years from the date of appointment."
          },
          {
            q: "According to the Codes of Ethics issued by the Nepal Pharmacy Council, a registered pharmacist must prioritize:",
            options: ["Commercial profit of the retail pharmacy", "Patient health, well-being, and professional integrity above self-interest", "Substitution of prescribed brands without patient knowledge", "Direct promotion of Group 'Ka' drugs to consumers"],
            answer: 1,
            explanation: "The NPC Code of Conduct specifies that the primary obligation of a registered pharmacist is to ensure patient safety, health, confidentiality, and professional integrity."
          },
          {
            q: "The Nepal Pharmacy Council Act was promulgated in which year (B.S. / A.D.)?",
            options: ["2035 B.S. (1978 A.D.)", "2057 B.S. (2000 A.D.)", "2049 B.S. (1992 A.D.)", "2065 B.S. (2008 A.D.)"],
            answer: 1,
            explanation: "The Nepal Pharmacy Council Act 2057 was enacted in the year 2000 A.D. to regulate pharmacy education, register pharmacy manpower, and enforce ethical practice in Nepal."
          }
        ]
      },
      {
        id: "narcotic-consumer",
        title: "Narcotic Drugs & Consumer Protection Acts",
        notes: `
          <h3>Narcotic Drugs (Control) Act 2033 (1976 A.D.)</h3>
          <p>Controls the cultivation, production, sale, and distribution of:</p>
          <ul>
            <li><strong>Cannabis sativa</strong> (Marijuana)</li>
            <li><strong>Papaver somniferum</strong> (Opium Poppy)</li>
            <li>Coca leaves</li>
            <li>Synthetic narcotic & psychotropic derivatives</li>
          </ul>

          <h3>Consumer Protection Act 2075</h3>
          <p>Protects consumers against:</p>
          <ul>
            <li>Misleading advertisements</li>
            <li>Unfair trade practices</li>
            <li>Sale of expired or adulterated products (including drugs)</li>
          </ul>
        `,
        questions: [
          {
            q: "Under the Narcotic Drugs (Control) Act 2033 of Nepal, which of the following substances is strictly regulated as a narcotic drug?",
            options: ["Diazepam", "Morphine", "Amoxicillin", "Paracetamol"],
            answer: 1,
            explanation: "Morphine (and other opioid derivatives like Codeine, Pethidine, Methadone) is governed under the Narcotic Drugs (Control) Act 2033. Benzodiazepines like Diazepam are categorized as psychotropic substances."
          },
          {
            q: "The Narcotic Drugs (Control) Act 2033 strictly prohibits cultivation, production, and sale of which plants without state permission?",
            options: ["Capsicum annuum", "Cannabis sativa and Papaver somniferum", "Mentha arvensis", "Zingiber officinale"],
            answer: 1,
            explanation: "The Narcotic Drugs (Control) Act 2033 controls cannabis, coca leaves, opium poppy, and synthetic narcotic and psychotropic derivatives."
          },
          {
            q: "Which act in Nepal protects consumers against misleading advertisements, unfair trade practices, and sale of expired consumer goods including drugs?",
            options: ["Consumer Protection Act 2075", "Public Procurement Act 2063", "Environment Protection Act 2053", "Labor Act 2074"],
            answer: 0,
            explanation: "The Consumer Protection Act 2075 safeguards consumer rights against adulterated, sub-standard, expired products, and misleading health claims."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 2 — PHARMACOLOGY & THERAPEUTICS
  // ==========================================================
  {
    id: "pharmacology",
    title: "Pharmacology & Therapeutics",
    icon: "💊",
    chapters: [
      {
        id: "ans-drugs",
        title: "Autonomic Nervous System Drugs",
        notes: `
          <h3>Beta-Blockers</h3>
          <ul>
            <li><strong>Cardioselective (β₁):</strong> Atenolol, Metoprolol, Bisoprolol, Esmolol</li>
            <li><strong>Non-selective:</strong> Propranolol, Timolol, Nadolol, Pindolol</li>
            <li><strong>With ISA:</strong> Pindolol, Acebutolol</li>
            <li><strong>Combined α+β:</strong> Carvedilol, Labetalol</li>
          </ul>

          <h4>Clinical Uses</h4>
          <p>Hypertension, angina, heart failure (Metoprolol, Carvedilol, Bisoprolol), arrhythmias, migraine prophylaxis (Propranolol), thyrotoxicosis, glaucoma (Timolol eye drops).</p>

          <h3>Anticholinergics</h3>
          <p><strong>Atropine</strong> — from <em>Atropa belladonna</em>. Blocks muscarinic receptors → mydriasis, cycloplegia, dry mouth, tachycardia.</p>
          <p>Used for: Organophosphate poisoning, bradycardia, pre-anesthetic, motion sickness (Scopolamine).</p>
        `,
        questions: [
          {
            q: "Which of the following beta-blockers is cardioselective (β₁-selective)?",
            options: ["Propranolol", "Timolol", "Atenolol", "Carvedilol"],
            answer: 2,
            explanation: "Atenolol, Metoprolol, and Bisoprolol are β₁-selective adrenoceptor antagonists, whereas Propranolol and Timolol are non-selective."
          },
          {
            q: "Which non-selective beta-blocker possesses intrinsic sympathomimetic activity (ISA)?",
            options: ["Propranolol", "Pindolol", "Atenolol", "Metoprolol"],
            answer: 1,
            explanation: "Pindolol and Acebutolol act as partial agonists (ISA), causing less resting bradycardia compared to pure antagonists like Propranolol."
          },
          {
            q: "Which natural product acts as a potent anticholinergic agent causing mydriasis and cycloplegia?",
            options: ["Pilocarpine", "Atropine", "Physostigmine", "Nicotine"],
            answer: 1,
            explanation: "Atropine (from Atropa belladonna) competitively blocks muscarinic acetylcholine receptors, relaxing the pupillary sphincter (mydriasis) and ciliary muscle (cycloplegia)."
          }
        ]
      },
      {
        id: "cvs-drugs",
        title: "Cardiovascular Drugs",
        notes: `
          <h3>ACE Inhibitors</h3>
          <p><strong>Examples:</strong> Enalapril, Lisinopril, Ramipril, Captopril</p>
          <p><strong>Mechanism:</strong> Inhibit ACE → block conversion of Angiotensin I → Angiotensin II. Also prevent bradykinin breakdown → dry cough.</p>
          <p><strong>Uses:</strong> HTN, heart failure, diabetic nephropathy, post-MI.</p>
          <p><strong>Contraindicated in pregnancy</strong> (fetal renal dysgenesis, oligohydramnios).</p>

          <h3>Statins</h3>
          <p><strong>Mechanism:</strong> Inhibit HMG-CoA reductase (rate-limiting enzyme in cholesterol synthesis).</p>
          <p><strong>Side effects:</strong> Myopathy, rhabdomyolysis (especially with Gemfibrozil, Erythromycin).</p>

          <h3>Warfarin</h3>
          <p><strong>Mechanism:</strong> Inhibits Vitamin K Epoxide Reductase (VKORC1) → blocks γ-carboxylation of factors II, VII, IX, X.</p>
          <p><strong>Monitoring:</strong> INR (target 2.0–3.0 for AF/DVT).</p>
          <p><strong>Antidote:</strong> Vitamin K₁ + Fresh Frozen Plasma.</p>
        `,
        questions: [
          {
            q: "What is the therapeutic target of ACE inhibitors such as Enalapril and Lisinopril?",
            options: ["Direct antagonism of AT₁ angiotensin receptors", "Inhibition of Angiotensin-Converting Enzyme converting Angiotensin I to Angiotensin II", "Direct suppression of renin release", "Blockade of aldosterone action"],
            answer: 1,
            explanation: "ACE inhibitors block the conversion of Angiotensin I to Angiotensin II (a potent vasoconstrictor) and also prevent the breakdown of bradykinin, contributing to both antihypertensive efficacy and the common dry cough side effect."
          },
          {
            q: "What is the mechanism of action of Statin drugs (e.g., Atorvastatin, Rosuvastatin)?",
            options: ["Inhibition of HMG-CoA Reductase", "Activation of Lipoprotein Lipase via PPAR-α", "Binding bile acids in the intestinal lumen", "Selective inhibition of intestinal cholesterol absorption"],
            answer: 0,
            explanation: "Statins competitively inhibit 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in hepatic cholesterol biosynthesis."
          },
          {
            q: "What is the principal mechanism of Warfarin's anticoagulant effect?",
            options: ["Direct inhibition of Thrombin", "Inhibition of Vitamin K Epoxide Reductase (VKORC1)", "Activation of Antithrombin III", "Direct inhibition of Factor Xa"],
            answer: 1,
            explanation: "Warfarin inhibits VKORC1, preventing regeneration of reduced Vitamin K needed for γ-carboxylation of factors II, VII, IX, X, and proteins C and S."
          },
          {
            q: "Which antihypertensive drug is strictly CONTRAINDICATED during all trimesters of pregnancy due to severe fetal renal dysgenesis?",
            options: ["Methyldopa", "Labetalol", "Enalapril (ACE Inhibitors / ARBs)", "Nifedipine"],
            answer: 2,
            explanation: "ACE inhibitors and ARBs cause fetal toxicity, renal failure, skull hypoplasia, and intrauterine growth restriction. Methyldopa and Labetalol are safe choices in pregnancy."
          },
          {
            q: "Which antiarrhythmic agent is known to cause pulmonary fibrosis, thyroid dysfunction, and corneal micro-deposits?",
            options: ["Lidocaine", "Amiodarone", "Verapamil", "Quinidine"],
            answer: 1,
            explanation: "Amiodarone (Class III antiarrhythmic) contains iodine and is highly lipophilic, causing multi-organ side effects including pulmonary toxicity, thyroid disorders, and blue-grey skin discoloration."
          }
        ]
      },
      {
        id: "anti-infectives",
        title: "Antimicrobial Drugs",
        notes: `
          <h3>Cell Wall Synthesis Inhibitors</h3>
          <ul>
            <li><strong>Beta-lactams:</strong> Penicillins (Amoxicillin), Cephalosporins (Ceftriaxone), Carbapenems, Monobactams</li>
            <li><strong>Glycopeptides:</strong> Vancomycin (binds D-Ala-D-Ala)</li>
          </ul>

          <h3>Protein Synthesis Inhibitors</h3>
          <ul>
            <li><strong>30S:</strong> Aminoglycosides (Gentamicin), Tetracyclines</li>
            <li><strong>50S:</strong> Macrolides (Azithromycin), Chloramphenicol, Clindamycin</li>
          </ul>

          <h3>Nucleic Acid Inhibitors</h3>
          <ul>
            <li><strong>DNA Gyrase:</strong> Fluoroquinolones (Ciprofloxacin, Levofloxacin)</li>
            <li><strong>RNA Polymerase:</strong> Rifampicin</li>
          </ul>

          <h3>Antimetabolites</h3>
          <ul>
            <li>Sulfonamides + Trimethoprim = Co-trimoxazole (sequential blockade)</li>
          </ul>

          <h4>Key Adverse Effects</h4>
          <table>
            <tr><th>Drug</th><th>Adverse Effect</th></tr>
            <tr><td>Chloramphenicol</td><td>Grey Baby Syndrome (neonates)</td></tr>
            <tr><td>Vancomycin (rapid IV)</td><td>Red Man Syndrome</td></tr>
            <tr><td>Aminoglycosides</td><td>Ototoxicity + Nephrotoxicity</td></tr>
            <tr><td>Tetracyclines</td><td>Tooth discoloration, bone growth suppression (&lt;8 years)</td></tr>
            <tr><td>Rifampicin</td><td>Orange-red discoloration of secretions</td></tr>
            <tr><td>Metronidazole + alcohol</td><td>Disulfiram-like reaction</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which antibiotic acts by inhibiting bacterial cell wall synthesis?",
            options: ["Ciprofloxacin", "Azithromycin", "Amoxicillin", "Gentamicin"],
            answer: 2,
            explanation: "Amoxicillin (a β-lactam) inhibits transpeptidase enzymes involved in peptidoglycan cell wall synthesis."
          },
          {
            q: "Grey Baby Syndrome is a well-documented adverse reaction caused by which antibiotic in neonates?",
            options: ["Chloramphenicol", "Tetracycline", "Erythromycin", "Vancomycin"],
            answer: 0,
            explanation: "Neonates have immature glucuronyl transferase activity and low renal excretion capacity, leading to Chloramphenicol accumulation, mitochondrial toxicity, cyanosis, cardiovascular collapse, and the characteristic 'grey' pallor."
          },
          {
            q: "Red Man Syndrome is an infusion-related reaction associated with rapid IV administration of:",
            options: ["Gentamicin", "Vancomycin", "Cefepime", "Amphotericin B"],
            answer: 1,
            explanation: "Rapid intravenous infusion of Vancomycin triggers direct, non-immunologic histamine release from mast cells and basophils, causing erythematous flushing of the face, neck, and upper torso."
          },
          {
            q: "Ototoxicity and Nephrotoxicity are prominent dose-limiting adverse effects associated with which class of antimicrobials?",
            options: ["Macrolides", "Aminoglycosides", "Penicillins", "Cephalosporins"],
            answer: 1,
            explanation: "Aminoglycosides (e.g., Gentamicin, Amikacin, Tobramycin) accumulate in the perilymph of the inner ear and proximal renal tubular cells, leading to vestibular/auditory nerve damage and acute tubular necrosis."
          },
          {
            q: "Which antibiotic is contraindicated in young children (under 8 years) due to risk of permanent tooth discoloration?",
            options: ["Amoxicillin", "Tetracycline / Doxycycline", "Ceftriaxone", "Erythromycin"],
            answer: 1,
            explanation: "Tetracyclines chelate calcium ions and deposit in calcifying teeth and growing bones, causing permanent brown/yellow discoloration and enamel hypoplasia in young children and fetuses."
          },
          {
            q: "Which drug causes 'Red-Orange' discoloration of body secretions (urine, tears, sweat) during therapy?",
            options: ["Rifampicin", "Metronidazole", "Sulfamethoxazole", "Nitrofurantoin"],
            answer: 0,
            explanation: "Rifampicin and its metabolic products impart a harmless orange-red tint to urine, sweat, sputum, and tears. Patients should be counseled in advance."
          },
          {
            q: "Which antimicrobial is notorious for causing Disulfiram-like reactions when ingested with alcohol?",
            options: ["Metronidazole", "Azithromycin", "Ciprofloxacin", "Amoxicillin"],
            answer: 0,
            explanation: "Metronidazole inhibits aldehyde dehydrogenase, leading to toxic accumulation of acetaldehyde when co-administered with ethanol."
          },
          {
            q: "Co-trimoxazole is a synergistic fixed-dose combination composed of:",
            options: ["Sulfamethoxazole and Trimethoprim in a 5:1 ratio", "Sulfadiazine and Pyrimethamine", "Amoxicillin and Clavulanic acid", "Ampicillin and Sulbactam"],
            answer: 0,
            explanation: "Co-trimoxazole contains Sulfamethoxazole (blocks dihydropteroate synthase) and Trimethoprim (blocks DHFR) in a 5:1 ratio."
          }
        ]
      },
      {
        id: "cns-drugs",
        title: "CNS Drugs & Toxicology",
        notes: `
          <h3>Opioid Analgesics</h3>
          <p><strong>Morphine</strong> — μ-opioid agonist. Causes: analgesia, respiratory depression, miosis, constipation, euphoria.</p>
          <p><strong>Classic Toxicity Triad:</strong> Respiratory depression + Pinpoint pupils (miosis) + Coma</p>
          <p><strong>Antidote:</strong> Naloxone</p>

          <h3>Benzodiazepines</h3>
          <p><strong>Examples:</strong> Diazepam, Lorazepam, Alprazolam</p>
          <p><strong>Mechanism:</strong> Enhance GABA_A receptor activity</p>
          <p><strong>Antidote:</strong> Flumazenil (competitive antagonist at BZD binding site)</p>

          <h3>Antiepileptics</h3>
          <table>
            <tr><th>Drug</th><th>Key Feature</th></tr>
            <tr><td>Phenytoin</td><td>Zero-order kinetics; gingival hyperplasia</td></tr>
            <tr><td>Carbamazepine</td><td>Trigeminal neuralgia; SIADH</td></tr>
            <tr><td>Valproate</td><td>Broad spectrum; hepatotoxic; teratogenic</td></tr>
            <tr><td>Ethosuximide</td><td>Absence seizures</td></tr>
          </table>

          <h3>Toxicology Antidotes</h3>
          <table>
            <tr><th>Toxin</th><th>Antidote</th></tr>
            <tr><td>Paracetamol</td><td>N-acetylcysteine (NAC)</td></tr>
            <tr><td>Opioids</td><td>Naloxone</td></tr>
            <tr><td>Benzodiazepines</td><td>Flumazenil</td></tr>
            <tr><td>Warfarin</td><td>Vitamin K₁ + FFP</td></tr>
            <tr><td>Heparin</td><td>Protamine Sulfate</td></tr>
            <tr><td>Organophosphates</td><td>Atropine + Pralidoxime</td></tr>
            <tr><td>Iron</td><td>Deferoxamine</td></tr>
            <tr><td>Methanol</td><td>Fomepizole / Ethanol</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which drug is a specific antagonist at benzodiazepine binding sites on the GABA_A receptor complex?",
            options: ["Naloxone", "Flumazenil", "Pralidoxime", "Physostigmine"],
            answer: 1,
            explanation: "Flumazenil acts as a competitive antagonist at the central benzodiazepine receptor on GABA_A ion channels, reversing sedation and respiratory depression from benzodiazepines."
          },
          {
            q: "Morphine causes constipation primarily through which mechanism?",
            options: ["Inhibition of gastric acid secretion", "Stimulation of intestinal μ-opioid receptors increasing smooth muscle tone while reducing propulsive peristalsis", "Direct inhibition of pancreatic lipase", "Osmotic fluid shifts out of the gut lumen"],
            answer: 1,
            explanation: "Activation of enteric μ-opioid receptors in the gastrointestinal tract decreases longitudinal peristaltic contractions, increases segmental tone, and enhances fluid reabsorption, leading to dry, hard stools."
          },
          {
            q: "A patient presenting with pinpoint pupils, respiratory depression, and coma is suffering from the classic toxic triad of:",
            options: ["Organophosphate poisoning", "Opioid toxicity", "Atropine toxicity", "Amphetamine overdose"],
            answer: 1,
            explanation: "The classic opioid toxicity triad consists of respiratory depression, pinpoint pupils (miosis), and central nervous system depression (coma), reversed by Naloxone."
          },
          {
            q: "Which antiepileptic drug exhibits zero-order (non-linear) elimination kinetics within its therapeutic dosing range?",
            options: ["Valproic acid", "Phenytoin", "Carbamazepine", "Levetiracetam"],
            answer: 1,
            explanation: "At plasma concentrations within or slightly above the therapeutic range (~10–20 μg/mL), hepatic metabolic enzymes for Phenytoin become saturated, causing elimination kinetics to shift from first-order to zero-order."
          },
          {
            q: "What is the drug of choice for treating acute trigeminal neuralgia?",
            options: ["Phenytoin", "Carbamazepine", "Valproic acid", "Gabapentin"],
            answer: 1,
            explanation: "Carbamazepine blocks voltage-gated sodium channels and is the first-line pharmacotherapy for lancinating pain in trigeminal neuralgia."
          },
          {
            q: "Which drug is the antidote for acute Heparin toxicity?",
            options: ["Vitamin K₁", "Protamine Sulfate", "Deferoxamine", "Atropine"],
            answer: 1,
            explanation: "Protamine Sulfate is a basic polycationic protein that neutralizes acidic polyanionic Heparin by forming an inactive stable salt complex."
          },
          {
            q: "The drug of choice for treating acute organophosphate pesticide poisoning to reverse excessive muscarinic symptoms is:",
            options: ["Pralidoxime only", "Atropine Sulfate", "Neostigmine", "Physostigmine"],
            answer: 1,
            explanation: "Atropine blocks excess acetylcholine at muscarinic receptors to control life-threatening secretions and bronchospasm. Pralidoxime is added to reactivate acetylcholinesterase enzymes."
          }
        ]
      },
      {
        id: "endocrine-drugs",
        title: "Endocrine Drugs",
        notes: `
          <h3>Antidiabetics</h3>
          <table>
            <tr><th>Class</th><th>Example</th><th>Mechanism</th></tr>
            <tr><td>Biguanide</td><td>Metformin</td><td>Activates AMPK → ↓ gluconeogenesis</td></tr>
            <tr><td>Sulfonylurea</td><td>Glibenclamide</td><td>Closes K-ATP → ↑ insulin</td></tr>
            <tr><td>SGLT-2 inhibitor</td><td>Empagliflozin</td><td>↑ urinary glucose excretion</td></tr>
            <tr><td>DPP-4 inhibitor</td><td>Sitagliptin</td><td>↑ incretin levels</td></tr>
            <tr><td>GLP-1 agonist</td><td>Liraglutide</td><td>↑ insulin, ↓ glucagon</td></tr>
          </table>

          <h3>Insulin Preparations</h3>
          <ul>
            <li><strong>Rapid:</strong> Lispro, Aspart, Glulisine (onset 15 min)</li>
            <li><strong>Short:</strong> Regular insulin (onset 30 min)</li>
            <li><strong>Intermediate:</strong> NPH/Isophane (peak 6–12 h)</li>
            <li><strong>Long:</strong> Glargine, Detemir (peakless, ~24 h)</li>
          </ul>

          <h3>Corticosteroids</h3>
          <p><strong>Long-term use:</strong> Cushingoid features (moon face, buffalo hump, central obesity, hyperglycemia, osteoporosis)</p>
        `,
        questions: [
          {
            q: "Metformin causes blood glucose lowering without increasing insulin secretion. Its primary molecular mechanism involves activation of:",
            options: ["PPAR-γ", "AMP-activated Protein Kinase (AMPK)", "Sulfonylurea receptors", "DPP-4 enzyme"],
            answer: 1,
            explanation: "Metformin activates hepatic AMPK, which suppresses gluconeogenesis, increases hepatic insulin sensitivity, and enhances peripheral glucose uptake in skeletal muscle."
          },
          {
            q: "Which insulin preparation provides a flat, peakless plasma concentration profile suitable for once-daily basal glucose control?",
            options: ["Regular Insulin", "Insulin Lispro", "NPH (Isophane) Insulin", "Insulin Glargine"],
            answer: 3,
            explanation: "Insulin Glargine forms micro-precipitates upon subcutaneous injection due to its low solubility at physiological pH, allowing slow, continuous absorption over ~24 hours without a distinct peak."
          },
          {
            q: "Which class of oral antidiabetic agents is associated with the potential side effect of Euglycemic Diabetic Ketoacidosis (eDKA)?",
            options: ["Sulfonylureas", "SGLT-2 Inhibitors (Empagliflozin, Dapagliflozin)", "Biguanides (Metformin)", "DPP-4 Inhibitors"],
            answer: 1,
            explanation: "SGLT-2 inhibitors promote urinary glucose excretion and can occasionally induce ketoacidosis even when blood glucose levels remain relatively normal (<250 mg/dL)."
          },
          {
            q: "What is the adverse effect known as 'Cushingoid features' associated with?",
            options: ["Long-term systemic Corticosteroid therapy", "Chronic insulin overdose", "Thyroxine toxicity", "Prolonged NSAID use"],
            answer: 0,
            explanation: "Exogenous administration of high-dose corticosteroids causes iatrogenic Cushing's syndrome characterized by fat redistribution, muscle wasting, fluid retention, and glucose intolerance."
          }
        ]
      },
      {
        id: "gi-resp",
        title: "GI & Respiratory Drugs",
        notes: `
          <h3>Proton Pump Inhibitors</h3>
          <p><strong>Examples:</strong> Omeprazole, Pantoprazole, Esomeprazole</p>
          <p><strong>Mechanism:</strong> Irreversibly inhibit H⁺/K⁺-ATPase proton pump in gastric parietal cells.</p>

          <h3>H2 Receptor Antagonists</h3>
          <p><strong>Examples:</strong> Ranitidine, Famotidine, Cimetidine</p>
          <p>Competitively block H2 receptors on parietal cells.</p>
          <p><strong>Cimetidine</strong> — inhibits CYP450, causes gynecomastia.</p>

          <h3>Antiemetics</h3>
          <ul>
            <li><strong>5-HT₃ antagonists:</strong> Ondansetron (chemotherapy-induced)</li>
            <li><strong>D₂ antagonists:</strong> Metoclopramide, Domperidone</li>
            <li><strong>H₁ antagonists:</strong> Promethazine</li>
          </ul>

          <h3>Antiasthmatics</h3>
          <ul>
            <li><strong>SABA:</strong> Salbutamol, Terbutaline (acute relief)</li>
            <li><strong>LABA:</strong> Salmeterol, Formoterol (maintenance)</li>
            <li><strong>ICS:</strong> Beclomethasone, Budesonide</li>
            <li><strong>Leukotriene antagonists:</strong> Montelukast</li>
          </ul>
        `,
        questions: [
          {
            q: "Which mechanism best describes the therapeutic effect of Omeprazole in peptic ulcer disease?",
            options: ["Reversible competitive block of H₂ receptors", "Irreversible inhibition of H⁺/K⁺-ATPase proton pump", "Neutralization of gastric acid via chemical chelation", "Stimulation of endogenous prostaglandin E₂ synthesis"],
            answer: 1,
            explanation: "Omeprazole is a PPI that covalently binds to and irreversibly inactivates the H⁺/K⁺-ATPase enzyme system in gastric parietal cells, blocking the final step of acid secretion."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 3 — PHARMACEUTICS & BIOPHARMACEUTICS
  // ==========================================================
  {
    id: "pharmaceutics",
    title: "Pharmaceutics & Biopharmaceutics",
    icon: "🧪",
    chapters: [
      {
        id: "tablets",
        title: "Tablets & Tablet Manufacturing",
        notes: `
          <h3>Tablet Excipients</h3>
          <table>
            <tr><th>Function</th><th>Example</th></tr>
            <tr><td>Diluent/Filler</td><td>Lactose, MCC, Dicalcium phosphate</td></tr>
            <tr><td>Binder</td><td>PVP, HPMC, Starch paste</td></tr>
            <tr><td>Disintegrant</td><td>Sodium Starch Glycolate (SSG), Croscarmellose, Crospovidone</td></tr>
            <tr><td>Lubricant</td><td>Magnesium Stearate, Talc</td></tr>
            <tr><td>Glidant</td><td>Colloidal Silicon Dioxide (Aerosil)</td></tr>
          </table>

          <h3>Tablet Defects</h3>
          <ul>
            <li><strong>Capping:</strong> Top/bottom crown separation</li>
            <li><strong>Lamination:</strong> Separation into horizontal layers</li>
            <li><strong>Picking/Sticking:</strong> Material adheres to punch/die</li>
            <li><strong>Mottling:</strong> Unequal color distribution</li>
          </ul>

          <h3>Quality Control Tests</h3>
          <table>
            <tr><th>Test</th><th>Specification</th></tr>
            <tr><td>Disintegration (uncoated)</td><td>≤ 15 min</td></tr>
            <tr><td>Disintegration (film-coated)</td><td>≤ 30 min</td></tr>
            <tr><td>Disintegration (enteric)</td><td>2 h in acid + ≤ 60 min in buffer</td></tr>
            <tr><td>Friability</td><td>≤ 1.0% weight loss</td></tr>
            <tr><td>Hardness</td><td>4–10 kg/cm² (typical)</td></tr>
          </table>

          <h3>Dissolution Apparatus (USP)</h3>
          <ul>
            <li><strong>Apparatus 1:</strong> Basket</li>
            <li><strong>Apparatus 2:</strong> Paddle</li>
            <li><strong>Apparatus 3:</strong> Reciprocating Cylinder</li>
            <li><strong>Apparatus 4:</strong> Flow-Through Cell</li>
          </ul>
        `,
        questions: [
          {
            q: "In tablet manufacturing, the defect known as 'Capping' refers to:",
            options: ["Separation of a tablet into two or more distinct horizontal layers", "Partial or complete separation of the top or bottom crown from the main body", "Sticking of tablet material to the die wall", "Unequal distribution of color on a tablet surface"],
            answer: 1,
            explanation: "Capping is the partial or complete removal of the top/bottom crown of a tablet, usually caused by entrapped air during compression. Separation into layers is called lamination."
          },
          {
            q: "Which excipient commonly serves as a superdisintegrant in solid oral dosage form formulations?",
            options: ["Microcrystalline Cellulose (PH 102)", "Sodium Starch Glycolate (SSG)", "Magnesium Stearate", "Lactose Monohydrate"],
            answer: 1,
            explanation: "Sodium Starch Glycolate (SSG), Crosscarmellose Sodium, and Crospovidone act as superdisintegrants by rapidly swelling or wicking water into the tablet matrix upon hydration."
          },
          {
            q: "Which standard pharmacopoeial test is executed using a USP Apparatus 2?",
            options: ["Basket Dissolution Apparatus", "Paddle Dissolution Apparatus", "Reciprocating Cylinder", "Flow-Through Cell"],
            answer: 1,
            explanation: "According to USP standard terminology: Apparatus 1 is the Basket, Apparatus 2 is the Paddle, Apparatus 3 is the Reciprocating Cylinder, and Apparatus 4 is the Flow-Through Cell."
          },
          {
            q: "What is the disintegration time (DT) limit for Uncoated compressed tablets according to official pharmacopoeias?",
            options: ["Not more than 5 minutes", "Not more than 15 minutes", "Not more than 30 minutes", "Not more than 60 minutes"],
            answer: 1,
            explanation: "Standard DT limits: Uncoated tablets: ≤ 15 minutes; Film-coated tablets: ≤ 30 minutes; Enteric-coated tablets: 0 disintegration in 0.1 N HCl for 2 hours, then ≤ 60 minutes in phosphate buffer (pH 6.8)."
          },
          {
            q: "What is the function of Microcrystalline Cellulose (MCC) in direct compression tablet formulations?",
            options: ["Lubricant and Glidant", "Binder and Diluent", "Opaque Coating Agent", "Solubilizer"],
            answer: 1,
            explanation: "Microcrystalline Cellulose possesses excellent compressibility and flow characteristics, making it one of the most widely used direct-compression binders and diluents in tablet manufacturing."
          },
          {
            q: "Which excipient is commonly added as a lubricant in tablet compression to reduce friction between the die wall and the tablet edge?",
            options: ["Sodium Starch Glycolate", "Microcrystalline Cellulose", "Magnesium Stearate", "Lactose"],
            answer: 2,
            explanation: "Hydrophobic lubricants (e.g., Magnesium Stearate at 0.25–1.0%) coat granules, preventing ejection friction. Excessive amounts can prolong tablet disintegration."
          }
        ]
      },
      {
        id: "liquid-dosage",
        title: "Liquid Dosage Forms & Emulsions",
        notes: `
          <h3>Emulsions</h3>
          <p><strong>HLB Scale:</strong></p>
          <ul>
            <li>3–6 → W/O emulsifying agents</li>
            <li>8–16 → O/W emulsifying agents</li>
            <li>13–15 → Detergents</li>
            <li>15–18 → Solubilizers</li>
          </ul>

          <h3>Rheology</h3>
          <ul>
            <li><strong>Newtonian:</strong> Constant viscosity</li>
            <li><strong>Pseudoplastic:</strong> Shear-thinning (viscosity ↓ with shear ↑)</li>
            <li><strong>Dilatant:</strong> Shear-thickening</li>
            <li><strong>Plastic (Bingham):</strong> Needs yield stress</li>
          </ul>

          <h3>Stokes' Law</h3>
          <p>v = 2r²(ρ₁ − ρ₂)g / 9η</p>
          <p>Sedimentation velocity (v) is directly proportional to particle radius squared and inversely proportional to viscosity.</p>

          <h3>Elixirs vs Syrups</h3>
          <ul>
            <li><strong>Elixir:</strong> Clear, sweetened hydroalcoholic solution</li>
            <li><strong>Syrup:</strong> Concentrated aqueous sugar solution (66.7% w/w)</li>
          </ul>
        `,
        questions: [
          {
            q: "What type of emulsion is formed when the HLB value of the surfactant ranges between 3 and 6?",
            options: ["Water-in-Oil (W/O)", "Oil-in-Water (O/W)", "Solubilizing agent", "Detergent"],
            answer: 0,
            explanation: "Surfactants with low HLB values (3–6) are lipophilic and favor Water-in-Oil (W/O) emulsions, whereas high HLB values (8–16) favor Oil-in-Water (O/W) emulsions."
          },
          {
            q: "Which rheological flow behavior is characterized by a decrease in viscosity with an increase in shear rate (shear-thinning)?",
            options: ["Dilatant flow", "Pseudoplastic flow", "Bingham Plastic flow", "Newtonian flow"],
            answer: 1,
            explanation: "Pseudoplastic flow exhibits shear-thinning behavior (viscosity drops as shear rate increases), typical of polymer solutions, methylcellulose mucilage, and pharmaceutical suspensions."
          },
          {
            q: "Which equation is used to calculate the physical stability and sedimentation velocity of suspended particles?",
            options: ["Arrhenius Equation", "Stokes' Law", "Fick's Second Law", "Young Equation"],
            answer: 1,
            explanation: "Stokes' Law describes the settling velocity of spherical particles in a liquid medium, showing that reducing particle size (r) or increasing vehicle viscosity (η) slows down sedimentation."
          },
          {
            q: "An elixir is best defined as a:",
            options: ["Hydroalcoholic, clear, pleasantly flavored solution intended for oral use", "Aqueous coarse suspension containing insoluble solid particles", "Concentrated aqueous solution of sugar", "Sterile oil-in-water emulsion for parenteral administration"],
            answer: 0,
            explanation: "Elixirs are clear, sweetened hydroalcoholic formulations suitable for water-insoluble or alcohol-soluble active ingredients. Syrups are concentrated aqueous sugar solutions."
          },
          {
            q: "Which polymer is widely utilized as an enteric coating agent to protect acid-labile drugs from gastric fluid?",
            options: ["Ethylcellulose", "Cellulose Acetate Phthalate (CAP)", "Hydroxypropyl Methylcellulose (HPMC E5)", "Polyvinylpyrrolidone (PVP K30)"],
            answer: 1,
            explanation: "Cellulose Acetate Phthalate (CAP), Hypromellose Phthalate, and Eudragit L/S are insoluble in acidic stomach media (pH < 5.0) but dissolve in the higher pH environment of the small intestine (pH > 6.0)."
          }
        ]
      },
      {
        id: "sterile-parenterals",
        title: "Sterile Products & Parenterals",
        notes: `
          <h3>Isotonicity</h3>
          <p><strong>0.9% w/v NaCl</strong> is isotonic with human blood (308 mOsm/L).</p>
          <p>Freezing point depression (ΔTf) = 0.52°C for isotonic solutions.</p>

          <h3>Depyrogenation</h3>
          <p>Pyrogens = lipopolysaccharides (LPS) from Gram-negative bacteria.</p>
          <p><strong>Destroyed by:</strong> Dry heat at 250°C for 30 min.</p>
          <p><strong>Detected by:</strong> LAL (Limulus Amebocyte Lysate) test.</p>

          <h3>Cleanroom Grades (WHO GMP)</h3>
          <table>
            <tr><th>Grade</th><th>Use</th></tr>
            <tr><td>A</td><td>High-risk aseptic filling zone</td></tr>
            <tr><td>B</td><td>Background for Grade A</td></tr>
            <tr><td>C</td><td>Less critical steps</td></tr>
            <tr><td>D</td><td>External packaging</td></tr>
          </table>

          <h3>HEPA Filters</h3>
          <p>Capture 99.97% of particles ≥ 0.3 μm. Airflow velocity: 90 FPM (0.45 m/s) ± 20%.</p>
        `,
        questions: [
          {
            q: "A parenteral solution labeled as 'Iso-osmotic with human blood' exerts an osmotic pressure equivalent to what concentration of Sodium Chloride (NaCl)?",
            options: ["0.45% w/v", "0.9% w/v", "3.0% w/v", "5.0% w/v"],
            answer: 1,
            explanation: "A 0.9% w/v Sodium Chloride aqueous solution is isotonic with human blood plasma and red blood cells, exhibiting an osmolality of approximately 308 mOsm/L."
          },
          {
            q: "Depyrogenation of glass vials and ampoules during sterile manufacturing is most reliably achieved using:",
            options: ["Autoclaving at 121°C for 15 minutes", "Dry heat sterilization at 250°C for 30–45 minutes", "Ethylene Oxide (EtO) gas treatment", "Membrane filtration through 0.22 micron filter"],
            answer: 1,
            explanation: "Bacterial endotoxins (pyrogens) are heat-stable lipopolysaccharides. While autoclaving sterilizes microbes, high-temperature dry heat (250°C for at least 30 minutes) is necessary to destroy pyrogens."
          },
          {
            q: "What reagent is used in the bacterial endotoxin test (BET) to detect pyrogens in parenterals?",
            options: ["Rabbit blood serum", "Limulus Amebocyte Lysate (LAL)", "Methylene Blue reagent", "Silver Nitrate solution"],
            answer: 1,
            explanation: "The LAL test uses blood extract from horseshoe crabs (Limulus polyphemus), which forms an opaque gel coagulum in the presence of Gram-negative endotoxins."
          },
          {
            q: "According to WHO GMP guidelines, Grade A cleanroom environment refers to:",
            options: ["HEPA-filtered laminar airflow workstation for high-risk operations", "Background environment for Grade A preparation", "Clean area for less critical steps", "External packaging hall"],
            answer: 0,
            explanation: "Grade A represents the local zone for high-risk operations (filling zone, stopper bowls, open ampoules) providing laminar airflow with strict particle counts."
          },
          {
            q: "Laminar Airflow (LAF) workbenches utilize HEPA filters. What particle size efficiency do HEPA filters guarantee?",
            options: ["Retains 50% of particles ≥ 5.0 μm", "Retains 99.97% of particles ≥ 0.3 μm", "Retains 100% of liquid droplets", "Filters only visible dust particles"],
            answer: 1,
            explanation: "HEPA filters trap 99.97% of airborne particles down to 0.3 μm in diameter, establishing an ISO Class 5 environment suitable for sterile compounding."
          },
          {
            q: "What is the standard storage temperature for cold chain biological products like Insulin and Vaccines?",
            options: ["Below 0°C", "2°C to 8°C", "8°C to 15°C", "Room temperature (15°C to 25°C)"],
            answer: 1,
            explanation: "Cold storage requires a temperature between 2°C and 8°C to preserve the stability and potency of proteins and vaccines."
          }
        ]
      },
      {
        id: "biopharmaceutics",
        title: "Biopharmaceutics & Pharmacokinetics",
        notes: `
          <h3>Pharmacokinetic Parameters</h3>
          <table>
            <tr><th>Parameter</th><th>Formula</th></tr>
            <tr><td>Half-life (t½)</td><td>0.693 / k</td></tr>
            <tr><td>Volume of Distribution (Vd)</td><td>D / Cp</td></tr>
            <tr><td>Clearance (CL)</td><td>Vd × k</td></tr>
            <tr><td>Bioavailability (F)</td><td>AUC_oral / AUC_IV</td></tr>
          </table>

          <h3>Kinetics</h3>
          <ul>
            <li><strong>First-order:</strong> Rate proportional to concentration (most drugs)</li>
            <li><strong>Zero-order:</strong> Constant rate (Phenytoin, Ethanol, Aspirin at high dose)</li>
          </ul>

          <h3>Dissolution</h3>
          <p><strong>Noyes-Whitney equation:</strong> dC/dt = DA(Cs − C)/h</p>

          <h3>Controlled Release</h3>
          <ul>
            <li><strong>Zero-order release:</strong> Q_t = Q_0 + K_0 t</li>
            <li><strong>Higuchi model:</strong> Q_t = K_H √t</li>
          </ul>
        `,
        questions: [
          {
            q: "Which equation describes the rate of drug dissolution from a solid dosage form?",
            options: ["Henderson-Hasselbalch equation", "Noyes-Whitney equation", "Michaelis-Menten equation", "Fick's Law of Diffusion"],
            answer: 1,
            explanation: "The Noyes-Whitney equation models the dissolution rate of solid drugs in liquid media: dC/dt = DA(Cs − C)/h."
          },
          {
            q: "If a drug has an elimination rate constant (k) of 0.1 hr⁻¹, what is its elimination half-life (t½) following first-order kinetics?",
            options: ["0.693 hours", "6.93 hours", "10 hours", "69.3 hours"],
            answer: 1,
            explanation: "t½ = 0.693 / k = 0.693 / 0.1 = 6.93 hours."
          },
          {
            q: "Absolute Bioavailability (F) of an orally administered drug is calculated by comparing its AUC with that of:",
            options: ["Subcutaneous injection", "Intravenous (IV) administration", "Intramuscular (IM) administration", "Topical administration"],
            answer: 1,
            explanation: "Absolute bioavailability compares the systemic exposure (AUC) of an oral formulation to an intravenous dosage form (where bioavailability is defined as 100% or 1.0)."
          },
          {
            q: "Which mathematical model describes zero-order drug release kinetics from a controlled-release matrix tablet?",
            options: ["Q_t = Q_0 − K_0 t", "Q_t = Q_0 + K_0 t", "log Q_t = log Q_0 − K_1 t / 2.303", "Q_t = K_H √t"],
            answer: 1,
            explanation: "Zero-order release indicates that a constant amount of drug is released per unit of time regardless of remaining drug concentration: Q_t = Q_0 + K_0 t."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 4 — PHARMACOGNOSY & NATURAL PRODUCTS
  // ==========================================================
  {
    id: "pharmacognosy",
    title: "Pharmacognosy & Natural Products",
    icon: "🌿",
    chapters: [
      {
        id: "alkaloids",
        title: "Alkaloids",
        notes: `
          <h3>Definition</h3>
          <p>Basic nitrogen-containing organic compounds, usually of plant origin, with marked pharmacological activity.</p>

          <h3>Chemical Tests</h3>
          <table>
            <tr><th>Test</th><th>Detects</th><th>Result</th></tr>
            <tr><td>Dragendorff's</td><td>Alkaloids</td><td>Orange-red precipitate</td></tr>
            <tr><td>Mayer's</td><td>Alkaloids</td><td>Cream precipitate</td></tr>
            <tr><td>Wagner's</td><td>Alkaloids</td><td>Reddish-brown precipitate</td></tr>
            <tr><td>Vitali-Morin</td><td>Tropane alkaloids</td><td>Violet/purple color</td></tr>
          </table>

          <h3>Important Alkaloids</h3>
          <table>
            <tr><th>Alkaloid</th><th>Source</th><th>Class</th></tr>
            <tr><td>Atropine</td><td>Atropa belladonna</td><td>Tropane</td></tr>
            <tr><td>Quinine</td><td>Cinchona bark</td><td>Quinoline</td></tr>
            <tr><td>Reserpine</td><td>Rauvolfia serpentina</td><td>Indole</td></tr>
            <tr><td>Morphine</td><td>Papaver somniferum</td><td>Phenanthrene</td></tr>
            <tr><td>Vincristine</td><td>Catharanthus roseus</td><td>Indole</td></tr>
            <tr><td>Ephedrine</td><td>Ephedra sinica</td><td>Alkaloidal amine</td></tr>
          </table>
        `,
        questions: [
          {
            q: "The Vitali-Morin color reaction test is a specific qualitative test for the detection of:",
            options: ["Cardiac glycosides", "Tropane alkaloids", "Anthraquinone glycosides", "Flavonoids"],
            answer: 1,
            explanation: "The Vitali-Morin test produces a deep violet color in the presence of tropane alkaloids (e.g., atropine, hyoscyamine, scopolamine)."
          },
          {
            q: "Which of the following medicinal plants native to Nepal is high in reserpine and listed as an endangered alkaloid source?",
            options: ["Swertia chirayita", "Rauvolfia serpentina (Sarpagandha)", "Cordyceps sinensis (Yarsagumba)", "Rheum emodi"],
            answer: 1,
            explanation: "Rauvolfia serpentina (Sarpagandha) contains indole alkaloids like reserpine, used historically in hypertension management."
          },
          {
            q: "The main chemical constituent of Cinchona bark responsible for antimalarial activity belongs to which class of alkaloids?",
            options: ["Tropane alkaloids", "Quinoline alkaloids", "Isoquinoline alkaloids", "Indole alkaloids"],
            answer: 1,
            explanation: "Quinine and Quinidine obtained from Cinchona succirubra (Family Rubiaceae) are quinoline alkaloids."
          },
          {
            q: "Vincristine and Vinblastine are antineoplastic alkaloids isolated from Catharanthus roseus that act by:",
            options: ["Binding to tubulin and inhibiting microtubule assembly", "Inhibiting DNA Topoisomerase I", "Cross-linking guanine bases in DNA", "Inhibiting RNA polymerase II"],
            answer: 0,
            explanation: "Vinca alkaloids bind to β-tubulin, preventing microtubule polymerization, arresting dividing cells in metaphase of mitosis."
          },
          {
            q: "Reserpine, an indole alkaloid used as an antihypertensive, is extracted from the dried roots of:",
            options: ["Rauvolfia serpentina", "Catharanthus roseus", "Strychnos nux-vomica", "Claviceps purpurea"],
            answer: 0,
            explanation: "Rauvolfia serpentina (Sarpagandha, Family Apocynaceae) contains reserpine, which depletes vesicular monoamines."
          },
          {
            q: "Which natural product acts as a potent anticholinergic agent causing mydriasis and cycloplegia?",
            options: ["Pilocarpine", "Atropine", "Physostigmine", "Nicotine"],
            answer: 1,
            explanation: "Atropine (from Atropa belladonna) competitively blocks muscarinic acetylcholine receptors, relaxing the pupillary sphincter (mydriasis) and ciliary muscle (cycloplegia)."
          }
        ]
      },
      {
        id: "glycosides",
        title: "Glycosides",
        notes: `
          <h3>Types of Glycosides</h3>
          <ul>
            <li><strong>Cardiac glycosides:</strong> Digitalis, Strophanthus</li>
            <li><strong>Anthraquinone glycosides:</strong> Senna, Aloe, Rhubarb</li>
            <li><strong>Flavonoid glycosides:</strong> Rutin, Hesperidin</li>
            <li><strong>Cyanogenetic glycosides:</strong> Amygdalin (Bitter almond)</li>
            <li><strong>Isothiocyanate glycosides:</strong> Sinigrin (Mustard)</li>
          </ul>

          <h3>Chemical Tests</h3>
          <table>
            <tr><th>Test</th><th>Detects</th><th>Result</th></tr>
            <tr><td>Keller-Kiliani</td><td>Deoxy sugars in cardiac glycosides</td><td>Reddish-brown ring → blue-green</td></tr>
            <tr><td>Borntrager's</td><td>Anthraquinone glycosides</td><td>Pink-red in ammoniacal layer</td></tr>
            <tr><td>Legal's / Baljet's</td><td>Cardenolides</td><td>Colored complex</td></tr>
            <tr><td>Shinoda</td><td>Flavonoids</td><td>Red/pink color</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Keller-Kiliani test is specifically used for the identification of:",
            options: ["Anthraquinone glycosides", "Deoxy sugars in Cardiac glycosides", "Saponin glycosides", "Cyanogenetic glycosides"],
            answer: 1,
            explanation: "The Keller-Kiliani test yields a reddish-brown ring at the junction and a blue-green upper layer, specific for digitoxose (a 2-deoxy sugar) present in cardiac glycosides."
          },
          {
            q: "Borntrager's test gives a pink to red color in the ammoniacal layer in the presence of:",
            options: ["Cardiac glycosides", "Anthraquinone glycosides", "Flavonoids", "Tannins"],
            answer: 1,
            explanation: "Borntrager's test detects anthraquinone derivatives (Senna, Aloe, Rhubarb) which impart a rose-pink to cherry-red color when treated with dilute ammonia."
          },
          {
            q: "Cardiac glycosides like Digoxin give a positive result with:",
            options: ["Legal's Test & Baljet's Test", "Ninhydrin Test", "Biuret Test", "Fehling's Test"],
            answer: 0,
            explanation: "Cardenolides (5-membered unsaturated lactone ring) react with alkaline nitroprusside (Legal's test) or picric acid (Baljet's test) to form colored complex compounds."
          }
        ]
      },
      {
        id: "tannins-volatile",
        title: "Tannins, Volatile Oils & Resins",
        notes: `
          <h3>Tannins</h3>
          <p><strong>Definition:</strong> Polyphenolic compounds that precipitate proteins.</p>
          <ul>
            <li><strong>Hydrolysable tannins</strong> — give blue-black color with FeCl₃</li>
            <li><strong>Condensed tannins</strong> — give brownish-green color with FeCl₃</li>
          </ul>
          <p><strong>Goldbeater's skin test</strong> — differentiates true tannins from pseudotannins.</p>

          <h3>Volatile Oils</h3>
          <table>
            <tr><th>Oil</th><th>Source</th><th>Main Constituent</th></tr>
            <tr><td>Clove oil</td><td>Syzygium aromaticum</td><td>Eugenol (70–90%)</td></tr>
            <tr><td>Peppermint oil</td><td>Mentha piperita</td><td>Menthol</td></tr>
            <tr><td>Eucalyptus oil</td><td>Eucalyptus globulus</td><td>Cineole</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which reagent turns blue-black in the presence of hydrolysable tannins and brownish-green in the presence of condensed tannins?",
            options: ["Vanillin-Hydrochloric Acid", "Ferric Chloride (FeCl₃) Solution", "Lead Acetate Solution", "Potassium Dichromate"],
            answer: 1,
            explanation: "Hydrolysable tannins give a blue-black precipitate with FeCl₃, whereas condensed tannins give a brownish-green color."
          },
          {
            q: "Goldbeater's skin test is used to detect the presence of:",
            options: ["Alkaloids", "Flavonoids", "Tannins", "Mucilage"],
            answer: 2,
            explanation: "Goldbeater's skin test differentiates true tannins from pseudotannins."
          },
          {
            q: "Which natural volatile oil component gives Clove oil its characteristic aroma and local anesthetic effect?",
            options: ["Anethole", "Eugenol", "Menthol", "Cineole"],
            answer: 1,
            explanation: "Clove oil contains up to 70–90% eugenol, a phenolic ether with potent local anesthetic and antiseptic qualities used in dental cements."
          },
          {
            q: "The main chemical constituent responsible for the bitter taste and antipyretic property of Chiariato (Swertia chirayita) is:",
            options: ["Amarogentin", "Morphine", "Quinine", "Curcumin"],
            answer: 0,
            explanation: "Amarogentin is a secoiridoid glycoside found in Swertia chirayita, known as one of the most bitter natural substances."
          }
        ]
      },
      {
        id: "nepal-medicinal",
        title: "Medicinal Plants of Nepal",
        notes: `
          <h3>Important Nepalese Medicinal Plants</h3>
          <table>
            <tr><th>Local Name</th><th>Scientific Name</th><th>Uses</th></tr>
            <tr><td>Yarsagumba</td><td>Ophiocordyceps sinensis</td><td>Immunomodulator, aphrodisiac</td></tr>
            <tr><td>Sarpagandha</td><td>Rauvolfia serpentina</td><td>Antihypertensive (reserpine)</td></tr>
            <tr><td>Chiariato</td><td>Swertia chirayita</td><td>Antipyretic, bitter tonic</td></tr>
            <tr><td>Kutki</td><td>Picrorhiza kurroa</td><td>Hepatoprotective</td></tr>
            <tr><td>Padamchal</td><td>Rheum emodi</td><td>Purgative, anti-inflammatory</td></tr>
            <tr><td>Atis</td><td>Aconitum heterophyllum</td><td>Antipyretic, anti-diarrheal</td></tr>
            <tr><td>Jatamansi</td><td>Nardostachys jatamansi</td><td>Sedative, CNS depressant</td></tr>
            <tr><td>Sugandhawal</td><td>Valeriana wallichii</td><td>Sedative, antispasmodic</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which medicinal plant native to the high-altitude Himalayan region of Nepal is scientifically known as Ophiocordyceps sinensis?",
            options: ["Yarsagumba", "Panchaaule", "Jatamansi", "Sugandhawal"],
            answer: 0,
            explanation: "Yarsagumba (Ophiocordyceps sinensis) is an entomopathogenic fungus-caterpillar complex found in alpine pastures of Nepal above 3,500m, valued for its immunomodulatory properties."
          },
          {
            q: "The chief active chemical constituent responsible for the anti-inflammatory and yellow coloring properties of Turmeric (Curcuma longa) is:",
            options: ["Eugenol", "Curcumin", "Gingerol", "Allicin"],
            answer: 1,
            explanation: "Curcumin (a diarylheptanoid) is the primary polyphenol constituent in the rhizome of Curcuma longa."
          },
          {
            q: "What is the active antiparasitic/antimalarial sesquiterpene lactone isolated from Artemisia annua?",
            options: ["Quinine", "Artemisinin", "Emetine", "Santonin"],
            answer: 1,
            explanation: "Artemisinin contains an endoperoxide bridge critical for its rapid action against Plasmodium falciparum malarial parasites."
          },
          {
            q: "The characteristic froth/foam formation upon shaking an aqueous extract of a crude drug indicates the presence of:",
            options: ["Tannins", "Saponins", "Resins", "Volatile oils"],
            answer: 1,
            explanation: "Saponins have surfactant-like properties that lower surface tension, producing persistent honeycomb froth when shaken vigorously with water."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 5 — PHARMACEUTICAL ANALYSIS & QUALITY ASSURANCE
  // ==========================================================
  {
    id: "analysis",
    title: "Pharmaceutical Analysis & QA",
    icon: "🔬",
    chapters: [
      {
        id: "spectroscopy",
        title: "Spectroscopy (UV, IR, NMR)",
        notes: `
          <h3>Beer-Lambert Law</h3>
          <p><strong>A = ε · b · c</strong></p>
          <p>Absorbance is directly proportional to molar absorptivity (ε), path length (b), and concentration (c).</p>

          <h3>UV-Visible Terms</h3>
          <ul>
            <li><strong>Bathochromic (Red) shift:</strong> λmax moves to longer wavelength</li>
            <li><strong>Hypsochromic (Blue) shift:</strong> λmax moves to shorter wavelength</li>
            <li><strong>Hyperchromic effect:</strong> Increase in absorbance</li>
            <li><strong>Hypochromic effect:</strong> Decrease in absorbance</li>
          </ul>

          <h3>IR Spectroscopy</h3>
          <ul>
            <li><strong>Functional group region:</strong> 4000–1500 cm⁻¹</li>
            <li><strong>Fingerprint region:</strong> 1500–400 cm⁻¹</li>
            <li><strong>C=O stretch:</strong> 1700–1750 cm⁻¹</li>
            <li><strong>O-H stretch:</strong> 3200–3600 cm⁻¹ (broad)</li>
          </ul>

          <h3>NMR Spectroscopy</h3>
          <p><strong>Reference standard:</strong> Tetramethylsilane (TMS) at δ = 0 ppm.</p>
        `,
        questions: [
          {
            q: "According to the Beer-Lambert Law (A = εbc), absorbance (A) is directly proportional to:",
            options: ["Wavelength and path length", "Transmittance and concentration", "Molar absorptivity (ε), path length (b), and concentration (c)", "Refractive index and solvent polarity"],
            answer: 2,
            explanation: "Beer-Lambert Law states A = ε · b · c, meaning absorbance increases linearly with concentration and light path length through the absorbing medium."
          },
          {
            q: "In UV-Visible spectrophotometry, a shift of absorption maximum (λmax) to a longer wavelength is known as a:",
            options: ["Hypsochromic shift (Blue shift)", "Bathochromic shift (Red shift)", "Hyperchromic effect", "Hypochromic effect"],
            answer: 1,
            explanation: "Bathochromic shift (Red shift) is a shift of λmax to longer wavelengths (lower energy), whereas a Hypsochromic shift (Blue shift) is a shift to shorter wavelengths."
          },
          {
            q: "Which functional group region is located between 4000 cm⁻¹ and 1500 cm⁻¹ in an Infrared (IR) spectrum?",
            options: ["Fingerprint region", "Functional group region", "Far-IR region", "Microwave region"],
            answer: 1,
            explanation: "The IR spectrum is divided into the functional group region (4000 cm⁻¹ to 1500 cm⁻¹) and the fingerprint region (1500 cm⁻¹ to 400 cm⁻¹)."
          },
          {
            q: "In NMR spectroscopy, the standard internal reference compound used to calibrate chemical shift (δ = 0 ppm) is:",
            options: ["Chloroform (CDCl₃)", "Tetramethylsilane (TMS)", "Deuterium Oxide (D₂O)", "Dimethyl sulfoxide (DMSO)"],
            answer: 1,
            explanation: "Tetramethylsilane (TMS), Si(CH₃)₄, provides a sharp, strong single peak upfield from almost all organic proton signals, defining the 0 ppm reference point."
          },
          {
            q: "Which functional group exhibits a sharp, intense IR absorption band near 1700–1750 cm⁻¹?",
            options: ["Hydroxyl group (-OH)", "Carbonyl group (C=O)", "Alkynes (C≡C)", "Amine group (-NH₂)"],
            answer: 1,
            explanation: "The C=O stretching vibration appears as a strong peak around 1700–1750 cm⁻¹. Hydroxyl groups (-OH) show a broad band at 3200–3600 cm⁻¹."
          }
        ]
      },
      {
        id: "titration",
        title: "Titration Methods",
        notes: `
          <h3>Non-Aqueous Titration</h3>
          <p><strong>Weak bases:</strong> Titrated with Perchloric acid (HClO₄) in glacial acetic acid.</p>
          <p><strong>Weak acids:</strong> Titrated with Sodium methoxide in DMF.</p>

          <h3>Complexometric Titration</h3>
          <p><strong>Indicator:</strong> Eriochrome Black T (EBT) — wine-red to blue at endpoint</p>
          <p><strong>Titrant:</strong> Disodium EDTA</p>

          <h3>Diazotization Titration</h3>
          <p><strong>Analyte:</strong> Primary aromatic amines (Sulfonamides, Benzocaine)</p>
          <p><strong>Titrant:</strong> Sodium Nitrite (NaNO₂) in HCl</p>
          <p><strong>Temperature:</strong> 0–5°C</p>

          <h3>Karl Fischer Titration</h3>
          <p>Determines water content. Reagent: I₂, SO₂, pyridine (or imidazole), methanol.</p>
        `,
        questions: [
          {
            q: "Non-aqueous titration of weak bases commonly uses which of the following titrants and solvents?",
            options: ["Sodium hydroxide in water", "Perchloric acid in glacial acetic acid", "Silver nitrate in nitric acid", "EDTA in ammonium buffer"],
            answer: 1,
            explanation: "Weak bases cannot be accurately titrated in aqueous media due to leveling effects. Perchloric acid (HClO₄) in glacial acetic acid serves as a strong non-aqueous titrant."
          },
          {
            q: "What indicator is typically used in the complexometric titration of Calcium and Magnesium with Disodium EDTA?",
            options: ["Phenolphthalein", "Eriochrome Black T (EBT)", "Methyl Orange", "Starch"],
            answer: 1,
            explanation: "Eriochrome Black T (EBT) forms a wine-red complex with metal ions at pH 10, turning distinct blue when free EDTA chelates all metal ions at the endpoint."
          },
          {
            q: "Diazotization titration with Sodium Nitrite (NaNO₂) in the presence of Hydrochloric Acid is standard for the assay of:",
            options: ["Primary aromatic amines (Sulfonamides, Benzocaine)", "Quaternary ammonium compounds", "Carboxylic acids", "Alcohols and phenols"],
            answer: 0,
            explanation: "Primary aromatic amine drugs react with nitrous acid at low temperatures (0–5°C) to form stable diazonium salts."
          },
          {
            q: "In Karl Fischer titration for water determination, the reaction relies on the oxidation of Sulfur Dioxide by Iodine in the presence of:",
            options: ["Glacial acetic acid and sodium acetate", "Anhydrous pyridine (or imidazole) and methanol", "Hydrochloric acid and ethanol", "Acetone and sodium hydroxide"],
            answer: 1,
            explanation: "Karl Fischer reagent consists of I₂, SO₂, pyridine (or imidazole), and methanol. Water reacts quantitatively in a 1:1 molar ratio with I₂ and SO₂."
          }
        ]
      },
      {
        id: "chromatography",
        title: "Chromatography (HPLC, TLC, GC)",
        notes: `
          <h3>HPLC</h3>
          <p><strong>Reversed-Phase (RP-HPLC):</strong> Non-polar stationary phase (C₁₈) + Polar mobile phase (water/methanol/acetonitrile).</p>
          <p><strong>Retention Factor:</strong> k' = (t_R − t_0) / t_0</p>
          <p><strong>Internal Standard:</strong> Corrects for sample prep/injection variations.</p>

          <h3>TLC</h3>
          <p><strong>R_f = Distance moved by solute / Distance moved by solvent front</strong> (0.0–1.0)</p>
          <p><strong>HPTLC:</strong> Smaller particle size (5–7 μm), higher resolution.</p>

          <h3>Gas Chromatography (GC)</h3>
          <ul>
            <li><strong>FID:</strong> General organic compounds</li>
            <li><strong>ECD:</strong> Halogenated compounds (sensitive to electronegative groups)</li>
            <li><strong>TCD:</strong> Universal detector</li>
          </ul>

          <h3>Size-Exclusion Chromatography</h3>
          <p>Separates by molecular size. Larger molecules elute first (cannot enter pores).</p>
        `,
        questions: [
          {
            q: "In high-performance liquid chromatography (HPLC) operating in 'Reversed-Phase' mode, the stationary phase and mobile phase properties are:",
            options: ["Polar stationary phase, Non-polar mobile phase", "Non-polar stationary phase (C₁₈), Polar mobile phase (Water/Acetonitrile)", "Polar stationary phase, Polar mobile phase", "Non-polar stationary phase, Non-polar mobile phase"],
            answer: 1,
            explanation: "In Reversed-Phase HPLC, the stationary phase is non-polar (C₁₈ alkyl chains), while the mobile phase is polar (mixtures of water, methanol, or acetonitrile)."
          },
          {
            q: "In thin-layer chromatography (TLC), the retardation factor (R_f) value is calculated as:",
            options: ["Distance traveled by solvent front / Distance traveled by solute", "Distance traveled by solute center / Distance traveled by solvent front", "Distance traveled by solute / Total thickness of TLC plate", "Spot diameter / Solvent front distance"],
            answer: 1,
            explanation: "R_f = Distance moved by solute / Distance moved by solvent front, resulting in a dimensionless value between 0.0 and 1.0."
          },
          {
            q: "What is the role of an Internal Standard in quantitative chromatographic analysis?",
            options: ["To increase detector sensitivity tenfold", "To compensate for sample loss during preparation and variations in injection volume", "To shift analyte retention time", "To shorten runtime"],
            answer: 1,
            explanation: "An internal standard corrects for variations in sample preparation, extraction efficiency, and instrument injection precision."
          },
          {
            q: "In HPLC, the Capacity Factor (k') or Retention Factor is defined as:",
            options: ["k' = (t_R − t_0) / t_0", "k' = t_0 / (t_R − t_0)", "k' = t_R / t_0", "k' = t_R × t_0"],
            answer: 0,
            explanation: "Retention factor k' = (t_R − t_0) / t_0, where t_R is retention time and t_0 is void time. Ideal values range between 2 and 10."
          },
          {
            q: "Which detector used in Gas Chromatography (GC) is selective and highly sensitive for halogenated organic compounds?",
            options: ["Flame Ionization Detector (FID)", "Electron Capture Detector (ECD)", "Thermal Conductivity Detector (TCD)", "Refractive Index Detector (RID)"],
            answer: 1,
            explanation: "ECD utilizes a radioactive Nickel-63 (⁶³Ni) beta emitter source and is sensitive to electronegative functional groups (halogens, nitro groups)."
          },
          {
            q: "Which type of chromatography separates molecules primarily based on their molecular size/weight?",
            options: ["Affinity Chromatography", "Ion-Exchange Chromatography", "Size-Exclusion / Gel-Permeation Chromatography", "Hydrophobic Interaction Chromatography"],
            answer: 2,
            explanation: "Size-Exclusion Chromatography separates molecules by hydrodynamic volume; larger molecules elute first, while smaller molecules penetrate internal pore spaces and elute later."
          }
        ]
      },
      {
        id: "validation",
        title: "Method Validation & Quality Control",
        notes: `
          <h3>ICH Validation Parameters</h3>
          <table>
            <tr><th>Parameter</th><th>Definition</th></tr>
            <tr><td>Accuracy</td><td>Closeness to true value</td></tr>
            <tr><td>Precision</td><td>Closeness among repeated measurements</td></tr>
            <tr><td>Specificity</td><td>Ability to measure analyte without interference</td></tr>
            <tr><td>Linearity</td><td>Proportionality across range</td></tr>
            <tr><td>Robustness</td><td>Unaffected by small deliberate variations</td></tr>
          </table>

          <h3>LOD & LOQ</h3>
          <ul>
            <li><strong>LOD</strong> = 3.3σ / S</li>
            <li><strong>LOQ</strong> = 10σ / S</li>
          </ul>

          <h3>Stability Zones (ICH)</h3>
          <table>
            <tr><th>Zone</th><th>Long-term Conditions</th></tr>
            <tr><td>I</td><td>21°C ± 2°C / 45% RH</td></tr>
            <tr><td>II</td><td>25°C ± 2°C / 60% RH</td></tr>
            <tr><td>III</td><td>30°C ± 2°C / 65% RH</td></tr>
            <tr><td>IVa</td><td>30°C ± 2°C / 65% RH</td></tr>
            <tr><td>IVb</td><td>30°C ± 2°C / 75% RH (Nepal)</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which parameter in analytical method validation measures the closeness of agreement between a series of measurements?",
            options: ["Accuracy", "Precision", "Specificity", "Linearity"],
            answer: 1,
            explanation: "Precision expresses the degree of scatter among a series of measurements. Accuracy measures closeness to the true value."
          },
          {
            q: "The Limit of Detection (LOD) based on standard deviation (σ) and slope (S) is calculated as:",
            options: ["LOD = 3.3σ / S", "LOD = 10σ / S", "LOD = S / 3.3σ", "LOD = 1σ / S"],
            answer: 0,
            explanation: "Per ICH Q2(R1) guidelines, LOD = 3.3σ / S and Limit of Quantitation (LOQ) = 10σ / S."
          },
          {
            q: "The term 'Robustness' in analytical validation assesses:",
            options: ["Reproducibility between different laboratories", "The ability of a method to remain unaffected by small, deliberate variations in method parameters", "The lowest concentration of analyte that can be quantified", "Linearity across a 100-fold range"],
            answer: 1,
            explanation: "Robustness tests the method's reliability during normal use by measuring its capacity to stay unaffected by small intentional changes in parameters."
          },
          {
            q: "According to ICH Guidelines, long-term stability testing conditions for Zone IVb (applicable to Nepal/South Asia) are:",
            options: ["25°C ± 2°C / 60% RH", "30°C ± 2°C / 65% RH", "30°C ± 2°C / 75% RH", "40°C ± 2°C / 75% RH"],
            answer: 2,
            explanation: "Zone IVb (Hot & Very Humid) specifies long-term stability conditions of 30°C ± 2°C / 75% RH ± 5% RH."
          },
          {
            q: "What does the term 'Out of Specification' (OOS) mean in quality control laboratories?",
            options: ["Results falling outside established release criteria or pharmacopoeial limits", "Minor instrument drift during routine calibration", "Expected deviation during method development", "Samples undergoing routine testing"],
            answer: 0,
            explanation: "OOS test results are laboratory test values that fail to meet established specification criteria outlined in approved dossiers, drug regulatory filings, or pharmacopoeias."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 6 — CLINICAL PHARMACY & HOSPITAL PHARMACY
  // ==========================================================
  {
    id: "clinical",
    title: "Clinical Pharmacy & Hospital Pharmacy",
    icon: "🏥",
    chapters: [
      {
        id: "hospital-pharmacy",
        title: "Hospital Pharmacy Organization",
        notes: `
          <h3>Hospital Types</h3>
          <ul>
            <li><strong>Primary hospital:</strong> Basic care</li>
            <li><strong>Secondary hospital:</strong> Specialized services</li>
            <li><strong>Tertiary/Teaching hospital:</strong> Advanced care + education + research</li>
            <li><strong>Specialized hospital:</strong> Single specialty (e.g., eye, heart)</li>
            <li><strong>Cottage hospital:</strong> Rural small hospital</li>
          </ul>

          <h3>Pharmacy and Therapeutics Committee (PTC)</h3>
          <p><strong>Members:</strong> Physicians, pharmacists, nurses, administrators</p>
          <p><strong>Functions:</strong></p>
          <ul>
            <li>Develop hospital formulary</li>
            <li>ADR monitoring</li>
            <li>Antimicrobial stewardship</li>
            <li>Medication safety</li>
            <li>Drug use evaluation</li>
          </ul>

          <h3>Drug Distribution Systems</h3>
          <table>
            <tr><th>System</th><th>Description</th></tr>
            <tr><td>Floor Stock</td><td>Bulk supply to nursing stations</td></tr>
            <tr><td>Unit Dose (UDDDS)</td><td>Patient-specific, 24-hour supply</td></tr>
            <tr><td>Individual Prescription</td><td>Traditional per-order system</td></tr>
          </table>
        `,
        questions: [
          {
            q: "Which type of hospital is mainly involved in medical education and research?",
            options: ["Teaching hospital", "Cottage hospital", "Mobile hospital", "Military hospital"],
            answer: 0,
            explanation: "Teaching hospitals are affiliated with medical colleges and are involved in medical education, research, and advanced patient care."
          },
          {
            q: "Which committee within a hospital setting is responsible for developing the hospital formulary, managing ADR monitoring, and overseeing antimicrobial stewardship?",
            options: ["Hospital Management Committee", "Pharmacy and Therapeutics Committee (PTC)", "Institutional Review Committee (IRC)", "Audit & Finance Committee"],
            answer: 1,
            explanation: "The PTC—comprising clinicians, pharmacists, nurses, and administrators—oversees all aspects of medicine management, formulary selection, and medication safety."
          },
          {
            q: "Which drug distribution system involves dispensing individual doses of medication packaged for a specific patient for a 24-hour period?",
            options: ["Floor Stock System", "Unit Dose Drug Distribution System (UDDDS)", "Individual Prescription Order System", "Bulk Supply System"],
            answer: 1,
            explanation: "In a Unit Dose Drug Distribution System (UDDDS), medications are contained in single-unit packages and dispensed in ready-to-administer forms for a 24-hour supply, minimizing medication errors and drug waste."
          },
          {
            q: "What is the primary role of a 'Hospital Pharmacy Director'?",
            options: ["To manage surgical procedures", "To plan, organize, direct, and control all administrative and technical pharmacy operations", "To conduct clinical trials without IRB approval", "To directly manufacture APIs"],
            answer: 1,
            explanation: "The Chief Pharmacist / Department Head is responsible for administrative leadership, drug procurement, quality assurance, regulatory compliance, budgeting, and staff supervision."
          }
        ]
      },
      {
        id: "clinical-pharmacy",
        title: "Clinical Pharmacy Practice",
        notes: `
          <h3>Therapeutic Drug Monitoring (TDM)</h3>
          <p><strong>Purpose:</strong> Maintain drug concentration within therapeutic range.</p>
          <p><strong>Drugs requiring TDM:</strong> Digoxin, Phenytoin, Lithium, Theophylline, Gentamicin, Vancomycin, Cyclosporine</p>
          <table>
            <tr><th>Drug</th><th>Therapeutic Range</th></tr>
            <tr><td>Digoxin</td><td>0.5–2.0 ng/mL</td></tr>
            <tr><td>Phenytoin</td><td>10–20 μg/mL</td></tr>
            <tr><td>Lithium</td><td>0.6–1.2 mEq/L</td></tr>
            <tr><td>Theophylline</td><td>10–20 μg/mL</td></tr>
          </table>

          <h3>Clinical Pharmacist Role</h3>
          <ul>
            <li>Ward round participation</li>
            <li>Medication reconciliation</li>
            <li>ADR monitoring and reporting</li>
            <li>Drug information services</li>
            <li>Dose adjustment in renal/hepatic impairment</li>
            <li>Patient counseling</li>
          </ul>

          <h3>High-Alert Medications</h3>
          <p>Require double-check and special labeling: Insulin, Heparin, Concentrated KCl, Chemotherapy, Neuromuscular blockers.</p>

          <h3>LASA (Look-Alike Sound-Alike) Drugs</h3>
          <p>Use Tall Man lettering: doBUTamine vs doPAMine, etc.</p>
        `,
        questions: [
          {
            q: "Therapeutic Drug Monitoring (TDM) is especially important for drugs having:",
            options: ["Wide therapeutic index", "Pleasant taste", "Narrow therapeutic index", "High solubility"],
            answer: 2,
            explanation: "TDM is indicated for drugs with a narrow therapeutic index, where small variations in blood concentration can cause therapeutic failure or severe toxicity."
          },
          {
            q: "Which drug commonly requires Therapeutic Drug Monitoring?",
            options: ["Paracetamol", "Digoxin", "Antacid", "Vitamin C"],
            answer: 1,
            explanation: "Digoxin has a narrow therapeutic index (0.5–2.0 ng/mL) and requires TDM to avoid toxicity."
          },
          {
            q: "The antimanic drug Lithium requires TDM because its narrow therapeutic window falls between:",
            options: ["0.1–0.3 mEq/L", "0.6–1.2 mEq/L", "2.0–3.5 mEq/L", "5.0–10.0 mEq/L"],
            answer: 1,
            explanation: "Serum lithium levels must be maintained between 0.6–1.2 mEq/L. Concentrations above 1.5 mEq/L produce tremor, ataxia, confusion, and renal impairment."
          },
          {
            q: "High-Alert Medications (such as concentrated KCl IV, Insulin, Heparin) require which safety intervention?",
            options: ["Storage on open shelves for quick access", "Independent double-check, distinct warning labels, and restricted access", "Mixing with routine oral tablet stock", "Storage at room temperature above 30°C"],
            answer: 1,
            explanation: "High-alert medications bear a heightened risk of causing severe patient harm. Safeguards include independent double-checks, distinct visual labeling, dedicated storage, and standardized dosing protocols."
          },
          {
            q: "What is the role of a Clinical Pharmacist during ward rounds?",
            options: ["To manage hospital finances", "To evaluate drug therapy, monitor for drug interactions/ADRs, adjust doses, and provide drug information to clinicians", "To perform surgical dressings", "To clean medical equipment"],
            answer: 1,
            explanation: "Clinical Pharmacists participate in multidisciplinary patient care by optimizing drug regimens, preventing medication errors, monitoring serum drug levels, and delivering evidence-based drug information."
          },
          {
            q: "What is Medication Reconciliation in clinical pharmacy practice?",
            options: ["Calculating the financial profit margin", "The formal process of obtaining a complete, accurate list of a patient's current medications and comparing it against admission, transfer, or discharge orders to prevent errors", "Replacing prescribed drugs with cheaper generic alternatives", "Destroying expired hospital drugs"],
            answer: 1,
            explanation: "Medication Reconciliation is a crucial patient safety process designed to identify and resolve discrepancies (omissions, duplications, dosing errors, drug interactions) during transitions of care."
          },
          {
            q: "The main objective of the 'Look-Alike Sound-Alike' (LASA) safety management policy is:",
            options: ["To lower drug purchasing costs", "To prevent mix-ups and medication errors between drugs with similar packaging or names using Tall Man lettering and physical separation", "To promote local pharmaceutical brands", "To shorten patient waiting times"],
            answer: 1,
            explanation: "LASA policies mandate visual safeguards like Tall Man lettering (e.g., doBUTamine vs doPAMine), warning stickers, and separate storage locations to prevent accidental substitution errors."
          }
        ]
      },
      {
        id: "inventory",
        title: "Inventory Management & Drug Procurement",
        notes: `
          <h3>ABC Analysis</h3>
          <p>Based on annual monetary consumption value:</p>
          <ul>
            <li><strong>A items:</strong> High cost (~70% value, 10–15% items)</li>
            <li><strong>B items:</strong> Moderate cost (~20% value, 20–25% items)</li>
            <li><strong>C items:</strong> Low cost (~10% value, 60–65% items)</li>
          </ul>

          <h3>VED Analysis</h3>
          <p>Based on clinical criticality:</p>
          <ul>
            <li><strong>V (Vital):</strong> Life-saving</li>
            <li><strong>E (Essential):</strong> Necessary</li>
            <li><strong>D (Desirable):</strong> Non-critical</li>
          </ul>

          <h3>FSN Analysis</h3>
          <p>Based on movement: Fast, Slow, Non-moving.</p>

          <h3>FIFO vs FEFO</h3>
          <ul>
            <li><strong>FIFO:</strong> First In First Out</li>
            <li><strong>FEFO:</strong> First Expiry First Out (preferred for drugs)</li>
          </ul>
        `,
        questions: [
          {
            q: "Which inventory control technique categorizes items based on their critical clinical importance as Vital, Essential, and Desirable?",
            options: ["ABC Analysis", "VED Analysis", "FSN Analysis", "HML Analysis"],
            answer: 1,
            explanation: "VED Analysis classifies inventory based on criticality: Vital (life-saving), Essential (necessary), and Desirable (non-critical)."
          },
          {
            q: "In hospital inventory management, the 'ABC Analysis' categorizes items based on their:",
            options: ["Clinical criticality to patient survival", "Annual monetary consumption value (Cost)", "Frequency of expiration", "Storage temperature requirement"],
            answer: 1,
            explanation: "ABC Analysis segregates inventory based on monetary value: Category A (high cost, ~70% value), Category B (moderate, ~20%), Category C (low, ~10%)."
          },
          {
            q: "The inventory management method 'FEFO' means:",
            options: ["Fast in fast out", "First in first out", "First expiry first out", "Final in final out"],
            answer: 2,
            explanation: "FEFO (First Expiry First Out) is the preferred method for drugs, ensuring short-dated stock is used first."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // SECTION 7 — COMMUNITY PHARMACY, SOCIAL PHARMACY & PUBLIC HEALTH
  // ==========================================================
  {
    id: "community",
    title: "Community Pharmacy & Public Health",
    icon: "🏘️",
    chapters: [
      {
        id: "community-practice",
        title: "Community Pharmacy Practice",
        notes: `
          <h3>Role of Community Pharmacist</h3>
          <ul>
            <li>Dispensing medications safely and accurately</li>
            <li>Patient counseling on proper use, storage, and side effects</li>
            <li>Health promotion and disease prevention</li>
            <li>Vaccination services</li>
            <li>Screening services (BP, glucose)</li>
            <li>Referring patients to physicians when needed</li>
            <li>Maintaining patient records confidentially</li>
          </ul>

          <h3>Prescription Components</h3>
          <ul>
            <li><strong>Superscription:</strong> Rx symbol</li>
            <li><strong>Inscription:</strong> Drug name, strength, quantity</li>
            <li><strong>Subscription:</strong> Dispensing directions</li>
            <li><strong>Signa:</strong> Patient directions (Sig)</li>
            <li><strong>Date, prescriber's signature</strong></li>
          </ul>

          <h3>Latin Abbreviations</h3>
          <table>
            <tr><th>Abbreviation</th><th>Meaning</th></tr>
            <tr><td>a.c.</td><td>Before meals</td></tr>
            <tr><td>p.c.</td><td>After meals</td></tr>
            <tr><td>b.i.d.</td><td>Twice daily</td></tr>
            <tr><td>t.i.d.</td><td>Three times daily</td></tr>
            <tr><td>q.i.d.</td><td>Four times daily</td></tr>
            <tr><td>h.s.</td><td>At bedtime</td></tr>
            <tr><td>p.r.n.</td><td>As needed</td></tr>
            <tr><td>o.d.</td><td>Once daily</td></tr>
          </table>

          <h3>Patient Counseling Steps</h3>
          <ol>
            <li>Greet the patient</li>
            <li>Explain the purpose of medication</li>
            <li>Describe dosage and administration</li>
            <li>Discuss side effects and warnings</li>
            <li>Explain storage conditions</li>
            <li>Confirm understanding (teach-back)</li>
          </ol>

          <h3>Incompatibilities</h3>
          <ul>
            <li><strong>Physical:</strong> Change in physical state (precipitation)</li>
            <li><strong>Chemical:</strong> Chemical reaction between drugs</li>
            <li><strong>Therapeutic:</strong> Antagonism between drugs</li>
          </ul>
        `,
        questions: [
          {
            q: "What is the primary role of a community pharmacist?",
            options: ["Manufacturing medications", "Managing hospital operations", "Providing medication and health advice to the public", "Conducting clinical trials"],
            answer: 2,
            explanation: "Community pharmacists are the first point of contact for the public, providing medication dispensing, counseling, health promotion, and screening services."
          },
          {
            q: "Which of the following is a key component of patient counseling?",
            options: ["Discussing side effects only", "Engaging in one-way communication", "Ensuring the patient understands how to use the medication", "Asking for payment before the session"],
            answer: 2,
            explanation: "Effective patient counseling ensures the patient understands the purpose, dosage, administration, side effects, and storage of the medication."
          },
          {
            q: "What does 'extemporaneous dispensing' refer to?",
            options: ["Preparing a medication for immediate use according to a specific prescription", "Selling over-the-counter drugs", "Preparing large batches of drugs", "Storing medication for long-term use"],
            answer: 0,
            explanation: "Extemporaneous dispensing is the preparation of a medication for a specific patient when a suitable commercial product is not available."
          },
          {
            q: "What should be included on the label of a dispensed product?",
            options: ["Prescriber's phone number", "Patient's age only", "Drug name, dosage, and instructions for use", "Pharmacy's profit margin"],
            answer: 2,
            explanation: "Dispensing labels must include drug name, strength, dosage, frequency, route, patient name, date, and cautionary warnings."
          },
          {
            q: "Which communication skill is crucial for effective patient counseling?",
            options: ["Monologue", "Active listening", "Using technical jargon", "Ignoring patient feedback"],
            answer: 1,
            explanation: "Active listening ensures the pharmacist understands the patient's concerns, questions, and needs, leading to more effective counseling."
          },
          {
            q: "The Latin abbreviation 'q.i.d.' on a medical prescription stands for:",
            options: ["Every 4 hours", "Four times a day (Quater In Die)", "Three times a day (Ter In Die)", "As needed (Pro Re Nata)"],
            answer: 1,
            explanation: "Standard Latin prescription terms: q.i.d. = Quater In Die (4 times daily); t.i.d. = Ter In Die (3 times daily); b.i.d. = Bis In Die (2 times daily); p.r.n. = Pro Re Nata (as needed)."
          },
          {
            q: "In medical prescription notation, the abbreviation 'p.c.' stands for:",
            options: ["Before meals (Ante Cibo)", "After meals (Post Cibo)", "At bedtime (Hora Somni)", "Every hour"],
            answer: 1,
            explanation: "p.c. = Post Cibo (after meals); a.c. = Ante Cibo (before meals); h.s. = Hora Somni (at bedtime); o.d. = Omne Die (once daily)."
          },
          {
            q: "Which type of incompatibility occurs when a drug alters the physical state of another?",
            options: ["Therapeutic", "Chemical", "Physical", "Posological"],
            answer: 2,
            explanation: "Physical incompatibility involves changes in physical state such as precipitation, immiscibility, or color change without chemical reaction."
          },
          {
            q: "Which of the following is a therapeutic incompatibility?",
            options: ["Precipitation of a drug in solution", "Chemical degradation of a drug", "Antagonism between two drugs", "Change in color of a mixture"],
            answer: 2,
            explanation: "Therapeutic incompatibility involves pharmacological antagonism between two drugs, reducing the effectiveness of one or both."
          },
          {
            q: "When dispensing Sublingual Nitroglycerin tablets to an angina patient, which special counseling instruction is essential?",
            options: ["Swallow the tablet with a full glass of water", "Store tablets in their original dark glass bottle, keep tightly closed, and place under the tongue during acute chest pain", "Chew thoroughly before swallowing", "Dissolve in warm milk before bedtime"],
            answer: 1,
            explanation: "Nitroglycerin volatile molecules adsorb onto plastics and degrade in light/moisture. Patients must keep them in the original tightly closed glass container and place them under the tongue during angina attacks."
          },
          {
            q: "A 'Medication Error' occurring at any stage of drug prescribing, transcribing, dispensing, or administration is classified as:",
            options: ["Always an intentional criminal act", "A preventable event that may cause or lead to inappropriate medication use or patient harm", "An unpredictable type B drug side effect", "A failure in drug manufacturing chemical purity"],
            answer: 1,
            explanation: "According to NCC MERP, a medication error is any preventable event that may lead to inappropriate medication use or patient harm while the medication is in the control of the healthcare professional or patient."
          },
          {
            q: "Good Dispensing Practice (GDP) requires performing '5 Rights' before handing medication to a patient. These 5 Rights are:",
            options: ["Right Patient, Right Drug, Right Dose, Right Route, and Right Time", "Right Brand, Right Price, Right Margin, Right Location, Right Shelf", "Right Doctor, Right Hospital, Right Manufacturer, Right Batch, Right Expiry", "Right Color, Right Shape, Right Size, Right Weight, Right Taste"],
            answer: 0,
            explanation: "The fundamental safety check in dispensing and nursing administration is verifying the Right Patient, Right Drug, Right Dose, Right Route, and Right Time."
          }
        ]
      },
      {
        id: "public-health",
        title: "Public Health & Epidemiology",
        notes: `
          <h3>Primary Health Care (PHC)</h3>
          <p><strong>Definition (Alma-Ata 1978):</strong> Essential health care based on practical, scientifically sound, and socially acceptable methods, universally accessible to individuals and families in the community.</p>

          <h3>Levels of Prevention</h3>
          <ul>
            <li><strong>Primordial:</strong> Prevent risk factors from emerging (health policy)</li>
            <li><strong>Primary:</strong> Prevent disease before it occurs (immunization, health education)</li>
            <li><strong>Secondary:</strong> Early detection and treatment (screening)</li>
            <li><strong>Tertiary:</strong> Rehabilitation and disability limitation</li>
          </ul>

          <h3>Communicable vs Non-Communicable Diseases</h3>
          <table>
            <tr><th>Communicable</th><th>Non-Communicable</th></tr>
            <tr><td>TB, Malaria, HIV, Cholera</td><td>Diabetes, Hypertension, Cancer</td></tr>
            <tr><td>Spread by pathogens</td><td>Lifestyle-related</td></tr>
            <tr><td>Require isolation/surveillance</td><td>Require long-term management</td></tr>
          </table>

          <h3>National Health Programs in Nepal</h3>
          <ul>
            <li>National Tuberculosis Program (NTP)</li>
            <li>National HIV/AIDS Program</li>
            <li>National Immunization Program (EPI)</li>
            <li>National Malaria Program</li>
            <li>Nutrition Program</li>
          </ul>

          <h3>Social Determinants of Health</h3>
          <p>Education, income, housing, environment, employment, social support networks, access to healthcare.</p>
        `,
        questions: [
          {
            q: "The main purpose of primary health care is:",
            options: ["Hospitalization only", "Promoting health and preventing disease at the community level", "Building more pharmacies", "Supporting pharmaceutical companies"],
            answer: 1,
            explanation: "Primary Health Care (PHC) focuses on promotive, preventive, curative, and rehabilitative services at the community level, as defined by the Alma-Ata Declaration."
          },
          {
            q: "Which of the following is a non-communicable disease?",
            options: ["Tuberculosis", "Diabetes mellitus", "Cholera", "Malaria"],
            answer: 1,
            explanation: "Diabetes mellitus is a non-communicable, lifestyle-related disease. TB, Cholera, and Malaria are communicable diseases."
          },
          {
            q: "Which of the following is a social determinant of health?",
            options: ["Genetic makeup", "Education and income level", "Blood group", "Eye color"],
            answer: 1,
            explanation: "Social determinants of health include education, income, housing, employment, environment, and social support networks."
          },
          {
            q: "Which organization is responsible for disease surveillance and public health programs in Nepal?",
            options: ["Nepal Pharmacy Council", "Department of Health Services (DoHS)", "Nepal Medical Council", "DDA"],
            answer: 1,
            explanation: "The Department of Health Services (DoHS) under MoHP is responsible for public health programs, disease surveillance, and health service delivery in Nepal."
          },
          {
            q: "What is the meaning of the '[C]' symbol in the Essential Drug List 2021 of Nepal?",
            options: ["Restriction of use in children", "Controlled substance", "Cytotoxic drug", "Combination product"],
            answer: 0,
            explanation: "In the Nepal Essential Drug List, [C] indicates restriction of use in children (paediatric caution)."
          }
        ]
      },
      {
        id: "pharmacoepidemiology",
        title: "Pharmacoepidemiology & Rational Drug Use",
        notes: `
          <h3>Pharmacoepidemiology</h3>
          <p>The study of the use and effects of drugs in large populations.</p>

          <h3>Rational Drug Use (RDU)</h3>
          <p><strong>WHO Definition:</strong> Patients receive medications appropriate to their clinical needs, in doses that meet their own individual requirements, for an adequate period of time, and at the lowest cost to them and their community.</p>

          <h3>Irrational Drug Use</h3>
          <ul>
            <li>Overuse of antibiotics</li>
            <li>Polypharmacy</li>
            <li>Self-medication</li>
            <li>Prescribing by brand name only</li>
            <li>Non-adherence to STGs (Standard Treatment Guidelines)</li>
          </ul>

          <h3>Standard Treatment Guidelines (STGs)</h3>
          <p>Systematically developed statements to assist practitioner and patient decisions about appropriate health care for specific clinical circumstances.</p>

          <h3>Drug Utilization Studies</h3>
          <p><strong>Defined Daily Dose (DDD):</strong> WHO standard for drug consumption measurement — assumed average maintenance dose per day for a drug used for its main indication in adults.</p>
        `,
        questions: [
          {
            q: "What is the standard measure used by WHO for drug utilization studies defined as the assumed average maintenance dose per day for a drug used for its main indication in adults?",
            options: ["Prescribed Daily Dose (PDD)", "Defined Daily Dose (DDD)", "Recommended Daily Intake (RDI)", "Minimum Effective Concentration (MEC)"],
            answer: 1,
            explanation: "The Defined Daily Dose (DDD) is the international standard unit of measurement for drug consumption defined by the WHO Collaborating Centre for Drug Statistics Methodology."
          },
          {
            q: "Rational Drug Use (RDU) requires that patients receive medications:",
            options: ["Only from government hospitals", "Appropriate to their clinical needs, in adequate doses, for adequate duration, at lowest cost", "Only branded medicines", "Without prescriptions"],
            answer: 1,
            explanation: "WHO defines RDU as patients receiving medications appropriate to their clinical needs, in doses that meet their individual requirements, for an adequate period, and at the lowest cost."
          },
          {
            q: "Which of the following is an example of irrational drug use?",
            options: ["Prescribing antibiotics for viral infections", "Following Standard Treatment Guidelines", "Prescribing generic medicines", "Adjusting dose in renal impairment"],
            answer: 0,
            explanation: "Prescribing antibiotics for viral infections is irrational because antibiotics are ineffective against viruses and contribute to antimicrobial resistance."
          }
        ]
      }
    ]
  }

];