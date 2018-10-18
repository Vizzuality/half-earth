import facebookIcon from 'assets/icons/facebook.svg';
import twitterIcon from 'assets/icons/twitter.svg';

import { connect } from 'react-redux';
import * as actions from './modal-share-actions';
import reducers, { initialState } from './modal-share-reducers';
import Component from './modal-share-component';

export const reduxConfig = { actions, reducers, initialState };

const mapStateToProps = ({ modalShare, location }) => ({
  isOpen: modalShare.isOpen,
  currentLocation: `https://www.half-earthproject.org/maps?${  window.location.href.split('?')[1]}`,
  urlToCopy: modalShare.urlToCopy,
  linkActive: modalShare.linkActive,
  coordinates: location && location.query && location.query.coordinates,
  orientation: location && location.query && location.query.orientation,
  shareSocialMedia: [
    {
      icon: facebookIcon,
      link: `https://www.facebook.com/sharer/sharer.php?u=${`https://www.half-earthproject.org/maps?${ 
        window.location.href.split('?')[1]}`}`,
      className: 'facebookIcon'
    },
    {
      icon: twitterIcon,
      link: `https://twitter.com/intent/tweet?url=${`https://www.half-earthproject.org/maps?${ 
        window.location.href.split('?')[1]}`}`,
      className: 'twitterIcon'
    }
  ]
});

export default connect(mapStateToProps, actions)(Component);
