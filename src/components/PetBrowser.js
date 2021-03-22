import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  showPets(pets) {
    return pets.map((pet) => {
      return <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  render() {
    return <div className="ui cards">{this.showPets(this.props.pets)}</div>
  }
}

export default PetBrowser
