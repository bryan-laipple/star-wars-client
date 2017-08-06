import { Pipe, PipeTransform } from '@angular/core';

const listSummary = (list: any[]): string => {
  let summary = '';
  if (list) {
    list.forEach(o => {
      summary = summary + `
    ${o}`
    });
  }
  return summary;
};

const characterSummary = (character: any): string => {
  return `
Name:       ${character.name}
Species:    ${character.species}
Homeworld:  ${character.homeworld}
Height:     ${character.height} cm
Mass:       ${character.mass} kg
Hair:       ${character.hair_color}
Eye Color:  ${character.eye_color}
Birth Year: ${character.birth_year}
Films:      ${listSummary(character.films)}
`
};

const planetSummary = (planet: any): string => {
  return `
Name:          ${planet.name}
Diameter:      ${planet.diameter} km
Gravity:       ${planet.gravity} G
Rotation:      ${planet.rotation_period} hrs
Orbit:         ${planet.orbital_period} days
Population:    ~${planet.population}
Terrain:       ${planet.terrain}
Surface Water: ${planet.surface_water}%
Climate:       ${planet.climate}
Residents:     ${listSummary(planet.residents)}
Films:         ${listSummary(planet.films)}
`
};

const starshipSummary = (starship: any): string => {
  return `
Name:       ${starship.name}
Class:      ${starship.starship_class}
Model:      ${starship.model}
Make:       ${starship.manufacturer}
Crew:       ${starship.crew}
Passengers: ${starship.passengers}
Length:     ${starship.length} m
Capacity:   ${starship.cargo_capacity} kg
Pilots:     ${listSummary(starship.pilots)}
Films:      ${listSummary(starship.films)}
`
};

const summarizers = {
  'character': characterSummary,
  'planet': planetSummary,
  'starship': starshipSummary
};

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!summarizers[value.type]) {
      return JSON.stringify(value, null, 2);
    }
    return summarizers[value.type](value);
  }

}
