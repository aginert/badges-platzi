import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}/>


        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges){
  const [ query, setQuery] = React.useState('');

  const [filteredBadges, setFilteredResults] = React.useState(badges);
   React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
  });
  setFilteredResults(result)
  },[badges, query]);

  return {setQuery, filteredBadges}
}

function BadgesList (props) {
  const badges = props.badges;

  const {query, setQuery, filteredBadges} = useSearchBadges(badges);
  
  if (filteredBadges.length === 0 ) {
    return (
      <div>
        <div className="form-group">
            <label htmlFor="">Filter Badges</label>
            <input type="text" className="form-control" 
            value={query}
            onChange = {(e)=>{
              setQuery (e.target.value)
            }}/>
          </div>
        <h3>We don`t have any badges yet.</h3>
        <h4>Be the first to create it.</h4>
        <Link className='btn btn-primary' to="/badges/new"> Create new badge </Link>
      </div>
    );
    }
    return (
      <div className="BadgesList">
          <div className="form-group">
            <label>Filter Badges</label>
            <input 
            type="text"
            className="form-control" 
            value={query}
            onChange = {(e) => {
              setQuery(e.target.value)
            }}/>
          </div>
          <ul className="list-unstyled">
              {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default BadgesList;