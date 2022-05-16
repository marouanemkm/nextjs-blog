import Link from "next/link";

export default function index() {
  return (
    <div className="container px-4 pt-5">
      <h1>Bienvenue sur Code.io</h1>
      <span>Le blog communautaire des développeurs web.</span>

      <div className="row mt-5">
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Lisez les articles</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Maximisez votre culture web
              </h6>
              <p className="card-text text-center">
                Chaque auteur vous apportera de la valeur dans son article.
              </p>
              <Link href="/blog">
                <a>Visitez le blog</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6">
          <div className="card w-100 h-100">
            <div className="card-body">
              <h5 className="card-title">Faites un tour vers la liste des membres</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Rencontrez d'autres devs
              </h6>
              <p className="card-text text-center">
                Ajoutez, invitez et discutez avec les différents membres.
              </p>
              <Link href="/blog">
                <a>Voir la liste</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
