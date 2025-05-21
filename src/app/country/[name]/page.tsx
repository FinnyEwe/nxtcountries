import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
export default async function CountryPage({
  params,
}: {
  params: { name: string };
}) {
  const country = await fetch(
    `https://restcountries.com/v3.1/name/${params.name}`
  );
  const countryJson = await country.json();
  const countryData = countryJson[0];
  const borderingCountries: { [key: string]: string } = {};

  if (countryData.borders) {
    for (let i = 0; i < countryData.borders.length; i++) {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryData.borders[i]}`
      );
      const jsonData = await response.json();
      borderingCountries[countryData.borders[i]] = await jsonData[0].name
        .common;
    }
  }
  return (
    <div className={styles.countryPageGrid}>
      <Link href={"/"}>
        <button className={styles.backButton}>&#8592; Back</button>
      </Link>

      <div className={styles.flagInfoGrid}>
        <Image
          src={countryData.flags.png}
          alt="flag"
          className={styles.flagImage}
          width={500}
          height={300}
        ></Image>
        <div className={styles.countryInfoGrid}>
          <h1>{countryData.name.common}</h1>
          <div className={styles.infoList}>
            <div className={styles.infoListOne}>
              <p>
                <b>Native Name: </b>
                {countryData.name.nativeName.eng?.common ||
                  countryData.name.nativeName[
                    Object.keys(countryData.name.nativeName)[0]
                  ].common}
              </p>
              <p>
                <b>Population: </b>
                {countryData.population.toLocaleString()}
              </p>
              <p>
                <b>Region: </b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region: </b>
                {countryData.subregion}
              </p>
              <p>
                <b>Capital: </b>
                {countryData.capital ? countryData.capital : "N/A"}
              </p>
            </div>

            <div className={styles.infoListTwo}>
              <p>
                <b>Top Level Domain: </b>
                {countryData.tld}
              </p>
              <p>
                <b>Currencies: </b>
                {
                  countryData.currencies[Object.keys(countryData.currencies)[0]]
                    .name
                }
              </p>
              <p>
                <b>Languages: </b>
                {Object.values(countryData.languages).join(", ")}
              </p>
            </div>
          </div>

          <p>
            <b>Border Countries: </b>
            {countryData.borders
              ? Object.values(borderingCountries).map((val, index) => (
                  <Link key={index} href={`/country/${val}`}>
                    <button className={styles.borderButton}>{val}</button>
                  </Link>
                ))
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
