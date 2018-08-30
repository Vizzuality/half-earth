import React from 'react';
import { Button, Icon } from 'he-components';
import { LegendItemToolbar } from 'wri-api-components/dist/legend';

import infoIcon from 'assets/icons/info.svg';

import styles from './toolbar-styles.scss';

const LegendToolbarComponent = ({ layers }) => (
  <LegendItemToolbar
    enabledStyle={{
      fill: '#97be32'
    }}
    defaultStyle={{
      fill: '#999'
    }}
    disabledStyle={{
      fill: '#d6d6d9'
    }}
    focusStyle={{
      fill: '#676867'
    }}
    onChangeInfo={m => console.info(m)}
  >
    <Button theme={styles}>
      <Icon icon={infoIcon} />
    </Button>
    <Button theme={styles}>
      <Icon icon={infoIcon} />
    </Button>
    <Button theme={styles}>
      <Icon icon={infoIcon} />
    </Button>
    <Button theme={styles}>
      <Icon icon={infoIcon} />
    </Button>
  </LegendItemToolbar>
);

export default LegendToolbarComponent;
