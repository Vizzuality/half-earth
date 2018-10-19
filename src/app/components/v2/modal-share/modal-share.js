import facebookIcon from 'assets/icons/facebook.svg';
import twitterIcon from 'assets/icons/twitter.svg';

import { connect } from 'react-redux';
import * as actions from './modal-share-actions';
import reducers, { initialState } from './modal-share-reducers';
import Component from './modal-share-component';

export const reduxConfig = { actions, reducers, initialState };

const mapStateToProps = ({ modalShare, location }) => {
  const shareLocation = `https://www.half-earthproject.org/maps${window.location.search}`;
  return {
    isOpen: modalShare.isOpen,
    currentLocation: shareLocation,
    urlToCopy: modalShare.urlToCopy,
    linkActive: modalShare.linkActive,
    coordinates: location && location.query && location.query.coordinates,
    orientation: location && location.query && location.query.orientation,
    shareSocialMedia: [
      {
        icon: facebookIcon,
        link: `https://www.facebook.com/sharer/sharer.php?u=${shareLocation}`,
        className: 'facebookIcon'
      },
      {
        icon: twitterIcon,
        link: `https://twitter.com/intent/tweet?url=${shareLocation}`,
        className: 'twitterIcon'
      }
    ]
  };
};

export default connect(mapStateToProps, actions)(Component);
