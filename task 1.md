# What are the issues in the code
The problems are:
1. Missing imports for:
   * fetchPeople action
   * People component
   * House component 
2. const houses and people duplicate declaration in mapStateToProps
3. position off invoking fetchPeople() action function
4. function mapCompaniesIntoPeople have no code
5. function mapPeopleIntoHouses have no code

# Fix
1. Import all necessary actions, and components (in code below "// ANSER 1 HERE")
2. Rename variables in decupling of state or rewrite people and houses variables with new array from mapCompaniesIntoPeople and mapPeopleIntoHouses return results  (in code below "// ANSER 2 HERE")
3. Move invoke of the action function fetchPeople() into lifecycle function componentDidMount (in code below "// ANSER 3 HERE")
4. Write the necessary code (in code below "// ANSER 4 HERE")
5. Write the necessary code (in code below "// ANSER 5 HERE")

# Code
```js
/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */
​
import React from 'react';
import { connect } from 'react-redux';

// ANSER 1 HERE
import { fetchPeople } from 'path to the file';
import People from 'path to the file';
import House from 'path to the file';
​
const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
  // ANSER 4 HERE
  return people.map(person => {
    company = companies.find(company => company.id === person.companyId)
    return {
      ...person,
      companiName: company.name ? company.name : ''
    }
  })
};
​
const mapPeopleIntoHouses = (houses, people) => {
  /* Map people into house who live in the house */
  // ANSER 5 HERE
  return houses.map(house => {
    const personsArr = people
      .filter(person => 
        person.houseId === house.id && // does person have house id
        !!house.residents && // does house has residents
        !house.residents.find(resident => person.id === resident.id) // that person isn't already maped
      );
    if(!personsArr.length) return house; // if no person is found return house as it is

    if(!house.residents) house["residents"] = []; // initiate residents array if not exist
    return house.residents.concat(personsArr); // fill residents
  })
};
​
class App extends React.Component {
   // ANSER 3 HERE
  componentDidMount(){
    this.props.fetchPeople();
  }

  render() {
    // this.props.fetchPeople()
    return (
      <div className="main">
        <People data={this.props.people}/>
        <House data={this.props.houses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // ANSER 2 HERE
  const { people: { data }, companies, houses } = state;
  const people = mapCompaniesIntoPeople(data, companies);
  const houses = mapPeopleIntoHouses(houses, data);
  return {
    people,
    houses,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPeople: () => dispatch(fetchPeople())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
```