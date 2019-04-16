import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './TeamCard.module.scss';
import Button from '../Buttons/Button';

const TeamCard = ({ firstName, lastName, jobTitle, bio, link }) => {
  return (
    <article data-test="component-team-card">
      <header className={styles['team-card__header']}>
        <h3 className={styles['team-card__heading']}>
          {firstName} {lastName}
        </h3>
        <h4 className={styles['team-card__job-title']}>{jobTitle}</h4>
      </header>

      <div className={styles['team-card__body']}>{bio}</div>

      <footer className={styles['team-card__footer']}>
        <Button link={link} text={`Read ${firstName}'s profile`} />
      </footer>
    </article>
  );
};

TeamCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default TeamCard;
