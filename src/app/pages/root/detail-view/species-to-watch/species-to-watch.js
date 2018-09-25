import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSpecies } from 'redux-modules/species/species-actions';

import { mapStateToProps } from './species-to-watch-selectors';
import SpeciesToWatchComponent from './species-to-watch-component';

const actions = { fetchSpecies };

class SpeciesToWatchContainer extends Component {
  componentDidMount() {
    const { species } = this.props;
    this.props.fetchSpecies(species);
  }

  render() {
    return (
      <SpeciesToWatchComponent
        {...this.props}
      />
    );
  }
}

SpeciesToWatchContainer.propTypes = { fetchSpecies: PropTypes.func.isRequired, species: PropTypes.array.isRequired };

export default connect(mapStateToProps, actions)(SpeciesToWatchContainer);
