import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales - Fusion',
}

export default function Page() {
  return <div className="legal-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Mentions légales</span>
    </nav>

    <div className="page-block">
      <h1 className="page-title">Mentions légales</h1>

      <p>Conformément aux dispositions des articles 6-III et 19 de la Loi
        n° 2004-575 du 21 juin 2004 pour la Confiance dans l&#39;économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site fusionlatalante.fr les informations suivantes :</p>
      <h2 id="informations-l-gales">Informations légales</h2>
      <p>Statut du propriétaire : société<br />Préfixe : SCOP ARL<br />Nom de la Société : Librairie L&#39;Atalante<br />Adresse : 15 rue des Vieilles Douves et 4 rue Vauban 44000 Nantes<br />Tél. : 0240205623<br />Capital : variable<br />SIRET : 382 358 711 00010<br />R.C.S. : 382 358 711 Nantes<br />Numéro TVA intracommunautaire : FR26 382 358 711<br />Adresse de courrier électronique : bonjour@l-atalante.fr<br />Responsable de la publication : L&#39;Atalante<br />Contactez le responsable de la publication : bonjour@l-atalante.fr<br />Le responsable de la publication est une personne morale.<br />Créateur du site : Elytre<br />Webmaster : Clément Latzarus<br />Hébergeur du site : Netlify, Inc., 2325 3rd Street, Suite 296,<br />San Francisco, California 94107  </p>
      <h2 id="description-des-services-fournis">Description des services fournis</h2>
      <p>Le site fusionlatalante.fr a pour objet de fournir une information concernant l’ensemble des
        activités de la société.</p>
      <p>Le propriétaire du site s’efforce de fournir sur le site fusionlatalante.fr des informations
        aussi précises que possible. Toutefois, il ne pourra être tenu responsable des
        omissions, des inexactitudes et des carences dans la mise à jour, qu’elles
        soient de son fait ou du fait des tiers partenaires qui lui fournissent ces
        informations.</p>
      <p>Toutes les informations proposées sur le site fusionlatalante.fr sont données à titre
        indicatif, sont non exhaustives, et sont susceptibles d’évoluer. Elles sont
        données sous réserve de modifications ayant été apportées depuis leur mise en
        ligne.</p>
      <h2 id="propri-t-intellectuelle-et-contrefa-ons">Propriété intellectuelle et contrefaçons</h2>
      <p>Le propriétaire du site est propriétaire des droits de propriété intellectuelle
        ou détient les droits d’usage sur tous les éléments accessibles sur le site,
        notamment les textes, images, graphismes, logo, icônes, sons, logiciels…</p>
      <p>Toute reproduction, représentation, modification, publication, adaptation totale
        ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé,
        est interdite, sauf autorisation écrite préalable à l&#39;email :
        bonjour@l-atalante.fr</p>
      <p>Toute exploitation non autorisée du site ou de l&#39;un des éléments qu’il contient
        sera considérée comme constitutive d’une contrefaçon et poursuivie conformément
        aux dispositions des articles L.335-2 et suivants du Code de Propriété
        Intellectuelle.</p>
      <h2 id="liens-hypertextes">Liens hypertextes</h2>
      <p>Le site fusionlatalante.fr contient un certain nombre de liens hypertextes vers
        d’autres sites (partenaires, informations…) mis en place avec l’autorisation du
        propriétaire du site.
        Cependant, le propriétaire du site n’a pas la possibilité de vérifier le contenu
        des sites ainsi visités et décline donc toute responsabilité de ce fait quant
        aux risques éventuels de contenus illicites.</p>
      <h2 id="protection-des-biens-et-des-personnes-gestion-des-donn-es-personnelles">Protection des biens et des personnes - gestion des données personnelles</h2>
      <p>En France, les données personnelles sont notamment protégées par la loi n° 78-87
        du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l&#39;article L. 226-13 du
        Code pénal et la Directive Européenne du 24 octobre 1995.</p>
      <p>Sur le site fusionlatalante.fr, le propriétaire du site ne collecte des informations
        personnelles relatives à l&#39;utilisateur que pour le besoin de certains services
        proposés (newsletter) par le site fusionlatalante.fr. L&#39;utilisateur fournit ces
        informations en toute connaissance de cause, notamment lorsqu&#39;il procède par
        lui-même à leur saisie. Il est alors précisé à l&#39;utilisateur du site fusionlatalante.fr
        l’obligation ou non de fournir ces informations.</p>
      <p>Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6
        janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout
        utilisateur dispose d’un droit d’accès, de rectification, de suppression et
        d’opposition aux données personnelles le concernant. Pour l’exercer, adressez
        votre demande à fusionlatalante.fr par email : bonjour@l-atalante.fr ou en effectuant
        sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec
        signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse
        doit être envoyée.</p>
      <p>Aucune information personnelle de l&#39;utilisateur du site fusionlatalante.fr n&#39;est
        publiée à l&#39;insu de l&#39;utilisateur, échangée, transférée, cédée ou vendue sur un
        support quelconque à des tiers. Seule l&#39;hypothèse du rachat du site fusionlatalante.fr
        au propriétaire du site et de ses droits permettrait la transmission desdites
        informations à l&#39;éventuel acquéreur qui serait à son tour tenu de la même
        obligation de conservation et de modification des données vis-à-vis de
        l&#39;utilisateur du site fusionlatalante.fr.</p>
      <p>Le site fusionlatalante.fr est en conformité avec le RGPD.</p>
      <p>Les bases de données sont protégées par les dispositions de la loi du 1er
        juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la
        protection juridique des bases de données.</p>
    </div>
  </div>;
}
