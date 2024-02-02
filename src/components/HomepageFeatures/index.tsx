import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Fetch",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Data anime is based on Otakudesu, sure it is up to date (for now).</>,
  },
  {
    title: "Up to 10 Endpoints",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Otakudesu Backend API&apos;s do the media also. Go ahead and explore the <code>docs</code> on /docs/apis.
      </>
    ),
  },
  {
    title: "Friendly to Maintain",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Becase we use Next.js 14 by API route. It is powerful function by NextResponse</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
