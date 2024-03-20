import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<"svg">>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: "Fetch every 12 hours",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>Using GitHub action so don't worry about latest anime.</>,
  },
  {
    title: "More than 5 endpoints",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Otakudesu Backend API&apos;s do media also. Go ahead explore the <code>docs</code> on /docs/apis.
      </>
    ),
  },
  {
    title: "Meta pages",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Fetch filter. Not all datas.</>,
  },
]

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
  )
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
  )
}
