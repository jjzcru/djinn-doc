import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Simplicity',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				Make something simple is harder than making something complex,
				that's why we need to do complex things to make the system looks
				simple.
			</>
		),
	},
	{
		title: 'Extensibility',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: (
			<>
				Every functionality is extensible by using plugins, this give
				manufacturers the freedom to implement their own integrations.
			</>
		),
	},
	{
		title: 'Privacy',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: (
			<>
				IoT devices permeate into our daily lives, because of that we
				need to make sure that only us are able to see our own data.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
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
