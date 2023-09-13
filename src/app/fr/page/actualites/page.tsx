import Image from 'next/image';
import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Actualités - Fusion',
}

export default function NewsPage() {
  return <div className="news-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Actualités</span>
    </nav>

    <div className="news-list">

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/ITW-clement-milian-fit.jpg')}
            alt="Valérie Morice recevait Clément Milian, pour Monstudiotv, dans l&apos;émission Les chroniques de Mori7."
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Interview de Clément Milian
        </h1>
        <p className="news-date">
          <time dateTime="2023/05/17"> 17 mai 2023</time>
        </p>
        <div className="news-body">
          <p>
            Valérie Morice recevait Clément Milian, pour Monstudiotv, dans l&apos;émission Les chroniques de Mori7.
          </p>
          <p>
            <a
              href="https://www.youtube.com/watch?v=FarWcN5u3Qk"
              rel="noopener noreferrer"
              target="_blank"
            >
              Écouter l&apos;interview
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/PolarLens_vignette_nouvelle.jpg')}
            alt="Rencontre avec Olivier Bordaçarre à Polar Lens"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Olivier Bordaçarre au Salon du livre policier Polar Lens
        </h1>
        <p className="news-date">
          <time dateTime="2023-03-22"> 22 mars 2023</time>
        </p>
        <div className="news-body">
          <p>
            ANNULÉ
          </p>
          <p>
            <a
              href="https://www.polarlens.fr/wordpress/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/latache_vignette_2023.jpg')}
            alt="Rencontre avec Simone Buchholz à la Librairie-Cafe La Tache noire"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Simone Buchholz à la Librairie-Café La Tache noire
        </h1>
        <p className="news-date">
          <time dateTime="2023-02-25"> 25 février 2023</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre de sa tournée pour la sortie de son roman Rue Mexico, Simone Buchholz sera à la Librairie-Café La Tache noire à Strasbourg, le vendredi 17 mars à 19h. <br/>
          </p>
          <p>
            <a
              href="https://www.l-atalante.com/agenda/simone-buchholz-librairie-cafe-la-tache-noire-strasbourg/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/lageo_vignette_2023.jpg')}
            alt="Rencontre avec Simone Buchholz à la Librairie La Geotheque"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Simone Buchholz à la Librairie La Géothèque
        </h1>
        <p className="news-date">
          <time dateTime="2023-02-25"> 25 février 2023</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre de sa tournée pour la sortie de son roman Rue Mexico, Simone Buchholz sera à la Librairie La Géothèque à Nantes, le jeudi 16 mars à 18h30. <br/>
          </p>
          <p>
            <a
              href="https://www.l-atalante.com/agenda/simone-buchholz-la-geotheque-nantes/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/croiseemondes_vignette_2023.jpg')}
            alt="Rencontre avec Simone Buchholz à la Librairie La Croisée des mondes"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Simone Buchholz à la Librairie La Croisée des mondes
        </h1>
        <p className="news-date">
          <time dateTime="2023-02-25"> 25 février 2023</time>
        </p>
        <div className="news-body">
          <p>
            À l&apos;occasion de la parution du 3ème roman de la série mettant en scène Chastity Riley, Simone Buchholz sera présente à la Librairie La Croisée des mondes, le 15 mars 2023, de 16h à 19h. <br/>
          </p>
          <p>
            <a
              href="https://www.l-atalante.com/agenda/simone-buchholz-librairie-la-croisee-des-mondes-paris/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/lettresacroquer_vignette_2023.jpg')}
            alt="Rencontre avec Simone Buchholz à la Librairie Lettres à croquer"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Simone Buchholz à la Librairie Lettres à croquer
        </h1>
        <p className="news-date">
          <time dateTime="2023-02-25"> 25 février 2023</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre de sa tournée pour la sortie de son roman Rue Mexico, Simone Buchholz sera à la Librairie Lettres à croquer à Villeurbanne, le mardi 14 mars. <br/>
          </p>
          <p>
            <a
              href="https://www.l-atalante.com/agenda/simone-buchholz-librairie-lettres-a-croquer-villeurbanne/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/ROMAN-NOIR-SOCIAL_vignette copie.jpg')}
            alt="Festival du Roman noir et social"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival du Roman noir et social
        </h1>
        <p className="news-date">
          <time dateTime="2022-12-01"> 01 décembre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Anouk Langaney sera présente à la 3eme édition du Festival du Roman noir et social, à Vitry-sur-Seine, du 2 au 4 décembre 2022. Elle présentera son dernier roman : Clark.
            Le Samedi 3 décembre, Anouk Langaney sera présente à la soirée Cabaret des auteurs. <br/>
          </p>
          <p>
            <a
              href="https://festivalromannoirsocialvitry.jimdofree.com/?fbclid=IwAR0bhGh2YbXse5vIsO70PrQl0Y0DpuPkYlxGhcGsAR2-WR1iRAsgUYGajZE"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/verdan-strasbourg.jpg')}
            alt="Librairie La tache noire"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontre avec Nicolas Verdan à la Librairie La tache noire
        </h1>
        <p className="news-date">
          <time dateTime="2022-11-07"> 07 novembre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre de la Quinzaine des librairies indépendantes du Grand Est, la librairie La tache noire invite Nicolas Verdan à venir présenter son roman : Le Mur grec.
            La rencontre se fera le 18 novembre à 18h30, dans la librairie strasbourgeoise.<br/>
          </p>
          <p>
            <a
              href="https://www.blog813.com/2022/11/novembre-a-la-tache-noire.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/noirsurlaville_vignette.jpg')}
            alt="Noir sur la Ville"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Salon du roman noir et du polar : Noir sur la ville
        </h1>
        <p className="news-date">
          <time dateTime="2022-10-10"> 10 octobre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre du salon du roman noir et du polar, Simone Buchholz sera présente pour partager son dernier roman avec vous : Béton rouge.
            Une chance unique de découvrir cette autrice allemande. Le salon se déroule le 19 et 20 novembre à Lamballe.<br/>
          </p>
          <p>
            <a
              href="https://www.noirsurlaville.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tout le programme
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/Festivaldupolar_vignette.jpg')}
            alt="Festival du Polar"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival du Polar à Villeneuve lez Avignon.
        </h1>
        <p className="news-date">
          <time dateTime="2022-10-10"> 10 octobre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Olivier Bordacarre sera présent à la 18ème édition du Festival du Polar qui se déroule à Villeneuve lez Avignon, du 9 au 13 novembre 2022.
            Une occasion de découvrir son dernier polar : Appartement 816.<br/>
          </p>
          <p>
            <a
              href="https://www.polar-villeneuvelezavignon.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tout le programme
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/toulouse-polar-du-sud.jpg')}
            alt="Festival Toulouse Polar du Sud"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Toulouse Polar du Sud
        </h1>
        <p className="news-date">
          <time dateTime="2022-09-21"> 21 septembre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre du festival Toulouse Polar du Sud qui se déroule du 7 au 9 octobre 2022, deux de nos auteurs seront présents.
            Simone Buchholz présentera son dernier roman : Béton rouge. Olivier Bordaçarre présentera son roman : Appartement 816.<br/>
          </p>
          <p>
            <a
              href="https://www.toulouse-polars-du-sud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tout le programme
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/lisle-noir.jpg')}
            alt="Festival Lisle noir"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Lisle noir
        </h1>
        <p className="news-date">
          <time dateTime="2022-09-02"> 2 septembre 2022</time>
        </p>
        <div className="news-body">
          <p>
            Olivier Bordaçarre est invité pour la 7ème édition du Festival International Lisle noire. Le festival a lieu le 17 et 18 septembre à Lisle-s/Tarn.<br/>
          </p>
          <p>
            <a
              href="https://www.tourisme-tarn.com/agenda/lisle-noir-edition-2022/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Toute la sélection
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/Le_polar_se_met_au_vert.jpg')}
            alt="Salon Le polar se met au vert"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Salon Le polar se met au vert
        </h1>
        <p className="news-date">
          <time dateTime="2022-09-02"> 2 septembre 2022</time>
        </p>
        <div className="news-body">
          <p>
            A vos agendas ! La 9e édition du salon &quot;Le Polar se met au vert&quot; s&apos;installe à Vieux-Boucau les 24 & 25 septembre 2022.
            Avec la thématique « Histoires de femmes », cette édition vient célébrer les éditrices, les autrices mais également les héroïnes avec une vingtaine d’auteurs invités.
            Anouk Langaney sera sur le salon pour présenter son dernier roman, &quot;Clark&quot;.<br/>
          </p>
          <p>
            <a
              href="https://www.medialandes.fr/action-culturelle/le-polar-se-met-au-vert/le-polar-se-met-au-vert-2022/4441-le-polar-se-met-au-vert-2022"
              rel="noopener noreferrer"
              target="_blank"
            >
              Toute la sélection
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/Prix-Litteraire-Bordacarre.jpg')}
            alt="Prix des lecteurs 2022 – Festival du Polar de Villeneuve lez Avignon"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Prix des lecteurs 2022 – Festival du Polar de Villeneuve lez Avignon
        </h1>
        <p className="news-date">
          <time dateTime="2022-07-05"> 5 Juillet 2022</time>
        </p>
        <div className="news-body">
          <p>
            Appartement 816 de Olivier Bordaçarre fait partie des finalistes du Prix des lecteurs 2022 pour le Festival du Polar de Villeneuve lez Avignon.
            Le Prix des Lecteurs 2022 sera dévoilé lors de l&apos;inauguration du Festival du Polar le samedi 12 novembre 2022, à 12h. <br/>
          </p>
          <p>
            <a
              href="https://www.polar-villeneuvelezavignon.fr/focus/la-selection-du-prix-des-lecteurs-2022"
              rel="noopener noreferrer"
              target="_blank"
            >
              Toute la sélection
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/Prix-Litteraire-Bordacarre.jpg')}
            alt="Grand Prix de Littérature Policière"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Grand Prix de Littérature Policière
        </h1>
        <p className="news-date">
          <time dateTime="2022-06-21"> 21 Juin 2022</time>
        </p>
        <div className="news-body">
          <p>
            Appartement 816 de Olivier Bordaçarre fait partie des 14 finalistes du Grand Prix de Littérature Policière 2022 !
            Les résultats seront annoncés la première quinzaine d&apos;octobre.<br/>
          </p>
          <p>
            <a
              href="https://www.blog813.com/2022/06/selection-du-gplp-2022.html?fbclid=IwAR1F_Hy3etyyO6C3rzjelOL5dCMzm38-DDrKRFW_ve-BPA_SaNQfvy-SfoE"
              rel="noopener noreferrer"
              target="_blank"
            >
              Toute la sélection
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/les-affluents-bordacarre.jpg')}
            alt="Festival Les Affluents"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Les Affluents – Ancenis-Saint-Géréon – Du 24 au 26 Juin 2022
        </h1>
        <p className="news-date">
          <time dateTime="2022-06-15"> 15 Juin 2022</time>
        </p>
        <div className="news-body">
          <p>
            Du 24 au 26 Juin 2022, à Ancenis-Saint-Géréon, venez découvrir les auteurs, autrices et éditeurs, éditrices des Pays de la Loire pour un festival haut en couleurs.
            Olivier Bordaçarre seront présents sur cette première édition.
          </p>
          <p>
            <a
              href="https://lesaffluents.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/FusionITW.png')}
            alt="[FORMAT COURT] Polar & imaginaire"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Nos directeurs de collection présentent 5 livres ligériens.
        </h1>
        <p className="news-date">
          <time dateTime="2022-05-10">10 mai 2021</time>
        </p>
        <div className="news-body">
          <div className="news-youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/q8KpqHF9q-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/pole_interview_anouk.jpg')}
            alt="Festival Bruits de Langues"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Interview Anouk Langaney – Poitiers
        </h1>
        <p className="news-date">
          <time dateTime="2022-04-20"> 20 Avril 2022</time>
        </p>
        <div className="news-body">
          <p>
            Dans le cadre du Festival Bruits de Langues, Anouk Langaney partage son travail d&apos;écriture autour de son dernier roman : Clark.<br/>
          </p>
          <p>
            <a
              href="https://uptv.univ-poitiers.fr/program/bruits-de-langues-2022/video/65687/anouk-langaney/index.html?fbclid=IwAR2SX6-KJd6K0YRGoyv-bKGEQwuKDci-UqeiQWG6JUhQ4F9cbO_tyTJGe08"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/polarenvalleenoir.jpg')}
            alt="Salon du Polar en Vallée noire"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Salon du Polar en Vallée noire – Montgivray – 5 Juin 2022
        </h1>
        <p className="news-date">
          <time dateTime="2022-04-10"> 10 Avril 2022</time>
        </p>
        <div className="news-body">
          <p>
            Le 5 juin, Olivier Bordaçarre sera présent au Salon du Polar en Vallée noire, à Montgivray.
            Le Salon se déroule le dimanche 5 Juin du 10h à 18h.<br/>
          </p>
          <p>
            <a
              href="https://www.facebook.com/polarenvalleenoire/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/bordacarre-coleredupresent.jpg')}
            alt="21e Salon du livre d&apos;expression populaire et de critique sociale d&apos;Arras"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          21e Salon du livre d&apos;expression populaire et de critique sociale – Arras – 1er mai 2022
        </h1>
        <p className="news-date">
          <time dateTime="2022-03-20">20 Mars 2022</time>
        </p>
        <div className="news-body">
          <p>
            Le 1er mai, Olivier Bordaçarre sera présent au 21e Salon du livre d&apos;expression populaire et de critique sociale.
            Pour cette nouvelle édition du Salon du livre, le thème sera Le Vide, et ce n’est pas rien. À travers le vide nous nous interrogeons autant sur l’absence que ce qui vient l’assouvir.<br/>
          </p>
          <p>
            <a
              href="https://www.coleresdupresent.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/quais-de-polar-agenda.jpg')}
            alt="Festival Quais du Polar"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Quais du Polar – Lyon – Du 1 au 3 Avril 2022
        </h1>
        <p className="news-date">
          <time dateTime="2022-03-01">1 Mars 2022</time>
        </p>
        <div className="news-body">
          <p>
            Du 1er au 3 avril 2022, Olivier Bordaçarre participe au festival Quais du Polar qui aura lieu à Lyon. <br/>
          </p>
          <p>
            <a
              href="https://www.quaisdupolar.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/EFFRACTIONS_vignette.jpg')}
            alt="Festival Effractions"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Effractions – Paris – Le 28 février 2022
        </h1>
        <p className="news-date">
          <time dateTime="2022-02-16">16 février 2022</time>
        </p>
        <div className="news-body">
          <p>
            Le lundi 28 février 2022, Olivier Bordaçarre participe au festival Effractions qui aura lieu au Centre Pompidou à Paris. Retrouvez-le, en compagnie de Chantal Pelletier, à 16h autour d&apos;une table ronde ayant pour thème : Polar et anticipation, penser l’avenir. <br/>
          </p>
          <p>
            <a
              href="https://effractions.bpi.fr/programme-2022/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur le site du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/quais_du_polar_prix.jpg')}
            alt="Prix Quais du polar"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Appartement 816 – Sélection prix Quais du polar 2022
        </h1>
        <p className="news-date">
          <time dateTime="2021-12-08">8 décembre 2021</time>
        </p>
        <div className="news-body">
          <p>
            <em>Appartement 816</em> d&apos;Olivier Bordaçarre est sélectionné pour le prix Quais du polar 2022.
          </p>
          <p>Toute la sélection :</p>
          <ul>
            <li><em>Appartement 816</em>, Olivier Bordaçarre</li>
            <li><em>Marchands de mort subite</em>, Max Izambard</li>
            <li><em>La patience de l&apos;immortelle</em>, Michèle Pedinielli</li>
            <li><em>l&apos;âme du fusil</em>, Elsa Marpeau</li>
            <li><em>Trente grammes</em>, Gabrielle Massat </li>
          </ul>
          <br/>
          <Image
            src={require('../../../../../_site/images/news/quais_du_polar.jpg')}
            alt="Selection prix quais du polar 2022"
          />
          <p>
            <a
              href="https://www.facebook.com/quaisdupolar"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/vitry_vignette.jpg')}
            alt="Festival du roman noir et social"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival du roman noir et social – Vitry-sur-Seine
        </h1>
        <p className="news-date">
          <time dateTime="2021-11-24">24 novembre 2021</time>
        </p>
        <div className="news-body">
          <p>
            Anouk Langaney est invitée au 2e festival du roman noir et social de Vitry-sur-Seine qui aura lieu les 3, 4 et 5 décembre 2021.<br/>
          </p>
          <p>
            <a
              href="https://www.facebook.com/Fest.Vitry/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations sur la page Facebook du festival
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/lamballe_vignette-3.jpg')}
            alt="Noir sur la ville"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Noir sur la ville – Lamballe
        </h1>
        <p className="news-date">
          <time dateTime="2021-09-24">13 octobre 2021</time>
        </p>
        <div className="news-body">
          <p>
            Anouk Langaney est invitée au salon Noir sur la ville de Lamballe qui aura lieu les 19, 20 et 21 novembre prochains.<br/>
          </p>
          <p>
            <a
              href="https://www.noirsurlaville.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/pole_art_prix.jpg')}
            alt="Prix Pole Art 2021"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Clark – Sélection prix Pôle Art 2021
        </h1>
        <p className="news-date">
          <time dateTime="2021-10-01">1 octobre 2021</time>
        </p>
        <div className="news-body">
          <p>
            <em>Clark</em> d&apos;Anouk Langaney est sélectionné pour le grand prix du jury du festival Pôle Art 2021 !
          </p>
          <br/>
          <p>Toute la sélection :</p>
          <ul>
            <li><em>La mère noire</em>, Jean-Bernard Pouy & Marc Villard </li>
            <li><em>La patience de l&apos;immortelle</em>, Michèle Pedinielli</li>
            <li><em>Lëd</em>, Caryl Férey</li>
            <li><em>Stavros contre Goliath</em>, Sophia Mavroudis</li>
            <li><em>Moktar</em>, Jérémy Bouquin </li>
            <li><em>Clark</em>, Anouk Langaney</li>
          </ul>
          <br/>
          <Image
            src={require('../../../../../_site/images/news/clark_langaney_pole_art.jpg')}
            alt="Selection prix pole art 2021"
          />
          <p>
            <a
              href="https://www.facebook.com/jeanmarc.lefaou/posts/6625773517440314"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/toulouse_vignette-2.jpg')}
            alt="Festival Polar du Sud"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Festival Polars du Sud – Toulouse
        </h1>
        <p className="news-date">
          <time dateTime="2021-09-24">24 septembre 2021</time>
        </p>
        <div className="news-body">
          <p>
            La Ville rose passe au « Noir » comme tous les ans pour accueillir Toulouse Polars du Sud, le festival international des littératures noires et policières qui mettra cette année à l’honneur les littératures du pourtour de la Méditerranée.<br/>
            Anouk Langaney participera à une table ronde &quot;polar et enfance&quot; avec l&apos;auteur Andrés Barba.<br/>
            Rendez-vous les 8, 9 et 10 octobre 2021.
          </p>
          <p>
            <a
              href="https://www.toulouse-polars-du-sud.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/bibliotheque-ideales-strasbourg.news.jpg')}
            alt="Affiche de l&apos;évènement Bibliothèques Idéales"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Bibliothèques Idéales – Strasbourg
        </h1>
        <p className="news-date">
          <time dateTime="2021-08-06">6 août 2021</time>
        </p>
        <div className="news-body">
          <p>
            Le 5 septembre, dans le cadre de l&apos;événement Bibliothèques Idéales à Strasbourg, Caroline De Benedetti
            et Emeric Cloche participeront à une rencontre autour de Simone Buchholz et du Krimi dans la littérature noire
            européenne.
          </p>
          <p>
            <a
              href="https://bibliotheques-ideales.strasbourg.eu/evenement/-/entity/id/204795225"
              rel="noopener noreferrer"
              target="_blank"
            >
              Plus d&apos;informations
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/coup-de-coeur-chien-jaune.news.jpg')}
            alt="Affiche de l&apos;évènement Bibliothèques Idéales"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Coup de cœur pour Clark
        </h1>
        <p className="news-date">
          <time dateTime="2021-07-26">26 juillet 2021</time>
        </p>
        <div className="news-body">
          <p>
            L’édition 2021 du Chien Jaune, festival du polar de Concarneau avait
            pour thème &quot;Polar au féminin&quot;. Clark fut le coup de cœur du comité de
            lecture du Chien Jaune. Bravo Anouk !
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/simone-buchholz.news.jpg')}
            alt="Portrait de Simone Buchholz"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontres avec Simone Buchholz
        </h1>
        <p className="news-date">
          <time dateTime="2021-06-31">4 juin 2021</time>
        </p>
        <div className="news-body">
          <p>Trois occasions de rencontrer l’allemande Simone Buchholz en France.</p>
          <ul>
            <li>Le 30 juin à 19h – Librairie L’Embarcadère, Saint-Nazaire</li>
            <li>Le 1er juillet à 18h30 – Librairie L’Atalante, Nantes</li>
            <li>Du 2 au 4 juillet – Festival Quais du polar, Lyon</li>
          </ul>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/anouk-langaney.news.jpg')}
            alt="Portrait d&apos;Anouk Langaney"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Rencontres avec Anouk Langaney
        </h1>
        <p className="news-date">
          <time dateTime="2021-06-31">4 juin 2021</time>
        </p>
        <div className="news-body">
          <p>Vous pourrez rencontrer Anouk Langaney en deux occasions :</p>
          <ul>
            <li>Le 25 juin à 18h30 – Librairie L’Atalante, Nantes</li>
            <li>Du 26 au 27 juin – Festival Mauves en Noir, Mauves-sur-Loire</li>
          </ul>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/nuit-bleue-par-les-directeurs.news.jpg')}
            alt="Nuit Bleue de Simone Buchholz : présentation par les directeurs de collection !"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Nuit Bleue de Simone Buchholz : présentation par les directeurs de
          collection !
        </h1>
        <p className="news-date">
          <time dateTime="2021-03-23">23 mars 2021</time>
        </p>
        <div className="news-body">
          <div className="news-youtube-video">
            <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/e9DBi5Lqc-o"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
            ></iframe>
          </div>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/12-minutes-avec.news.jpg')}
            alt="12 minutes avec Caroline de Benedetti et Emeric Cloche"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          12 minutes avec Caroline de Benedetti et Emeric Cloche
        </h1>
        <p className="news-date">
          <time dateTime="2020-10-08">7 janvier 2021</time>
        </p>
        <div className="news-body">
          <p>
            Passez 12 minutes avec Caroline de Benedetti et Emeric Cloche,
            co-directrice et co-directeur de la collection Fusion. C&apos;est tout ce
            qu&apos;il faut pour comprendre leur passion du polar, et pourquoi ils sont
            si bien placés pour vous transmettre cet amour du roman noir. Bon
            visionnage !
          </p>
          <div className="news-youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OnEjlEo4wnA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="news-youtube-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lgcs4AIQKXc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/livres-hebdo.news.png')}
            alt="l&apos;Atalante lance une nouvelle collection"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          l&apos;Atalante lance une nouvelle collection - Livres Hebdo
        </h1>
        <p className="news-date">
          <time dateTime="2020-10-08">8 octobre 2020</time>
        </p>
        <div className="news-body">
          <p className="news-lead">
            l&apos;Atalante annonce la création d&apos;une nouvelle collection, baptisée
            Fusion. À l&apos;occasion de son lancement, les directeurs éditoriaux de ce
            projet, Caroline de Benedetti et Emeric Cloche détaillent à Livres Hebdo
            leurs souhaits pour cette nouvelle aventure.
          </p>
          <p>
            Après sa collection « Insomniaques et ferroviaires », lancée dans les
            années 1990, l&apos;Atalante revient en 2021 avec une nouvelle collection
            consacrée au polar baptisée Fusion, dirigée par Caroline de Benedetti
            et Emeric Cloche, fondateurs de l&apos;association Fondu au Noir.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.livreshebdo.fr/article/latalante-lance-une-nouvelle-collection">
              {'>'} Lire la suite sur livreshebdo.fr
            </a>
          </p>
        </div>
      </article>

      <article className="news">
        <div className="news-illustration">
          <Image
            src={require('../../../../../_site/images/news/ouest-france.news.jpg')}
            alt="l&apos;Atalante lance une nouvelle collection"
            className="news-illustration-image"
          />
        </div>
        <h1 className="news-title">
          Nantes. Les éditions L’Atalante se remettent au polar – Ouest-France
        </h1>
        <p className="news-date">
          <time dateTime="2020-07-28">28 juillet 2020</time>
        </p>
        <div className="news-body">
          <p className="news-lead">
            Le crime est notre affaire. Voilà pour la profession de foi d’Emeric Cloche et de Caroline de Benedetti, tout juste nommés directeurs d’une nouvelle collection chez les éditions nantaises L’Atalante (nées en 1979) au nom de Fusion.
          </p>
          <p>
            « Ils ont une grande crédibilité dans le polar » (Mireille Rivalland, éditrice)
          </p>
          <p>
            Deux premiers polars Nuit bleue de l’Allemande Simone Buchholz et Clark d’Anouk Langaney, une auteure corse, sont prévus en février puis mars 2021. « Nous aimons le mélange des genres. On s’aperçoit que les éléments du polar se retrouvent dans la science-fiction ou que le fantastique imprègne le noir », confie ce duo que l’on connaît bien dans le milieu du roman policier. Ils ont créé la revue L’Indic (Noir Magazine) voilà 13 ans et écumé festivals et bibliothèques afin de partager leur passion sous toutes ses facettes.
          </p>
          <p>
            La dernière livraison de L’Indic faisait la part belle au polar féminin et proposait une brochette d’interviews (d’Antoine Albertini à Sophie Loubière) bien senties. « Caroline et Emeric réalisent un véritable travail de fourmi autour du polar. Ils ont une grande crédibilité », indique Mireille Rivalland, l’éditrice de L’Atalante. « Quand j’ai rencontré Caroline de Benedetti dans la librairie, j’ai eu une illumination. Je lui ai demandé si elle avait déjà pensé à publier des auteurs de polars. Dans notre équipe, nous n’avions pas de compétence en interne ». Et ça matche. Avec, au final, une nouvelle collection nommée Fusion.
          </p>
          <p className="news-read-more">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ouest-france.fr/pays-de-la-loire/nantes-44000/nantes-les-editions-l-atalante-se-remettent-au-polar-c5adf7fe-cff2-11ea-a753-d5468a9209ef">
              {'>'} Lire la suite sur ouest-france.fr
            </a>
          </p>
        </div>
      </article>

    </div>
  </div>;
}