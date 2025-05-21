
import './CountryCard.css';
import Link from 'next/link'
interface CountryCardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {

  
  return (
    <>
    <Link href={`/country/${name}`}>
      <div className="countryCard">
        <img src={flag} className="flag"></img>
        <div className="countryPreview">
          <p>
            <b>{name}</b>
          </p>
          <div className="previewInfo">
            <span>
              <b>Population:</b> {population.toLocaleString()}
            </span>
            <span>
              <b>Region:</b> {region}
            </span>
            <span>
              <b>Capital:</b> {capital}
            </span>
          </div>
        </div>
      </div>
    </Link>
    </>
  );
}

export default CountryCard;
