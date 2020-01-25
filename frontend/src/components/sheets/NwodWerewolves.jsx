import React from "react";
import Rating from "react-rating";
import "./styles/NwodWerewolves.scss";

export function NwodWerewolves({ data }) {
  return (
    <div className="NwodWerewolves grider">
      <div className="watermark" />
      <section>
        <h2>New World of Darkness: Werewolves</h2>
        <ul className="flexer">
          <li>
            <ul className="column">
              <li>
                <span className="label">Nom:</span>
                XXX
              </li>
              <li>
                <span className="label">Joueur:</span>XXX
              </li>
              <li>
                <span className="label">Chronique:</span>XXX
              </li>
            </ul>
          </li>
          <li>
            <ul className="column">
              <li>
                <span className="label">Concept:</span>
                {data.civilState.concept}
              </li>
              <li>
                <span className="label">Vertu:</span>
                {data.civilState.vertu}
              </li>
              <li>
                <span className="label">Vice:</span>
                {data.civilState.vice}
              </li>
            </ul>
          </li>
          <li>
            <ul className="column">
              <li>
                <span className="label">Auspice:</span>
                {data.civilState.auspice}
              </li>
              <li>
                <span className="label">Tribu:</span>
                {data.civilState.tribu}
              </li>
              <li>
                <span className="label">Loge:</span>
                {data.civilState.loge}
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h3>Attributs</h3>
        <ul className="flexer">
          <li>
            <ul className="column">
              <li>
                <span className="label">Intelligence:</span>
                <Rating initialRating={data.attributes.intelligence} readonly />
              </li>
              <li>
                <span className="label">Astuce:</span>
                <Rating initialRating={data.attributes.astuce} readonly />
              </li>
              <li>
                <span className="label">Resolution:</span>
                <Rating initialRating={data.attributes.resolution} readonly />
              </li>
            </ul>
          </li>
          <li>
            <ul className="column">
              <li>
                <span className="label">Force:</span>
                <Rating initialRating={data.attributes.force} readonly />
              </li>
              <li>
                <span className="label">Dexterite:</span>
                <Rating initialRating={data.attributes.dexterite} readonly />
              </li>
              <li>
                <span className="label">Vigueur:</span>
                <Rating initialRating={data.attributes.vigueur} readonly />
              </li>
            </ul>
          </li>
          <li>
            <ul className="column">
              <li>
                <span className="label">Presence:</span>
                <Rating initialRating={data.attributes.presence} readonly />
              </li>
              <li>
                <span className="label">Manipulation:</span>
                <Rating initialRating={data.attributes.manipulation} readonly />
              </li>
              <li>
                <span className="label">Calme:</span>
                <Rating initialRating={data.attributes.calme} readonly />
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h3>Competences</h3>
        <ul>
          <li>
            <h4>Mentales</h4>
            <ul className="column">
              <li>
                <span className="label">Artisanat:</span>
                {data.skills.mental.artisanat}
              </li>
              <li>
                <span className="label">Erudition:</span>
                {data.skills.mental.erudition}
              </li>
              <li>
                <span className="label">Informatique:</span>
                {data.skills.mental.informatique}
              </li>
              <li>
                <span className="label">Investigation:</span>
                {data.skills.mental.investigation}
              </li>
              <li>
                <span className="label">Medecine:</span>
                {data.skills.mental.medecine}
              </li>
              <li>
                <span className="label">Occultisme:</span>
                {data.skills.mental.occultisme}
              </li>
              <li>
                <span className="label">Politique:</span>
                {data.skills.mental.politique}
              </li>
              <li>
                <span className="label">Sciences:</span>
                {data.skills.mental.sciences}
              </li>
            </ul>
          </li>
          <li>
            <h4>Physiques</h4>
            <ul className="column">
              <li>
                <span className="label">Armes Blanches:</span>
                {data.skills.physique.armesBlanches}
              </li>
              <li>
                <span className="label">Arms à Feu:</span>
                {data.skills.physique.armesAFeu}
              </li>
              <li>
                <span className="label">Athlétisme:</span>
                {data.skills.physique.athletisme}
              </li>
              <li>
                <span className="label">Bagarre:</span>
                {data.skills.physique.bagarre}
              </li>
              <li>
                <span className="label">Conduite:</span>
                {data.skills.physique.conduite}
              </li>
              <li>
                <span className="label">Discrétion:</span>
                {data.skills.physique.discretion}
              </li>
              <li>
                <span className="label">Larcin:</span>
                {data.skills.physique.larcin}
              </li>
              <li>
                <span className="label">Survie:</span>
                {data.skills.physique.survie}
              </li>
            </ul>
          </li>
          <li>
            <h4>Sociales</h4>
            <ul className="column">
              <li>
                <span className="label">Animaux:</span>
                {data.skills.social.animaux}
              </li>
              <li>
                <span className="label">Empathie:</span>
                {data.skills.social.empathie}
              </li>
              <li>
                <span className="label">Expression:</span>
                {data.skills.social.expression}
              </li>
              <li>
                <span className="label">Intimidation:</span>
                {data.skills.social.intimidation}
              </li>
              <li>
                <span className="label">Persuasion:</span>
                {data.skills.social.persuasion}
              </li>
              <li>
                <span className="label">Entregent:</span>
                {data.skills.social.entregent}
              </li>
              <li>
                <span className="label">Connaissances de la Rue:</span>
                {data.skills.social.connaissancesDeLaRue}
              </li>
              <li>
                <span className="label">Subterfuge:</span>
                {data.skills.social.subterfuge}
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h3>Autres traits</h3>
        <div className="flexer">
          <ul>
            <li>
              <h4>Atouts</h4>
              <ul>
                {data.civilState.atouts.map((atout, i) => {
                  return (
                    <li key={i}>
                      <span key={i} className="label">
                        {atout.label}:
                      </span>
                      {atout.level}
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              {data.civilState.handicaps ? (
                <>
                  <h4>Handicaps</h4>{" "}
                  <ul>
                    {data.civilState.handicaps.map((handicap, i) => {
                      return (
                        <li key={i}>
                          <span key={i} className="label">
                            {handicap}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : null}
            </li>
            <li>
              <h4>Attaques</h4>
              <ul>
                <li>_______________</li>
                <li>_______________</li>
                <li>_______________</li>
              </ul>
            </li>
            <li>
              <h4>Equipement</h4>
              <ul>
                <li>_______________</li>
                <li>_______________</li>
                <li>_______________</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>Sante</li>
            <li>Volonté</li>
            <li>Essence</li>
            <li>Appel Primal</li>
            <li>Harmonie</li>
            <li>
              <h4>Renom</h4>
              <ul className="column">
                <li>
                  <span className="label">Purete:</span>
                  <Rating
                    initialRating={data.civilState.renom.purete}
                    readonly
                  />
                </li>
                <li>
                  <span className="label">Gloire:</span>
                  <Rating
                    initialRating={data.civilState.renom.gloire}
                    readonly
                  />
                </li>
                <li>
                  <span className="label">Honneur:</span>
                  <Rating
                    initialRating={data.civilState.renom.honneur}
                    readonly
                  />
                </li>
                <li>
                  <span className="label">Sagesse:</span>
                  <Rating
                    initialRating={data.civilState.renom.sagesse}
                    readonly
                  />
                </li>
                <li>
                  <span className="label">Ruse:</span>
                  <Rating initialRating={data.civilState.renom.ruse} readonly />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
