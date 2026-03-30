import { Post } from '../../shared/interfaces/post.interface';

export const INFOS: Post[] = [
  {
    id: 'info-contact',
    title: 'Contact & Informații',
    date: '',
    tags: [],
    type: 'informatie',
    content: `<h3>Program</h3>
<p>Luni - Vineri: 09:00 - 18:00</p>
<p>Sâmbătă - Duminică: Închis</p>
<h3>Locație</h3>
<p>Adresa: str. Principală, Nr. 123</p>
<h3>Contact</h3>
<p>Tel: +40 123 456 789</p>
<p>Email: info@gite.ro</p>`
  },
  {
    id: 'info-reguli',
    title: 'Reguli și Recomandări',
    date: '2026-01-01',
    type: 'informatie',
    tags: ['nou'],
    content: `<h3>Reguli importante</h3>
<ul>
<li style="margin-left: 40px !important;">Respectați liniștea după orele 22:00</li>
<li style="margin-left: 40px;">Păstrați curatenia în spațiile comune</li>
<li style="margin-left: 40px;">Parcați mașinile în locurile desemnate</li>
</ul>
<h3>Recomandări</h3>
<p>Recomandăm să citiți cu atenție ghidul de utilizare a instalațiilor.</p>`
  },  {
    id: 'info-orar',
    title: 'Orar',
    date: '2026-01-01',
    type: 'informatie',
    tags: ['util'],
    content: `<table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 12px;">
<thead>
<tr style="background-color: #5dcaa5; color: #111110; font-weight: bold;">
<th style="border: 1px solid #333; padding: 8px; width: 80px;">Zi</th>
<th style="border: 1px solid #333; padding: 8px; width: 80px;">Ora</th>
<th style="border: 1px solid #333; padding: 8px;">INFO211</th>
<th style="border: 1px solid #333; padding: 8px;">INFO212</th>
<th style="border: 1px solid #333; padding: 8px;">INFO221</th>
<th style="border: 1px solid #333; padding: 8px;">INFO222</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #1a1918;">
<td style="border: 1px solid #333; padding: 8px; font-weight: bold; writing-mode: vertical-rl; text-orientation: mixed;">Luni</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">08:00<br>10:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Metode avansate de programare (Lab)<br>lect.univ.dr. DINCA IONUT<br>S120</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;"></td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">10:00<br>12:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;" colspan="4">Programare WEB (Curs)<br>conf.univ.dr. POPESCU DORU-ANASTASIU<br>S109</td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">12:00<br>14:00</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Metode avansate (Lab)<br>DINCA IONUT<br>S119</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;" colspan="2">Programare WEB (Lab)<br>POPESCU DORU<br>S122</td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">14:00<br>16:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;" colspan="3">Metode avansate proto (Curs)<br>DINCA IONUT<br>S109</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;"></td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">16:00<br>18:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Educatie fizica (Sem)<br>ENACHE ION<br>Sala fitness</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Metode avansate (Lab)<br>DINCA IONUT<br>S119</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Educatie fizica<br>ENACHE ION<br>Sala fitness</td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">18:00<br>20:00</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;" colspan="4"></td>
</tr>
<tr style="background-color: #1a1918;">
<td style="border: 1px solid #333; padding: 8px; font-weight: bold;">Marți</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">08:00<br>10:00</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Programare WEB (Lab)<br>POPESCU DORU<br>S122</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;" colspan="2"></td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">10:00<br>12:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;" colspan="2">Retele neuronale (Curs)<br>CONSTANTIN DORU<br>S109</td>
<td style="border: 1px solid #333; padding: 4px; background-color: #0a0a0a;" colspan="2"></td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 4px;"></td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">12:00<br>14:00</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Retele neuronale (Lab)<br>CONSTANTIN DORU<br>S119</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;">Limba engleza (Sem)<br>CUMPENASU<br>S001</td>
<td style="border: 1px solid #333; padding: 4px; font-size: 11px;" colspan="2">Limba engleza (Sem)<br>CUMPENASU<br>S001</td>
</tr>
</tbody>
</table>`
  },
  {
    id: 'info-facilități',
    title: 'Facilități și Dotări',
    date: '2026-01-01',
    type: 'informatie',
    tags: ['util'],
    content: `<h3>Facilități disponibile</h3>
<ul>
<li>WiFi gratuit în toată proprieta­tea</li>
<li>Parcare privată cu 10 locuri</li>
<li>Bucătărie complet echipată</li>
<li>Salon modern cu șemineu</li>
<li>Grădină cu mobilier de exterior</li>
<li>BBQ și foc de tabără</li>
<li>Bibliotecă cu jocuri de masă</li>
<li>Sală de oaspeți cu echipament audio-video</li>
</ul>
<h3>Servicii suplimentare</h3>
<p>Vă putem oferi mâncare tradițională pe comandă cu preaviz de 24 de ore.</p>`
  },
  {
    id: 'info-tarife',
    title: 'Tarife și Rezervări',
    date: '2026-01-01',
    type: 'informatie',
    tags: ['util'],
    content: `<h3>Tarife de cazare</h3>
<table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background-color: #5dcaa5; color: #111110; font-weight: bold;">
<td style="border: 1px solid #333; padding: 8px;">Tip cameră</td>
<td style="border: 1px solid #333; padding: 8px; text-align: right;">Preț/noapte</td>
</tr>
<tr style="background-color: #1a1918;">
<td style="border: 1px solid #333; padding: 8px;">Single</td>
<td style="border: 1px solid #333; padding: 8px; text-align: right;">100 RON</td>
</tr>
<tr>
<td style="border: 1px solid #333; padding: 8px;">Dublu standard</td>
<td style="border: 1px solid #333; padding: 8px; text-align: right;">150 RON</td>
</tr>
<tr style="background-color: #1a1918;">
<td style="border: 1px solid #333; padding: 8px;">Dublu deluxe</td>
<td style="border: 1px solid #333; padding: 8px; text-align: right;">200 RON</td>
</tr>
</table>
<h3>Condiții de rezervare</h3>
<p>• Checkout obligatoriu la ora 11:00<br>
• Check-in de la ora 15:00<br>
• Anulari gratuite cu 7 zile în avans<br>
• Depozit de 30% la confirmare</p>`
  },
  {
    id: 'info-wellness',
    title: 'Programe Wellness',
    date: '2026-01-01',
    type: 'informatie',
    tags: ['util'],
    content: `<h3>Experiențe Wellness</h3>
<p>Oferim programe de relaxare și reîncărcare personalizate:</p>
<ul>
<li><strong>Yoga la zori:</strong> Sesiuni zilnice în grădină (6:30 - 7:30)</li>
<li><strong>Meditație guidată:</strong> Seara la apus (19:00 - 19:45)</li>
<li><strong>Masaj traditional:</strong> Pe comandă, efectuat de terapeut certificat</li>
<li><strong>Tratamente spa:</strong> Cu produse naturale locale</li>
<li><strong>Plimbări în natură:</strong> Ghidaje disponibile în fiecare zi</li>
</ul>
<h3>Pachet Weekend Wellness</h3>
<p><strong>2 nopți + program complet: 550 RON/persoană</strong></p>
<p>Incluye: 2 nopți, mic-dejun, cină tradițională, sesiuni yoga și meditație, masaj 30 min.</p>`
  },
  {
  id: 'info-structura',
  title: 'Structura Anului Universitar 2025-2026',
  date: '2026-01-01',
  type: 'informatie',
  tags: ['important'],
  content: `
<h2 style="text-align:center;">STRUCTURA ANULUI UNIVERSITAR 2025-2026</h2>
<p style="text-align:center; font-weight:bold;">
PENTRU ÎNVĂȚĂMÂNTUL UNIVERSITAR DE LICENȚĂ, MASTERAT<br>
Centrul Universitar București
</p>

<table style="width:100%; border-collapse:collapse; margin-top:20px; font-size:13px;">
<tr style=" font-weight:bold;">
<td style="border:1px solid #333; padding:8px;">Semestrul</td>
<td style="border:1px solid #333; padding:8px;">Forma de învățământ</td>
<td style="border:1px solid #333; padding:8px;">Perioada</td>
<td style="border:1px solid #333; padding:8px;">Activitatea</td>
</tr>

<tr>
<td rowspan="5" style="border:1px solid #333; padding:8px; font-weight:bold;">I</td>
<td rowspan="5" style="border:1px solid #333; padding:8px;">
Licență + Masterat
</td>
<td style="border:1px solid #333; padding:8px;">29.09.2025 – 19.12.2025</td>
<td style="border:1px solid #333; padding:8px;">Proces didactic [12S]</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px; color:#1e90ff;">20.12.2025 – 11.01.2026</td>
<td style="border:1px solid #333; padding:8px;">Vacanță iarnă [3S]</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px;">12.01.2026 – 23.01.2026</td>
<td style="border:1px solid #333; padding:8px;">Proces didactic [2S]</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px; color:red;">24.01.2026 – 13.02.2026</td>
<td style="border:1px solid #333; padding:8px;">Sesiune examene [3S]</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px; color:#1e90ff;">14.02.2026 – 22.02.2026</td>
<td style="border:1px solid #333; padding:8px;">Vacanță intersemestrială</td>
</tr>

<tr style="background:#1a1918;">
<td colspan="4" style="border:1px solid #333;"></td>
</tr>

<tr>
<td rowspan="4" style="border:1px solid #333; padding:8px; font-weight:bold;">II</td>
<td style="border:1px solid #333; padding:8px;">Licență (anii I-III)</td>
<td style="border:1px solid #333; padding:8px;">23.02.2026 – 29.05.2026</td>
<td style="border:1px solid #333; padding:8px;">Proces didactic [14S]</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px;"></td>
<td style="border:1px solid #333; padding:8px; color:red;">30.05.2026 – 19.06.2026</td>
<td style="border:1px solid #333; padding:8px;">
Sesiune examene + practică
</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px;">Licență anul IV</td>
<td style="border:1px solid #333; padding:8px;">23.02.2026 – 29.05.2026</td>
<td style="border:1px solid #333; padding:8px;">Proces didactic</td>
</tr>

<tr>
<td style="border:1px solid #333; padding:8px;"></td>
<td style="border:1px solid #333; padding:8px;">30.05.2026 – 28.06.2026</td>
<td style="border:1px solid #333; padding:8px;">
Examene + diplomă
</td>
</tr>
</table>

<h3 style="margin-top:25px;">Alte activități – Septembrie 2026</h3>
<ul>
<li>Reprogramări și verificări finale: 24.08.2026 – 06.09.2026</li>
<li>Înscriere licență/disertație: 24.08.2026 – 08.09.2026</li>
<li>Examene finale: 09.09.2026 – 11.09.2026</li>
</ul>

<h3>Zile libere</h3>
<ul>
<li>1 decembrie 2025</li>
<li>1-2 ianuarie 2026</li>
<li>6-7 ianuarie 2026</li>
<li>10, 13, 14 aprilie 2026</li>
<li>1 mai 2026</li>
<li>1 iunie 2026</li>
</ul>
`
}
];
