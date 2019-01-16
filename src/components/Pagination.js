import React from 'react';
import classnames from 'classnames';

import styles from './Pagination.css';

let Pagination = ({ page, itemsPerPage, total, onChange }) => {
  let pagesCount = Math.ceil(total / itemsPerPage);
  let pages = Array.from({ length: pagesCount });

  return (
    <ul className={styles.pagination}>
      {pages.map((_, i) => (
        <li key={i} className={styles.paginationItem}>
          <a
            className={classnames(styles.paginationLink, {
              current: i === page
            })}
            href={`#${i}`}
            onClick={e => {
              e.preventDefault();
              onChange(i);
            }}
          >
            {i + 1}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
