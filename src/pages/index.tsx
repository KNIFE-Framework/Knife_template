import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Vitajte v {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          Táto šablóna slúži na vytváranie vlastných znalostných príspevkov pomocou frameworku KNIFE.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/en">
            Prejsť na príklady (EN)
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/sk" style={{marginLeft: '1em'}}>
            Prejsť na príklady (SK)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Domovská stránka"
      description="Začnite vytvárať vlastné KNIFE príspevky pomocou tejto šablóny.">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <section>
          <h2>🔧 Na čo slúži táto šablóna?</h2>
          <p>
            Táto šablóna je pripravená na jednoduché publikovanie znalostných príspevkov v štruktúre KNIFE (Knowledge In Friendly Examples).
          </p>
        </section>

        <section>
          <h2>📘 Čo je to KNIFE?</h2>
          <p>
            KNIFE je framework na zdieľanie vedomostí cez jednoduché príklady a návody. Viac nájdete na stránke:
            <br />
            <Link to="https://github.com/KNIFE-Framework/knifes_overview/blob/main/7Ds/01.D1-Management/02.Strategy/KNIFE_Overview_List.md" target="_blank">
              KNIFE Overview
            </Link>
          </p>
        </section>

        <section>
          <h2>🚀 Ako vytvoriť vlastný príspevok?</h2>
          <ol>
            <li>Forknite si tento repozitár alebo ho naklonujte do svojho GitHub účtu.</li>
            <li>V adresári <code>docs/en/</code> alebo <code>docs/sk/</code> vytvorte svoj nový súbor.</li>
            <li>Pridajte obrázky do <code>static/img/</code> a referencujte ich vo svojom `.md` súbore.</li>
            <li>Upravte navigáciu v <code>sidebars.ts</code>, ak treba.</li>
            <li>Commitnite a publikujte pomocou GitHub Pages.</li>
          </ol>
        </section>

        <section>
          <h2>📚 Chcete sa naučiť viac?</h2>
          <p>
            Otvorte si lokálny <strong>Docusaurus tutorial</strong> a skúšajte, čo všetko táto platforma umožňuje.
          </p>
          <Link
            className="button button--outline button--primary"
            to="/docs/tutorial-basics/create-a-page">
            Spustiť lokálny Docusaurus tutorial
          </Link>
        </section>
      </main>
    </Layout>
  );
}
