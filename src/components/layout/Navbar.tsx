"use client";

import Link from "next/link";
import GetOfferButton from "../btn/GetOfferButton";
import styles from "../styles/Navbar.module.css";

const navItems = [
	{ label: "About", href: "#about" },
	{ label: "Blogs", href: "#blogs" },
	{ label: "Events", href: "#events" },
	{ label: "Projects Lab", href: "#projects-lab" },
	{ label: "Tech Arena", href: "#tech-arena" },
];

export default function Navbar() {
	return (
		<header className={styles.siteHeader}>
			<nav className={styles.navbar} aria-label="Main navigation">
				<Link className={styles.navbarBrand} href="/">
					TECH CLUB
				</Link>

				<div className={styles.navbarLinks}>
					{navItems.map((item) => (
						<a key={item.href} href={item.href}>
							{item.label}
						</a>
					))}
				</div>

				<GetOfferButton
					className={styles.offerButton}
					label="More"
					onClick={() => {
						window.location.hash = "offers";
					}}
				/>
			</nav>
		</header>
	);
}
